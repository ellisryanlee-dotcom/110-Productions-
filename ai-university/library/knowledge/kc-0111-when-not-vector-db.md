---
id: kc-0111
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [vector-database, relational-database, sql, structured-data, retrieval]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# When NOT to use a vector database

**What:** Vector databases became a buzzword and get overused. They shine for unstructured data — large bodies of text chunked and retrieved by meaning (semantic search). But much business data is structured (rows and columns with a predictable schema), and for that a relational database queried with SQL gives faster, exact retrieval.

**Why it matters:** Choosing the wrong store hurts accuracy and speed. Structured records (customers, orders, invoices, sheets) need precise filtering, not fuzzy similarity; vectorizing them adds cost and imprecision. Knowing the difference is a key craft decision.

**The moves:**
1. Classify the data: does it fit cleanly into rows/columns (structured) or is it free-form text (unstructured)?
2. For structured data needing exact lookups or joins, use a relational database and SQL (select the needed columns, filter on exact conditions).
3. For large text where meaning matters more than exact wording, use a vector database and semantic retrieval.
4. Recognize the semantic advantage: a vector store can surface a "fuzzy blanket" from descriptions like "cozy fleece" even when the literal word isn't present — a keyword/relational match would miss it.
5. Mix both when a system needs exact records and meaning-based recall.

**Watch out for:** Don't default to vectors just because they sound advanced. Semantic search returns approximate neighbors — wrong for anything requiring exactness (IDs, amounts, dates). SQL over structured data is both faster and more reliable at scale.

**Original example to invent:** The source contrasts a blanket product table (relational) with a blanket vector store answering "fuzzy." Use a different catalog (e.g., footwear) to show when exact filtering beats semantic search and vice versa.
