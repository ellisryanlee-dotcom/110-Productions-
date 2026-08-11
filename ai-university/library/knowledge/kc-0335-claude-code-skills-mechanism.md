---
id: kc-0335
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, instructions, capability, markdown]
source_video: [86HM0RUWhCk, 6MC1XqZSltw]
source_channel: "@nateherk"
source_views: "528K"
confidence: high
---
# How Claude Code Skills work

**What:** Skills are custom instruction sets — knowledge plus how-to steps packaged
in markdown — that the agent selectively pulls in. On each request the agent reads
its project instructions, then considers whether any skill in its library helps;
if so it loads and follows that skill before acting, otherwise it falls back to
general knowledge. Skills can be installed globally so they're available across all
projects.

**Why it matters:** Skills let you give an agent reusable, domain-specific
expertise (a design skill, a research skill, a brainstorming skill) without
bloating every prompt — the agent only loads the relevant one on demand. This is
how you make an agent reliably good at a recurring class of task.

**The moves:**
1. Package the expertise as a markdown skill (instructions + knowledge).
2. Install it (globally to reuse across projects, or per project).
3. Let the agent decide when to invoke it based on the request; you can also nudge
   it to invoke a specific skill.
4. Confirm invocation — the agent shows when it reads/uses a skill.

**Watch out for:** A skill only helps if the agent recognizes the task matches it;
an explicit rule in CLAUDE.md (e.g., "always invoke skill X before Y") guarantees
invocation for critical cases. Explicitly invoked skills give more consistent
behavior than relying on the agent to choose.

**Original example to invent:** Sources used a front-end design skill, a
brainstorming skill, and research/trade skills. Writers should describe a
different custom skill and when it fires.
