---
id: kc-0327
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-migration, knowledge-transfer, claude-code, brainstorming, plan-mode]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: medium
---
# Migrating an agent's accumulated knowledge to a new harness

**What:** When moving an agent from one system to another, don't retrain from
scratch — have the old agent export everything it has learned (strategy, signals,
learnings, logs, a technical cheat-sheet of the APIs it used) as files, then hand
those to the new agent and let it reorganize them into a project structure that
suits the new harness.

**Why it matters:** The accumulated context and lessons are the real asset;
recreating them is wasteful. Letting the new agent restructure the imported
material means the project is laid out the way that harness works best.

**The moves:**
1. Ask the source agent to dump its full breakdown: strategy, decision signals,
   sub-agents, key learnings, current state, and an API cheat-sheet.
2. Extract those files into the new project folder.
3. In plan/brainstorm mode, give the new agent the files as context and tell it to
   get acclimated, then propose a file/folder layout that makes sense to it.
4. Note that some imported guidance was tuned for the old harness — tell the new
   agent to take it with a grain of salt and reorganize as it sees fit.
5. When context gets heavy, ask for a session summary, clear, and resume from it.

**Watch out for:** Imported content may include live secrets — rotate them (see the
env-var card). Guidance optimized for a different harness may not transfer
verbatim; let the new agent adapt it.

**Original example to invent:** Source migrated a trading bot between agent
harnesses. Writers should show migrating a different agent's knowledge across
tools.
