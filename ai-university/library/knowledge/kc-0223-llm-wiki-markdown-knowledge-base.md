---
id: kc-0223
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-base, llm-wiki, markdown, obsidian, rag-alternative]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: high
---
# The markdown "LLM wiki" knowledge base (a lightweight RAG alternative)

**What:** A knowledge-base pattern (popularized by a well-known researcher — describe
attribution generically) where, instead of a vector database, you give the agent a
folder of well-organized markdown files. Raw source documents go in a "raw" folder;
the agent reads them and produces interlinked wiki pages plus an index file and a log
file. The agent navigates by reading the index and following links, not by similarity
search. A visual markdown editor can sit on top purely to see the relationship graph.

**Why it matters:** At small-to-medium scale (hundreds of pages / up to ~a million
words) the agent auto-maintains index files and summaries well enough that you don't
need embeddings, a vector DB, or a chunking pipeline. Cost is basically just tokens,
maintenance is running a "lint," and you get relationship-based understanding (links)
rather than "these chunks look similar." Users report large token-usage reductions on
querying versus scattered files.

**The moves:**
1. Create a vault with a raw folder (inputs) and a wiki folder (agent output).
2. Give the agent the pattern/instructions and let it build the schema, index, and log.
3. Drop a source into raw and tell it to ingest; it splits the source into multiple
   linked pages and updates the index and log.
4. Query by pointing any agent at the folder + instruction file so it reads the index
   and follows links; optionally keep a small "hot cache" of recent context.
5. Periodically "lint": find inconsistencies, fill gaps via research, suggest new
   links/pages.

**Watch out for:** It doesn't scale to enterprise (millions of docs) — there,
traditional semantic-search/RAG wins. A "hot cache" helps for an assistant but is
unnecessary for a pure reference project. Ingests can take many minutes for rich
sources. The visual editor is optional; the value is the markdown + index, not the UI.

**Original example to invent:** Source ingested video transcripts and a long research
article. Writers should build a wiki from a different corpus (e.g., a company's SOPs)
and describe the "compounding knowledge" analogy in their own words.
