---
id: kc-0621
type: concept
track: "Track 2 — AI Agents Core"
topics: [sub-agents, delegation, research, multi-agent, orchestration]
source_video: [eu8UJtuIi-E, HJ-dwefABss]
source_channel: "@nateherk"
source_views: ["248K", "244K"]
confidence: high
---
# Spin up a team of sub-agents to divide research and work

**What:** Rather than one agent doing everything, you can instruct a lead agent to
spawn a team of specialized sub-agents that work in parallel — each researching,
analyzing, or owning a slice — then coordinate their findings into a decision or plan.
This ranges from an informal "spin up a set of advisor sub-agents to research and
propose a strategy" prompt to a formal org chart where a coordinator hires role-based
agents (engineer, QA, designer) that each carry their own scope.

**Why it matters:** Dividing work across focused sub-agents keeps each one's job
narrow, parallelizes research, and mirrors how a real team operates. The coordinator
holds the goal while specialists handle depth, which scales better than overloading a
single agent with every responsibility.

**The moves:**
1. Give a lead/coordinator agent a goal and the authority to create sub-agents.
2. Have each sub-agent own one domain or task with its own scope and tools.
3. Let them work in parallel and report back; the coordinator synthesizes.
4. For durable setups, define the roles explicitly (who reports to whom, what each
   can do) rather than relying on an ad-hoc spawn.

**Watch out for:** More sub-agents means more cost and more surface for error and
non-determinism — parallel autonomy compounds mistakes as well as output. Scope each
agent tightly so the coordinator isn't synthesizing garbage.

**Original example to invent:** Sources used a team of "wealth advisor" sub-agents and
a hire-your-own-team company. Writers should invent a different sub-agent team (e.g.,
a coordinator spinning up market, competitor, and pricing researchers for a report).
