---
id: kc-0829
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [cli, mcp, api, integrations, context-overhead, tokens]
source_video: Wu67lLD8bB0
source_channel: "@nateherk"
source_views: "205K"
confidence: medium
---
# CLI vs MCP vs API as agent capability surfaces

**What:** Three ways to give an agent access to an external service: raw API endpoints,
an MCP server, or a single command-line interface. They differ in context overhead,
maintenance, and how structured the responses are.

**Why it matters:** How you connect a capability affects tokens and reliability. Wiring
many separate API endpoints or several MCP configs and tool definitions consumes more of
the agent's context on every run. A single CLI presents one interface with structured
(JSON-first) responses and low overhead, which an agent works with efficiently.

**The moves:**
1. Prefer a single CLI when one tool can cover a whole product surface — it minimizes
   context overhead versus many endpoints/configs.
2. Favor JSON-first/structured responses so the agent parses output reliably.
3. Value auto-discovery/self-updating interfaces to reduce maintenance.
4. Use MCP when you want an ecosystem of pluggable services; use direct API/CLI when a
   maintained command tool already covers the need.

**Watch out for:** More tools and endpoints loaded = more tokens spent scanning them each
run. Consolidating onto one well-structured interface is a context-management decision,
not just convenience.

**Original example to invent:** Compare the three surfaces for a different service than
the source's Google example.
