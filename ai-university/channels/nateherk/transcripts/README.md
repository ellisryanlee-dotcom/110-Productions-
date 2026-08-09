# Raw transcripts moved to cold storage

Raw transcripts no longer live in the working tree — carrying 3 MB of source
text everywhere was the pipeline's main token sink. They are stored:

1. **Canonical:** Google Drive (per-file ids in `../sources.json`;
   `drive_status` marks files awaiting the one-time bulk upload).
2. **Warm mirror:** git history, commit `b8d02e5`
   (`git show b8d02e5:ai-university/channels/nateherk/transcripts/<id>.md`).
3. **Session cache:** `../cache/<id>.md` (gitignored) — auto-restored from git
   history by `tools/excerpt.py` on first use.

Agents must never read a transcript file whole. Use
`python3 ai-university/tools/excerpt.py --channel-dir ai-university/channels/nateherk --id <VIDEO> --toc`
and fetch chapter spans (hard cap ~25K tokens per call). See
`tools/librarian_contract.md`.

New rips (`ripper.py` / `ripper_ytdlp.py`) still write `<id>.md` here; after a
rip, refresh `../sources.json`, archive the new files (commit + Drive), and
clear them from the worktree.
