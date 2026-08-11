---
id: kc-0206
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [secrets, env-files, api-keys, security]
source_video: [bCljOfCH8Ms, saggDHHnmtQ, gb5TlGw6Uks]
source_channel: "@nateherk"
source_views: ["395K", "410K", "336K"]
confidence: high
---
# Handling secrets safely with .env files

**What:** The practice of storing API keys and tokens in a dedicated environment
file (a dotfile) that is excluded from version control, rather than pasting them
into code, workflows, or the chat conversation.

**Why it matters:** Secrets in tool code or a public push get exposed; secrets in
chat history persist in the conversation (and may travel to a model provider).
Isolating them in an ignored env file keeps them out of repos and out of transcripts,
and lets you rotate a single key if it leaks.

**The moves:**
1. Have the agent create the env file with placeholder variable names.
2. Paste the real key value into that file yourself — don't hand it over in chat.
3. Add the env file to the ignore list so it never gets committed on a push.
4. Reference the variables from tools/scripts by name, not by literal value.
5. On some hosts, set the secret via a config command that writes to the env file
   without it ever entering the chat window.

**Watch out for:** When an agent offers to take your key in chat "and set it up,"
decline — instruct it to make the env placeholder instead. For cloud/remote runs the
env file is not pushed, so you must supply keys as environment variables in the run
environment. If a key does leak, rotate it.

**Original example to invent:** Source stored task-manager and YouTube API keys.
Writers should use different services; the pattern (placeholder → paste locally →
ignore file) is the transferable part.
