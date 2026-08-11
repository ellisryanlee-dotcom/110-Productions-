---
id: kc-0707
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, wat-framework, workflows, tools, project-structure, plan-mode]
source_video: AO5aW01DKHo
source_channel: "@nateherk"
source_views: "237K"
confidence: high
---
# Build an agentic workflow in Claude Code with a Workflows-Agents-Tools structure

**What:** A project layout for running automations through a coding agent without
writing code yourself. The pattern (workflows / agents / tools) organizes a
project into: a project instructions file (the agent's system prompt describing
folders, execution rules, and goals), a *tools* folder of deterministic scripts
(e.g., Python) for concrete actions, a *workflows* folder of markdown SOPs that
define what to do and in what order, plus env/secrets files. The agent is the
brain you talk to; it reads the workflow, then calls the right tools.

**Why it matters:** It gives an agent durable, reusable structure so it can
re-run a job reliably instead of improvising each time. Once a workflow and its
tools exist, you can trigger the same job repeatedly with one instruction, and
future changes edit the workflow/tool files so the improvement persists.

**The moves:**
1. Start the agent in plan mode so it asks questions and drafts a plan before
   acting.
2. Give it a plain-language brief (data source, enrichment depth, tone, keys).
3. Answer its clarifying questions; review and accept the plan.
4. Let it scaffold the tools (scripts) and the workflow (SOP) files.
5. Add your API keys, then run; iterate with natural language, which updates the
   underlying files for next time.
6. For unattended runs, publish the scripts/workflows to a hosting/scheduler so
   they fire without you present.

**Watch out for:** Auto-accepting plans skips your chance to correct scope; keys
still must be supplied; a demo build is not production-hardened.

**Original example to invent:** Scaffold a different workflow (not lead-gen) using
this structure and show the resulting folder tree and one tool script's purpose
in your own words.
