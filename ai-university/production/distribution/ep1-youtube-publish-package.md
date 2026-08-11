# EP1 Distribution — YouTube Publish Package (Crash Test #1)

**Status:** GREENLIT (Ryan accepted interaction `61cf3b6c`, 2026-08-09) — metadata approved. Captions + thumbnail now built ($0). Package is Public-ready; **only the manual YouTube upload remains (Ryan's OAuth + click).** NOT yet uploaded.
**Asset:** `production/animatic/crash-test-001-finished.mp4` — 1020.000s (17:00), 1920×1080, H.264 yuv420p 30fps, AAC 192k, 41 MB, committed `85e8be1`.
**Channel:** AI University ▸ series **Crash Test Agents** ▸ Episode 1.

This is the complete, ready-to-paste metadata for the upload. ADAM cannot publish (external send + Ryan's Google/YouTube credentials are both hard gates, and there is no YouTube connector in ADAM's toolset). Ryan performs the upload (or authorizes an OAuth path) using the fields below verbatim.

---

## Title (SEO — 63 chars, from approved screenplay front-matter)
```
I Tried to Break This AI Agent 25 Ways (so yours won't die in production)
```

## Description
```
I mounted a working AI agent — "Sift," a support agent for a fictional company — on a crash-test rig and tried to break it 25 different ways: bad inputs, dead APIs, a model that lies, runaway cost, leaked secrets. Then I fixed every one. If you're shipping agents to real users, this is the pre-flight checklist nobody hands you.

No face, no stock footage, no borrowed demos — every UI, dashboard, and failure in this video is original and built for the teardown.

⏱️ Chapters
0:00 Cold open — meet Sift, the agent under test
0:51 Why you should try to break your own agent first
3:13 Round 1 — Bad inputs & the wrong tool (breaks 1–6)
6:52 Round 2 — Dead APIs & fragile chains (breaks 7–11)
9:05 Round 3 — The lying model (breaks 12–15)
10:16 Round 4 — Runaway cost blowup (breaks 16–20)
12:00 Round 5 — Leaky secrets & over-privilege (breaks 21–23)
13:40 Final safety net — human in the loop (breaks 24–25)
14:46 The clean rerun — 25 breaks → 25 fixes
15:45 The production-readiness checklist, recapped
16:30 Outro

🔧 The 25-break checklist maps to five failure classes every production agent hits: input & scope, errors & retries, verification, guardrails & cost, and secrets & permissions — plus human gates on top. Steal it for your own agents.

🎓 AI University — we break AI agents so yours don't.
New teardown every episode. Subscribe so Episode 2 finds you.

—
Disclosure: this video uses synthetic/altered media — the narration is a synthetic (text-to-speech) voice and all visuals are original motion graphics. No real person is depicted.

#AIagents #LLM #AIengineering #promptengineering #MLOps
```

## Tags
```
AI agents, LLM agents, AI engineering, production AI, agent reliability, prompt engineering, MLOps, LLMOps, AI safety, agent testing, red teaming AI, AI University, Crash Test Agents, building AI agents, AI failures, LLM evaluation, RAG, tool use, AI guardrails, agent security
```

## Upload settings
| Field | Value |
|---|---|
| Visibility | **Ryan's call** — recommend **Unlisted first** for a final review pass, then flip to Public |
| Category | Science & Technology |
| Language / caption language | English |
| Audience | **Not made for kids** |
| **Altered/synthetic content disclosure** | **YES — set the "Altered content" flag.** Narration is TTS (synthetic voice). Visuals are original graphics (not realistic depictions of real people/events), but the synthetic-voice disclosure is the honest, safe setting and matches the S052 compliance note in the screenplay. |
| Comments | On (default) |
| License | Standard YouTube License |
| Thumbnail | ✅ **`production/distribution/ep1-thumbnail.png`** (1280×720, on-brand, $0) — upload as custom thumbnail |
| Captions | ✅ **`production/distribution/crash-test-001.en.srt`** (235 cues, English, verbatim to VO) — upload in Subtitles |
| End screen / cards | Optional; can add subscribe + "Episode 2" placeholder later |

## ✅ Pre-Public gaps — CLOSED ($0)
1. **Thumbnail — DONE.** `production/distribution/ep1-thumbnail.png` (1280×720, H×W valid, ~268 KB). Built from the brand system (`thumbnail.html` → Chrome headless, deterministic, repeatable via that HTML). Hazard chrome + Signal-Cyan "AI AGENT" + kill-counter HUD `BREAKS 25/25 → FIXES 25/25`. Regenerate: re-screenshot `thumbnail.html`.
2. **Captions — DONE.** `production/distribution/crash-test-001.en.srt` (235 cues, English, ends 00:17:00). Generated $0 by `production/build/render-captions.mjs`, which parses the **same** screenplay VO/timecode blocks the audio render uses — captions are verbatim to the spoken narration. Re-run after any screenplay edit to stay in sync.

Nothing else blocks Public. Upload the `.srt` under Subtitles and the `.png` as the custom thumbnail during the same upload.

---

## How Ryan publishes (either path)
- **Manual (simplest):** open YouTube Studio → Upload → select `production/animatic/crash-test-001-finished.mp4` → paste Title/Description/Tags above → set the flags in the table → Unlisted → review → Public.
- **OAuth/API path (if Ryan wants ADAM to automate future episodes):** Ryan authorizes a YouTube Data API OAuth client for the channel; ADAM wires an upload script (`kc-0459-auto-post-via-publishing-api` in the Library is the reference). This is a separate build — not needed to ship EP1.

**Nothing here is sent until Ryan greenlights.**
