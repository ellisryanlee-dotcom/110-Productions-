---
id: kc-1132
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [subagents, context-isolation, delegation, parallel, specialization]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Subagents: isolated context for delegated work

**What:** A subagent is a helper the primary agent can call. It has its own separate context window, so the full conversation history isn't dragged in — the primary agent crafts a focused prompt for it based on the subagent's description. Each subagent has a specialized system prompt, can be limited to specific tools (and even a specific model), and works autonomously. The primary can also fire off several in parallel.

**Why it matters:** Context is the scarcest resource; isolating a big task in a subagent means only a summary returns to the primary, keeping the main context clean. Specialization plus tool limits make each subagent reliable at its narrow job.

**The moves:**
1. Define subagents as markdown files (name, description, tool list, optional model).
2. Write the description carefully — it tells the primary when and how to invoke it.
3. Let the primary agent decide when to delegate based on that description.
4. Refresh the session to load new subagents.

**Watch out for:** Because only a summary returns, the primary loses visibility into the subagent's process — better for research than for implementation you need to track. New subagents require a session refresh.

**Original example to invent:** Source shows a validation-gates subagent. Define a different specialized subagent (e.g., a dependency-auditor) with its own description and tools.
