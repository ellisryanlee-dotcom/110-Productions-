---
id: kc-0110
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vector-database, pinecone, supabase, embeddings, chunking]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Building RAG with a vector database

**What:** Retrieval-augmented generation lets an agent answer from a knowledge base it wasn't trained on. You load documents, split them into chunks, embed each chunk (convert to a numeric vector placed by meaning), and store them in a vector database (e.g., Pinecone, or Supabase/Postgres with a vector extension). At query time the agent embeds the question, retrieves the nearest chunks, and answers from them.

**Why it matters:** It grounds answers in your own policies, FAQs, and product data, so responses are accurate and current instead of generic or hallucinated. It's the backbone of support bots and internal knowledge assistants.

**The moves:**
1. Stand up the store (create the vector table via the provider's setup script).
2. Ingest: download a document, choose a document loader, a recursive text splitter, and an embeddings model, then insert into the vector table.
3. Verify chunks landed (each row has the content, its vector, and metadata).
4. Attach the vector store to the agent as a retrieval tool; give it a clear name and description of what it contains and when to use it.
5. Embed the query with the same model so retrieval is consistent.
6. Prompt the agent that it has this knowledge base and should use it for the relevant topics.

**Watch out for:** Set up short-term memory and the knowledge store as separate concerns. Retrieval quality drops as the store grows — filter by relevance score and consider segmenting data into namespaces. Use the same embedding model for ingest and query.

**Original example to invent:** The source indexes a body-shop terms doc and a store FAQ. Build a knowledge base for a different domain (e.g., a gym's membership policies) and show grounded Q&A.
