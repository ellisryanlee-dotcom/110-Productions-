---
id: kc-0141
type: how-to
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, firecrawl, scraping, claude-code, api-vs-mcp]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Connecting MCP servers in Claude Code (and Firecrawl scraping)

**What:** MCP (Model Context Protocol) gives an agent a single connection to a service's whole set of tools, so the agent figures out which endpoint and parameters to use instead of you wiring each API call. In an agentic coding tool you add a server with a one-line command, and the agent then reasons over its tools. A common use is Firecrawl for turning any site into LLM-ready data (scrape, map, crawl, search, extract).

**Why it matters:** It removes the need to read API docs and build each request — give the agent the server and it selects tools from natural language. But MCP servers load all their tool definitions into context, so they cost tokens; sometimes a single hard-coded API endpoint is leaner.

**The moves:**
1. Copy the server's Claude Code install command from its docs; ask the agent to install it, and put the API key in an env file rather than the chat.
2. Reload the tool window so the server is usable; test a call to confirm the agent picks the right tool.
3. Add a short cheat-sheet markdown of the server's tools and when to use each, and point CLAUDE.md to it.
4. Use plan mode for jobs that may need multiple tools (e.g., scrape → map → extract across many pages) and let it self-correct when a scrape returns empty.
5. Run parallel sessions to hit different tools at once (e.g., one maps a site while another scrapes branding).

**Watch out for:** MCP servers can consume large context — drop unused ones and consider a direct API endpoint when you only need one function. Some listed servers aren't fully published and will fail to connect regardless of setup. Keys in an MCP config file are local but sensitive.

**Original example to invent:** The source scrapes job boards and site branding via Firecrawl's MCP. Demonstrate connecting a different MCP server and using it from natural language.
