---
id: kc-0237
type: framework
track: "Track 2 — AI Agents Core"
topics: [n8n, tools, multi-agent, hierarchy, reusability, scaling]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# Building workflows as tools and stacking agent hierarchies

**What:** In n8n you can build a workflow and then expose it as a tool that an agent
calls. That lets one agent call several sub-workflows (get email, send email, update
database, set calendar event), and lets a top-level agent delegate to other agents,
each specialized in one platform (an email agent, a Slack agent, a calendar agent).

**Why it matters:** Custom tools are reusable and recombinable — build a "send email"
tool once and any agent can use it. Splitting responsibilities across specialized
agents keeps each agent's tool set small, which is more accurate and scalable than one
agent holding dozens of tools. It's how you grow capability without degrading it.

**The moves:**
1. Build each task as its own workflow (e.g., summarize-database, set-calendar-event).
2. Expose those workflows as tools an agent can call.
3. Give an agent a small set of tools scoped to its domain.
4. For breadth, have a top-level agent delegate to platform-specialist agents rather
   than holding every tool itself.
5. Reuse the same tool workflows across multiple agents.

**Watch out for:** Don't overload one agent — even ~20 tools is likely too many;
prefer agents-of-agents. Decompose by task first, then compose tasks into larger
workflows. Specialized sub-agents both improve accuracy and reduce per-request
overhead.

**Original example to invent:** Source showed a personal assistant with ~7 tool
workflows and an email-agent-under-a-router pattern. Writers should design a different
tool set and hierarchy (e.g., a support router over billing/shipping specialists).
