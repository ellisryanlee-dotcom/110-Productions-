---
id: kc-0104
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [context-window, tokens, context-rot, claude-code, token-economics]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Managing the context window: tokens, context rot, and compact/clear

**What:** Every AI model has a fixed context window (working memory) measured in tokens — small chunks of roughly 3–4 characters each. Everything counts against it: the system prompt, the project's claude.md, loaded tool/skill definitions, MCP server tool descriptions, and the full conversation history. As the window fills, output quality measurably degrades before the hard limit is even reached — a phenomenon referred to as context rot — and information in the middle of a long conversation tends to get deprioritized versus the start and end.

**Why it matters:** Token usage drives both subscription-limit consumption and output quality. A session that's technically still "within budget" can already be producing worse answers well before it hits the ceiling, so managing context proactively (not just reactively) protects both cost and correctness.

**The moves:**
1. Use the built-in context-inspection command to see a live breakdown of what's consuming tokens (system prompt, tools, MCP servers, skills, memory files, conversation).
2. When a session crosses roughly the 60% mark, compress the conversation with the built-in compact command rather than waiting for an automatic compaction to kick in; compact can be told what specifically to preserve.
3. Start a fresh session (clearing history) when switching to an unrelated task, rather than carrying irrelevant history forward.
4. Remove or avoid loading tools, MCP servers, or skills that aren't actually needed for the current project — every connected tool's description is loaded into context whether or not it's used that session.
5. Offload heavy reading (long documents, large scrapes) to a sub-agent with its own separate context window instead of pulling all of it into the main session.

**Watch out for:** Running many parallel sessions makes it easy to lose track of how much context each one has consumed, increasing the chance one of them is already degraded without being noticed. Compacting/clearing loses conversational nuance even as it frees tokens, so save durable decisions to a file first if they need to survive the reset.

**Original example to invent:** The source demonstrated this while running a multi-hour scraping and content-generation session. Writers should invent a different long-running session (e.g., a multi-day research project) to illustrate the same compact/clear discipline.
