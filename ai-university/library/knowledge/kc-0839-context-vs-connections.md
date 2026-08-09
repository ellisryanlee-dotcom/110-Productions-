---
id: kc-0839
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [second-brain, ingestion, evergreen-data, data-hygiene, routing]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Evergreen context vs volatile connections

**What:** A rule for deciding what to actually ingest into a second brain: distinguish
"context" (evergreen, holistic, locked-in information — decisions, quarterly objectives,
how the business works) from "connections" (volatile, changing data — Slack threads,
emails, live customer records). Ingest the evergreen; leave the volatile accessible but
un-ingested.

**Why it matters:** Dumping fast-changing data into your knowledge base turns it into
noise you must constantly prune. A second brain is most useful holding what will still be
worth remembering in a year, while knowing where to fetch live data on demand.

**The moves:**
1. Before ingesting, ask: will this still be valuable to have in here a year from now?
2. Ingest evergreen context; keep volatile "connections" out of the store.
3. Ensure the brain has routing/access to fetch live data when asked, without permanently
   storing it.
4. Let a vague question cascade: check the objectives/context files, then the wiki/meeting
   notes, then finally pull real-time data from the live source if needed.

**Watch out for:** Ingesting volatile data means recurring cleanup and degraded signal.
The test of a real second brain is whether it knows where data lives and in what order to
look — not whether it has hoarded everything.

**Original example to invent:** Source split quarterly objectives (context) from live
CRM/Slack data (connections). Writers should apply the split to a different business.
