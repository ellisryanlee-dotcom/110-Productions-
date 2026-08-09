---
id: kc-0136
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [sub-agents, delegation, context-isolation, model-selection, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Sub-agents: delegating isolated work

**What:** A sub-agent is a specialized worker the main session spawns to handle a task. It wakes stateless with fresh context, its own tools, and optionally its own model, does the job, and reports a result back to the main agent. Sub-agents can run in parallel but cannot talk to each other — it's a one-way relationship (main delegates, worker returns). They're defined as markdown files with YAML front matter, invoked much like skills.

**Why it matters:** Delegation preserves the main thread's context (a token-heavy investigation runs elsewhere and only a summary returns), enforces constraints (a limited-tool sub-agent for risky actions), enables reuse across projects, improves quality through specialization, and controls cost (cheap models for simple work).

**The moves:**
1. Create sub-agents with the agents command (generate from a description); choose tools, model, and memory.
2. Delegate when a task is self-contained, needs tool restrictions, or should return just a summary; stay in the main session for back-and-forth and shared context.
3. Run in foreground (blocks the chat) or background (keep working while it runs).
4. Give a token-heavy job (e.g., read a long transcript) to a Haiku sub-agent so the main Opus thread stays lean.
5. Give clear descriptions so the main agent routes to the right sub-agent; prefer tiny, single-purpose agents chained together.

**Watch out for:** Don't over-delegate simple tasks. Sub-agents can't communicate, so use them for independent work; if they need to coordinate, that's an agent team. Optional sub-agent compaction can be lowered to avoid context rot.

**Original example to invent:** The source likens delegating to ordering from a specialty maker rather than a general store. Describe that abstractly and invent your own delegation analogy.
