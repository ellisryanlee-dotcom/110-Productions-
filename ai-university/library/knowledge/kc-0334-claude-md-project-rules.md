---
id: kc-0334
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, claude-md, project-config, system-prompt, context]
source_video: [86HM0RUWhCk, 6MC1XqZSltw, sboNwYmH3AY]
source_channel: "@nateherk"
source_views: "528K"
confidence: high
---
# CLAUDE.md as the always-read project instructions file

**What:** CLAUDE.md is a markdown file Claude Code reads before doing anything in a
project — effectively a project-level system prompt. You put the durable rules,
conventions, and end-goal there so every action in that project starts from the
same instructions. It's used across many workflows: web-build rules, memory/wiki
paths, deploy conventions, agent identity.

**Why it matters:** It's the single lever for steering an agent's behavior
consistently across sessions. Because it's read every time, a tight CLAUDE.md
enforces standards without you repeating yourself each prompt.

**The moves:**
1. Put project rules, workflows, and the end-goal in CLAUDE.md using markdown
   structure (headers, bullets) so the agent parses hierarchy.
2. Keep it concise — don't bloat it with context; it's read on every turn.
3. Encode "always do X before Y" rules here (e.g., always invoke a given skill
   before writing front-end code; always test on localhost until told to deploy).
4. Expect to iterate on it throughout a project — update it, or have the agent
   update it, as your process and end-goal clarify.

**Watch out for:** Over-stuffing CLAUDE.md wastes context every turn. If you don't
yet know your full process, start without it and add rules as they stabilize.
Wording matters — vague rules produce inconsistent behavior (e.g., an over-eager
screenshot rule).

**Original example to invent:** Sources used CLAUDE.md for web builds, wiki access,
and a trading bot. Writers should show a CLAUDE.md for a different project type.
