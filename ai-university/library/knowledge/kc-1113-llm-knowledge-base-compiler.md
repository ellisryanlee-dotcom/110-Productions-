---
id: kc-1113
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [llm-knowledge-base, second-brain, obsidian, wiki, linting, markdown]
source_video: 7huCP6RkcY4
source_channel: "@ColeMedin"
source_views: "151K"
confidence: high
---
# The LLM knowledge base as a compile pipeline

**What:** A pattern for building an agent-queryable knowledge base, structured like turning source code into a running program. Stage 1: a raw entry point where you dump unprocessed markdown (articles, papers, transcripts, or captured logs). Stage 2: a "compile" step where an LLM processes the raw material into a cleaned wiki — summaries, concept notes, and cross-links. Stage 3: the wiki is what the agent queries. A separate "lint" pass checks integrity (gaps, stale data, broken links, raw material not yet compiled). Stage 4 (runtime): the agent runs queries against the wiki.

**Why it matters:** It gives structure to a messy pile of notes so an agent can navigate it reliably, and it treats knowledge with the same rigor (build step, integrity checks) as code. Cross-links let the agent traverse related notes and synthesize more complete answers.

**The moves:**
1. Keep a raw folder as the single source of unprocessed input.
2. Run an LLM compile step that produces linked wiki articles (concepts + connections).
3. Maintain a lint/health-check pass for gaps, staleness, and broken links.
4. Query the wiki at runtime; a graph view helps humans see the link structure.

**Watch out for:** Keep raw and compiled layers distinct — don't query the raw dump directly. Broken cross-links silently degrade retrieval; the lint pass is what keeps the base trustworthy.

**Original example to invent:** Source adapts a public playbook to a note vault. Show the four stages for a different knowledge domain without reusing the source's file names or analogy wording.
