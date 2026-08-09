---
id: kc-1002
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, chunking, semantic-chunking, docling, embeddings]
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Semantic (hybrid) chunking with an embedding model

**What:** Instead of splitting text at fixed character counts, hybrid chunking uses an embedding model to decide the boundaries — grouping sentences and paragraphs that are semantically similar so each chunk keeps a coherent idea intact, while still respecting a maximum token size per chunk.

**Why it matters:** Fixed-size splitting can cut through the middle of a thought and separate a heading from its content. Letting semantic similarity guide the split keeps related ideas together, so retrieval returns self-contained, useful pieces. In practice this yields chunks that preserve sections, keep bullet lists whole, and carry their titles.

**The moves:**
1. Extract the document into a structured form (a parsing library that emits a document object with headings, tables, sections).
2. Create a hybrid chunker, configuring the embedding model and a maximum token limit per chunk.
3. Run the chunker over the document object; it returns ready-to-store chunks of varying sizes within your token cap.
4. Optionally pull "contextualized" text so each chunk also carries its headings/subheadings.
5. Embed the chunks and insert them into the vector store.

**Watch out for:** You still set a max token size, so extremely long sections get divided. Results vary by embedding model. Semantic chunking costs embedding calls up front, but it front-loads work that pays off in retrieval quality.

**Original example to invent:** Contrast hybrid chunking against a naive fixed-size split on the same structured document (one with headings, a table, and lists) and show which one keeps a section intact.
