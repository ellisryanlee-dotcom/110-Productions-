---
id: kc-1123
type: claim
track: "Track 4 — Claude Code & Dev Agents"
topics: [skills, generalist-agent, progressive-disclosure, subagents, specialization]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# One generalist agent plus skills beats many specialists

**What:** Rather than building elaborate multi-agent systems with many hand-crafted specialist sub-agents, keep a single lightweight generalist agent and make it specialize on demand by loading skills (packaged workflows). Through progressive disclosure, the same session becomes a code reviewer, a planner, etc., only when that skill is loaded.

**Why it matters:** The industry is moving away from complicated specialist-swarm architectures. Skills let one agent flex into whatever role is needed via dynamic context, keeping the system simpler, cheaper, and easier to maintain — you don't need a zoo of sub-agents to get specialized behavior.

**The moves:**
1. Default to one generalist agent for most work.
2. Author skills (workflows) for planning, review, specific conventions, etc.
3. Load the relevant skill when the task calls for that specialization.
4. Reserve heavier multi-agent setups for cases that truly need coordination.

**Watch out for:** Over-building specialist sub-agents adds complexity without proportional benefit. Skills only help if the agent reliably loads them at the right time (see static vs dynamic context).

**Original example to invent:** Source echoes a vendor's progressive-disclosure argument. Show one generalist agent taking on two different roles via skills in a domain of your choice.
