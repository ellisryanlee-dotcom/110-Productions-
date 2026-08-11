---
id: kc-0453
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, google-sheets, job-queue, status-flag, orchestration]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Use a spreadsheet as a job queue

**What:** A spreadsheet can serve as a simple job queue for an automation. A status column marks each row's state; the workflow pulls only rows marked to-do, processes one at a time, and writes results (and a done status) back to the same row when finished.

**Why it matters:** It gives you controllable throughput and idempotency without a real database — you can stack up hundreds of jobs and the system works through them one per run, never reprocessing completed ones.

**The moves:**
1. Add a status column to the sheet (e.g., to-do / done).
2. On each run, query for rows whose status is to-do and return just one item.
3. Process that item through the pipeline.
4. On completion, update that row: set status to done and write back any output (e.g., a final URL), matching the row by a stable column.

**Watch out for:** Match the write-back to the correct row via a reliable key column, or you'll overwrite the wrong record. Pulling one item per run keeps volume controlled but means throughput is set by how often the trigger fires.

**Original example to invent:** Source uses categories/brands with a status column. Writers should invent a different queue schema for a different content type.
