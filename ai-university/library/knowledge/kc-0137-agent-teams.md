---
id: kc-0137
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, multi-agent, shared-task-list, orchestration, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Agent teams: coordinated multi-agent work

**What:** An agent team is a group of teammate agents managed by a team lead (the main session), sharing a task list. Unlike sub-agents, teammates can message each other directly and even assign each other work — a true collaborative ecosystem (e.g., a front-end dev, back-end dev, and QA agent that loops fixes back and forth). It's an experimental feature enabled via a settings flag.

**Why it matters:** For complex projects with several parallel specialties that must react to each other, team communication yields a far more cohesive result than isolated workers. The trade-off is higher cost and slower runs.

**The moves:**
1. Enable the feature by adding the flag to project settings; optionally have the agent build a local reference doc from the docs so it configures teams well.
2. Prompt in natural language: state a shared goal, then define N teammates (with a model), each one's role, deliverable, and who it messages.
3. Teammates inherit the main session's permissions and can read all project files, MCP servers, and skills; give full context since they start with none.
4. Assign each agent its own files and define outputs to avoid overwrites.
5. Use plan-approval mode so teammates plan before executing; keep to ~3–5 teammates.
6. In a T-mux terminal you can watch each agent and message them individually; on shutdown, let teammates save work rather than force-killing.

**Watch out for:** Don't use teams for sequential, single-file, or simple tasks — that's sub-agent or main-session territory. Massive swarms multiply cost. Vague deliverables or unnamed recipients break coordination.

**Original example to invent:** The source spins up a dev+QA team that iterates on a landing page. Invent a different team (e.g., research + writer + fact-checker) and describe how they'd communicate.
