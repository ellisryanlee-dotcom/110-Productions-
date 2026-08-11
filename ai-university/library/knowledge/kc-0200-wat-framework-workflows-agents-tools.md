---
id: kc-0200
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [wat-framework, agent-design, workflows, tools, reliability]
source_video: [saggDHHnmtQ, bCljOfCH8Ms, tDGiWn0flK8]
source_channel: "@nateherk"
source_views: ["410K", "395K", "262K"]
confidence: high
---
# The WAT framework: workflows, agents, tools

**What:** A three-layer way to structure an agent that builds and runs automations
inside a coding-agent environment. Layer one is workflows — plain-language markdown
SOPs that state an objective, required inputs, which tools to call, expected output,
and how to handle edge cases. Layer two is the agent — the reasoning coordinator
that reads the right workflow, runs tools in order, handles failures, and asks
clarifying questions. Layer three is tools — deterministic code files (typically
Python scripts) that actually execute actions like API calls, file operations, or
database queries.

**Why it matters:** Separating probabilistic reasoning (the agent) from
deterministic execution (the tools) is what makes these systems reliable. The
agent decides; the code does. Because workflows and tools are just files, they are
versionable, reusable across projects, and can be deployed to run on their own
later without the interactive agent present.

**The moves:**
1. Create a folder for workflows (markdown SOPs) and a folder for tools (scripts).
2. Write each workflow as an ordered, plain-language process a teammate could follow.
3. Store executable logic in separate tool files, one action per file.
4. Keep secrets out of tool code — reference environment variables instead.
5. Let the agent read a workflow, sequence the tools, and self-correct on failure.

**Watch out for:** When you deploy to run on a schedule, you typically ship only
the workflow + tools, not the interactive agent — so a scheduled run won't
self-heal unless you re-open the agent to edit it. Don't bury credentials in tool
files that might get pushed to a repo.

**Original example to invent:** Source scaffolded a YouTube-analytics pipeline
(fetch data → analyze → chart → slides → email). Writers must pick an unrelated
domain (e.g., a WAT setup that reconciles invoices and files disputes).
