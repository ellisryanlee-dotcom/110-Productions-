---
id: kc-1006
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, n8n, supabase, pgvector, postgres, no-code]
source_video: [PEI_ePNNfJQ, mQt1hOjBH9o]
source_channel: "@ColeMedin"
source_views: "271K"
confidence: high
---
# Building a no-code RAG agent with n8n and Supabase

**What:** A production-leaning RAG agent built without code by pairing n8n (workflow automation) with Supabase (a Postgres platform that also does vectors via the pgvector extension). Supabase serves double duty: the vector store for retrieval and the Postgres database for chat memory.

**Why it matters:** It's a cheap, no-code combination that scales past the toy "chat with a PDF" demos. Storing conversation memory in Postgres rather than in-instance buffer memory is what keeps it from overloading the host as usage grows, which is the difference between a demo and something usable.

**The moves:**
1. Create a Supabase project; from settings grab the Postgres connection details (for memory) and the API URL + service-role key (for the vector store).
2. In the SQL editor, run the provided starter SQL to enable pgvector, create the documents table, and create the match function used for retrieval.
3. In n8n, build the agent: a chat trigger, an agent node, a chat model, Postgres chat memory, and a Supabase vector-store retrieval tool.
4. Build an ingestion sub-flow: trigger on files created/updated in a Drive folder, delete old vectors for that file id, download and extract text, then insert into the vector store with an embeddings node and default data loader.
5. Test in the built-in chat widget; the same agent can be embedded on a site or exposed as a webhook/API.

**Watch out for:** For the Postgres nodes, connect via the transaction pooler (port 6543), not the direct connection — the direct one fails and the docs aren't clear about it. n8n auto-creates the memory table on first use, so you don't pre-create it. Prefer Postgres memory over in-instance buffer memory for scale.

**Original example to invent:** Ingest a different document set (e.g., a club's bylaws) and show a grounded answer plus a citation back to the source document.
