---
id: kc-0202
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-md, system-prompt, project-config, context]
source_video: [saggDHHnmtQ, bCljOfCH8Ms, gb5TlGw6Uks]
source_channel: "@nateherk"
source_views: ["410K", "395K", "336K"]
confidence: high
---
# The project instruction file (claude.md / agents.md)

**What:** A markdown file at the root of a coding-agent project that acts as the
master prompt for that project. It tells the agent its role, the project's goal,
where things live (which folders hold context, references, skills, connections),
which skills exist and when to invoke them, and any standing rules. Different
harnesses use different filenames for the same idea (claude.md, agents.md,
gemini.md), and each agent understands its own convention.

**Why it matters:** Without it, the agent is generic — it doesn't know the
business, the tools available, or where documents live. This one file is what turns
a blank agent into something that behaves like a briefed teammate. It is also the
first thing a cloud/remote run reads, so it is the durable brain of the project.

**The moves:**
1. Create the instruction file at the project root.
2. State the agent's role and the project's objective in plain language.
3. Map the folder structure so the agent knows what each folder is for.
4. List the skills and the natural-language triggers that should invoke them.
5. Update it continuously — treat it as a living file edited as the project grows.

**Watch out for:** Everything in this file is read on most runs, so bloat costs
tokens; keep frequently-needed pointers here and push bulky detail into reference
files. Keep it in sync whenever you add folders or skills, or the agent won't find
them.

**Original example to invent:** Source's file routes an AI-operating-system project.
Writers should show a differently-scoped instruction file (e.g., for a research
project) so the structure, not the wording, is what transfers.
