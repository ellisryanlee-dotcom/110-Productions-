---
id: kc-0405
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, sops, reusability]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Codify repeatable work as reusable skills

**What:** A skill is a reusable prompt/instruction file stored in the agent's skills directory that teaches it to run a specific workflow the same way every time. You invoke it in natural language or via a command.

**Why it matters:** Skills turn your standard operating procedures into automation the agent runs consistently, and they can be shared so a whole team gets the same behavior instantly.

**The moves:**
1. Create a markdown file per repeatable job (e.g., a tech-debt scan, a code-review pass) describing exactly how to do it.
2. Store it in the skills directory so the agent can trigger it by name or on request.
3. Commit the skill files to version control so teammates inherit the same workflows.
4. Update a skill whenever you find a better approach so the improvement propagates everywhere it's used.

**Watch out for:** A skill is only as good as its instructions; a vague skill file produces flaky, inconsistent runs.

**Original example to invent:** Source names generic scans. Writers should invent a specific SOP (e.g., a release-notes generator) and show the skill file plus its invocation.
