---
id: kc-0721
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-skills, on-demand-instructions, prompts, sop]
source_video: [RAZVk5NPNtE, B6k_vAjndMo]
source_channel: "@nateherk"
source_views: "227K / 222K"
confidence: high
---
# What a Claude skill is: on-demand instruction recipes

**What:** A skill is a set of plain-text instructions — essentially a reusable
prompt or recipe in a markdown file — that an agent reads when a relevant request
comes in, so it gets a task right consistently. Anyone can read a skill and
understand it; it's just text (often with a YAML header naming the skill and
describing when to use it) that can also point to scripts and reusable assets.
Crucially, the agent only loads a skill when it decides it needs it, rather than
keeping all instructions in context at once.

**Why it matters:** On-demand loading keeps the agent's context lean and its
token use low while still giving it deep, specific know-how when required. Skills
turn ad-hoc prompting into repeatable, improvable procedures you can accumulate in
a project.

**The moves:**
1. Write the procedure as a markdown skill with a clear name and "use when"
   description.
2. Let the agent decide when to invoke it based on the request (or call it
   explicitly).
3. Point the skill to any scripts or brand assets it should reuse.
4. Grow a library of skills in a project so each new job can reuse them.

**Watch out for:** A vague "use when" description causes misfires (the agent picks
the wrong skill or none). Skills are only as good as the text in them; keep them
specific.

**Original example to invent:** Write a one-paragraph skill (name + "use when" +
steps) for a routine task the source didn't cover, in your own words.
