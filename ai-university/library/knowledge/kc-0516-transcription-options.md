---
id: kc-0516
type: tool
track: "Elective — Model & Tool Literacy"
topics: [transcription, whisper, elevenlabs, api-keys]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Transcription options for AI video editing (and their trade-offs)

**What:** The trim step needs a transcript, and there are several ways to get one, each with a cost/quality trade-off: a local, self-installed speech-to-text tool (free, runs in the background), a hosted speech-to-text API from a major AI provider, or a hosted voice-AI provider's transcription API. Different tools in a pipeline may default to different transcribers.

**Why it matters:** Which transcriber you pick affects cost (free local vs. paid API) and, in practice, edit quality — a more accurate transcript with better boundaries can produce cleaner cut points. Knowing the menu lets you optimize for budget or for edit precision.

**The moves:**
1. Pick a transcriber based on priorities: local/self-hosted for zero marginal cost, a hosted API for convenience, a voice-focused provider if it finds better cut moments.
2. Expect different pipeline tools to prefer different defaults; you can override the default to your chosen provider.
3. If using a paid API, obtain the key from that provider's developer/API-keys section.
4. Store the key in an environment file, not in the chat (see the .env handling card).

**Watch out for:** "All three work fine" for basic transcription, but the choice can shift both cost and the accuracy of cut points. A local tool trades convenience/setup for being free.

**Original example to invent:** The source picks a specific paid provider because it found better cut moments on its footage. Writers should invent a decision scenario weighing free-local vs. paid-API for a creator on a tight budget.
