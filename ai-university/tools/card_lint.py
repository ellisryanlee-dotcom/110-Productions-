#!/usr/bin/env python3
"""card_lint.py — flag source-fingerprint leakage in knowledge-card BODIES.

Why this exists (OPE-153 / OPE-154): a source's fingerprint survives a verbatim
*sentence* scrub when it lives in an analogy, a role-comparison, or a short coined
phrase. The script writer treats anything left in a card BODY as adoptable material,
so any figure of speech that stays in the body rides straight into the script. The
librarian SOP already forbids this (tools/librarian.md); this lint enforces it.

Design (per the OPE-154 method note):
  * PRIMARY signal = analogy/figure CUES in the body + TRACEABILITY to a source.
    The editor logged "revisions on top of revisions" as a 5-gram — below any sane
    8-gram threshold — so an overlap-only lint gives false confidence. Cues catch
    figures that share an *idea*, not tokens.
  * The BODY is everything from the end of frontmatter up to the
    "**Original example to invent:**" note. Cues INSIDE that note are fine — the
    note is exactly where source figures belong.
  * TRACEABILITY = the card has a `source_video` in frontmatter (all derived cards
    do). A figure in the body of a source-derived card is the risk we care about.
  * n-gram overlap vs the source transcript is a SUPPLEMENT (opt-in, --transcripts),
    never the primary gate. It needs transcript files, which aren't present in every
    environment; the cue check runs everywhere.

Exit status: 0 if clean, 1 if any card is flagged (usable as a gate step).

Usage:
    python3 tools/card_lint.py                      # lint all knowledge cards
    python3 tools/card_lint.py library/knowledge/kc-0215-*.md   # specific cards
    python3 tools/card_lint.py --transcripts channels   # + 8-gram supplement
    python3 tools/card_lint.py --json               # machine-readable output
"""
import argparse
import glob
import json
import os
import re
import sys

# Analogy / figure CUES. Kept deliberately broad — this lint flags candidates for a
# human/editor to confirm, it does not auto-fail the pipeline. A false positive costs
# a glance; a missed figure costs an originality strike.
CUE_PATTERNS = [
    (r"\blike a\b", "simile: 'like a'"),
    (r"\blike an\b", "simile: 'like an'"),
    (r"\blike your\b", "simile: 'like your'"),
    (r"\bas if\b", "simile: 'as if'"),
    (r"\bkind of like\b", "simile: 'kind of like'"),
    (r"\bsort of like\b", "simile: 'sort of like'"),
    (r"\bthink of it as\b", "framing: 'think of it as'"),
    (r"\bimagine\b", "framing: 'imagine'"),
    (r"\bit'?s basically a\b", "framing: \"it's basically a\""),
    (r"\bit'?s essentially a\b", "framing: \"it's essentially a\""),
    (r"\btreat (?:it|them|your|an?|the)\b.{0,30}?\blike\b", "role-comparison: 'treat … like'"),
    (r"\bwould(?:n'?t| not)\b.{0,40}?\bday one\b", "vivid one-liner: '… day one'"),
    (r"\bnew (?:intern|hire|employee|developer)\b", "role-comparison: 'new intern/hire/employee'"),
    (r"\bcredit card\b", "vivid image: 'credit card'"),
    (r"\bon top of\b.{0,20}?\b(\w+)s\b", "possible coined phrase: 'X on top of Xs'"),
]

CUE_RES = [(re.compile(p, re.IGNORECASE), label) for p, label in CUE_PATTERNS]

INVENT_NOTE_RE = re.compile(r"\*\*Original example to invent:?\*\*", re.IGNORECASE)
FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)
SOURCE_VIDEO_RE = re.compile(r"^source_video\s*:", re.MULTILINE)


def split_card(text):
    """Return (frontmatter, body, invent_note). body EXCLUDES the invent note."""
    fm_match = FRONTMATTER_RE.match(text)
    frontmatter = fm_match.group(0) if fm_match else ""
    rest = text[len(frontmatter):]
    note_match = INVENT_NOTE_RE.search(rest)
    if note_match:
        body = rest[:note_match.start()]
        invent_note = rest[note_match.start():]
    else:
        body, invent_note = rest, ""
    return frontmatter, body, invent_note


