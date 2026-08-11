---
id: kc-1127
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, global-rules, system-prompt, nested-config, team-sharing]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Lean CLAUDE.md global rules — reference, don't inline

**What:** The global-rules file is the system prompt you craft for a coding agent — best practices and patterns it should follow, loaded automatically. You can create it via a built-in init command or hand-write it for tighter control. A pro pattern: keep it lean and reference external files (patterns, business docs) instead of pasting everything in. You can also place rules files at multiple levels (e.g., a frontend and a backend copy); the agent knows to consult the nearest one when working in that folder.

**Why it matters:** A bloated rules file wastes context every session. Referencing external docs keeps the rules small, makes them easy to share across a team, and eases switching between different coding assistants (each has some notion of global/steering rules).

**The moves:**
1. Author the rules deliberately; treat them as your highest-level instructions.
2. Keep them short; point to external pattern/business files rather than inlining.
3. Use per-folder rules files for area-specific context.
4. Reuse the same referenced docs across tools and teammates.

**Watch out for:** Nested rules files aren't all force-loaded — the agent looks at the relevant one for where it's operating. Overstuffing the top-level file both costs context and buries the important rules.

**Original example to invent:** Source shows a Python rules template. Write a lean rules file for a different stack that references external docs, in your own words.
