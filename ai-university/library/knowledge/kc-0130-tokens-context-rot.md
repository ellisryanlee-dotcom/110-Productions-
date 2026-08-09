---
id: kc-0130
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [tokens, context-window, context-rot, compaction, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Tokens, the context window, and context rot

**What:** Models read in tokens (roughly 3–4 characters, about 0.75 of a word), and tokens cost money. The context window is the model's working memory (commonly ~200K tokens at time of recording) holding the system prompt, tools, project files, MCP servers, and full conversation. As it fills, quality drops — an effect called context rot — and information in the middle gets deprioritized ("lost in the middle").

**Why it matters:** Managing context is one of the biggest levers for cost and output quality. A session that starts hallucinating usually just needs compacting or a fresh start.

**The moves:**
1. Watch usage with the context command, which breaks down what's consuming tokens (system tools, MCP servers, skills, agents, files).
2. Compact around ~60% to compress history while keeping key facts; you can target a focused compaction ("keep the API-integration decisions").
3. Clear to wipe history after finishing a task or switching topics (CLAUDE.md and files remain).
4. Rewind to step back after a change; resume to reopen an earlier session.
5. Rely on autocompact as a backstop, but don't depend on it.

**Watch out for:** MCP servers can eat large amounts of context because every tool ships a description — drop ones you're not using. Long single sessions degrade output; delegate token-heavy reading to sub-agents so the main thread stays clean.

**Original example to invent:** The source likens the context window to a notepad that fills up. Describe that abstractly and invent your own working-memory metaphor.
