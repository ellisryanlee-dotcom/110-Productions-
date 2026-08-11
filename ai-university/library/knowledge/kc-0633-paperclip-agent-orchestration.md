---
id: kc-0633
type: tool
track: "Track 2 — AI Agents Core"
topics: [paperclip, orchestration, multi-agent, companies, dashboard]
source_video: HJ-dwefABss
source_channel: "@nateherk"
source_views: "244K"
confidence: high
---
# Paperclip: an orchestration layer for multi-agent "companies"

**What:** Paperclip is a free, open-source orchestration tool for running organizations
of AI agents. You define one or more companies, each with a roster of role-based agents
(CEO, engineer, designer, researcher, QA) organized in a reporting structure. It brings
its own dashboard, a ticketing/issue system that logs every conversation and task,
per-agent budgets and spend tracking, and works with whichever underlying agent you
point it at (a coding agent, other CLI agents, etc.). It's launched from a terminal and
by default runs locally, but can be hosted on a server for remote access.

**Why it matters:** It solves the visibility and coordination pain of running many
agent sessions at once — where you lose track of which session is doing what. A single
orchestration surface keeps every agent synchronized around shared goals, logs
everything for review, and lets you manage a whole team from one place.

**The moves:**
1. Install and launch it, then create a company with a mission/goal.
2. Add agents with roles and a reporting structure; assign each an underlying model.
3. Manage work through issues/tickets — create them, comment, approve, review runs.
4. Set per-agent budgets and watch spend; sync a project to a repo for code work.
5. Optionally host on a server so the dashboard is reachable from anywhere.

**Watch out for:** By default it's local-only; exposing it remotely reintroduces the
self-hosted-security concerns (auth, keys, ports). Running real agents still costs
model tokens per agent even if a subscription hides the number.

**Original example to invent:** Source set up a testimonial-capture SaaS company.
Writers must invent a different company/mission and org chart to illustrate the tool.
