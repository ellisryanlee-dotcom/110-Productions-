# HANDOFF — read this first, then execute NEXT STEPS

You are continuing the **AI University** build for Ellis (110 Productions).
Work on branch `claude/youtube-channel-automation-cg1glm`. Pushes update
**PR #1** automatically — do NOT create a new pull request.

## The mission

Build a content engine that learns from reference YouTube channels and produces
**original** videos. Reference channels are teachers, not footage: we extract the
*knowledge* they teach and the *structures* that make their videos perform —
never their words, clips, examples, or thumbnails. Script-writers work only from
the extracted library (never from transcripts), and an editor gate checks every
script against sources before production. Full rules: `tools/librarian.md`.

## What is already done (do not redo)

- **Catalog** of `@nateherk` (Nate Herk | AI Automation): all **467 videos**
  (302 long-form + 165 shorts, Dec 10 2024 → Aug 2026) with views, lengths,
  dates → `channels/nateherk/catalog.json`
- **Enrichment**: descriptions, 295 chapter lists, exact dates/views
  → `channels/nateherk/details.json`
- **Curriculum v0** (10 tracks + gap list, from real topic/view clustering)
  → `library/curriculum.md`
- **Channel style card** (metadata-derived formulas with measured counts)
  → `library/style/sc-0000-nateherk-channel.md`
- **Librarian spec** (card schemas + originality gate) → `tools/librarian.md`
- **Ripper CLI** (stdlib-only Python) → `tools/ripper.py` with subcommands
  `catalog` / `enrich` / `transcripts` / `top`
- **Writing layer**: house voice guide draft (`library/voice-guide.md`, with
  [ELLIS] slots awaiting his answers), writer spec (`tools/writer.md`), editor
  gate (`tools/editor.md`), and a data-grounded first-video shortlist
  (`library/first-videos.md`)
- **More teachers enrolled** (catalog+enrich only, transcripts pending):
  `channels/colemedin` (@ColeMedin), `channels/liamottley` (@LiamOttley)

## Environment facts (hard-won — trust these, don't re-derive)

- The default cloud environment's network allowlist permits `*.googleapis.com`
  but **blocks `www.youtube.com`** (and all mirrors/proxies, and WebFetch).
  Ellis created a separate environment with **Full network access** for
  transcript work — if you get connection errors on youtube.com, you are in the
  wrong environment: STOP and tell Ellis to relaunch you in the Full one.
- Catalog/enrich need only `youtubei.googleapis.com` → work in ANY environment.
- Transcripts need `www.youtube.com`. **Update (Aug 2026):** the old direct
  watch-page → captionTracks → timedtext scrape now returns an empty body —
  YouTube gates the `timedtext` baseUrl behind a proof-of-origin (`pot`) token,
  so the naive path yields `Expecting value: line 1 column 1 (char 0)` on every
  video. `ripper.py transcripts` now fetches the json3 via **yt-dlp** (android
  client, gets past the pot gate); the legacy scrape is kept only as a fallback.
  Requirements on the runner: `pip install yt-dlp certifi`. On macOS/python.org
  builds you must also `export SSL_CERT_FILE=$(python3 -c "import certifi;print(certifi.where())")`
  or every fetch fails with `CERTIFICATE_VERIFY_FAILED`.
- Do NOT try InnerTube `get_transcript` or `player` on googleapis hosts — they
  return FAILED_PRECONDITION / LOGIN_REQUIRED from datacenter IPs; dead end.
- Keep the ripper's default throttle (`--sleep 1.5`) — be polite to YouTube.

## NEXT STEPS (in order)

**Phase A — rip transcripts (top 50 long-form by views):**
```bash
cd ai-university
python3 tools/ripper.py transcripts --channel-dir channels/nateherk --min-seconds 120 --limit 50
```
- Output: `channels/nateherk/transcripts/<videoid>.md`; failures →
  `transcripts/_failed.json` (re-running skips done, retries failed).
- Sanity-check 2–3 transcripts (real sentences, timestamps present).
- **Commit and push immediately** (message: "Rip top-50 nateherk transcripts").

**Phase B — librarian extraction:**
- Follow `tools/librarian.md` exactly. For each transcript (top-viewed first,
  use `python3 tools/ripper.py top --channel-dir channels/nateherk -n 50`):
  extract knowledge cards → `library/knowledge/kc-NNNN-<slug>.md` and one
  per-video style card → `library/style/sc-NNNN-<videoid>.md`.
- Number cards sequentially (kc-0001…, sc-0001…). Assign each card a
  curriculum track from `library/curriculum.md`. Merge duplicate topics into
  one card with multiple sources rather than minting near-copies.
- Parallelize with subagents if available (batches of ~10 transcripts).
- Quality bar: a writer who has never seen the video could teach the topic
  from the card alone — in their own words. No quoted phrasing, no copied
  analogies (describe analogies abstractly).
- **Commit and push** ("Librarian pass 1: knowledge + style cards for top 50").

**Phase C — report** (in your session, no PR comment needed):
counts (transcripts ripped/failed, cards written per track), 2–3 sample cards
inline, and anything the curriculum got wrong that extraction revealed.

## Backlog after that (don't start unless asked)

1. Transcripts + librarian pass for the other enrolled teachers
   (`channels/colemedin`, `channels/liamottley`) — same Phase A/B recipe.
2. Ellis fills the [ELLIS] slots in `library/voice-guide.md`
   (niche/audience/angle/name).
3. First original script: pick candidate #1 from `library/first-videos.md`,
   write its Brief per `tools/writer.md`, draft from cards only, then the
   editor gate per `tools/editor.md`.
4. Production (AI voiceover/video) and YouTube upload via Data API (needs
   Ellis's one-time OAuth setup).

## Working agreements

- Branch: `claude/youtube-channel-automation-cg1glm` only. Push updates PR #1.
- Never commit credentials, cookies, or backup codes to the repo.
- Transcripts are research material: keep them in `channels/`, never quote
  them into scripts or cards.
