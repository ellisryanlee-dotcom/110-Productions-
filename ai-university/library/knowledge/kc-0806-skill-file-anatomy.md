---
id: kc-0806
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, frontmatter, references, scripts]
source_video: zKBPwDpBfhs
source_channel: "@nateherk"
source_views: "215K"
confidence: high
---
# Anatomy of a skill file

**What:** The structure of a skill: a folder containing an instructions file with
YAML frontmatter (a name and a description) followed by the step-by-step body, plus
optional supporting scripts and reference files the skill can pull in when needed.

**Why it matters:** Understanding the parts lets you build skills that are cheap to
scan, easy to trigger correctly, and rich enough to do real work. The name and
description control when the skill fires; the body is what the agent actually does;
the supporting files are the tools and context it reaches for only when required.

**The moves:**
1. Create a folder for the skill inside the project's skills directory.
2. Add an instructions file whose frontmatter states the skill's name and a
   description of what it does / when to use it.
3. Write the body as clear ordered steps — the procedure the agent follows once it
   picks this skill.
4. Add scripts (for actions) and reference docs (for tone, brand, context) either
   nested under the skill or elsewhere in the project.
5. Point to any external file by its correct path inside the instructions; the
   location doesn't matter as long as the path is right.

**Watch out for:** Keep the main instructions file reasonably short (docs suggest
staying under a few hundred lines) and push detailed material into reference files.
Not every supporting file loads on every run.

**Original example to invent:** Source referenced diagram and infographic skills
with brand assets. Writers should invent a different skill's file layout.
