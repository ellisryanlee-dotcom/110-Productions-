---
id: kc-1223
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, hooks, session-start, pre-compact, memory, context]
source_video: 1FiER-40zng
source_channel: "@ColeMedin"
source_views: "108K"
confidence: high
---
# Claude Code hooks for memory persistence

**What:** Claude Code hooks let you run logic automatically at lifecycle events, which is how you wire a persistent memory loop. A session-start hook loads the core memory files (personality, user, memory) into context at the beginning of every session. A pre-compact hook (and a session-end hook) saves the current conversation into the daily log before context is compacted or the session ends, so nothing is lost.

**Why it matters:** Without automatic load/save, memory only works if you remember to do it by hand. Hooks make context persistence deterministic: every session starts already knowing you, and every conversation is captured for later distillation — the mechanism behind an agent that learns continuously.

**The moves:**
1. Add a session-start hook that reads the core memory markdown files into the agent's context up front.
2. Add a pre-compact hook that writes the ongoing conversation to the daily log before compaction discards it.
3. Add an equivalent save on session end (you're not always compacting), so every conversation reaches the log.
4. Feed those logs into the separate daily reflection/promotion process that updates long-term memory.

**Watch out for:** Cover both compaction *and* normal session end — relying on only one loses conversations that finish without compacting. The save-then-distill split (log everything now, promote what matters later) is what keeps always-loaded memory small.

**Original example to invent:** Demonstrate a session that loads prior memory on start and appends its transcript to a log on exit — using an invented workflow.
