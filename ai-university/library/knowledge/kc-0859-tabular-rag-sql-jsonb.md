---
id: kc-0859
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [tabular-data, sql, jsonb, csv, agentic-rag, supabase]
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "186K"
confidence: high
---
# Query CSV/Excel data in RAG via SQL over a JSONB rows table

**What:** Spreadsheets need different treatment than prose. Instead of only chunking a table
as text, store each row in a rows table with the row's fields in a flexible JSONB column,
and give the agent a tool to write SQL against it — so it can compute sums, maximums, and
group-bys that plain retrieval can't.

**Why it matters:** RAG retrieves a handful of chunks, so for a large table it might pull
only a fraction of the rows and miss the record you asked about (e.g., the month with the
most customers). Real analytical questions need the whole table queried, not sampled.

**The moves:**
1. When ingesting a CSV/Excel file, take two paths in parallel: (a) turn the rows into a
   text document and chunk it for normal RAG, and (b) insert each row into a rows table with
   its data stored in a JSONB column keyed by the file/dataset ID.
2. Derive the table's schema (column headers) and store it on the file's metadata record so
   the agent knows what columns exist.
3. Give the agent a SQL tool; instruct it (with examples) to read the schema first, then
   write a query filtering by dataset ID and selecting/aggregating from the JSONB.

**Watch out for:** Using a single JSONB rows table avoids creating a new SQL table per file,
but the schema record may not capture column types — the agent might sum a string with a
dollar sign. It's a starting template; harden the prompt and schema for your data.

**Original example to invent:** Source queried a fake monthly-metrics sheet. Writers should
use a different dataset and different aggregate questions.
