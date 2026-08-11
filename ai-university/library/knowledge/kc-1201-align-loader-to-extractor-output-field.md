---
id: kc-1201
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, ingestion, document-loader, n8n, debugging]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K"
confidence: high
---
# Aligning the document loader to each extractor's output field

**What:** When you branch ingestion across file types, each type-specific extractor writes its result to a *different* output field name. The downstream document loader that splits text into chunks must read from whichever field the extractor actually populated, or it silently loads nothing.

**Why it matters:** This is an easy, invisible failure: the pipeline "runs" but the knowledge base fills with empty or wrong content, and the agent then hallucinates. It's a common early stumbling block precisely because the wiring looks correct.

**The moves:**
1. For each extractor branch, confirm the exact field name it outputs to (a plain-text extractor, a PDF extractor, and a spreadsheet summarizer commonly each use different field names).
2. In the document loader, don't hard-code one field. Reference the expected field with a fallback chain: try the first extractor's field, else the second's, else the third's.
3. Test each branch end-to-end and verify chunk count is non-zero and content looks right before trusting the store.

**Watch out for:** A zero-or-wrong result here won't throw an error — it just poisons retrieval. Always spot-check the stored chunks after wiring a new extractor branch.

**Original example to invent:** Show a debugging walkthrough where retrieval returns nothing, then trace it to a loader pointed at the wrong output field for one file type — using a different set of formats than the source.
