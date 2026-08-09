---
id: kc-0014
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [postgres, supabase, vector-database, agent-memory, backend-setup]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Setting up an external Postgres/vector database backend for agents

**What:** A step-by-step account and credential setup for using a hosted Supabase (Postgres plus vector extension) project as both an agent's persistent chat-memory store and its vector knowledge store, instead of n8n's built-in in-memory option. The relational (memory) connection and the vector-store connection use two different sets of credentials pulled from two different places in Supabase's dashboard, even though they belong to the same project.

**Why it matters:** Moving memory and vectors off a workflow tool's built-in, ephemeral storage into a real managed database is what makes an agent's history and knowledge durable, inspectable with normal database tools, and shareable across separate workflows.

**The moves:**
1. Create a hosted Supabase project and record the project's setup password immediately — it's needed for the relational connection and isn't re-displayed later.
2. For the relational (chat-memory) connection, use the pooled "transaction" connection details, pulling host, database user, the project password, and port from Supabase's connection panel rather than the default connection string, and verify the credential test succeeds.
3. For the vector-store connection, use a different pair of values entirely — the project's API/data URL and its elevated service-role secret — pulled from the API/service settings, not the database connection panel.
4. Run Supabase's boilerplate vector-store setup script, typically copy-pasted unmodified into its SQL console, once to create the schema/table the vector-store node will write into.
5. Validate both connections independently with a small real write before wiring them into an agent: push one test document through to confirm vectors land in the expected table, and send one test chat message to confirm a row appears in the memory-history table.

**Watch out for:** The relational/memory host and the vector-store host are not the same value — reusing the database host for the vector-store credential (or vice versa) is a common copy-paste mistake that produces a connection failure. Self-hosting this same backend instead of using the managed cloud project changes the host value to a local address, so credentials aren't portable between a cloud demo and a self-hosted deployment without updating them.

**Original example to invent:** Source connected a personal-assistant agent's memory plus a body-shop FAQ document as its vector content. Writers should walk through the same two-credential setup using a different domain's documents, such as an internal HR-policy knowledge base.
