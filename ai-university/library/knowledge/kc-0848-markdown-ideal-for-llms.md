---
id: kc-0848
type: concept
track: "Track 7 — Data In: Scraping & Research"
topics: [markdown, data-curation, llm-input, preprocessing]
source_video: JWfNLF_g_V0
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "450K"
confidence: high
---
# Markdown is the ideal format for feeding documents to an LLM

**What:** Before putting source data into a knowledge base or a prompt, convert it to
clean markdown rather than leaving it as raw HTML, PDF binary, or other messy formats.
Markdown is compact, structured (headings, lists, tables), and human-readable, which
makes it easy for a model to parse.

**Why it matters:** Raw HTML is full of tags, scripts, and redundant markup; PDFs and
Office files are binary. Feeding that noise to a model wastes context and invites
hallucination. A rule of thumb: if a format is hard for a human to read, it is usually
harder for a model too.

**The moves:**
1. Extract the meaningful content and strip irrelevant markup/boilerplate (nav, scripts,
   headers/footers).
2. Represent structure as markdown — headings, bullet lists, and tables.
3. Use that markdown as the unit you chunk and embed.

**Watch out for:** Preserving tables and structure matters; a naive text dump can merge
columns or lose hierarchy. Tools exist to do this conversion reliably (web crawlers,
document parsers) rather than hand-rolling it.

**Original example to invent:** Sources converted framework docs and PDFs to markdown.
Writers should demonstrate on a different messy source (e.g., a scraped forum thread).
