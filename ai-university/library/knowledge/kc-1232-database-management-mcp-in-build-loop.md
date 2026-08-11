---
id: kc-1232
type: how-to
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, database, supabase, neon, ai-coding, migrations]
source_video: MBaTuJfICP4
source_channel: "@ColeMedin"
source_views: "100K"
confidence: high
---
# Database-management MCP servers in the build loop

**What:** A database MCP server lets a coding agent manage your backend in natural language as part of building an app — creating tables, applying migrations, enabling extensions, and running arbitrary queries. Providers like Supabase and Neon (serverless Postgres) offer such servers, so the agent both writes the code and stands up the database it needs.

**Why it matters:** Normally you hand-build the schema and wire it up separately. With a DB server, the same agent that scaffolds the app also provisions its data layer, collapsing a whole setup phase into the build conversation.

**The moves:**
1. Add the database provider's MCP server to your IDE config with an access token.
2. In your build prompt, explicitly instruct the agent to use the DB server to create the needed tables and enable required extensions (e.g., the vector extension for RAG).
3. Give it an example schema/SQL to follow for consistency.
4. Verify it actually applied the migration — agents sometimes skip this and need a second, explicit ask.

**Watch out for:** Coding agents are unpredictable about tool use; even when told once to create tables, they may not — reask specifically and confirm the migration ran and the tables exist. Free tiers are usually enough to start.

**Original example to invent:** Show an agent provisioning a schema for an invented app via a DB server, including the "reask to actually run the migration" gotcha.
