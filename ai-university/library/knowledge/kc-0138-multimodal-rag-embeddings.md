---
id: kc-0138
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, multimodal-embeddings, gemini, pinecone, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Multimodal RAG with an agentic coding tool

**What:** Using a natively multimodal embeddings model (e.g., Gemini's embedding model) plus a vector database (e.g., Pinecone), you can build a knowledge base that stores text, images, video, and audio in one space and retrieves across all of them by meaning. In an agentic coding tool you set this up largely by describing it in natural language — the agent builds the ingestion pipeline and a chat app.

**Why it matters:** Multimodal ingestion pipelines are painful to hand-build (chunking, capturing images, storing/retrieving), but here you drop in files and ask the agent to make them searchable. Retrieval returns the right media — e.g., a diagram from a manual, or similar past project photos with metadata.

**The moves:**
1. Give the agent the embeddings API docs and ask it to build a pipeline into your vector DB, with an env file for keys (embeddings, vector DB, model gateway).
2. Drop mixed media into a data folder; the agent chunks/embeds and inserts, each item placed by meaning.
3. Have it build a simple chat app to query; sources come back with page/confidence scores and inline media.
4. Improve retrieval quality with good descriptions/metadata on images, video, and audio — this is where domain expertise matters.
5. Ask follow-ups; the agent pulls related items and metadata.

**Watch out for:** There are per-request media limits (e.g., video length and format, images per request). Retrieval is only as good as the descriptions you attach to non-text media. Made-up demo data looks plausible but isn't real — ground it in your own data.

**Original example to invent:** The source indexes a vacuum-cleaner manual and roofing photos. Build a multimodal knowledge base for a different domain (e.g., appliance repair) with your own media and metadata.
