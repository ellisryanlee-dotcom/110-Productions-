---
id: kc-0860
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [audio, speech-to-text, whisper, docling, rag, local]
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Ingest audio files into a knowledge base with local speech-to-text

**What:** Audio recordings (meetings, calls) can be added to a RAG knowledge base by
transcribing them to markdown with a speech-to-text model, all running locally. A document
parser can wrap the transcription so audio ends up in the same markdown pipeline as your
other files.

**Why it matters:** Knowledge isn't only in text files. Turning recordings into searchable
text lets an agent answer from what was said in a meeting, not just what was written.

**The moves:**
1. Install the extra dependencies (a media tool like FFmpeg and an open-source speech model
   such as a Whisper variant).
2. Configure a speech-to-text pipeline (defaults are fine to start; the model runs locally).
3. Convert the audio file and export the transcript as markdown — optionally keeping
   per-sentence timestamps as metadata.
4. Chunk, embed, and store the transcript like any other document.

**Watch out for:** Transcription time scales with clip length but is reasonable locally
(seconds for a short clip). Timestamps are optional metadata you can keep or drop.

**Original example to invent:** Source transcribed a short generated audio clip. Writers
should use a different recording scenario and describe it generically.
