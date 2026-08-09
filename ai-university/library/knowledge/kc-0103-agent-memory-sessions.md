---
id: kc-0103
type: concept
track: "Track 2 — AI Agents Core"
topics: [memory, session-id, context-window, postgres, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Agent memory: session IDs and the context window

**What:** An agent's short-term memory stores recent turns of a conversation so it can respond with continuity. A session ID is the unique key that separates one conversation from another — messages are grouped and retrieved per session. A context-window setting caps how many past turns are fed back in.

**Why it matters:** Session IDs let a single agent serve many users without mixing their histories: set the session key to the sender's email (for an email trigger) or chat ID (for a messaging trigger) and each person gets their own thread. The context-window cap means memory is not infinite; older turns fall out of scope.

**The moves:**
1. For a native chat, let the session ID default to the chat trigger.
2. For an external trigger (email, Slack, Telegram), set the session ID to the sender's unique identifier so histories stay separate.
3. Choose a memory store: an in-app simple memory for quick tests, or an external database (e.g., Postgres) for persistence and scale.
4. Set the context-window length to control how many recent turns the model sees per response.
5. Verify by checking the stored history table — each turn is saved as a human or AI message under its session key.

**Watch out for:** Simple/short-term memory only holds the last N interactions, not everything ever said — long-term recall requires a different mechanism (e.g., a knowledge base). Changing the session key mid-build silently switches which history the agent reads.

**Original example to invent:** The source demonstrates two personas ("person A" / "person B") toggling the session key to prove isolation. Invent your own two-user demo (e.g., two support tickets) that shows histories staying separate.
