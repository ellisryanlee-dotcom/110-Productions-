---
id: kc-0726
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, google-sheets, queue, status-column, orchestration]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Use a Google Sheet as a job queue

**What:** A pattern for feeding a workflow one task at a time from a spreadsheet.
The sheet has a status column (e.g., "to do" / "created") and other data columns.
The workflow reads rows filtered to status = "to do", returns only the first
matching row, processes it, and at the end updates that row's status (matching on
row number) so it won't be picked up again.

**Why it matters:** It gives a simple, visible queue with state you can read at a
glance, and guarantees one-at-a-time processing even when you have many pending
ideas. The status column doubles as both the trigger condition and the record of
what's done.

**The moves:**
1. Structure the sheet with a status column plus your data columns.
2. In the read node, filter where status equals your "pending" value.
3. Set the node to return only the first matching row so one job runs per
   execution.
4. Capture the row number early so you can target the same row later.
5. At the end, update that row's status (match on row number) to mark it complete
   and write back any results/links.

**Watch out for:** Column names and values must match exactly for an imported
template to work. Returning all rows instead of the first will process everything
at once — keep it to one. Update by row number to avoid touching the wrong row.

**Original example to invent:** Apply the sheet-as-queue pattern to a non-video
task (e.g., outreach messages) and specify the status values and columns.
