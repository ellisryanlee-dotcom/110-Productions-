---
id: kc-1001
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, chunking, text-splitting, data-curation, embeddings]
source_video: [fg0_0M8kZ8g, V_0dNE-H2gw, PEI_ePNNfJQ, c5dw_jsGNBk, mQt1hOjBH9o]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# Chunking documents for retrieval

**What:** Before text goes into a vector store it has to be broken into small pieces ("chunks"), because you can't dump a whole document into the model on every lookup — you want retrieval to return just the paragraph or list that answers the question. Chunking decides where those boundaries fall.

**Why it matters:** Chunk size is a direct lever on cost and quality. Chunks that are too large stuff the prompt with irrelevant text and can exceed what a small local model handles; chunks that are too small fragment ideas so retrieval misses context. Splitting in the middle of a paragraph or a list also degrades answers.

**The moves:**
1. Extract clean text from the source first (a document loader / extractor per file type).
2. Choose a splitter. A recursive character splitter is the common default; pick a chunk size to match your model and content (sources ran anywhere from ~100 characters for a tiny local model up to a few thousand for larger contexts).
3. Optionally attach metadata to each chunk (source file id, title, page) so you can filter, dedupe, and cite later.
4. Embed each chunk and insert it with its metadata.
5. Tune: smaller chunks and fewer returned results keep prompts short (important on weak hardware); larger chunks preserve more context.

**Watch out for:** A fixed-size character split can cut through paragraphs and tables. Very small chunks can shatter a table so a lookup only ever retrieves part of it. Match chunk size to the embedding model's limits and to how much context the answering model can afford.

**Original example to invent:** Sources chunk meeting notes and framework docs. Demonstrate on a different corpus (e.g., product manuals) and show how answer quality shifts between a too-small and a reasonable chunk size.
