---
id: kc-1005
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, tabular-data, sql, jsonb, csv, agentic-rag]
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "186K"
confidence: high
---
# Making spreadsheets queryable as SQL inside a RAG agent

**What:** Text RAG can't reliably answer analytical questions over a table ("which month had the most new customers?") because a vector lookup only ever pulls a slice of rows. The fix is to store each spreadsheet's rows in a database so the agent can run real structured queries against them, while also chunking a text version for ordinary lookups.

**Why it matters:** Sums, maxima, group-bys, and filters require the whole table, not a sampled chunk. Giving the agent the ability to query rows directly unlocks genuine data analysis that plain retrieval can never do.

**The moves:**
1. When a CSV/Excel file comes in, branch the pipeline: parse it into rows.
2. Store every row in a shared rows table, keeping the row's fields in a flexible JSON column and tagging each with the file id — this avoids creating a new SQL table per file while still allowing queries.
3. Record the file's column headers as a schema in the document's metadata record.
4. In parallel, aggregate the rows into a text document and chunk it into the vector store like any other document (so lookups still work).
5. Give the agent a query tool: it first reads the metadata to learn the schema, then writes a query against the JSON rows filtered by file id.

**Watch out for:** A bare schema (column names only) doesn't tell the agent data types, so it may try to sum a column that actually holds strings with currency symbols. Provide query examples in the tool description and consider typing hints. This is a template to extend, not a finished analytics engine.

**Original example to invent:** Use a metrics-by-month table and ask an aggregation question, showing the agent reading the schema then writing a group-by query — on data you generate, not the source's.
