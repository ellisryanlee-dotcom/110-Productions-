---
id: kc-0514
type: concept
track: "Track 8 — Applied Automations"
topics: [transcription, timestamps, sync, motion-graphics]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Word-level transcript timestamps are what make motion graphics land on cue

**What:** The precision behind well-timed motion graphics is a transcript that carries a timestamp for *every word*. With word-level timing, you can tell the system exactly when an on-screen element should appear — down to the fraction of a second the specific word is spoken.

**Why it matters:** Motion-graphic quality is mostly about timing; a card that pops a beat late feels amateur. A word-by-word timing map removes guesswork and lets the animate step anchor each element to the precise spoken moment, which is why the trim/transcription step must precede animation.

**The moves:**
1. During the pipeline, generate a transcript with per-word timestamps (usually saved as a structured file alongside the edited clip).
2. Identify the anchor word that should trigger each graphic.
3. Instruct the animate step to start that element at the anchor word's timestamp.
4. Use the same timing map to fine-tune: nudge, shorten, or extend elements against exact spoken positions.

**Watch out for:** Without word-level timing you're back to eyeballing, which is slow and imprecise. The timestamps only help if trimming happens first so the timing map matches the final edit, not the raw file.

**Original example to invent:** The source shows a word starting at a specific second and anchoring a graphic there. Writers should invent a different phrase-to-graphic anchoring example with their own numbers.
