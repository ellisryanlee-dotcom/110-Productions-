---
id: kc-0326
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [secrets, environment-variables, security, api-keys, claude-code]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: high
---
# Store secrets in environment variables, and match names exactly

**What:** Cloud-run agents must not carry API keys in a .env file committed to a
repo. Instead you set keys in the run environment's variables and have the agent
read them from there. Two gotchas: the agent may default to expecting a .env that
doesn't exist, and the variable name it reads must match the configured name
character-for-character or it reports the key as missing.

**Why it matters:** Committing keys to a repo leaks them; and a silent name
mismatch makes a correctly-set key look absent, wasting debugging time. Both are
common causes of "it can't reach the API" failures.

**The moves:**
1. Configure API keys in the cloud/run environment's variable settings, not in the
   repo.
2. Explicitly instruct every routine/prompt to read keys from environment
   variables, not from a .env file.
3. Ensure the variable name in the environment and the name the prompt reads are
   identical — every word and separator.
4. If a key was ever pasted into a chat or committed, rotate it before going to
   production.

**Watch out for:** The failure mode looks like a missing key even when it's set,
purely from a name mismatch. Migrating templates can drag live keys into a new
repo — audit and rotate.

**Original example to invent:** Source hit this wiring a brokerage/research/notify
key set. Writers should demo the env-var setup and a name-mismatch fix on a
different API.
