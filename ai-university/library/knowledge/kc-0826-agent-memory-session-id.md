---
id: kc-0826
type: concept
track: "Track 2 — AI Agents Core"
topics: [memory, session-id, n8n, conversation-history, context]
source_video: KUvSzvFeZls
source_channel: "@nateherk"
source_views: "208K"
confidence: high
---
# Keying agent memory by session or user ID in n8n

**What:** Giving an agent short-term conversation memory by attaching a memory node
and defining a key (a session or user identifier) so the history is separated per
user/conversation, along with a window setting for how many past interactions to keep.

**Why it matters:** Without a defined key, memory has nothing to scope by; with the
wrong key, different users' conversations bleed together. A per-user key keeps each
conversation coherent so the agent can reference what was just said.

**The moves:**
1. Add the memory node under the agent.
2. Change the session key from the default (which expects a chat trigger) to "define
   below," then map an identifier from your trigger (e.g., a value from the webhook)
   as the key.
3. Set the window length — how many recent interactions the agent recalls before
   acting.
4. Verify the running chat history updates as the agent takes actions.

**Watch out for:** The identifier you pick determines the granularity of memory —
choose something that actually distinguishes conversations/users, not a value shared
across everyone. A short window means older context drops off.

**Original example to invent:** Use a different identifier/source for the memory key
than the source's example.
