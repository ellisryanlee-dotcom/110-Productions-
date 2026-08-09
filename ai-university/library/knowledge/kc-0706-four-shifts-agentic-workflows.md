---
id: kc-0706
type: framework
track: "Track 2 — AI Agents Core"
topics: [agentic-workflows, self-healing, natural-language, multi-agent, mcp]
source_video: [AO5aW01DKHo, B6k_vAjndMo]
source_channel: "@nateherk"
source_views: "237K / 222K"
confidence: medium
---
# The four shifts of agentic workflows

**What:** Four capabilities that separate agentic building from traditional
workflow building. (1) *Self-healing* — when something breaks, the agent reads
the error, tries a fix, re-runs, and updates its own code/instructions so the
mistake doesn't recur, calling you in only when truly stuck. (2) *Natural-language
control* — the agent interviews you before writing anything, then natural language
becomes the ongoing "remote control" to make it faster, cheaper, add a review
step, or log outputs. (3) *Parallel agents* — spin up several agents to attempt
different approaches at once, then test which is cheapest/fastest/best. (4)
*Instant API & MCP integration* — you name the tool and hand over API keys; the
agent reads docs (or uses an MCP) and handles retries, rate limits, pagination,
and webhooks in code.

**Why it matters:** Together these remove the slow, brittle parts of traditional
automation — the debug loop, the doc-reading, the auth wrangling — and let you
spend energy on *what* should happen instead of *how* to configure it.

**The moves:**
1. Let the agent own the run→error→fix→re-run loop; you approve changes.
2. Answer the agent's interview fully before it builds.
3. Fan work out to multiple agents when the best approach is unclear, then
   stress-test the results.
4. Provide keys and tool names; let the agent research the integration.
5. Set guardrails in plain language ("never send X to third parties"; "stop if
   spend exceeds $N").

**Watch out for:** Self-healing still needs human approval on edits; parallel
attempts cost more; guardrails only hold if you state what must never happen.

**Original example to invent:** Narrate one build where all four shifts show up
in sequence, using a scenario the source didn't use.
