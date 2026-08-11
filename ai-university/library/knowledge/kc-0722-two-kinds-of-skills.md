---
id: kc-0722
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-skills, capability-uplift, encoded-preference, durability]
source_video: RAZVk5NPNtE
source_channel: "@nateherk"
source_views: "227K"
confidence: medium
---
# Two kinds of skills: capability-uplift vs encoded-preference

**What:** A taxonomy of skills by purpose. A *capability-uplift* skill is
essentially a prompt that teaches the model to do something better than it does by
default (e.g., front-end design, document creation, spreadsheet formulas). An
*encoded-preference* skill captures things the model already knows but must do in
a specific order and to your specification — closer to a step-by-step workflow
unique to you (e.g., a multi-step research routine that fans out to sub-agents and
scores results).

**Why it matters:** The two types age differently. Capability-uplift skills may
fade: as base models improve, a future model might do the task better without the
skill, so the skill can be retired. Encoded-preference skills stay durable because
the process is specific to you and won't be baked into a general model. Knowing
the type tells you whether to maintain or eventually archive a skill.

**The moves:**
1. Classify each skill as capability-uplift or encoded-preference.
2. For capability-uplift skills, periodically re-check whether the base model now
   does better without them.
3. Treat encoded-preference skills as long-lived assets worth refining.
4. Archive or delete skills the model has outgrown.

**Watch out for:** Assuming all skills are permanent — a capability-uplift skill
can start hurting results after a model upgrade. Re-evaluate on model changes.

**Original example to invent:** Name one capability-uplift skill and one
encoded-preference skill for a domain the source didn't use, and explain why each
falls in its category.
