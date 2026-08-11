---
id: kc-0436
type: concept
track: "Track 6 — Interfaces: Voice & Chat"
topics: [agents, interfaces, channels, telegram, voice]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: medium
---
# The agent's input and output channels are swappable

**What:** The interface you talk to an agent through is separate from the agent itself. The same agent can take input from, and return output to, many channels — an in-platform chat, a messaging app, a phone/voice layer — and triggers don't have to live inside the automation environment.

**Why it matters:** Decoupling the agent's logic from its interface means one agent can power a chat widget, a messaging bot, or a voice assistant, so you build the brain once and expose it wherever users are.

**The moves:**
1. Treat input and output as pluggable channels, not fixed to the build environment.
2. Route the trigger from an external source (a messaging app, a form, a voice layer) into the same agent.
3. Send the agent's output back to whichever channel the user prefers.
4. For a spoken interface, wire a voice layer to the input and output to converse in real time.

**Watch out for:** Different channels have different formatting and latency expectations; the core agent stays the same, but you adapt input parsing and output formatting per channel.

**Original example to invent:** Source references connecting a voice layer for a phone conversation. Writers should invent a different channel swap (e.g., the same agent behind a chat widget and a messaging app).
