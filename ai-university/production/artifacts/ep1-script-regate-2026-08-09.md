# EP1 Script #1 — Editor re-gate (Option-A rework) · 2026-08-09

**Issue:** OPE-167 · **Script:** `production/scripts/crash-test-001-draft.md` (status `revised-pending-regate`, commit 945f500)
**Trigger:** Ryan chose packaging **Option A** (OPE-160). Script reworked to 25 numbered breaks + a
25-line checklist + on-screen `Breaks NN/25` counter. Because VO prose changed since the APPROVED
verdict, the similarity/voice sweep is re-run as a **confirmation pass** on the new break-naming +
counter VO.

## Method (Tier-0 deterministic — $0, no models)
Extracted every `VO:` line from the script (bracket cues stripped) → **3,004 VO words**.
Normalized (lowercase, punctuation stripped, whitespace collapsed) both VO and the **full** source
corpus. Corpus = the 6 source transcripts in **full** (not the condensed style cards):
`nateherk/transcripts/{Ey18PDiaAYI, bCljOfCH8Ms, saggDHHnmtQ, gb5TlGw6Uks, 9FuNtfsnRNo, 6MC1XqZSltw}.md`
→ **206,049 corpus words**. Computed exact shared n-gram sets VO ∩ corpus.

## Result — PASS
| n-gram | shared count | verdict |
|---|---|---|
| **8-gram** | **0** | ✅ DoD threshold ("0 shared non-generic 8-grams") met |
| 7-gram | 0 | ✅ |
| 6-gram | 1 | generic — see below |
| 5-gram | 9 | all generic idiom/cadence |

**The single shared 6-gram:** `"step one step two step three"` — a generic enumeration idiom. In the
script it appears in **Break 3 VO** describing the *anti-pattern* ("Sift's first prompt read like a
recipe — step one, step two, step three, in a fixed order"), i.e. counting cadence, **not** a
borrowed analogy or source-derived claim. The 9 shared 5-grams are likewise generic
(`"think of it like a"`, `"if you don t know"`, `"at a time so you"`, counting fragments) — no
distinctive source phrasing.

**Flagged analogies confirmed original:** the two prior kickback replacements — *seasoning a pot of
soup* (kc-0114 reactive prompting) and *valet key* (kc-0215 least privilege) — remain, and neither
`soup`/`spice`/`pinch` nor `valet`/`trunk`/`glovebox` collocations appear in the corpus. No new
analogies were introduced by the Option-A rework.

## Disposition
- **DoD item 1 (editor re-gate): DONE — PASS.** Script voice/similarity is clean against source at
  the 8-gram bar and above. Front-matter can advance `revised-pending-regate → approved` on this basis.
- **DoD item 2 (runtime trim):** VO ≈ 3,004 words ≈ 17–18 min at ~165–175 wpm delivery vs 15–17
  target — marginally long. Tightening pass queued (trim briefly-named breaks first); editorial, not
  a similarity risk.
- **DoD item 3 (screenplay sync to 25-break + on-screen Breaks NN/25):** **deferred this heartbeat** —
  an active KEYFRAMES operator fleet (OPE-164) is concurrently reading
  `production/screenplay/crash-test-001-screenplay.md`; editing it mid-flight would disrupt live
  readers. Sync to run after the fleet lands + commits.

_Reproduce: the n-gram sweep is pure Python over the script + the 6 full transcripts; see issue OPE-167 comment for the one-shot script._
