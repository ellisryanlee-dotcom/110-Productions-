---
id: kc-0448
type: how-to
track: "Track 8 — Applied Automations"
topics: [video-editing, transcription, whisper, timestamps, sync]
source_video: ZNbgOhxhzXg
source_channel: "@nateherk"
source_views: "376K"
confidence: high
---
# Sync graphics to speech with word-level transcripts

**What:** To make text and motion graphics appear at the right moments in a talking video, the tool needs a transcript with word-level timestamps. You generate this by transcribing the clip — either locally with an on-device speech model or via a hosted transcription API — and feed it in so the agent knows both what is said and when.

**Why it matters:** Animation timing is everything; without word-level timing the tool can't decide which graphics to create or when to bring them in. The transcript is what makes accurate sync possible.

**The moves:**
1. Transcribe the clip to get word-level timestamps.
2. Choose the method: run a local speech-to-text model, or call a hosted transcription API with a key.
3. Provide the timestamped transcript to the editing tool.
4. Let it place captions and graphics aligned to the spoken words.

**Watch out for:** Local transcription can be RAM-heavy, especially when running several renders at once — the API route offloads that. Raw, unedited footage should have mistakes and dead space trimmed first, since the tool won't reliably distinguish retakes from real takes.

**Original example to invent:** Source transcribes a personal talking-head clip. Writers should invent a different clip and show how a timestamped line drives one graphic's entrance.
