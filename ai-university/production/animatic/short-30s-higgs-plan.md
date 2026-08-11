# 30s Short — Higgsfield Visual Rebuild (OPE-175 follow-up)

**Why:** Ryan's directive (OPE-175 comment, 2026-08-09): the current `crash-test-001-short-30s.mp4`
has "good information but nothing shows how the agent is broken." It is a slice of the static
keyframe cut — informative captions/VO, but the visuals are info-slides, not motion. Rebuild the
**30s clip only** with cinematic Higgsfield b-roll that actually *shows* the agent (Sift)
malfunctioning. The 17:00 finished cut is untouched.

**Approach:** keep the existing VO + captions (the "good information" Ryan praised — extracted to
`short30_audio.m4a`), replace the 30s of visuals with a 6-shot cinematic montage, re-mux the
original audio under it. Local assembly (ffmpeg) is $0; only the 6 generations cost credits.

## Cost / gate
- Higgsfield balance = **1.01 credits** (exhausted); account has **no unlimited allowance**
  (`use_unlim` unsupported here — verified 2026-08-09).
- Chosen route: **Seedance 2.0 Fast, 720p, 5s, silent** = **17.5 cr/clip** → 6 clips = **~105 cr**.
- Minimum top-up = **500 cr / $26** (one-time, 90-day validity) → covers this with ~395 cr headroom
  for future episodes. This is the only spend; assembly is free.
- Route alternative (if credits are tight later): `nano_banana_pro` stills @ 2 cr each (~16 cr for 8),
  animated locally (Ken-Burns + glitch) — cheaper but less true motion. Video route preferred for
  "show it breaking."

## Shared style prefix (prepend to every prompt)
> Faceless cinematic tech-thriller, dark control-room / server-room, teal-and-red emergency
> lighting, volumetric haze, shallow depth of field, glass holographic UI, subtle film grain,
> 16:9, no human faces, no readable brand logos, original fictional universe.

## The 6 shots (Seedance 2.0 Fast, 720p, 5s, generate_audio:false, aspect_ratio:16:9)
1. **Alive/competent (0–5s):** a glowing holographic AI "agent" core built around an email/inbox
   glyph on a central pedestal, calm blue status lights, streams of envelopes flowing neatly
   through it, slow confident camera push-in. The machine about to be crash-tested.
2. **Duplicate-send storm (5–10s):** the core glitches; identical email envelopes erupt out of it
   uncontrollably, a diegetic send-counter spinning past 40 toward 200, screens flooding, lights
   snapping from blue to red.
3. **Error cascade (10–15s):** broken pipeline nodes going dark one by one, red "400 / 500 ERROR"
   glyphs cascading down glass panels, connecting light-chains snapping and sparking.
4. **Confident hallucination (15–20s):** the core projects a crisp, authoritative data record with a
   bright green ✓ "verified" stamp — over obviously invented numbers that flicker and don't add up.
5. **Cost blowup (20–25s):** a token/cost meter needle slamming hard into the red max, glowing
   currency/energy units incinerating, an infinite runaway transcript scrolling into the void.
6. **Fracture (25–30s):** the whole agent core cracks, shudders and goes dark under a stark
   "CRASH TEST" framing — then a single green ember flickers (the survivor hint) as it powers down.

## Assembly (on top-up — $0, deterministic)
1. `generate_video_batch` the 6 prompts (indices 1–6), `jobs_wait`, download results.
2. `ffmpeg` trim each to 5.000s, concat to 30.000s @ 1920×1080 (scale/pad from 720p),
   optional light caption/HUD overlay carried from the current short.
3. Re-mux `short30_audio.m4a` under the new video (`-shortest`, copy audio).
4. Output → `crash-test-001-short-30s.mp4` (supersede), commit + push, post to OPE-175.
