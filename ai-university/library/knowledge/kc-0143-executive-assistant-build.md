---
id: kc-0143
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [executive-assistant, context-files, skills, second-brain, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Building a personal executive assistant

**What:** A persistent "second brain" built in an agentic coding tool that knows your business, priorities, team, and decisions, and can act — plan your day, run a team pulse check, research, and create assets — often several agents in parallel. It's built in four phases: give it a home (structure), give it life (context), give it hands (skills/sub-agents), and let it grow.

**Why it matters:** Unlike a generic chatbot where you re-explain context, an assistant grounded in your files gets you 90% (not 50%) of the way there, saves repeated context, and compounds — the more you use it, the smarter it gets. It also teaches the frameworks (context management, memory) you can then sell.

**The moves:**
1. Home: open a project, create CLAUDE.md, and let a setup prompt build a folder structure (context, projects, decisions, references, templates, .claude).
2. Life: answer an interview so it writes files about you, your work, team, and current priorities; route CLAUDE.md to them to save tokens.
3. Hands: build skills (e.g., a research skill using a web API) and sub-agents (e.g., a cheaper Haiku researcher); use YAML front matter so they trigger well.
4. Growth: use it daily instead of web chatbots, migrate your custom prompts into skills, and give feedback each run.
5. Optionally push to GitHub for backup, version control, and cross-device access.

**Watch out for:** Keep it plugged into live sources (project management, calendar) so it reasons on current data, not just the onboarding snapshot. Tell it to remember durable preferences so they persist.

**Original example to invent:** The source demos morning-planning, team pulse-check, and content skills for a creator. Design an assistant for a different role (e.g., a sales lead) with its own context files and skills.
