---
id: kc-2010
type: concept
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestration, reasoning-models, tool-use]
source_video: [w0H1-b044KY, g3-c8XZi7BY]
source_channel: "@LiamOttley"
source_views: "3.6M / 1.7M"
confidence: medium
---
# Multiple tools, reasoning, and multi-agent systems

**What:** Giving an agent more tools lets it solve broader problems by breaking a request into steps and choosing tools as needed — e.g., "find companies that recently raised funding, put them in a spreadsheet with summaries, and email me the link" decomposes into web-search → create-sheet → add-rows → summarize → email. Reasoning-capable models can plan, act, reflect, and re-plan across such steps. A multi-agent system takes this further: one orchestrator/main agent treats specialized sub-agents (e.g., a research agent, a writing agent, an emailing agent) as its own tools.

**Why it matters:** Complex real-world jobs rarely map to a single tool call. Composing tools — and eventually composing whole agents — is how you build systems that mirror how a human would sequence a multi-step task, and it's the direction large tech companies are pushing toward "agent workforces."

**The moves:**
1. Decompose the target task into discrete steps.
2. Provide one tool per capability the steps require.
3. Use a reasoning-oriented model as the brain when planning/reflection is needed.
4. For large tasks, split responsibilities across specialized sub-agents and have an orchestrator call them.
5. Insert human review at critical or irreversible steps.

**Watch out for:** Multi-step autonomous execution is still unreliable — the more steps chained without supervision, the higher the failure rate. Start with human-in-the-loop and add autonomy only as reliability is proven.

**Original example to invent:** The source uses a "find funded startups → sheet → email" demo and a research/writing/emailing sub-agent team. Writers should construct a different multi-step task and a different agent team.
