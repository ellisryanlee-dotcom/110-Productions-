---
id: kc-0236
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [n8n, pinecone, rag, embeddings, ai-agent, memory]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# Building a RAG agent in n8n with Pinecone

**What:** A two-part build: (1) an ingestion workflow that pulls a document from cloud
storage and embeds it into a vector database, and (2) an agent workflow you chat with
that retrieves from that database to answer questions about the document.

**Why it matters:** It's the end-to-end, hands-on version of RAG — turning a PDF you
don't want to read into something you can just ask questions of — and it shows the
specific settings (embedding model match, namespaces, data-loader type, splitter,
retrieve-vs-insert) that make or break a real pipeline.

**The moves (ingestion):**
1. Trigger (manual or on-upload) → download the file from cloud storage.
2. Create a vector-DB index configured to a specific embedding model.
3. Add the vector-store node in "add documents" mode with a namespace.
4. Configure the embedding node to the SAME model as the index; set the data loader to
   the file's data type (e.g., binary for a PDF); pick a text splitter (recursive-
   character) and chunk size; run it and confirm vectors landed in the namespace.

**The moves (agent):**
1. Start with a chat-message trigger → add an AI agent (tools agent) with a system
   prompt (role, context, tools, example flow).
2. Attach a chat model and a window-buffer memory (so follow-ups keep context).
3. Add a vector-store tool in "retrieve" mode pointed at the same index + namespace,
   with the same embedding model, and describe when to use it.
4. Chat to test; expand with more tools (e.g., a web-lookup or calculator) as needed.

**Watch out for:** The embedding model must match between index, ingestion, and
retrieval, or results break. Set the data-loader type to how the file actually arrives
(binary vs. JSON) or nothing gets stored. Spell the namespace identically everywhere.
Add memory or multi-turn references ("what about Q4?") will confuse the agent.

**Original example to invent:** Source chatted with a company earnings PDF. Writers
should build a RAG agent over a different document set (e.g., a product manual).
