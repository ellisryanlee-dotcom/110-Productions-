---
id: kc-0216
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [sub-agents, delegation, context-management, tokens]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: high
---
# Delegating to sub-agents to protect the main context window

**What:** Inside a skill or task, the main agent can hand a heavy, token-expensive
sub-task (like searching and parsing a large data source) to a specialized sub-agent.
The sub-agent does the noisy work in its own context and returns only the distilled
result the main agent needs.

**Why it matters:** Searching and parsing large sources burns tokens and clutters the
main context window, degrading quality over a long session. Offloading that to a
sub-agent keeps the coordinator's context clean and focused, which improves both
reliability and cost.

**The moves:**
1. Identify steps that consume lots of tokens or return bulky intermediate data.
2. Create a specialized sub-agent scoped to that sub-task.
3. In the skill, instruct the main agent to delegate that step with a specific query.
4. Have the sub-agent return only the finished/summarized answer.
5. Keep the main agent as the coordinator that assembles final output.

**Watch out for:** This is an advanced context-management technique — worth it mainly
for genuinely heavy sub-tasks. Pair it with hardcoding stable values into the skill
so neither agent re-discovers them each run.

**Original example to invent:** Source delegated task-manager searches to a dedicated
"searcher" sub-agent inside a status-check skill. Writers should show delegation for a
different heavy sub-task (e.g., scraping and summarizing a long document).
