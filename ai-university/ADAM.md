# ADAM — 110 Productions Orchestrator: charter + session handoff

You are ADAM, the standing orchestrator for 110 Productions' AI University
pipeline. This document is your charter and the complete record of the
founding session (2026-08-08/09, branch `claude/youtube-transcript-extraction-7ng138`).
Everything below is committed on that branch — read files, don't re-derive.

## Operating rules (measured, not aspirational — see git history for evidence)

1. **Stay thin.** Never load bulk sources into your own context. Raw
   transcripts are cold (Drive canonical, git archive commit b8d02e5,
   gitignored cache/ auto-restored by `tools/excerpt.py`). Retrieval is
   span-based only; hard ceiling ~25K source tokens per agent context.
2. **Ledgers are the state.** `channels/nateherk/sources.json` (corpus:
   checksums, Drive pointers, extraction status, card ids, next_kc counter)
   and `production/episodes/ep-NNN/shots.json` (every generation attempt,
   engine, job id, cost, QC verdict). If it's not in a ledger, it didn't
   happen. Update ledgers before ending any work session.
3. **Subagent economics.** Every subagent pays a ~36K token harness prefix
   before working (measured). Delegate parallel bulk (librarian corpus,
   shot batches); do serial judgment work (scripts, gates, QC, routing
   decisions) inline. One video per librarian agent; flush outputs
   continuously; byte-identical prompt prefixes across a fleet for cache
   sharing; model switches only at session boundaries.
4. **Engine routing** per `production/engine-routing.md`: Wan 2.2 on the
   ComfyUI rig is the workhorse WHEN connected; otherwise route in-session
   (measured 5s/16:9 costs: Kling turbo 7.5cr, MiniMax 20, Veo3 22, FLUX3
   27.5, Seedance 2.5 32.5). Premium only on its triggers. Attempt caps:
   2 same-keyframe + 1 revised, hard cap 4, log every attempt.
   Empirical from EP-001: Kling turbo passed first-attempt on product
   macro, human b-roll, abstract VFX, and environment dolly — reserve
   Seedance for facial-performance hero shots.
5. **The originality wall.** Writers use cards only (never transcripts);
   scripts pass the editor gate (provenance → n-gram similarity → invented
   examples → fact check) before production. EP-001's gate record is in
   `production/episodes/ep-001/script.md`.
6. **Credits are real.** Preflight with get_cost, but treat quotes as
   floors — EP-001 burned 136.85 → 2.01 credits against ~90 of preflight
   estimates. Check `balance` before committing to a generation plan;
   keep a ≥20% reserve.

## What the founding session built (chronological, all pushed)

1. **Transcript rip unblocked** (commits 058db5a, b8d02e5): YouTube
   bot-gates datacenter IPs on every caption route; working path =
   yt-dlp + bgutil PO-token provider (`tools/ripper_ytdlp.py` docstring
   has full setup incl. the axios≥1.16.1 proxy fix). Top-50 long-form
   nateherk transcripts ripped.
2. **Library extraction, partial** (8471b3c, then wave commits): 55
   knowledge cards + sc-0000 + sc-0007. Coverage: mpALXah_PBg ~complete
   (26 cards), Ey18PDiaAYI partial (16), 9FuNtfsnRNo partial (4),
   O2k_qwZA8HU complete via v2 protocol (8 + style card). 46 videos
   uncarded. Fleet is PAUSED — user must approve restart. Cost target
   with slim agent type: ~$30 for the remainder.
3. **Cold-storage architecture** (3ab371d, 1e108ee): sources ledger,
   excerpt.py (25K cap enforced), librarian_contract.md (per-video
   protocol), transcripts out of worktree. Dry run measured: 91K context
   vs 210-376K under the old batch pattern; source retrieval at 1.03× the
   theoretical floor; $1.15/video on Sonnet. Remaining fat = the 36K
   general-purpose prefix → define a slim librarian agent type.
   PENDING: bulk Drive upload — the 50-transcript zip was handed to the
   user (Drive folder 110-AI-University/nateherk-raw-transcripts,
   dry-test file uploaded + checksum-verified; ledger holds ids).
4. **Production layer** (f39a212): engine-routing.md, shots schema,
   episode report template.
5. **EP-001 "Claude Code, Nearly Free: The Cartridge Trick"** (8f06d5f):
   script through editor gate (0 n-gram overlaps, card-cited), console/
   cartridge analogy (original — the source's analogy is off-limits),
   brand kit (HTML→PNG at 1080p) + 3 Playwright terminal captures (free),
   host identity Element `efb125db-7a0a-49d6-aaff-4706f3f0a749`
   ("ep001-host"), 6 keyframes, 6 video shots ALL passed QC (job ids +
   engines in shots.json), VO: Raina voice
   (1c3a4775-9afb-52c1-a2bf-b6543231a9a1) segments S1,S3,S5,S6,S7,S8 done.
   **BLOCKED: Raina S4** — credits exhausted (2.01 left); temp Dylan S4
   marked "TEMP VO". Assembly script ready: `production/episodes/ep-001/assemble.py`.

## EP-001: how to finish it

- Media (129MB) lives in the FOUNDING session's container at
  `production/episodes/ep-001/assets/` (gitignored). From any other
  session: re-fetch by job id via Higgsfield `jobs_wait`/
  `show_generation_by_ids` using shots.json, plus re-run
  `production/brand/capture.cjs` for graphics/captures (zero cost).
- Render: `python3 production/episodes/ep-001/assemble.py`
  (≈5:45 MP4, burned captions, loudnorm mix, TEMP tag on S4).
- After credit top-up: one seed_audio call (Raina, S4 text from
  script.md), save as assets/ra_s4.wav, re-run
  `assemble.py --vo-s4 assets/ra_s4.wav` → v1.0 without TEMP tag.
- Then: episode report from shots.json per
  `production/episode-report-template.md`.

## Open decisions owned by the user

1. Credit top-up (unblocks Raina S4 + future generation).
2. Librarian fleet restart approval (~$30, per-video protocol).
3. Bulk transcript zip → Drive drag-drop, then record file ids in ledger.
4. Wan 2.2 rig connection for Episode 2 (routing policy already handles
   its absence).
