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
    ripper_ytdlp.py transcripts fallback for bot-gated networks (yt-dlp + PO token)
    librarian.md    extraction spec: transcripts → knowledge & style cards
  channels/
    nateherk/
      catalog.json      all 467 videos (302 long-form + 165 shorts), views/length/date
      details.json      descriptions, chapter lists (295), exact dates & views
      transcripts/      one .md per video (top 50 long-form by views ripped)
  library/
    curriculum.md       AI University syllabus v0 (10 tracks + gaps)
    knowledge/          kc-* cards (what to teach)      ← filled by librarian
    style/              sc-* cards (how to package it)  ← sc-0000 + per-video cards
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
- [x] **Transcripts** — top 50 long-form by views ripped. Note for cloud
      sessions: `www.youtube.com` is reachable, but YouTube bot-gates
      datacenter IPs ("Sign in to confirm you're not a bot") on the watch
      page, every InnerTube player client, and `get_transcript` alike, so
      `ripper.py transcripts` fails with "no caption tracks". The working
      route is `tools/ripper_ytdlp.py` — yt-dlp plus a BotGuard PO-token
      provider (setup in its docstring); output format is identical. On a
      normal residential connection, plain `ripper.py transcripts` works.
- [x] Librarian pass over top-50 transcripts → knowledge/style cards
- [ ] House voice guide + first original script through the editor gate
- [ ] Production (script → voiceover/video) and YouTube upload via Data API
      (one-time OAuth setup on the channel)

## Ground rules

Knowledge and facts are extracted freely; wording, analogies, jokes, examples,
clips and thumbnails are never copied. Scripts must pass the originality gate in
`tools/librarian.md` before production. Scraping transcripts for research sits in
a ToS gray zone — outputs are original content, but keep volume polite (the
ripper throttles by default).
