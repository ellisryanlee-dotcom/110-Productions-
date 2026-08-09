---
id: kc-0732
type: how-to
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, n8n, claude-code, skills, workflow-building]
source_video: B6k_vAjndMo
source_channel: "@nateherk"
source_views: "222K"
confidence: high
---
# Give Claude Code n8n powers with the n8n-MCP server + n8n skills

**What:** How to make Claude Code build real n8n workflows. On its own the agent
knows JSON but not n8n's nodes, expression syntax, and parameters. You add two
things: an *n8n-MCP server* (exposes complete node coverage — all nodes with
documented properties — plus thousands of workflow templates and lifecycle control
over workflows in your instance: creating, updating, activating, managing) and an *n8n skills* set
(teaches the agent expression syntax, how to use the MCP, workflow patterns,
validation, node configuration, and coding). The easiest install is to give the
agent the two GitHub repo URLs and tell it to install them and make them
accessible in the project.

**Why it matters:** With the MCP for actions and skills for know-how, the agent
can research nodes, assemble a valid workflow, deploy it to your instance, and
self-correct configuration errors — turning a brain dump into a working workflow.

**The moves:**
1. Give the agent the n8n-MCP and n8n-skills repo URLs; tell it to install both
   and make them accessible to Claude Code in the project.
2. Provide your n8n instance URL and an API key so the MCP can manage workflows
   (bypass mode will pause to ask for these).
3. Restart Claude Code, then verify (e.g., "search for the webhook node via the
   MCP") and confirm the skills are present.
4. Prompt your workflow in plan mode; let it search nodes, plan, then build in
   your instance and return a link.

**Watch out for:** The MCP can offer to let *you* install things — tell it to do
everything itself. Cloning the skills repo brings extra files you can later clean
up. Provide instance credentials or workflow management won't work.

**Original example to invent:** Describe adding a *different* MCP server + skill
pairing to Claude Code and the verification prompt you'd run to confirm it works.
