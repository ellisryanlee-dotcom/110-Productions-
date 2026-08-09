---
id: kc-0407
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, api-endpoints, tokens, context-window]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Direct API endpoints vs. full tool servers — the token tradeoff

**What:** Connected tool servers (MCP) expose many callable tools, but their full tool definitions load into the context window. When you only need one narrow operation, hardcoding a single direct API endpoint can save large amounts of context versus loading an entire server's toolset.

**Why it matters:** Paying context tokens to describe dozens of tools you'll never call is pure waste on a task that needs only one.

**The moves:**
1. Ask what operations this specific project actually needs.
2. If it needs the flexibility to call many tools, use the tool server.
3. If it needs only one or two fixed operations (e.g., read a single database), skip the server and wire in that direct endpoint instead.
4. Reserve the freed context for the actual work.

**Watch out for:** This trades flexibility for efficiency — hardcoded endpoints won't discover new capabilities, so only narrow it down when the task scope is genuinely fixed.

**Original example to invent:** Source mentions reading one database. Writers should pick a different single-operation case (e.g., posting to one channel) and quantify the context saved.
