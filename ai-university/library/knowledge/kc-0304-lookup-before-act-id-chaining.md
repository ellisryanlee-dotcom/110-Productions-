---
id: kc-0304
type: how-to
track: "Track 2 — AI Agents Core"
topics: [system-prompts, tool-ordering, api-ids, agent-tools, prompt-rules]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Lookup-before-act: prompting agents to fetch IDs before mutating

**What:** Most real APIs mutate records by internal ID (message ID, label ID,
event ID, contact record) — values the user never speaks. Agents must be
explicitly instructed which tools require a prior lookup call to obtain those
IDs, and in what order.

**Why it matters:** Without these rules an agent calls the action tool
directly, leaves the ID blank or invents one, and the request fails — the
single most common failure mode when giving agents real CRUD tools.

**The moves:**
1. Audit each tool: which parameters are internal IDs the user won't supply?
   (Replying in-thread, labeling, marking unread, updating/deleting events all
   need one; labeling needs two — message ID *and* label ID.)
2. In the system prompt, attach an explicit prerequisite to each such tool:
   use the listing/get tool first, then feed the returned ID into the action
   tool.
3. Apply the same rule across agents: resolve a person to an address via the
   contact store before emailing or inviting them.
4. Scope lookup tools tightly (e.g., fetch only the most recent message from a
   named sender, matching on display name or address) so the right record
   comes back.
5. Verify in execution logs that the chain ran lookup → act, with the ID
   actually flowing between tools.

**Watch out for:** Every prerequisite lookup is an extra model round-trip, so
chained actions run noticeably slower. Prompts should also state defaults for
unstated values so the agent doesn't stall (e.g., assume a standard duration
when no end time is given).

**Original example to invent:** Source demoed in-thread email reply and
priority-labeling requiring get-messages/get-labels first. Writers should use
a different ID-chained scenario (e.g., updating a task's status in a project
tool, which needs a task-ID lookup first).
