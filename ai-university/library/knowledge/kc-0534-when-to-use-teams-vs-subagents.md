---
id: kc-0534
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, sub-agents, decision-criteria, cost]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# When to use an agent team vs. sub-agents (or neither)

**What:** A decision guide for choosing multi-agent patterns. Use an **agent team** when the work has multiple distinct areas needing specialists, must happen in parallel, requires the agents to react to and message each other, and demands high quality with many checking steps. Use **sub-agents** (or a single session) when work is sequential, needs one shared context/history, touches the same files, is simple, or doesn't need inter-agent communication.

**Why it matters:** Agent teams are slow and expensive (roughly N× cost for N parallel agents), so using them for the wrong job wastes tokens. Matching the pattern to the work gets the quality benefit only where it's worth paying for.

**The moves:**
1. Reach for a **team** when: the project has several specialized areas; tasks run in parallel; agents must assign/react/communicate; quality needs many verification passes.
2. Reach for **sub-agents** when: steps are sequential and dependent; you need a focused result; you want to save tokens; no inter-agent talk is required.
3. Keep a single session when: everything must live in one context window, you're editing the same files, or the task is simple.
4. Practically, stay around two-to-five agents max and shut them down cleanly.

**Watch out for:** Sequential, dependent steps don't justify a team — that's a sub-agent or single-session job. Oversized teams multiply cost. If you catch a team member going down the wrong path early, stop it rather than letting it burn tokens.

**Original example to invent:** The source contrasts a parallel dev team against sequential work. Writers should invent two side-by-side tasks — one that clearly warrants a team, one that clearly doesn't — and justify each choice.
