---
id: kc-0302
type: how-to
track: "Track 2 — AI Agents Core"
topics: [n8n, workflows-as-tools, sub-workflows, agent-tools]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Exposing an n8n workflow as a callable agent tool

**What:** n8n agents can call other workflows as tools. The child workflow
starts with an execute-workflow trigger, receives the parent agent's query,
does its work, and whatever its last executed node outputs is returned to the
parent as the tool response.

**Why it matters:** This is the wiring that makes agent teams possible: instead
of piling every integration into one canvas, each capability lives in its own
workflow and the parent just hands off a natural-language query. It also gives
each capability an independently testable, reusable unit.

**The moves:**
1. On the parent agent, add a tool of the call-workflow type.
2. Name the tool exactly as the system prompt refers to it (a consistent
   convention like camelCase helps), and write a short when-to-call description.
3. Select the target workflow from the instance's workflow list.
4. In the child, start with the execute-workflow trigger and capture the
   incoming query field.
5. End the child with a node that holds the reply text — a set node works —
   because the parent reads the **last executed node** as the response.
6. To develop the child standalone, pin a realistic sample query on its trigger
   so you don't need the parent to fire it each test.

**Watch out for:** Older n8n versions required a specifically named response
field; current versions read the last node instead — if your final node holds
intermediate data rather than the intended message, the parent receives junk.
Make sure the child returns something meaningful on every path.

**Original example to invent:** Source demoed an email-agent child workflow
called by an assistant. Writers should demo a different child capability
(e.g., an inventory-lookup or ticket-triage workflow called as a tool).
