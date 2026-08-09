---
id: kc-1218
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, embeddings, fine-tuning, domain-adaptation, retrieval]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Fine-tuning embedding models for a domain

**What:** Just like LLMs, embedding models can be fine-tuned on a domain-specific dataset (legal, medical, etc.). This applies to both indexing and query embedding. A fine-tuned smaller/open embedding model can outperform a larger generic one on your specific data (reported accuracy gains in the ~5–10% range).

**Why it matters:** Generic embeddings encode generic notions of similarity, which may not match what "relevant" means for your domain — sometimes you want similarity based on sentiment or a domain relation rather than surface semantics. Fine-tuning reshapes the similarity space to your use case.

**The moves:**
1. Assemble a domain training set that encodes the notion of similarity you actually want (e.g., sentiment-based rather than topic-based).
2. Fine-tune an embedding model on it.
3. Use the same fine-tuned model for both indexing and querying.

**Watch out for:** Requires substantial training data plus ongoing infrastructure and maintenance since you now own an embedding model. Justified when you have the data and generic embeddings underperform on your domain's notion of relevance.

**Original example to invent:** Illustrate two texts that a generic model rates similar but a domain-tuned model separates (or vice versa), using an invented domain — abstractly, not the source's exact sentences.
