# AI University

A content pipeline that learns from reference YouTube channels and produces
**original** videos. Reference channels are treated like faculty: we extract the
*knowledge* they teach and the *structures* that make their videos perform —
never their words, clips, or examples. Writers work only from the synthesized
library, so scripts are original by construction (see `tools/librarian.md`).

## Pipeline

```
rip ──▶ extract ──▶ curriculum ──▶ write ──▶ edit(gate) ──▶ produce ──▶ publish
catalog   cards       topic map     scripts   originality     voice+video  YouTube API
transcripts (librarian)                        + fact check   (Higgsfield)
```

## Layout

```
ai-university/
  tools/
    innertube.py    stdlib-only client for youtubei.googleapis.com
    ripper.py       catalog / enrich / transcripts / top  (see --help)
    librarian.md    extraction spec: transcripts → knowledge & style cards
  channels/
    nateherk/
      catalog.json      all 467 videos (302 long-form + 165 shorts), views/length/date
      details.json      descriptions, chapter lists (295), exact dates & views
      transcripts/      one .md per video  ← pending network access (below)
  library/
    curriculum.md       AI University syllabus v0 (10 tracks + gaps)
    knowledge/          kc-* cards (what to teach)      ← filled by librarian
    style/              sc-* cards (how to package it)  ← sc-0000 seeded
```

## Commands

```bash
# full channel catalog (works even where www.youtube.com is blocked —
# uses youtubei.googleapis.com)
python3 tools/ripper.py catalog --channel @nateherk --out channels/nateherk

# descriptions, chapters, exact dates/views
python3 tools/ripper.py enrich --channel-dir channels/nateherk

# transcripts (needs direct www.youtube.com access — see note)
python3 tools/ripper.py transcripts --channel-dir channels/nateherk \
    --min-seconds 120 --limit 50        # start with top 50 long-form by views

# priority queue
python3 tools/ripper.py top --channel-dir channels/nateherk -n 25
```

Everything is Python stdlib — no pip installs. Re-runs are incremental (already
ripped videos are skipped; failures land in `transcripts/_failed.json`).

## Status / next steps

- [x] Catalog + enrichment ripped for `@nateherk` (Dec 2024 → Aug 2026, complete)
- [x] Curriculum v0 and channel style card from real metadata
- [ ] **Transcripts** — blocked in the current cloud session: the environment's
      network policy allows `*.googleapis.com` but not `www.youtube.com`, and
      transcript bodies are only served from there. Two ways to unblock:
      1. In the Claude Code environment settings, set the network policy to
         allow `www.youtube.com` (or "no restrictions"), then run the
         transcripts command above in a session, or
      2. run it on any normal machine with Python 3 — no dependencies.
- [ ] Librarian pass over top transcripts → knowledge/style cards
- [ ] House voice guide + first original script through the editor gate
- [ ] Production (script → voiceover/video) and YouTube upload via Data API
      (one-time OAuth setup on the channel)

## Ground rules

Knowledge and facts are extracted freely; wording, analogies, jokes, examples,
clips and thumbnails are never copied. Scripts must pass the originality gate in
`tools/librarian.md` before production. Scraping transcripts for research sits in
a ToS gray zone — outputs are original content, but keep volume polite (the
ripper throttles by default).
