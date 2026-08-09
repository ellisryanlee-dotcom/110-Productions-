---
id: kc-0304
type: pitfall
track: "Track 2 — AI Agents Core"
topics: [tool-design, api-ids, agent-design, dependencies]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Tools that need an ID first: the get-before-act chain

**What:** Many write actions against an API require an internal ID the user never
knows — a message ID to reply/label an email, a label ID to apply a label, an
event ID to update or delete a calendar entry. The agent can't act until it first
runs a "get" call to fetch that ID, then feeds it into the write call.

**Why it matters:** If you only give the agent the write tool, it fails silently or
guesses, because it has no way to produce the required ID. Recognizing which
actions are ID-dependent is what makes multi-step tool use actually work.

**The moves:**
1. For each write tool, note which parameters are opaque IDs the user won't supply.
2. Give the agent the matching "get" tools (get emails, get labels, get events).
3. In the tool description or system prompt, spell out the required order: fetch
   the item to obtain its ID, then call the write tool with that ID.
4. Chain multiple gets when a single action needs several IDs (e.g., labeling an
   email needs both a message ID and a label ID).

**Watch out for:** The agent must be told the ordering explicitly; it will not
reliably infer "get first" on its own. A sender field in a "get" call may accept
either a display name or an email address — both can resolve the same record.

**Original example to invent:** Source used Gmail message/label IDs. Writers should
illustrate with a different ID-gated API (e.g., a Notion page ID before updating).
