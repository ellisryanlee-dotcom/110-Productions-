---
id: kc-0315
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-base, markdown, second-brain, claude-code, karpathy-wiki]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: high
---
# The LLM-maintained markdown wiki (a RAG alternative)

**What:** A knowledge base that is just a folder of markdown files an LLM writes
and maintains for you. You drop raw source documents into a "raw" folder; the LLM
reads them, breaks them into topical wiki pages, and links related pages together —
building a graph of concepts, people, tools, and sources automatically. You then
query it by having the LLM read an index and follow links, no vector database
required.

**Why it matters:** It makes knowledge compound instead of evaporating after each
chat. It needs no embeddings, vector store, or chunking pipeline — cost is just
tokens — and the LLM does the relationship-building you'd otherwise do by hand.

**The moves:**
1. Create a vault with a "raw" folder (source dumps) and a "wiki" folder (LLM
   output).
2. Give the LLM the spec/idea and let it scaffold the structure (project
   instructions file, an index, an operation log, topical subfolders).
3. Add sources to raw and tell the LLM to ingest; it decides how many wiki pages
   to create and how to link them (its own form of chunking).
4. Query by pointing the LLM at the index and letting it follow links to the
   relevant pages.

**Watch out for:** It shines at small scale (hundreds of pages / ~hundreds of
thousands of words). It does not scale to millions of documents across an
enterprise — past that you still want traditional RAG or a knowledge graph.

**Original example to invent:** Source built one over YouTube transcripts and one
as a personal second brain. Writers should demo a different corpus (e.g., a
reading list of research papers).
