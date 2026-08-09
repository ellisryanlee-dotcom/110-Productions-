---
id: kc-0810
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, invocation, global-skills, scope]
source_video: zKBPwDpBfhs
source_channel: "@nateherk"
source_views: "215K"
confidence: high
---
# Skill invocation modes and scope

**What:** The two ways a skill fires (an explicit slash command by name, or natural
language that the agent matches to a skill) and the two places a skill can live
(scoped to a single project, or installed globally so it's available everywhere).

**Why it matters:** Controlling how and where a skill is available prevents both
missed triggers and unwanted ones, and lets you decide whether a capability
belongs to one project or to all your work.

**The moves:**
1. Trigger explicitly with a slash command when you want a specific skill for
   certain.
2. Or phrase a natural-language request; the agent reads its config, searches
   skill descriptions, and invokes the best match — falling back to general
   knowledge if none fits.
3. Place project-only skills in the project's skills directory.
4. Place skills you want everywhere in the home-directory (global) location so any
   project can use them — good for personal/company context, tone, or a design
   skill you always want.
5. In frontmatter you can further constrain behavior (allowed tools, argument
   hints, a specific model, whether the model may auto-invoke it).

**Watch out for:** A project-scoped skill is invisible from other folders. If a
skill fires too eagerly, disable model invocation so it only runs on the explicit
command; if it never fires, make the description more specific.

**Original example to invent:** Source kept a front-end design skill global.
Writers should choose a different global-vs-project split.
