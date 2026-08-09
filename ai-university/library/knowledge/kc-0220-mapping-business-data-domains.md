---
id: kc-0220
type: how-to
track: "Track 10 — The Business of Automation"
topics: [data-sources, connections, planning, business-mapping]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: medium
---
# Mapping your business data sources before you connect anything

**What:** A planning exercise done on paper before onboarding an agent: list the
seven tier-one domains you actually track month to month and, under each, the specific
tools where that data lives. The seven domains are revenue, customer, calendar, comms,
tasks, meetings, and knowledge (which group loosely into ops, comms, data, planning).

**Why it matters:** You can't wire connections you haven't identified. Sketching the
domains and their tools first reveals exactly which integrations you'll need and
keeps you from forgetting core data sources mid-build. A useful readiness test: if
someone could ask an agent with all this data most of the questions they'd ask you,
you're ready to build.

**The moves:**
1. For each of the seven domains, write down the tool(s) that hold that data.
2. Example mapping: revenue → billing/community/accounting; comms → email + internal
   chat + vendor chat; meetings → your transcription tool; knowledge → docs, drive,
   local files.
3. Do this in your head/on paper first, before onboarding, so nothing's missed.
4. Start with the highest-use core sources; add the rest over time.
5. For each tool, note how it can connect (MCP, API, or CLI) — there's always a way.

**Watch out for:** You won't get it perfect on the first pass — start small and add.
Some tools have MCP servers, some only APIs; if nothing exists, a browser automation
is the fallback. The mapping is a prerequisite for the Connections pillar, not the
whole build.

**Original example to invent:** Source mapped a creator/education business. Writers
should map the seven domains for a different business (e.g., an agency or e-commerce
store).
