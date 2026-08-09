---
id: kc-0006
type: how-to
track: "Track 8 — Applied Automations"
topics: [content-generation, social-media-automation, web-search-api, google-sheets, scheduled-workflows]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Research-to-social-post content workflow

**What:** A content pipeline that pulls one "to-do" topic from a tracking spreadsheet, runs a live web search on that topic through a search API (e.g., Tavily), feeds the results into a model with a persona/format system prompt to draft a post, writes the finished post back into the same spreadsheet row, and flips that row's status so it isn't reprocessed.

**Why it matters:** Anchoring content generation to a spreadsheet queue, rather than a one-off manual prompt, turns it into something that can run unattended on a schedule and scale to many topics without an operator re-triggering anything by hand.

**The moves:**
1. Store topics as rows with at least a topic field and a status field; query only rows still marked "to-do," and constrain the query to return a single row at a time so each run processes exactly one topic.
2. Call a web-search API with the topic as the query to pull current, sourced information — treat this step as swappable, since multiple search providers expose the same basic query-in, results-out shape.
3. Feed the search results into a drafting model with a system prompt that defines tone, structure (hook, body, call-to-action), and how to cite sources, plus a user message containing the search results.
4. Write the draft back to the same spreadsheet row (matched by the original topic/row identifier) and update its status field so a scheduled re-run won't regenerate it.
5. Swap the manual trigger for a schedule trigger and activate the workflow once the format is dialed in, so new topics queued into the sheet get drafted automatically at a fixed time each day.

**Watch out for:** A "return only first matching row" style filter is what prevents the same topic from being reprocessed every run — without it, a scheduled workflow keeps regenerating content for every to-do row on every trigger. An under-specified drafting prompt often appends meta-commentary about why it wrote the post the way it did, which needs an explicit "output only the post" instruction to suppress.

**Original example to invent:** Source built this specifically for LinkedIn posts sourced via Tavily. Writers should build the same queue-driven research-to-draft pattern for a different output format, such as a weekly newsletter blurb or a product-update announcement.
