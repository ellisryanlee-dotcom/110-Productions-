---
id: kc-0013
type: concept
track: "Track 2 — AI Agents Core"
topics: [memory, session-id, multi-user, context-window, conversation-state]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Session IDs and dynamic per-conversation memory

**What:** An agent's short-term memory is scoped to whatever "session ID" value is fed into its memory module — a unique key that separates one ongoing conversation's history from every other conversation's history. When the trigger is a chat interface, that key defaults to something tied to the chat session; when the trigger is something like inbound email, the session key has to be explicitly set (e.g., to the sender's address) so each sender gets an isolated memory thread instead of all senders sharing one history. A separate "context window length" setting caps how many past turns are actually replayed to the model on each call, independent of how much history is stored.

**Why it matters:** Without a correctly-scoped session key, a multi-user-facing agent (email, chat-platform, or webhook-triggered) will either bleed one person's conversation into another's, or fail to recall anything about a specific person across multiple interactions — both break the experience of a persistent assistant.

**The moves:**
1. Identify a stable, unique-per-conversation value available at trigger time (a chat session ID, an email sender address, a phone number, a user ID) to use as the session key.
2. Set that value explicitly as the memory module's session ID whenever the trigger isn't the platform's own native chat trigger, which sets this automatically.
3. Test session isolation deliberately by manually varying the session key value mid-build and confirming each "identity" only recalls its own prior turns.
4. Tune the context-window-length setting based on how much continuity a given use case actually needs — a short window keeps cost and prompt size down for simple assistants; a longer one matters more for extended troubleshooting-style conversations.
5. For memory that needs to outlast a single session's lifetime or be queried outside the agent, back the memory module with an external relational database table instead of the platform's built-in in-memory option.

**Watch out for:** A context-window cap means the agent will eventually "forget" details from early in a long conversation even though nothing was ever explicitly deleted — this is a sliding window, not a hard memory limit, and needs to be communicated as a known constraint rather than a bug.

**Original example to invent:** Source demonstrated session isolation with two manually-swapped test identities, then with a live email-triggered agent keyed on sender address. Writers should demonstrate the same session-key concept through a different multi-user channel, such as a helpdesk chat widget keyed on visitor ID.
