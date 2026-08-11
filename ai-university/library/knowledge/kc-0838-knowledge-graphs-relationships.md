---
id: kc-0838
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-graph, entities, relationships, graph-rag, second-brain]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: medium
---
# Knowledge graphs for typed relationships

**What:** A level-4 structure that stores information as entities (people, companies,
projects) connected by typed relationships (works-at, endorsed-by, competitor-of), so you
can trace how things relate rather than just that they're linked.

**Why it matters:** Unlike a wiki's "see also" backlinks, a knowledge graph encodes the
meaning of each connection, letting you follow relationship chains — ask about entity X
and trace back to entity A. It can also be more lightweight to query than reading whole
wiki pages, since you follow specific edges instead of ingesting full files.

**The moves:**
1. Identify the entities and the relationship types that matter for your domain.
2. Feed the system enough data; the graph software is usually good at embedding and
   building the relationships automatically.
3. Solve the real bottleneck — getting enough rich data in — often via structured
   interviews (see the interview-to-extract card).
4. Choose a graph layer when your work is relationship-heavy (e.g., a large CRM of clients
   and businesses); skip it when routing + wikis already meet your needs.

**Watch out for:** Knowledge graphs are typically the most complex and can be the most
expensive (open-source options exist). Don't adopt one without a genuine need for
relationship chains. Overly dense graphs get hard to navigate/visualize.

**Original example to invent:** Source graphed his own business entities. Writers should
model a different domain's entities and typed relationships.
