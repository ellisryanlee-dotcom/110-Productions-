---
id: kc-0318
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-base, maintenance, linting, health-check, data-quality]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: medium
---
# Linting a knowledge base with LLM health checks

**What:** Periodically have the LLM run a "lint" over the whole wiki — a health
check that finds inconsistent data, fills gaps with web searches, surfaces
interesting new connections, and flags candidates for new source articles. It's
maintenance-as-a-pass rather than continuous re-indexing.

**Why it matters:** As a knowledge base grows, it drifts — duplicate concepts,
missing links, stale facts. A scheduled lint keeps it consistent and structured so
it stays queryable, and it can proactively tell you where your knowledge is thin.

**The moves:**
1. On a cadence (daily/weekly/on demand), ask the LLM to review the wiki for
   inconsistencies and missing data.
2. Let it impute gaps via web search where appropriate.
3. Have it propose new connections between existing pages and suggest new source
   material to ingest.
4. Let it ask you clarifying questions when it can't resolve something itself.

**Watch out for:** This is the wiki's substitute for re-embedding — it's cheaper
but relies on the model's judgment, so review its proposed changes rather than
auto-applying blindly.

**Original example to invent:** Source described linting an AI-research vault.
Writers should show a lint pass catching a concrete inconsistency in a different
base.
