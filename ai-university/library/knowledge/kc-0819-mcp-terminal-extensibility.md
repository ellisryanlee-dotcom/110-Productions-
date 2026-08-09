---
id: kc-0819
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, integrations, cli, terminal, extensibility]
source_video: 99VHENEKA9o
source_channel: "@nateherk"
source_views: "209K"
confidence: high
---
# MCP and terminal access as coding-agent extensibility

**What:** Two ways agentic coding tools connect to the outside world: MCP (an open
standard letting AI tools plug into external services like source control,
databases, browsers, and design tools) and direct terminal access (the agent can
run any CLI available on the machine).

**Why it matters:** A coding agent is only as useful as what it can reach. MCP gives
it a growing ecosystem of service integrations, and terminal access means anything
with a command-line interface is instantly usable — dramatically widening what the
agent can do beyond editing files.

**The moves:**
1. Add MCP servers either via a single command / by asking the agent, or by editing
   a JSON config scoped globally, per project, or per user.
2. Prefer a visual MCP panel/marketplace if you want click-to-install; drop to the
   config file for advanced setups.
3. When unsure, hand the agent the server's URL/docs and let it figure out the
   install.
4. Lean on terminal access for tools without an MCP server — if it has a CLI and
   runs in a terminal, the agent can drive it.

**Watch out for:** Visual install is friendlier to start, but advanced
configuration still lands in the config file. Terminal access is powerful but means
the agent can run real commands — scope permissions deliberately.

**Original example to invent:** List a different mix of MCP servers / CLIs than the
source named to illustrate the two integration paths.
