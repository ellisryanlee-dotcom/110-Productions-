---
id: kc-0836
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [semantic-search, embeddings, vectors, chunking, keyword-search]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Semantic search vs keyword matching

**What:** The difference between keyword search (returns only where an exact word
appears — X equals X) and semantic search (returns results that mean the same thing — X is
similar to X, Y, Z), the latter powered by embedding text chunks into a space where
proximity represents meaning.

**Why it matters:** Keyword search misses relevant material phrased differently. Semantic
search retrieves by intent, so a query surfaces conceptually related content even without
matching words — essential when you search using different words than you wrote.

**The moves:**
1. Chunk a document, run each chunk through an embeddings model, and store the vectors.
2. Similar-meaning chunks land near each other in the vector space.
3. At query time, embed the query and pull the nearest chunks by similarity.
4. Improve results with metadata, hybrid search, and re-ranking when needed.
5. Use it when you have lots of text and need a specific, similar snippet (e.g., "what
   was rule 17?" out of a thousand rules).

**Watch out for:** Semantic retrieval returns snippets, not whole documents — great for
targeted lookups, weak for anything needing full context (see the vector-context-loss
pitfall). It's not magic; tune chunking and metadata.

**Original example to invent:** Illustrate similarity vs exact-match with a different
query and corpus than the source's.
