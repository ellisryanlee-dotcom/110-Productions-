---
id: kc-0214
type: concept
track: "Track 2 — AI Agents Core"
topics: [memory, context-files, stateless, personalization]
source_video: [gb5TlGw6Uks, bCljOfCH8Ms]
source_channel: "@nateherk"
source_views: ["336K", "395K"]
confidence: high
---
# Agent memory and context files

**What:** Agents wake up stateless — with no memory of prior sessions — so you give
them durable context via files loaded at session start. Common ones: a user profile
file (who you are, style, preferences, dislikes), a memory file (environments,
projects, business context), and project context files (about-the-business,
about-me, priorities). Good agent harnesses also extract facts from your work and
update these files automatically.

**Why it matters:** Without loaded context every session feels like re-introducing
yourself. Holistic context files make the agent behave like a briefed teammate from
the first message. The source likens statelessness to a character who can't form new
memories — describe that analogy abstractly rather than copying it.

**The moves:**
1. Maintain a small set of durable files (user/preferences, memory/projects,
   business/priorities) that load at session start.
2. Let the agent auto-extract and update them, but still nudge it ("save this to
   memory," "add this to my preferences file").
3. Keep them holistic but concise — they load every session and cost tokens.
4. Point the project instruction file at where these live.
5. Store durable preferences/facts in memory; keep secrets and transient task status
   out of memory.

**Watch out for:** Stale memory is a leading cause of weird agent behavior — when
something breaks, check the memory file first. Don't store secrets or temporary
state in memory files. At large scale, prefer a queryable knowledge base over ever-
growing context files (see the LLM-wiki card).

**Original example to invent:** Source auto-saved a user's name/preferences. Writers
should show context files for a different persona/business.
