---
id: kc-0846
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, embeddings, vector-database, knowledge-base]
source_video: JWfNLF_g_V0
source_video: PEI_ePNNfJQ
source_video: fg0_0M8kZ8g
source_video: mQt1hOjBH9o
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# What RAG is and when to reach for it

**What:** Retrieval-augmented generation (RAG) is a technique for giving a language
model external knowledge that you curate yourself, so it can answer accurately about
things outside its training data — your documents, a product catalog, a software
framework, internal processes, and so on. At query time the relevant pieces of your
curated data are retrieved and fed into the model's prompt alongside the question.

**Why it matters:** A base model's knowledge is general and frozen at its training
cutoff, and web-search alone often returns thin results. Pasting whole documents into
a prompt every time is impractical and pollutes context. RAG lets the model become a
domain expert on data you control without retraining it.

**The moves:**
1. Curate source data (documents, pages, transcripts) into a clean text form.
2. Split it into chunks and convert each chunk to an embedding vector.
3. Store the vectors in a vector database.
4. On a user question, embed the question, retrieve the most similar chunks, and pass
   them to the model so it reasons over real, relevant context.

**Watch out for:** The data-preparation (curation + chunking) step is the hardest and
most important part — bad chunks or missing context produce bad answers regardless of
model quality. Basic RAG can also miss context it needs (see agentic RAG).

**Original example to invent:** Sources demoed a docs-expert agent and meeting-notes
lookups. Writers should pick a fresh domain (e.g., a hobby wiki or an internal policy set).
