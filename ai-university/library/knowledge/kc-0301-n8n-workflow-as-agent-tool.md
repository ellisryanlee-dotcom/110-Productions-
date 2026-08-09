---
id: kc-0301
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, sub-workflow, tools, agent-design, orchestration]
source_video: [9FuNtfsnRNo, ldETapkr8Hg]
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Exposing an n8n workflow as a callable agent tool

**What:** n8n lets one agent call another whole workflow as if it were a single
tool. You add a "call workflow as tool" node to the calling agent, point it at the
target workflow, and the target runs, then returns its final node's output back to
the caller. This is the mechanism that makes sub-agents (or tool-workflows)
possible.

**Why it matters:** It turns any workflow into a reusable, named capability. The
calling agent stays simple; the heavy logic lives in separate workflows you can
build, test, and reuse independently.

**The moves:**
1. In the calling agent, add the "call n8n workflow as a tool" node and give the
   tool a name — this exact name is what the agent looks for, so match it to how
   you referenced it in the system prompt (camelCase kept consistent).
2. Write a tool description telling the agent when to fire it (e.g., "use for
   email actions").
3. Select the target workflow from the dropdown (by stored workflow, not raw
   JSON).
4. Start the target workflow with an "executed by another workflow" trigger; on
   that trigger define exactly which input fields you accept rather than "accept
   all data."
5. Whatever node is last in the target is where the caller reads the response, so
   end with a node that returns a clear result string.

**Watch out for:** The tool name in the node must match the name used in the
prompt or the agent won't call it. A stale habit is forcing the final node to be
named "response"; newer n8n just reads the last node, so that naming is no longer
required.

**Original example to invent:** Source wired an "email agent" workflow as a tool.
Writers should demo a different callable workflow (e.g., an "invoice agent").