def snippet(body, start, end, pad=45):
    lo = max(0, start - pad)
    hi = min(len(body), end + pad)
    s = body[lo:hi].replace("\n", " ").strip()
    return re.sub(r"\s+", " ", s)


def lint_card(path):
    with open(path, encoding="utf-8") as fh:
        text = fh.read()
    frontmatter, body, _note = split_card(text)
    traceable = bool(SOURCE_VIDEO_RE.search(frontmatter))
    hits = []
    for regex, label in CUE_RES:
        for m in regex.finditer(body):
            hits.append({
                "cue": label,
                "match": m.group(0).strip(),
                "snippet": snippet(body, m.start(), m.end()),
            })
    return {"path": path, "traceable": traceable, "hits": hits}


# ---- optional n-gram supplement (opt-in; needs transcripts) --------------------

def ngrams(tokens, n=8):
    return {" ".join(tokens[i:i + n]) for i in range(len(tokens) - n + 1)}


def tokenize(text):
    return re.findall(r"[a-z0-9]+", text.lower())


def source_videos(frontmatter):
    m = re.search(r"^source_video\s*:\s*(.+)$", frontmatter, re.MULTILINE)
    if not m:
        return []
    raw = m.group(1).strip().strip("[]")
    return [v.strip().strip('"').strip("'") for v in raw.split(",") if v.strip()]


def ngram_supplement(path, transcripts_root, n=8):
    """Return list of shared >=n-grams between card body and its source transcript(s).
    Sharded by source: a card is only ever compared to ITS OWN source transcripts —
    this is what drove false positives to zero on OPE-153 (a global sweep flags
    cross-source coincidences a per-source sweep structurally cannot raise)."""
    with open(path, encoding="utf-8") as fh:
        text = fh.read()
    frontmatter, body, _ = split_card(text)
    vids = source_videos(frontmatter)
    body_grams = ngrams(tokenize(body), n)
    shared = set()
    for vid in vids:
        for tpath in glob.glob(os.path.join(transcripts_root, "**", "*%s*" % vid), recursive=True):
            if not os.path.isfile(tpath):
                continue
            with open(tpath, encoding="utf-8", errors="ignore") as fh:
                src_grams = ngrams(tokenize(fh.read()), n)
            shared |= (body_grams & src_grams)
    return sorted(shared)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*", help="card files or globs (default: all knowledge cards)")
    ap.add_argument("--transcripts", metavar="ROOT",
                    help="also run the 8-gram overlap SUPPLEMENT vs source transcripts under ROOT")
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    ap.add_argument("-n", type=int, default=8, help="n-gram length for the supplement (default 8)")
    args = ap.parse_args()

    if args.paths:
        paths = []
        for p in args.paths:
            paths.extend(sorted(glob.glob(p)) if any(c in p for c in "*?[") else [p])
    else:
        here = os.path.dirname(os.path.abspath(__file__))
        root = os.path.dirname(here)
        paths = sorted(glob.glob(os.path.join(root, "library", "knowledge", "kc-*.md")))

    results = []
    for path in paths:
        r = lint_card(path)
        if args.transcripts:
            r["shared_ngrams"] = ngram_supplement(path, args.transcripts, args.n)
        results.append(r)

    flagged = [r for r in results if r["hits"] or r.get("shared_ngrams")]

    if args.json:
        print(json.dumps({"scanned": len(results), "flagged": flagged}, indent=2))
        return 1 if flagged else 0

    for r in flagged:
        rel = os.path.relpath(r["path"])
        trace = "" if r["traceable"] else "  (NOTE: no source_video — not traceable)"
        print("\n%s%s" % (rel, trace))
        for h in r["hits"]:
            print("  [cue] %-42s  %s" % (h["cue"], "…%s…" % h["snippet"]))
        for g in r.get("shared_ngrams", []):
            print("  [8-gram] shared with source: %s" % g)

    print("\n%d card(s) scanned, %d flagged for review." % (len(results), len(flagged)))
    if flagged:
        print("Move each flagged figure into the card's 'Original example to invent:' note,")
        print("described abstractly. Cues are candidates, not auto-fails — confirm each.")
    return 1 if flagged else 0


if __name__ == "__main__":
    sys.exit(main())
