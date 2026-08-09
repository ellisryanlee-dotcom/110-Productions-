---
id: kc-0112
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestrator, sub-agents, workflow-as-tool, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# The orchestrator (parent/child) multi-agent architecture

**What:** Instead of one agent owning dozens of tools, a top-level orchestrator agent's only job is to read the user's intent and delegate to specialized sub-agents (e.g., an email agent, a calendar agent, a contact agent, a content agent). Each sub-agent is a separate workflow exposed to the parent as a tool; the parent calls one or more, collects their responses, and replies.

**Why it matters:** Specialization keeps each agent's prompt short and unambiguous, allows a different (cheaper or stronger) model per task, makes debugging tractable, and yields reusable components — once you build an email agent, any workflow can call it. Cramming everything into one agent overwhelms it and its prompt.

**The moves:**
1. Build the orchestrator; give it a tight prompt: understand intent and delegate only — never do the work itself.
2. For each specialty, create a sub-workflow that starts with an "executed by another workflow" trigger and contains its own agent + tools.
3. Expose each sub-workflow to the parent as a tool with a description of when to use it.
4. Map data between them (align the field the sub-agent expects with what the parent sends).
5. Let sub-agents ask back for missing info; they can converse with the parent across calls.
6. Assign models per sub-agent by task difficulty to control cost.

**Watch out for:** Don't force this architecture where a single agent or plain workflow would do — extra hops add latency, cost, and error. The golden rule is to minimize data transfer between workflows, since that's where mappings break. Read the agent logs to see what each layer passed.

**Original example to invent:** The source's assistant delegates a blog-write-and-send plus a calendar event across four child agents. Design a different orchestrator (e.g., a travel concierge) with your own specialized sub-agents.
