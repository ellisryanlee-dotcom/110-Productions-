---
id: kc-0127
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, system-prompt, context-management, routing, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# CLAUDE.md: the project system prompt (and routing)

**What:** A CLAUDE.md file is the system prompt for an agentic coding project — a markdown file the agent reads in full before every message you send. It should carry only the essentials: what the project is and its stack, the why of each component, and how you want the agent to work. Because it loads every turn, keep it lean (a common target is well under ~200 lines).

**Why it matters:** A bloated system prompt burns context on every message. Routing solves this: rather than stuffing all business/personal/reference detail inside, CLAUDE.md points to other files ("if you need X, read this file"), functioning as an index so the agent knows where everything lives without paying for it constantly.

**The moves:**
1. Create CLAUDE.md and state the project's purpose, stack, key packages/skills, and working rules.
2. Be specific ("use two-space indentation" beats "format it nicely").
3. Route detail out to dedicated files (rules, references, per-project docs) and link to them.
4. Use the init command to auto-generate one by scanning an existing codebase.
5. Treat it as a living document — update it as you discover patterns, gotchas, and new skills.

**Watch out for:** Don't let it grow unbounded; trim and route. It's a "know where everything is" file, not a "know everything" file.

**Original example to invent:** The source likens onboarding the agent to giving a new hire job instructions. Describe that idea abstractly and invent your own onboarding framing.
