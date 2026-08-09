---
id: kc-0113
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, multi-agent, sub-agents, claude-code, orchestration]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Agent teams: peer-communicating teammates vs one-way sub-agents

**What:** Agent teams are an experimental Claude Code feature (must be enabled via a settings flag) that differ from sub-agents in one key way: teammates can message each other directly and share a task list, coordinated by the main session acting like a team lead, rather than only reporting back one-way to a parent. A team is spun up from a natural-language prompt that states an overall goal, lists each teammate's role/responsibility and who they should message when done, and states the final deliverables wanted; teammates inherit the main session's tool/file/MCP/permission access and start with no conversational history beyond what the spawning prompt gives them.

**Why it matters:** Some processes genuinely need peer coordination — one teammate's output feeding directly into another's ongoing work, or a reviewer sending work back for revision — which one-way sub-agent delegation can't represent naturally. Agent teams model that, at the cost of being slower and more expensive (each teammate is effectively its own paid session running in parallel).

**The moves:**
1. Reach for a team specifically when multiple specialized roles need to work in parallel *and* communicate/hand off work to each other mid-task (e.g., a builder role and a reviewer role that goes back and forth); use sub-agents instead for independent, non-communicating work.
2. Enable the feature once per project via its settings flag, then optionally have the agent pull in the official documentation as a local reference file so future team-building prompts are better informed.
3. In the spawning prompt, state the shared goal first, then each teammate's role and who they report/message to, then the exact final deliverables — vague deliverables produce disjointed results.
4. Assign each teammate its own distinct files/deliverables to avoid two teammates overwriting the same output.
5. Use around three to five teammates as a practical ceiling; more adds cost and coordination overhead without a proportional benefit.

**Watch out for:** Teammates inherit whatever permission mode the main session is in, including full-autonomy mode if that's active — supervise a first run closely. If a teammate seems idle or unassigned work, the prompt likely didn't give it a clear enough dependency or task; and a team that could instead be broken into fully sequential steps rarely needs the team feature at all.

**Original example to invent:** The source spun up a three-person front-end/back-end/QA team to build a small app. Writers should invent a different team composition (e.g., a research/synthesis/formatting team producing a report) to demonstrate the same coordination pattern.
