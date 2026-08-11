---
id: kc-0134
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [project-architecture, settings, global-vs-project, gitignore, auto-memory]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Project architecture: settings, scope, and memory

**What:** An agentic coding project keeps configuration in a dedicated project directory (a .claude folder) holding settings, rules, skills, agents, and commands. Configuration exists at two scopes: project-level (lives in the repo, shared with anyone who opens it) and global/user-level (a home-directory folder marked with a leading tilde, applied across every project). Settings resolve in a hierarchy — local overrides, then project, then global — and a deny always wins.

**Why it matters:** Knowing scope and precedence is what keeps a growing project navigable for both you and the agent, lets you reuse skills/agents everywhere, and controls what's safe to run. Getting this wrong is a top source of early confusion.

**The moves:**
1. Put shared, project-specific config in the project .claude folder; put anything you want everywhere (company context, a front-end skill) at global scope.
2. Use settings files by intent: personal defaults, team-shared project settings, and local overrides.
3. Use a gitignore file to keep secrets and sensitive files out of version control (they appear greyed out; new files show green, edited files yellow).
4. Lean on auto-memory: things you tell it to remember persist across sessions in a global memory file you can edit.
5. Set permissions here — allowlist safe commands, denylist destructive ones — so unattended runs stay safe.

**Watch out for:** A missing gitignore can leak API keys to a public repo. Global vs. project confusion means a skill/agent may not appear in a given project even though it's installed.

**Original example to invent:** The source walks its own assistant's folder tree. Sketch a different project's architecture and explain what belongs at project vs. global scope.
