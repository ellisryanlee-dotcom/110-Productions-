---
id: kc-0316
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-base, ingestion, indexing, claude-code, markdown]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: high
---
# Setting up the raw-to-wiki ingest pipeline

**What:** The concrete structure and flow that makes an LLM wiki work: a raw
input folder, a wiki output folder, and three connective files — an index (a
navigable table of all pages grouped by type), a log (the operation history of
every ingest), and a project-instructions file telling the LLM how to search and
update the vault.

**Why it matters:** The index and instructions file are what let the LLM navigate
efficiently without re-reading everything; the log gives you an audit trail as the
base grows. This scaffolding is the difference between an organized base and a
pile of files.

**The moves:**
1. Hand the LLM the wiki spec and ask it to implement the full structure and
   schemas step by step.
2. Let it generate the project-instructions file, the index, the log, and initial
   category folders (e.g., sources, people, organizations, concepts, analysis).
3. Add a source to raw; when ingesting, first give the LLM context about the
   project's purpose so it organizes appropriately.
4. Answer its clarifying questions (focus, granularity) to steer how it chunks and
   links.
5. After each ingest, the LLM appends to the log and updates the index.

**Watch out for:** One ingest can create many linked pages (not one file per
source) and can take many minutes for a rich document — be patient. Give purpose
context up front so structure fits the use case.

**Original example to invent:** Source ingested an article and a batch of
transcripts. Writers should walk a first ingest of a different single document.
