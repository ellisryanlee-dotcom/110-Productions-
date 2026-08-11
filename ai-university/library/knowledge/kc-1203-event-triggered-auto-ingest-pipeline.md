---
id: kc-1203
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, ingestion, triggers, google-drive, local-files, automation]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K"
confidence: high
---
# Event-triggered auto-ingest pipeline for a knowledge base

**What:** Instead of manually loading documents, wire a workflow that fires whenever a file is created or changed in a watched location, then runs the full ingest flow automatically. Sources can be a cloud drive folder (polled on an interval) or a local folder (watched for filesystem events).

**Why it matters:** A knowledge base is only useful if it stays current with zero manual effort. Auto-ingestion turns "drop a file in a folder" into "the agent now knows it," which is what makes the system maintainable in production.

**The moves:**
1. Add a trigger for file-created and one for file-updated on a single watched folder.
2. For cloud drives, expect interval polling (a short delay before the file is picked up). For local folders, filesystem watching fires near-instantly; enable the poll/watch options for files and folders or the trigger hangs.
3. Loop over the batch in case several files land at once.
4. Per file: set metadata (id, type, title), delete any prior version, download/read the file, extract text by type, chunk, embed, and insert.
5. Activate the workflow so triggers run unattended — manual step-runs are only for inspecting outputs while building.

**Watch out for:** Local-file triggers have been flaky on some OSes even with the right options set. Cloud polling adds latency (up to the poll interval) that local watching avoids.

**Original example to invent:** Show a folder-watch demo for an invented use case (e.g., a research team dropping reports into a shared folder), not the source's meeting-notes folder.
