---
id: kc-0015
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestration, delegation, subworkflows, system-prompts]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Orchestrator agent delegating to sub-workflow agents

**What:** A pattern for splitting one overloaded agent into a thin "orchestrator" plus several specialized sub-agents, each implemented as its own separate n8n workflow that only accepts calls from a dedicated "executed by another workflow" trigger. The orchestrator's only tool-calling targets are these triggers, wrapped as callable sub-workflow tools; its system prompt explicitly forbids it from doing any of the actual work itself (drafting, summarizing) and instructs it only to route the request to the correct sub-agent.

**Why it matters:** A single agent holding every tool for every domain (email plus calendar plus contacts plus content, and so on) needs an equally large, hard-to-maintain prompt and is prone to picking the wrong tool; splitting by responsibility keeps each prompt small and each sub-agent's tool set unambiguous, while still presenting one coherent assistant to the end user.

**The moves:**
1. Build each specialist as its own workflow starting with n8n's "executed by another workflow" trigger, and give that trigger's incoming query its own agent, brain, and, if that specialist needs it, its own tools and short-term memory.
2. In the orchestrator workflow, add a "call sub-workflow as a tool" node per specialist, pointing it at the correct sub-workflow and writing a short description of exactly when to use it.
3. Write the orchestrator's system prompt as a pure router: state plainly that its only job is delegating to the correct tool, and explicitly prohibit it from writing content, composing messages, or summarizing on its own.
4. During development, edit a sub-workflow's incoming test query directly (mock data) so each specialist can be debugged in isolation without re-running the full orchestrator conversation every time.
5. Give a specialist its own action tools, not just a "draft the message" ability, whenever its job includes actually completing the task — a specialist that can only compose a message but not send it will loop with the orchestrator, each one assuming the other will finish the job.

**Watch out for:** If a specialist can't complete its assigned action end to end, the orchestrator and the specialist can get stuck in a back-and-forth loop where each returns a half-finished result to the other. When a sub-workflow's trigger is left on "accept all data" instead of specific named fields, its receiving agent has to be pointed at a generic "query" field — mismatching that field name against what the orchestrator actually sends is a common first error.

**Original example to invent:** Source built an orchestrator delegating to email, calendar, and content-drafting sub-agents over a shared contact list. Writers should build a different specialist roster, e.g., an ops orchestrator delegating to invoicing, scheduling, and inventory sub-agents.
