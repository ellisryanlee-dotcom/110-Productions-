---
id: kc-1204
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, tabular-data, csv, excel, sql, agentic-rag, postgres]
source_video: T2QWhXpnT5I
source_channel: "@ColeMedin"
source_views: "109K"
confidence: high
---
# Handling tabular data in RAG: store rows as JSON, let the agent write SQL

**What:** Plain vector RAG handles spreadsheets and CSVs badly — retrieval only pulls a few chunks, so the agent rarely sees all rows, and LLMs are poor at arithmetic over raw text. The fix is to also store each row as a structured record and give the agent a tool that runs SQL against those rows, so it can compute aggregates (averages, counts, filters) exactly.

**Why it matters:** Questions like "what's the average rating?" or "who attended the Feb 12 meeting?" fail on similarity search alone, especially at scale where the relevant cell and its label live in separate chunks. Letting the agent query structured rows makes numeric and lookup questions reliable.

**The moves:**
1. Keep a single shared rows table with a JSON column, so tables of any shape store in one place (each row's columns become key/value pairs in the JSON).
2. On ingest of a spreadsheet/CSV, insert every row into that JSON column, AND still add a text summary of the table into the vector store for ordinary lookups.
3. Record each table's column schema in the document-metadata table so the agent knows what fields exist.
4. Give the agent a query tool that generates SQL over the JSON rows; include example queries in the tool description so it writes valid ones.
5. Let the agent choose: simple lookups → vector search; math/filtering over a table → SQL.

**Watch out for:** Smaller local models sometimes generate bad SQL; example queries in the tool prompt reduce this sharply. There are many valid granularities (one record per row, per N rows, per table) — pick per use case.

**Original example to invent:** The source analyzes fake maritime-company feedback and maintenance tables. Use a different dataset (e.g., invented sales-pipeline and inventory sheets) to show an average/aggregate answered via generated SQL.
