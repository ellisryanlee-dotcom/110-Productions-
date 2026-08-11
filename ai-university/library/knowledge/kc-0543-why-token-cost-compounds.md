---
id: kc-0543
type: concept
track: "Track 9 — Reliability & Craft"
topics: [tokens, context-window, cost-model, overhead]
source_video: 49V-5Ock8LU
source_channel: "@nateherk"
source_views: "268K"
confidence: high
---
# Why coding-agent token cost compounds (and where the invisible spend hides)

**What:** Tokens are the tiny chunks a model splits text into — the unit it both reads and bills by (each roughly one word, imperfectly). The key mechanic: on every message, the agent re-reads the *entire* conversation from the beginning. So cost isn't additive, it compounds — an early message might be cheap, but a much later message costs far more because it re-processes everything before it. On top of your messages, the agent reloads the instruction file, MCP tool definitions, system prompt, skills, and open files every turn — invisible overhead that drips constantly.

**Why it matters:** Understanding this reverse-engineers every token-saving habit. It explains why long sessions get expensive fast, why a bloated instruction file or idle MCP server bleeds money, and why "I need a bigger plan" is usually really "I need better context hygiene." One tracked long chat reportedly spent ~98.5% of its tokens just re-reading old history.

**The moves:**
1. Internalize that each message re-reads all prior turns — later messages are dramatically more expensive than the same message sent fresh.
2. Account for per-turn overhead: instruction file, MCP definitions, system prompt, skills, and loaded files all reload every message.
3. Treat context as a budget you actively manage, not something that just grows.
4. Reframe limit problems as context-hygiene problems first.

**Watch out for:** The overhead is invisible in the UI (a shell command's full output silently enters context; an MCP server silently adds thousands of tokens per message). Bloated context doesn't only cost more — it can *lower* quality (see the lost-in-the-middle card).

**Original example to invent:** The source cites a ~100-message chat where nearly all tokens were re-reads. Writers should invent their own worked illustration of compounding cost (with different numbers) to make the point.
