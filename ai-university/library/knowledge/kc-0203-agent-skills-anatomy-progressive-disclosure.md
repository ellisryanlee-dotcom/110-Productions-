---
id: kc-0203
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [skills, progressive-disclosure, context-management, markdown]
source_video: [bCljOfCH8Ms, gb5TlGw6Uks, saggDHHnmtQ]
source_channel: "@nateherk"
source_views: ["395K", "336K", "410K"]
confidence: high
---
# Agent skills: what they are, their anatomy, and progressive disclosure

**What:** A skill is a reusable, saved procedure the agent loads on demand — a
folder containing a markdown file (plus optional scripts and reference files). The
markdown has YAML front matter (a name and a description of when to use it) followed
by step-by-step instructions. Skills are essentially SOPs for the agent: write once,
invoke many times, get consistent output. They can run scripts, call APIs, create
artifacts, and delegate to sub-agents, so they are automations, not just text.

**Why it matters:** Repeating the same multi-step instructions every session is
wasteful and inconsistent. Skills capture the best way to do a task so the whole
team can reuse it. Crucially, they stay lightweight through progressive (three-level)
context loading: (1) the agent first scans only names + descriptions in front matter
(~100 tokens each); (2) if a skill matches, it reads the full skill file (roughly
one-to-a-few-thousand tokens); (3) it opens extra scripts/reference files only if
the specific task needs them.

**The moves:**
1. Store skills under the project's skills folder, one folder per skill.
2. Put a precise name and description in YAML front matter — this is the trigger.
3. Write the step-by-step process below the front matter.
4. Reference supporting scripts/files by path; they load only when needed.
5. Trigger a skill either explicitly (a slash command) or via natural language.

**Watch out for:** Keep the skill file reasonably short (the docs advise under ~500
lines) and move bulky material to reference files, or you defeat progressive
loading. A vague description means the skill never triggers; too-broad a description
means it fires when it shouldn't (you can restrict how it may be invoked in front
matter). Vet third-party skills for malicious instructions.

**Original example to invent:** Source referenced skills for diagrams, LinkedIn
posts, and infographics. Writers should invent a different skill (e.g., a
"meeting-recap" skill) and describe the recipe analogy abstractly, not verbatim.
