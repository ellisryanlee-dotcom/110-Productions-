---
id: kc-0835
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [wiki, indexes, backlinks, obsidian, markdown, second-brain]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Topic wikis with indexes and backlinks

**What:** A level-2 knowledge structure where ingested material (transcripts, meeting
notes) is organized into a wiki of interlinked topic pages with index pages, so an agent
can start at an index, drill into a concept, and follow "see also" links to related
pages, reading each page in full.

**Why it matters:** It lets you pull together everything on a topic and follow a trail of
related ideas, which is more useful than isolated files. Because it's just markdown, a
tool can generate it automatically when you tell it to ingest a source into the wiki.

**The moves:**
1. Have the agent ingest a source and auto-create topic pages (concepts, comparisons,
   sources, techniques) plus indexes.
2. Route to the wiki from your instructions file so the agent knows to start at an index
   and drill down.
3. Optionally view the markdown as a graph in a visualizer — but only if the visual
   actually helps you; the retrieval works without it.

**Watch out for:** Wiki backlinks are "see also" connections, not typed relationships —
they show that pages relate, not how (endorsed-by, competitor-of, etc.). To follow a
trail the agent reads whole pages, which is heavier than pulling a targeted snippet. As it
grows large, quality can degrade.

**Original example to invent:** Source kept separate wikis for video transcripts and
meeting notes. Writers should describe a wiki over different source material.
