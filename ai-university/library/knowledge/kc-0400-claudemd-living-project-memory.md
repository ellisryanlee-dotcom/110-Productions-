---
id: kc-0400
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, context-engineering, project-memory]
source_video: [jqoFP9QapXI, tDGiWn0flK8]
source_channel: "@nateherk"
source_views: ["415K", "262K"]
confidence: high
---
# Keep a lean, living CLAUDE.md as project memory

**What:** A CLAUDE.md file is a persistent instruction sheet the coding agent loads at the start of every session. It should describe the project's architecture, conventions, and the location of key files so you never have to re-explain the project. On an existing codebase you can auto-generate it by having the agent scan the repo; on a new project you write it by stating the goal, stack, and rules.

**Why it matters:** Without it, each new session starts blind and you waste tokens and time reorienting the agent. With it, the agent is instantly contextualized and makes fewer repeat mistakes.

**The moves:**
1. Generate the file from an existing repo scan, or draft it by describing goal, tech stack, and folder/file rules.
2. After each session, append newly discovered patterns, gotchas, and conventions so the agent gets smarter over time.
3. Treat it as a system prompt loaded into every conversation — so cap it (roughly a couple hundred lines) and trim aggressively when it bloats.
4. Instead of stuffing everything inline, keep it lean and have it point to separate files (style guides, business context, reference docs) so the agent knows where to look without carrying that weight in every session.

**Watch out for:** Bloat is the enemy — every line eats the context window on every turn. The file should hold pointers and durable facts, not volatile per-project status.

**Original example to invent:** Source shows a generic project init. Writers should demo a concrete repo (e.g., a small SaaS billing service) and show a before/after of a bloated vs. routed memory file.
