# Episode 1 — VOICE (VO) pipeline

Status: **PATH VERIFIED, blocked on credit top-up.**

Ryan approved VO via **built-in higgsfield audio credits** (interaction `bab739ef`,
answered 2026-08-09). On execution the account balance was found nearly empty, so the
approved path cannot complete without a top-up. This directory holds the verified
smoke-test proving the pipeline works, plus the numbers Ryan needs to unblock.

## Verified pipeline
- **Engine:** higgsfield `seed_audio` (Seed Audio 1.0 by ByteDance), text-to-speech.
- **Voice (provisional):** `Holden` — preset male, mid-tone US — voice_id
  `3c9d6053-6334-592c-8997-4e325286af3f`. Matches the locked BRANDING call
  ("neutral synthetic AI, mid-tone US male"); swappable at no rework cost.
- **Output:** 24 kHz PCM WAV. Sample: `s001-vo-smoketest-holden.wav` (episode intro line).
- **Method:** one `generate_audio` call per VO block → `jobs_wait` → download `result_url`.
  ~52–53 VO blocks in the screenplay; batchable via `generate_audio_batch`.

## Cost model (measured 2026-08-09)
- Short line (~140 chars) = **1 credit** (preflight + actual, confirmed by balance drop 2.01 → 1.01).
- Full-shot VO segments historically ran **1.9–6.1 credits** each (scales with audio duration).
- **Full VO estimate: ~50–150 credits** (~17 min / ~15–19k spoken chars).
- **B-roll (Seedance 2.5 video): 32.5 credits/clip × 3 (S017/S035/S043) ≈ 100 credits.**
- **Episode 1 total: ~150–250 credits.**

## Blocker
Balance after the verified smoke test: **1.01 credits.** Insufficient to complete.
Top-up is a spend decision — a 🔴 Ryan gate. Cheapest sufficient pack:
**500 credits = $26** (covers full VO + all 3 b-roll with margin). Decision staged on OPE-156.

## $0 fallback (no approval needed)
A caption-accurate **silent animatic** already exists at
`production/animatic/crash-test-001-animatic.mp4` (1020.000s / 30600f / 30fps). If Ryan
prefers not to spend, that ships as the base cut and VO/music/b-roll layer in later.
