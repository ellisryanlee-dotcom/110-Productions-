---
id: kc-0205
type: framework
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, api, cli, connections, token-efficiency]
source_video: [bCljOfCH8Ms, saggDHHnmtQ, gb5TlGw6Uks]
source_channel: "@nateherk"
source_views: ["395K", "410K", "336K"]
confidence: high
---
# Choosing how to connect an agent: MCP vs. API endpoints vs. CLI

**What:** Three ways to give an agent access to an external service. An MCP server
is a single connection that exposes all of a service's functions at once (the source
compares it to a universal port / an app store — describe abstractly). Direct API
endpoints let you wire only the specific calls you need. A CLI is a single command-
line tool the agent drives via terminal (bash) commands, often bundling many
operations plus prebuilt recipes.

**Why it matters:** MCP is the fastest to stand up and models tend to default to it,
but loading a full MCP server pulls in every function and consumes more context/
tokens even when you need only a couple of endpoints. Picking the lighter option for
frequent tasks materially reduces token cost and improves reliability.

**The moves:**
1. Ask whether you need most of a service's functions or just a few.
2. For a few calls, prefer direct API endpoints; have the agent research the docs
   once and save the endpoints to a reference markdown file so it never re-researches.
3. For broad, evolving access, a CLI can be one low-overhead tool covering everything.
4. Reserve MCP for when a ready server exists and breadth outweighs token cost.
5. For a specific recurring skill, hardcode just the handful of endpoints it uses.

**Watch out for:** Multiple MCP servers loaded into one project stack up token
usage. Re-researching API docs every run is a silent cost — cache endpoints locally.
CLIs may be beta ("expect breaking changes") and can require re-authentication.

**Original example to invent:** Source connected a task-manager via API endpoints
and Google Workspace via a CLI. Writers should choose different services to
illustrate each connection style.
