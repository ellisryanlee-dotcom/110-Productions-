---
id: kc-0235
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vector-database, embeddings, text-splitting, retrieval]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# RAG and vector databases explained

**What:** Retrieval-augmented generation (RAG) combines retrieval and generation: when
you ask a question, the system first retrieves relevant information from an external
source (rather than relying on the model's training data), then the model generates an
answer grounded in that retrieved information. The external source is typically a
vector database, which stores text as vectors — numeric representations of meaning — in
a multi-dimensional space so that semantically similar items sit near each other (a
query about "cars" can surface "vehicles"/"automobiles"). Getting text in requires
embedding, and long documents are first chunked by a text splitter.

**Why it matters:** RAG makes an assistant accurate and current on specialized or
frequently-changing information (e.g., internal policies) instead of guessing from
stale training data. Vector search retrieves by meaning, not exact keyword match, which
is what makes retrieval robust.

**The moves:**
1. Convert source documents into vectors (embeddings) and store them in a vector DB.
2. Split long documents into chunks before embedding.
3. On a query, embed it and retrieve the nearest (most similar) vectors.
4. Feed the retrieved chunks to the model to generate a grounded answer.
5. Pick a text splitter to fit the goal: fixed-character, recursive-character
   (splits at natural breaks — a good default), or token-based (aligned to how the
   model reads text).

**Watch out for:** Retrieval quality depends on sensible chunking — cutting sentences
mid-thought hurts meaning, so recursive-character splitting is often preferred. Vector
DBs handle unstructured, meaning-based search, unlike a keyword/relational lookup. The
source uses an animals-similarity picture to illustrate vector space — describe such an
analogy in your own words.

**Original example to invent:** Source framed it around company internal policies.
Writers should motivate RAG with a different specialized-knowledge scenario.
