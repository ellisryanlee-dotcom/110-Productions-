---
id: kc-0322
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-memory, files, state, claude-code, autonomous-agents]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: high
---
# The read-work-write file-memory loop for stateless agents

**What:** A scheduled agent wakes with no memory of prior runs. You give it
continuity with files: every run reads its memory/context files first to
re-orient, does its job, then writes back any lessons or state the next run needs.
Files aren't just storage — they hold the agent's rules, discipline, and effectively
its personality across otherwise disconnected sessions.

**Why it matters:** This is how you make a stateless, autonomous agent behave
consistently and improve over time. Without the write-back step, each run repeats
mistakes; with it, the system accumulates hard-won lessons.

**The moves:**
1. Design a small set of persistent files (strategy/rules, an activity/decision
   log, current-state snapshot, research notes).
2. Every run's prompt: read the memory files before doing anything.
3. Do the task using that context.
4. Before finishing, write back what changed and what the next run must know.
5. Keep the project-instructions file authoritative about the agent's identity and
   rules so behavior is stable.

**Watch out for:** Reading files costs tokens, so keep memory lean and structured
(see the context-budget card). If runs execute in an ephemeral cloud environment,
the write-back must be committed to persistent storage or it's lost (see local-vs-
remote routines).

**Original example to invent:** Source used trade log / strategy / review files.
Writers should design a memory-file set for a different recurring agent.
