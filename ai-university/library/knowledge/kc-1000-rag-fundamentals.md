---
id: kc-1000
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, embeddings, vector-database, knowledge-base]
source_video: [JWfNLF_g_V0, PEI_ePNNfJQ, fg0_0M8kZ8g, mQt1hOjBH9o, V_0dNE-H2gw]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# What retrieval-augmented generation is and when to reach for it

**What:** RAG is a technique for giving a language model access to external knowledge you curate yourself, so it can answer questions about material outside its training data. You collect documents, split them into small pieces, convert each piece into a numeric vector that captures its meaning, and store those vectors in a database. When a user asks something, you embed the question the same way, find the closest-matching pieces, and hand them to the model so it answers from your material instead of guessing.

**Why it matters:** A general model has a knowledge cutoff and no awareness of your business, your product, or any recent framework. RAG turns it into a domain expert on whatever you feed it — internal docs, meeting notes, policies, a codebase's framework docs — without retraining. It is the most common way to make an assistant reliable on private or fresh information.

**The moves:**
1. Pick the knowledge you want the model to be expert on and gather the source material.
2. Curate it: extract clean text and split into retrievable pieces (see chunking).
3. Embed each piece and store the vectors plus metadata in a vector store.
4. At query time, embed the user's question with the *same* model and retrieve the nearest pieces.
5. Pass the retrieved pieces into the model's context and let it compose the answer.

**Watch out for:** The curation step is where most of the quality comes from and where most tutorials cut corners — bad extraction or bad chunking sinks everything downstream. Retrieval can also miss when the answer needs a whole document or data spread across several documents (this is the gap agentic RAG addresses). Always use the same embedding model on ingest and on query.

**Original example to invent:** The sources make a model expert on a Python agent framework's docs and on fake meeting notes. Pick a different domain (e.g., a nonprofit's grant guidelines) and show a question the base model can't answer but the RAG version can.
