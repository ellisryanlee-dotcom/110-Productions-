---
id: kc-0102
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, system-prompt, context-management, project-structure, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Keeping claude.md lean and routing to other files

**What:** claude.md is a markdown file Claude Code reads in full before processing every message in a project — functionally a persistent system prompt. Because it's reloaded every turn, its size directly taxes the token budget of every single interaction, so the practiced approach is to keep it short and have it point ("route") to other files for anything not needed on every turn.

**Why it matters:** A bloated claude.md silently costs tokens on every message for the life of the project, and a vague one produces vague, generic output. Treating it as a lean table of contents rather than a knowledge dump keeps sessions cheap while still giving the agent a path to everything it might need.

**The moves:**
1. Keep claude.md under roughly 150–200 lines; cover only what/why/how — text stack and structure, purpose of each component, and behavioral rules that must apply on literally every turn.
2. Move anything else (business context, style guides, API references, per-project details) into separate files, and add one line in claude.md pointing to each ("for X, read Y") — this is the routing pattern.
3. Use the built-in init command to auto-generate a first draft from an existing codebase/folder, or dictate the project's purpose and let the agent draft it from scratch.
4. Treat it as a living document: after any session where the agent had to be corrected on something durable (a formatting rule, a recurring mistake, a newly built skill), have the agent add that lesson to claude.md or to a routed file.
5. Periodically re-read and compact it — remove anything that turned out unnecessary or that can be routed out to a reference file instead.

**Watch out for:** It's tempting to keep appending fixes directly into claude.md forever; without periodic pruning/routing it creeps back to the token-heavy state you were trying to avoid. Also, project-level claude.md is separate from a personal/global config directory — a rule you want in literally every project belongs in the global location, not repeated in each project's file.

**Original example to invent:** The source shows this pattern applied to a personal executive-assistant project and to a website-building project. Writers should invent a different project type (e.g., a customer-support triage project) and design its own claude.md/routing split.
