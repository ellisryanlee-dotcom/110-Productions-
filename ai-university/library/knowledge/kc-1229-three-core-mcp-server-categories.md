---
id: kc-1229
type: framework
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, ai-coding, documentation, database, web-search, tooling]
source_video: MBaTuJfICP4
source_channel: "@ColeMedin"
source_views: "100K"
confidence: high
---
# Three core MCP server categories for AI coding

**What:** A minimal, high-leverage MCP setup for any AI coding assistant covers three categories: (1) a documentation/knowledge server that gives the coder up-to-date, RAG-able docs for the libraries and tools you use; (2) a database-management server so the agent can create tables, run queries, and set up your backend in natural language; and (3) a web-search server for supplemental lookups. Each category has multiple viable implementations; pick one per category.

**Why it matters:** Coding assistants hallucinate on specific libraries and can't touch your infrastructure by default. These three server types close the biggest gaps — knowledge, backend actions, and open-web context — turning a generic coder into one that builds against real, current tools and stands up your database for you.

**The moves:**
1. Documentation server: bring library/tool docs in as a RAG source (a hosted docs service or a self-hosted crawler you control).
2. Database server: let the agent manage your DB (create tables, write queries) as part of the build.
3. Web-search server: add an AI-oriented search for docs or forum examples the knowledge base lacks.
4. Configure each in your IDE's MCP config file; refresh to load, then verify the exposed tools and their descriptions.
5. Use them together — e.g., search your docs knowledge base first, then web search for supplemental examples.

**Watch out for:** All three commonly have generous free tiers, but each needs its own setup (API keys, access tokens, running the server). Config format is similar across IDEs (Cursor, Windsurf, Cline, etc.). Add servers deliberately rather than piling on.

**Original example to invent:** Show the three categories wired up and used in sequence to scaffold an invented app, without reusing the source's specific product names beyond the category descriptions.
