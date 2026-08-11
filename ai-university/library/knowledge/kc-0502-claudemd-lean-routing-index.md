---
id: kc-0502
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, context-engineering, architecture, routing]
source_video: 8QQ_INxAhRs
source_channel: "@nateherk"
source_views: "344K"
confidence: high
---
# CLAUDE.md as a lean routing index

**What:** The project instructions file (CLAUDE.md, with equivalents for other harnesses) works best as a *router/index* rather than a dump of knowledge. It should point the agent to where rules, references, skills, other projects, and wikis live — plus a small amount of identity/goal context — so the agent can navigate to what it needs instead of everything being loaded up front.

**Why it matters:** This file is re-read at the start of every conversation (and on every message), so bloat is paid for repeatedly in tokens and can degrade output. A lean index keeps sessions cheap and keeps the agent fast at finding things. Because it's just markdown, the whole system stays portable across harnesses.

**The moves:**
1. Keep it short (a practical ceiling is around 200 lines); push large detail into separate files and reference them by name so they're only read on demand.
2. Include the essentials: identity/goal, tech stack or conventions, where the knowledge base and skills live, and hard "never do X" rules.
3. Treat it as a living index — trim continuously; it's always a work in progress.
4. Every time the agent makes a mistake, tell it to update the file so the same mistake never recurs. Over weeks this effectively trains the system on how you work.
5. A pulse check on your architecture: if the agent (or you) can't intuitively drill to a needed file quickly, the file layout — not the model — needs fixing.

**Watch out for:** A self-updating/self-learning instruction file can quietly bloat; audit it regularly and cap bullet length. Everything in it costs tokens on *every* message, even a one-word prompt.

**Original example to invent:** The source shows a creator's routing file. Writers should mock up a lean index for a different project type (e.g., a law-firm intake repo) showing routes to references vs. inline rules.
