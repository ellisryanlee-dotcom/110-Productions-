---
id: kc-1049
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, tabular-data, csv, excel, chunking, n8n]
source_video: [T1ZKEmDN8AA, T2QWhXpnT5I]
source_channel: "@ColeMedin"
source_views: ["124K views", "109K views"]
confidence: high
---
# Choosing how to ingest spreadsheets and CSVs into a knowledge base

**What:** Tabular files don't map cleanly to text chunking, so you must decide how to represent rows before embedding — options range from treating the whole table as one text blob to storing one record per row.

**Why it matters:** Plain vector RAG handles tables poorly. Retrieval pulls a few chunks that may only cover part of a table, and language models are weak at arithmetic over data shown in a prompt, so questions like averages or totals fail. How you ingest tabular data determines whether such questions are answerable at all.

**The moves:**
1. Extract the table into structured rows.
2. Pick a representation strategy based on use case: flatten the whole table into a single text string to chunk like a document (simplest), create one embedded record per row, or group several rows per record.
3. For analytical questions (aggregations, math), also store the raw rows in a structured column so an agent can query them directly rather than relying on vector similarity.
4. Keep the choice matched to expected query patterns — lookup-a-row vs. compute-over-all-rows.

**Watch out for:** Treating a large table as one blob loses row-level precision; one-record-per-row can flood retrieval. There is no universal right answer — it depends on table size and the questions asked.

**Original example to invent:** Source used feedback/maritime sample data. Writers should invent a different dataset and a different analytical question.
