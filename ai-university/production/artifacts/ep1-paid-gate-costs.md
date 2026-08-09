# EP1 Paid-Production Gate — Itemized Cost Estimate

**Episode:** AI University · *Crash Test #1* (Episode 1)
**Prepared by:** ADAM · 2026-08-09 · issue 0333b21b (parent OPE-156)
**Status:** DRAFT for Ryan spend-approval. **No paid asset generated until approval is accepted.**

## Context
The deterministic pipeline is complete and cost **$0**: SCRIPT approved → EDITOR re-gate PASS →
SCREENPLAY approved (25-break Kill-Counter HUD) → BRANDING locked → **KEYFRAMES 52/52 built**
(49 Tier-0 + 3 AI-GEN Tier-0 fallbacks). The next stages cross the first **paid** boundary.

Key finding: most of "VIDEO GENERATION" is **also Tier-0 / $0**. The 49 deterministic shots are
HTML/CSS/SVG keyframes — they animate with CSS/JS and are captured to clips with a headless
browser (Playwright/Puppeteer screencast), then assembled locally (ffmpeg / DaVinci Resolve free).
No paid AI video model is needed for them. The only genuinely paid surface is **voice**, the **3
optional AI-GEN b-roll overlays**, and optionally a **music subscription**.

## Itemized paid surface

| # | Line item | What / scope | Provider (recommended) | Unit price | Est. total | Notes |
|---|-----------|--------------|------------------------|-----------|-----------|-------|
| 1 | **VOICE (TTS)** | Narrate ~3,084 VO words ≈ ~19k chars (~17–20 min) in the branded voice; headroom for retakes/multiple passes | **ElevenLabs Creator** | $22/mo · ~$0.000182/char · 100k chars/mo · commercial license + pro voice cloning | **$22** | ~19k chars/pass → a single month covers ~5 full passes. Cancel after episode. Cheaper fallback: OpenAI `tts-1-hd` ≈ $0.57 total, but lower branding/voice-clone quality. |
| 2 | **AI-GEN B-ROLL** | 3 gated shots S017 (soup), S035 (puppy+keys), S043 (valet key) — atmospheric overlays only; each has a shipping Tier-0 fallback already built | Higgsfield / Canva / fal (stills preferred) | ~$1–5 / still · ~$5–15 / 3–5s clip | **$0 – $45** | **Optional.** Base cut loses no meaning without these (analogies land in VO). Stills recommended over clips. Can be gated to $0. |
| 3 | **VIDEO GEN (assembly)** | Animate + capture the 49 deterministic keyframes → clips; assemble full timeline | Tier-0: headless-browser capture + ffmpeg / DaVinci Resolve (free) | $0 | **$0** | No paid AI video model required. Only #2 needs paid generation. |
| 4 | **MUSIC / SFX** | Score bed + SFX for a ~17–20 min YouTube episode | **YouTube Audio Library** (free, YT-monetization-safe) | $0 | **$0 – $49** | Free library covers a monetized YouTube upload. Optional upgrade: Epidemic Sound Personal ~$9/mo (annual) or Commercial $49/mo for broader catalog. |

## Cost bands

| Band | Composition | Total |
|------|-------------|-------|
| **Low** | VOICE $22 · AI-GEN gated $0 · VIDEO $0 · MUSIC (YT lib) $0 | **$22** |
| **Expected** | VOICE $22 · AI-GEN 3 stills ~$15 · VIDEO $0 · MUSIC (YT lib) $0 | **~$37** |
| **High** | VOICE $22 · AI-GEN 3 clips ~$45 · VIDEO $0 · MUSIC (Epidemic 1mo) $49 | **~$116** |

Most cost is **cancelable monthly subscriptions** used for one episode, so effective one-time
outlay is at the low end of each band.

## Recommendation
**Approve a single ceiling of `up to $150`.** Covers the Expected band plus generous headroom for
voice retakes, the optional AI-GEN b-roll, and a one-month music sub if broader catalog is wanted —
all inside one billing cycle of each service. I will spend against the cheapest path first (Low band
default: voice + free music + gated b-roll = ~$22) and only escalate toward the ceiling where it
materially improves the finished episode.

## On approval, ADAM will
1. Spawn child stage-issues: **VOICE**, **AI-GEN b-roll**, **VIDEO GEN (assembly)**, **MUSIC/SFX**.
2. Execute VOICE first (unblocks the timeline), assemble the Tier-0 video in parallel ($0), decide
   the 3 b-roll shots stills-vs-gate, pick music, then EDIT → FINAL EXPORT.
3. Report actual spend per line as issue comments.

_Pricing sources (2026): ElevenLabs Creator $22/mo · Epidemic Sound Personal ~$9 / Commercial $49 ·
YouTube Audio Library free. Bands are estimates; actuals reported against this ceiling._
