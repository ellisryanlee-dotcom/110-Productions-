---
id: kc-0544
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [tokens, clear, mcp, batching, visibility]
source_video: 49V-5Ock8LU
source_channel: "@nateherk"
source_views: "268K"
confidence: high
---
# Tier-one token hygiene: the easy habits that extend your session

**What:** A set of low-effort habits that immediately cut token waste in a coding agent: clear between unrelated tasks, disconnect unused MCP servers, batch prompts, plan before executing, make usage visible, paste selectively, and watch the agent work.

**Why it matters:** These require no advanced setup and address the biggest sources of waste. Because each message re-reads all prior context, starting fresh and trimming overhead is the single most effective lever on how long a session lasts.

**The moves:**
1. **Start fresh** — use the clear command between unrelated tasks so topic A's history doesn't ride along into topic B.
2. **Disconnect MCP servers** you don't need this session (each can add thousands of tokens per message); prefer a CLI when one exists.
3. **Batch prompts** — combine multi-step instructions into one message rather than three; if the result is slightly off, edit and regenerate the original instead of stacking a correction (follow-ups persist in history, edits replace the bad exchange). Note the trade-off: one focused task at a time can sometimes yield higher quality — judge per use case.
4. **Plan mode first** to avoid the biggest waste: going down the wrong path and scrapping work.
5. **Make it visible** — run the context command (what's eating tokens now) and the cost command (usage/spend this session); set up a status-line and keep your usage dashboard open to pace yourself.
6. **Paste selectively** — feed only the section/function the agent actually needs, not whole documents.
7. **Watch it work** — don't fire and forget; if it loops or rereads the same files, stop it (in a bad loop most tokens produce zero value).

**Watch out for:** A completely fresh session can already start tens of thousands of tokens down due to system prompt, tools, custom agents, skills, and memory files — so overhead exists before you type. Editing-and-regenerating beats stacking corrections, but batching everything can occasionally reduce output quality versus focused single tasks.

**Original example to invent:** The source shows a fresh-session context screenshot. Writers should invent a concrete before/after of one habit (e.g., disconnecting an unused MCP server) with their own numbers.
