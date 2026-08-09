---
id: kc-0955
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, embeddings, vector-database, chunking, retrieval]
source_video: [p0FERNkpyHE, _R-ff4ZMLC8]
source_channel: "@ColeMedin"
source_views: ["168K views", "133K views"]
confidence: high
---
# The naive (vanilla) RAG pipeline and its core limitation

**What:** Basic retrieval-augmented generation follows a fixed pipeline. Documents are split into bite-sized chunks; an embedding model turns each chunk into a vector; the vectors are stored in a vector database. At query time, the user's question is embedded with the same model and matched (via vector math) to the most similar chunks, which are pasted into the prompt as extra context. The LLM then answers using that augmented prompt — hence "retrieval augmented generation."

**Why it matters:** This is the default way to give an LLM knowledge it wasn't trained on, and it works for simple lookups. But it is a one-shot, inflexible process: context is force-fed as a preprocessing step, so the model must answer with whatever was retrieved, whether or not it was the right material. It cannot refine its search, look somewhere else, or decide it needs more.

**The moves:**
1. Chunk documents into small, self-contained pieces.
2. Embed each chunk with an embedding model; store vectors in a vector DB.
3. At query time, embed the question with the same model.
4. Retrieve the top-N most similar chunks and inject them into the prompt.
5. Generate the answer from the augmented prompt.

**Watch out for:** One-shot retrieval fails when the answer spans a whole page or a long example rather than a small snippet, and when the top matches are the wrong text. Chunk size and retrieval count materially affect quality.

**Original example to invent:** The source used product/company documents and a docs Q&A. Writers should pick a different corpus (e.g., an HR policy handbook) and walk one question through the five steps with their own content.
