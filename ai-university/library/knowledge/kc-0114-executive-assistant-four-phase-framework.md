---
id: kc-0114
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [personal-assistant, claude-code, project-structure, context-files, second-brain]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Four-phase framework for building a persistent Claude Code assistant

**What:** A four-phase method for turning a Claude Code project into a persistent personal/business assistant: Phase 1 gives it a home (a dedicated project folder plus a lean claude.md describing its purpose); Phase 2 gives it life (an interview-style setup, driven by a long structured prompt, that extracts and saves information about the user, their business, their team, and current priorities into separate routed files, plus a rules file for communication style); Phase 3 gives it hands (build out real skills/sub-agents for recurring tasks, e.g., a research skill connected to a search API); Phase 4 is ongoing growth (keep using it instead of ad hoc chat tools, so it accumulates more project folders, decision logs, and skills over time).

**Why it matters:** A generic AI chat tool re-explains context every session; this framework front-loads that context once into a persistent, file-based project so each new conversation starts already knowing the user's business, priorities, and preferences — closing the gap between "helps you think" and "does things for you."

**The moves:**
1. Create a dedicated folder and have the agent write an initial claude.md describing it as an assistant workspace.
2. Run a long, structured interview prompt that has the agent ask about identity/role, business/work context, team, current priorities and goals, communication preferences, and recurring tasks — saving each category to its own file (e.g., a "me" file, a "work" file, a "team" file, a "current priorities" file) rather than one giant document.
3. Have claude.md route to each of those files instead of inlining their contents, keeping the system prompt itself short.
4. Build the first real skill (commonly a research skill hitting a search API) once the context files exist, so it can filter/frame results using the saved business context automatically.
5. Log major decisions to a dedicated decisions file as they happen, and periodically ask the agent to update goals/priorities files (e.g., at the start of a new quarter).
6. Push the whole project to a private GitHub repo for backup and to allow pulling the same assistant onto a different device.

**Watch out for:** Skipping the interview and jumping straight to building skills produces an assistant with no context to draw on, defeating the purpose. As with any claude.md, letting these context files balloon without routing/trimming re-introduces the token-bloat problem on every single message.

**Original example to invent:** The source built its own personal executive assistant on camera, including a morning-planning skill and a team-status skill. Writers should invent a different persona's assistant setup (e.g., a small-agency owner's client-status assistant) using the same four phases.
