# Crash Test #1 — Silent Animatic (Tier-0 / $0)

`crash-test-001-animatic.mp4` is a **silent, timed animatic** of AI University Episode 1 ("Crash Test #1"): a visual-timing preview that plays all 52 finished keyframes end-to-end, each held for its exact per-shot screenplay duration with hard cuts. It is **intentionally silent** — there is no audio track. Voiceover and music are pending Ryan's decision and will be laid against this same timing later; this file exists so the full visual episode can be watched at correct pacing before any audio work begins.

**How it was generated ($0, local tools only, no paid APIs and no image/video generation):** each `production/keyframes/s0NN.html` (self-contained, 1920×1080) was rendered to a PNG with **system Google Chrome headless** (`--headless=new`, `--window-size=1920,1080`, `--force-device-scale-factor=1`, 9s virtual-time budget), then the 52 stills were assembled into an H.264 (yuv420p, 30fps, +faststart) MP4 with **ffmpeg** via the concat demuxer, each still held for its shot duration.

**Per-shot timing source:** the `- **Timecode:** M:SS–M:SS` line in each `### S0NN` block of `production/screenplay/crash-test-001-screenplay.md`. Each shot's duration = end − start; all 52 parsed cleanly with no ≤0 or absurd values (zero fallbacks needed). Durations sum to exactly **1020s (17:00)** and the encoded MP4 verifies at exactly **1020.000000s** at 1920×1080, 30fps.

**Total runtime: 17:00 (1020s), 52 shots.**
