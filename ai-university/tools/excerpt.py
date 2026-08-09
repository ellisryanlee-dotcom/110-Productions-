#!/usr/bin/env python3
"""Print a timestamp span of a transcript — the ONLY sanctioned way for agents
to put source text into context.

Transcripts are paragraphs prefixed with `[m:ss]` markers (~60s each), so span
retrieval is a line filter, not a search problem. A hard per-call cap (default
25K tokens ≈ the per-agent source ceiling) refuses oversized spans so agents
physically cannot load a mega-transcript in one gulp.

Usage:
  # explicit window
  python3 tools/excerpt.py --channel-dir channels/nateherk --id VIDEOID \
      --from 12:00 --to 18:30

  # chapters by index (1-based), resolved from sources.json; end = next chapter
  python3 tools/excerpt.py --channel-dir channels/nateherk --id VIDEOID \
      --chapters 3-5

  # what's available + sizes, no content
  python3 tools/excerpt.py --channel-dir channels/nateherk --id VIDEOID --toc

Transcript file resolution order: channels/<ch>/cache/<id>.md, then
channels/<ch>/transcripts/<id>.md (legacy), then `git show
<git_archive_commit>:.../transcripts/<id>.md` (auto-cached). Drive holds the
canonical copy (see sources.json drive_file_id) for use outside this repo.
"""
import argparse
import json
import re
import signal
import subprocess
import sys
from pathlib import Path

signal.signal(signal.SIGPIPE, signal.SIG_DFL)

CAP_TOKENS = 25_000
PARA_RE = re.compile(r"^`\[(\d+):(\d{2})\]` ")


def ts_to_s(text):
    parts = [int(p) for p in str(text).split(":")]
    s = 0
    for p in parts:
        s = s * 60 + p
    return s


def resolve_transcript(channel_dir, video_id, ledger):
    cache = channel_dir / "cache" / f"{video_id}.md"
    if cache.exists():
        return cache
    legacy = channel_dir / "transcripts" / f"{video_id}.md"
    if legacy.exists():
        return legacy
    commit = ledger.get("git_archive_commit")
    rel = f"{channel_dir.as_posix()}/transcripts/{video_id}.md"
    try:
        blob = subprocess.run(["git", "show", f"{commit}:{rel}"],
                              capture_output=True, check=True).stdout
    except subprocess.CalledProcessError:
        sys.exit(f"transcript {video_id} not in cache, worktree, or git archive "
                 f"{commit}; fetch it from Drive (see sources.json) into "
                 f"{cache}")
    cache.parent.mkdir(exist_ok=True)
    cache.write_bytes(blob)
    print(f"(restored {video_id}.md from git {commit} into cache/)",
          file=sys.stderr)
    return cache


def paragraphs(path):
    """Yield (start_seconds, line) for timestamped paragraphs."""
    for line in path.read_text().splitlines():
        m = PARA_RE.match(line)
        if m:
            yield int(m.group(1)) * 60 + int(m.group(2)), line


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--channel-dir", required=True)
    p.add_argument("--id", required=True)
    p.add_argument("--from", dest="t_from")
    p.add_argument("--to", dest="t_to")
    p.add_argument("--chapters", help="chapter index or range, 1-based, e.g. 3 or 3-5")
    p.add_argument("--toc", action="store_true",
                   help="list chapters with span sizes; prints no source text")
    p.add_argument("--cap", type=int, default=CAP_TOKENS)
    args = p.parse_args()

    channel_dir = Path(args.channel_dir)
    ledger = json.loads((channel_dir / "sources.json").read_text())
    entry = next((v for v in ledger["videos"] if v["id"] == args.id), None)
    if entry is None:
        sys.exit(f"{args.id} not in sources.json")
    path = resolve_transcript(channel_dir, args.id, ledger)
    paras = list(paragraphs(path))
    total = entry["seconds"] or (paras[-1][0] + 60 if paras else 0)
    chapters = entry.get("chapters", [])

    def chapter_bounds(i):  # 1-based
        start = ts_to_s(chapters[i - 1]["t"])
        end = ts_to_s(chapters[i]["t"]) if i < len(chapters) else total
        return start, end

    if args.toc:
        print(f"# {entry['title']} ({entry['length']}, "
              f"{entry['transcript']['est_tokens']} tok total)")
        for i, ch in enumerate(chapters, 1):
            s, e = chapter_bounds(i)
            tok = sum(len(line) // 4 for st, line in paras if s - 45 <= st < e)
            print(f"{i:3d}. [{ch['t']}] {ch['title']}  (~{tok} tok)")
        if not chapters:
            print(f"(no chapters; {len(paras)} paragraphs; use --from/--to)")
        return

    if args.chapters:
        if not chapters:
            sys.exit("no chapters in ledger for this video; use --from/--to")
        m = re.fullmatch(r"(\d+)(?:-(\d+))?", args.chapters)
        if not m:
            sys.exit("--chapters takes N or N-M (1-based)")
        a, b = int(m.group(1)), int(m.group(2) or m.group(1))
        if not (1 <= a <= b <= len(chapters)):
            sys.exit(f"chapter range out of bounds (1..{len(chapters)})")
        t_from, t_to = chapter_bounds(a)[0], chapter_bounds(b)[1]
        label = f"chapters {a}-{b}"
    elif args.t_from or args.t_to:
        t_from = ts_to_s(args.t_from) if args.t_from else 0
        t_to = ts_to_s(args.t_to) if args.t_to else total
        label = f"{args.t_from or '0:00'}–{args.t_to or 'end'}"
    else:
        sys.exit("give --toc, --chapters, or --from/--to")

    # include the paragraph that straddles the window start
    sel = [line for st, line in paras if t_from - 45 <= st < t_to]
    est = sum(len(line) for line in sel) // 4
    if est > args.cap:
        sys.exit(f"span {label} ≈ {est} tokens exceeds the {args.cap}-token cap; "
                 f"shard it (run --toc and request smaller chapter ranges)")
    print(f"### {entry['title']} — {label} (~{est} tok) [{args.id}]")
    for line in sel:
        print(line)
        print()


if __name__ == "__main__":
    main()
