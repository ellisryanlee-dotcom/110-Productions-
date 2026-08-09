---
id: kc-0401
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [claude-code, context-window, tokens, context-rot]
source_video: [jqoFP9QapXI, tDGiWn0flK8]
source_channel: "@nateherk"
source_views: ["415K", "262K"]
confidence: high
---
# Actively manage the context budget

**What:** A set of habits for keeping a coding agent's context window small and clean so quality does not degrade ("context rot") as a session grows.

**Why it matters:** The more noise in the window, the worse the agent performs. Diagnosing and trimming context keeps outputs sharp and costs down.

**The moves:**
1. Feed only what the current task needs; break big problems into small, focused steps rather than dumping the whole codebase.
2. Use the context-inspection command to see, as percentages, what is consuming tokens (system prompt, file contents, connected tool servers) and restructure the biggest offenders.
3. When the window fills to around the 60% mark, compact the conversation to compress history — and you can instruct the compaction to preserve specific things (e.g., API decisions, schema).
4. When switching to an unrelated task, clear the conversation entirely; project memory files persist, so you are not starting from zero.
5. If the agent heads the wrong way, interrupt immediately and re-prompt rather than letting it burn tokens down a dead end.
6. Add a status line showing model, remaining context, and cost so you can watch the budget live.

**Watch out for:** Clearing wipes conversational context but not your memory files — know the difference before you clear mid-task.

**Original example to invent:** Source references a generic bloated session. Writers should build a worked example where a specific file type dominates the context and show the token drop after restructuring.
