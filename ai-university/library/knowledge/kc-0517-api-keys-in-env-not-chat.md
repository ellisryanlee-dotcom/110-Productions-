---
id: kc-0517
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [api-keys, secrets, env-files, security]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Keep API keys in a .env file, never pasted into chat

**What:** When an agent needs a provider API key, put the key in an environment file (a `.env` in the project) rather than typing it into the conversation. You can either open the project in an editor and paste the key into the `.env` yourself, or ask the agent to create the `.env` file and then add the key to it.

**Why it matters:** Anything pasted into the chat persists in the conversation history, which is a poor place for secrets. An environment file keeps credentials out of the transcript and is standard practice for loading keys at runtime.

**The moves:**
1. Create a `.env` file in the project (yourself, or have the agent scaffold it).
2. Add the key as a variable inside that file.
3. If using an editor-based harness, you can see and click into the `.env` directly to paste; in a chat-only harness, have the agent create the file and then add the value out of band.
4. Reference the key from the file at runtime rather than re-pasting it.

**Watch out for:** Pasting a secret straight into the chat leaves it sitting in history. Treat the `.env` as sensitive (exclude it from version control).

**Original example to invent:** The source adds a transcription-provider key this way. Writers should show the same secret-handling for a different service's key (e.g., a scraping or email API).
