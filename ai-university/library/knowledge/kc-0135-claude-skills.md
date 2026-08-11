---
id: kc-0135
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [skills, progressive-loading, yaml-front-matter, claude-code, sops]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Skills: reusable, loadable instructions for agents

**What:** A skill is a folder (commonly under a skills directory) containing a markdown file the agent can load on demand — essentially an SOP or prompt with optional supporting scripts and reference files. It has YAML front matter (name + description, plus optional model, tools, triggers) followed by step-by-step instructions. Two types: capability-uplift skills (teach the model to do something better, e.g., front-end design) and encoded-preference skills (enforce your specific multi-step process).

**Why it matters:** Skills give leverage: write a process once and get consistent results every time, share it across a team, and let it improve with use. In WAT terms, a skill is a workflow and its supporting scripts are the tools.

**The moves:**
1. Trigger a skill explicitly (slash command) or by natural language — the agent reads CLAUDE.md, then scans skill names/descriptions to pick one.
2. Keep supporting scripts/references either nested in the skill or elsewhere, as long as the skill file points to the right path.
3. Rely on progressive loading: level 1 reads only name+description (~100 tokens), level 2 loads the full skill when chosen, level 3 pulls extra files only if needed.
4. Build skills reactively: do a task with the agent, then say "turn this into a skill," and refine it through a feedback loop each run.
5. Hard-code stable facts (e.g., IDs) into the skill to save repeated lookups.

**Watch out for:** Keep the skill file lean (a documented cap is ~500 lines; move detail to references). Write specific descriptions so the right skill triggers; vet third-party skills for malicious content. Processing markdown is far cheaper than repeated API calls — prefer reference docs over live fetches.

**Original example to invent:** The source builds an infographic skill and a diagram skill. Invent a different reusable skill (e.g., a meeting-notes summarizer) and describe its structure.
