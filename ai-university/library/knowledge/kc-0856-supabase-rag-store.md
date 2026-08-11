---
id: kc-0856
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [supabase, postgres, pgvector, rag, chat-memory, n8n]
source_video: PEI_ePNNfJQ
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "271K"
confidence: high
---
# Supabase (Postgres + pgvector) as both RAG store and chat memory

**What:** Supabase can serve double duty for an AI agent: its Postgres database holds
conversation memory, and its pgvector extension holds the embeddings for RAG. One platform
covers both, and a generous free tier is enough to start.

**Why it matters:** Storing chat memory in the app server's local buffer doesn't scale and
can overload the host; a real database makes an agent production-ready. Using one service
for memory and vectors simplifies the stack.

**The moves:**
1. Create a Supabase project; from settings collect the Postgres connection details (host,
   db, port, user, password) for memory and the API URL + service-role key for the vector store.
2. Run the provided starter SQL in Supabase's SQL editor — it enables the vector extension,
   creates the documents table, and creates the match function used for retrieval.
3. In n8n, point the Postgres chat-memory node at the connection details (a table name of
   your choice is auto-created on first use).
4. Point the Supabase vector-store tool at the documents table and match query, using the
   API URL + service-role key.
5. When connecting Postgres nodes, use the transaction pooler connection (port 6543), not
   the direct connection.

**Watch out for:** The transaction-pooler detail trips people up — the direct-connection
params often won't work. Free tier is fine until you scale.

**Original example to invent:** Sources built a meeting-notes agent. Writers should pick a
different domain and table naming.
