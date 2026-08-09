# Crash Test #1 — Silent Animatic (Tier-0 / $0)

`crash-test-001-animatic.mp4` is a **silent, timed animatic** of AI University Episode 1 ("Crash Test #1"): a visual-timing preview that plays all 52 finished keyframes end-to-end, each held for its exact per-shot screenplay duration with hard cuts. It is **intentionally silent** — there is no audio track. Voiceover and music are pending Ryan's decision and will be laid against this same timing later; this file exists so the full visual episode can be watched at correct pacing before any audio work begins.

**How it was generated ($0, local tools only, no paid APIs and no image/video generation):** each `production/keyframes/s0NN.html` (self-contained, 1920×1080) was rendered to a PNG with **system Google Chrome headless** (`--headless=new`, `--window-size=1920,1080`, `--force-device-scale-factor=1`, 9s virtual-time budget), then the 52 stills were assembled into an H.264 (yuv420p, 30fps, +faststart) MP4 with **ffmpeg** via the concat demuxer, each still held for its shot duration.

**Per-shot timing source:** the `- **Timecode:** M:SS–M:SS` line in each `### S0NN` block of `production/screenplay/crash-test-001-screenplay.md`. Each shot's duration = end − start; all 52 parsed cleanly with no ≤0 or absurd values (zero fallbacks needed). Durations sum to exactly **1020s (17:00)** and the encoded MP4 verifies at exactly **1020.000000s** at 1920×1080, 30fps.

**Total runtime: 17:00 (1020s), 52 shots.**

---

## Crash Test #1 — FINISHED CUT (Tier-0 / $0, narrated)

`crash-test-001-finished.mp4` is the **completed episode**: the animatic above with a
full **voiceover + subtle music bed** layered on, produced under Ryan's OPE-175 directive
to drop all paid tools (no VOICE/b-roll/VIDEO-GEN spend) and finish EP1 with free/owned
tools only — **zero cost, no spend-approval gate.**

**How it was generated ($0, built-in tools only, no paid APIs, no credits, no network):**
- **Voiceover:** macOS `say` (built-in TTS), voice **Reed (English (US))** — the free/built-in
  match to the locked BRANDING call ("neutral synthetic AI, mid-tone US male"); a synthetic
  TTS timbre is also on-theme for Crash Test Agents. One clip per shot from the `- **VO:**`
  line of each `### S0NN` screenplay block (all 52 shots), each placed at its shot start and
  time-compressed (ffmpeg `atempo`) only if it would overrun its window.
- **Music:** a subtle ambient bed **synthesized by ffmpeg** (root A2 + fifth E3 + octave A3,
  slow tremolo, band-limited, −26 dB under the VO, 3s fade in / 4s fade out). No external or
  licensed track — fully owned, deterministic, zero licensing risk.
- **Mux:** VO + music mixed (`amix` → `dynaudnorm` → `alimiter`) and muxed under the copied
  video stream with ffmpeg. Output verifies at exactly **1020.000000s**, 1920×1080, 30fps,
  AAC 192k. VO is present and level across the full runtime (mean ≈ −15 to −22 dB, peaks ≈ 0 dB).

**Repeatable builder:** `production/build/render-finished.mjs` (re-run after any screenplay VO
edit or animatic re-render). Supersedes the paid VO/music path — no top-up, no approval needed.

**This is the shippable episode file.** Publishing (e.g. YouTube upload) remains a separate
external-action gate for Ryan and has NOT been performed.
