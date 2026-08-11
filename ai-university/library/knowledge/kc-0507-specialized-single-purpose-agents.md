---
id: kc-0507
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [sub-agents, specialization, context-management, chaining]
source_video: 8QQ_INxAhRs
source_channel: "@nateherk"
source_views: "344K"
confidence: high
---
# Specialized, single-purpose agents beat one do-everything session

**What:** Instead of doing everything in one long conversation, split work across specialized agents that each do one thing well. Two patterns: (1) *chaining* — run one focused phase (e.g., research), clear context, and feed its output into the next phase (draft, then polish); and (2) *sub-agents* — spin up specialists (tests, security review, documentation) that each run in their own isolated context window and report back to a main session.

**Why it matters:** Cramming everything into one session causes topics to blur and invites "context rot," where a bloated window degrades quality. Isolated specialists keep each context clean — the main session's noise doesn't pollute the sub-agent, and vice versa — and you can run several in parallel to compress wall-clock time.

**The moves:**
1. Decompose a big job into focused phases or roles.
2. For sequential work, chain: capture one phase's output, clear, and hand it to the next specialist.
3. For parallelizable work, delegate to sub-agents, each in its own context window; they communicate through the main session rather than directly.
4. Route cheaper/simpler subtasks to lighter models to save cost (see model-selection guidance).

**Watch out for:** Sub-agents each spin up with their own full context, so they reload files, tools, and system prompt — making them significantly more token-expensive than a single session. Use them where isolation or parallelism is worth the cost, and shut them down cleanly to save their work.

**Original example to invent:** The source uses a research → draft → polish content chain and dev-style sub-agents. Writers should invent a different pipeline (e.g., a hiring workflow: sourcing agent → screening agent → scheduling agent) to illustrate specialization.
