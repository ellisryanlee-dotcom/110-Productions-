---
id: kc-0953
type: pitfall
track: "Track 2 — AI Agents Core"
topics: [over-engineering, agent-workflows, architecture-decisions, simplicity]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: medium
---
# Don't over-engineer agentic graph workflows

**What:** Graph-based, multi-agent workflows are powerful but are the wrong tool for many jobs. The framework's own guidance warns that these setups are easy to over-engineer — reaching for heavy orchestration when a single agent or a simple linear flow would deliver the same result with far less complexity.

**Why it matters:** Complexity is a cost: more nodes, more state, more failure points, more to debug and explain. Adopting an elaborate architecture because it is impressive, rather than because the problem needs it, slows you down and makes the system fragile.

**The moves:**
1. Start with the simplest structure that could work — often one agent.
2. Escalate to a multi-agent graph only when the flow is genuinely non-deterministic with several agents that must coordinate.
3. When a simple version underperforms, first try cheaper fixes (better system prompt, better tools) before adding orchestration.
4. Weigh whether the orchestration effort is actually less than improving the simpler design.

**Watch out for:** "This is powerful" is not the same as "this is needed here." Powerful tools applied to small problems become overkill.

**Original example to invent:** The source used a build-nothing-fancy warning framed around not using an oversized tool for a small task. Writers must express the tool-fit idea abstractly and invent their own illustration of choosing simple over elaborate.
