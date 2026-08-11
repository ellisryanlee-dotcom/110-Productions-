---
id: kc-1112
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, plan-mode, planning-doc, task-list, examples, mcp]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Planning-first Claude Code builds with reference docs and examples

**What:** A workflow for having a coding agent build a substantial project mostly autonomously. Three documents drive it: global rules (how the agent should work), a high-level planning doc (architecture, components, folder paths, tech stack, design principles), and a task list the agent checks off one by one. You create the planning and task docs while in the agent's plan mode (which prevents it from writing files yet), then exit plan mode and kick off the build with a short prompt.

**Why it matters:** Front-loading the plan lets the agent run for long stretches (tens of minutes) building, testing, and iterating with minimal babysitting — you mostly approve actions. It also produces artifacts (plan, tasks, rules) you can reuse and share.

**The moves:**
1. Enter plan mode; brain-dump what you want and ask the agent to interview you with follow-up questions.
2. Have it write the planning doc and task list from that conversation.
3. Provide example files from prior projects for it to imitate best practices.
4. Connect MCP servers so it can manage real resources (e.g., create a DB, run migrations) and pull external docs via a docs-RAG server.
5. Exit plan mode; give a one-line "execute the plan" prompt.

**Watch out for:** Don't blindly vibe-code — keep the knowledge to validate output and add the last ~10% yourself. Set MCP approvals up front so the long run isn't blocked on prompts.

**Original example to invent:** Source builds an agentic-RAG service. Show the same planning-first flow for a different project type with your own planning doc and task list.
