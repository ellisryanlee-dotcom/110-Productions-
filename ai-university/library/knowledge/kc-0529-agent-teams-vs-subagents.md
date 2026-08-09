---
id: kc-0529
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, sub-agents, orchestration, multi-agent]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# Agent teams vs. sub-agents: shared task list and peer messaging

**What:** Agent teams are a multi-agent pattern distinct from sub-agents. With **sub-agents**, each specialist works independently and returns a single result to the main session; they can't talk to each other. With **agent teams**, a lead/orchestrator agent spawns several teammates that share a task list *and can message each other directly*, working in parallel and looping (e.g., a QA teammate sends work back to a developer teammate until it passes).

**Why it matters:** The direct peer communication and shared task list are the big unlock — teammates can resolve dependencies between themselves and hold each other to quality without routing everything through the main session. This produces higher-quality output on complex, multi-area work than a single agent or isolated sub-agents.

**The moves:**
1. Recognize the structure: a team lead (project-manager-like) creates the teammates, maintains a shared task list, and ensures tasks get done well.
2. Use teams when work has interdependent parts that benefit from back-and-forth (e.g., front-end and back-end handing to a QA reviewer that kicks work back).
3. Use sub-agents instead when work is independent and just needs isolated results returned.

**Watch out for:** Teams are slower and more expensive than a single session because multiple agents run at once (roughly N× the cost for N agents). Reserve them for genuinely complex, parallel, communication-heavy work. This feature is experimental/off by default.

**Original example to invent:** The source demos a front-end/back-end/QA team building a landing page. Writers should invent a different team composition (e.g., a research/writer/fact-checker trio) to illustrate peer messaging and the QA loop.
