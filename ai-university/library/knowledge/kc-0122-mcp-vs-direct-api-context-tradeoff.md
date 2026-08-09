---
id: kc-0122
type: pitfall
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, api-integration, context-window, token-cost, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: medium
---
# The standing token cost of connected MCP servers

**What:** Every MCP server connected to a project loads all of its tool definitions and descriptions into the context window on every session, regardless of how many of those tools actually get used — a server exposing many granular actions (e.g., dozens of narrow browser-automation or workspace functions) can consume a meaningfully large chunk of available context just by being connected. When a project only ever needs one or two specific operations from a service, calling that service's API endpoint directly (having the agent write and reuse a small script or hardcoded call) avoids paying that standing token cost every session, at the expense of losing the MCP server's broader flexibility.

**Why it matters:** MCP is the right default for flexibility — letting the agent discover and use whatever operations a service exposes as needs evolve — but that flexibility isn't free, and on a token-constrained project, a heavy MCP server can be a bigger context cost than it's worth if usage patterns are actually narrow and stable.

**The moves:**
1. After connecting any new MCP server, check the context-usage breakdown to see how many tokens its tool definitions are actually consuming.
2. If a project's real usage of a connected server turns out to be one or two fixed operations, consider having the agent write a small direct-API script for just those operations and disconnecting the broader MCP server.
3. Conversely, keep the MCP server connected when the operations needed are varied, evolving, or better discovered dynamically by the agent rather than hardcoded.
4. Periodically audit all connected MCP servers, skills, and custom agents for ones no longer actually used, and remove them — each one has a standing token cost whether used that session or not.

**Watch out for:** Hardcoding a direct API call trades away the MCP server's self-updating/self-discovering behavior — if the service's API changes, a hardcoded call has to be manually revisited, whereas an MCP server built against current docs may adapt automatically. This is a judgment call based on actual usage patterns, not a rule to always prefer one approach.

**Original example to invent:** The source noted this specifically about a heavy browser-devtools MCP server versus using a narrower browser-automation CLI. Writers should invent a different narrow-usage scenario (e.g., a project that only ever needs to read one spreadsheet) to illustrate swapping a broad MCP connection for a direct call.
