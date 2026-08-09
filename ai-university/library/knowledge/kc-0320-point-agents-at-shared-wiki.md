---
id: kc-0320
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, context-management, knowledge-base, hot-cache, agent-memory]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: high
---
# Pointing an agent at a shared wiki (and using a hot cache)

**What:** Once a markdown wiki exists, other agents can use it as external memory.
In the consuming agent's project-instructions file you record the wiki's path and
tell the agent to read the index, any sub-indexes, and relevant pages only when it
actually needs business/personal knowledge it doesn't already have. A "hot" cache
file (a few hundred words of the most recent context) can front the wiki so the
agent often avoids crawling pages at all.

**Why it matters:** Sharing one wiki across agents avoids duplicating context into
every project, and it measurably cut token usage compared with stuffing static
context files into the project. The hot cache further reduces reads for
fast-moving recent context.

**The moves:**
1. In the consumer's instructions file, record the wiki directory path.
2. Instruct it to consult the wiki (index → sub-index → pages) only when it lacks
   needed knowledge, and list what it already knows so it doesn't over-read.
3. Give it the wiki's own instructions file so it understands the structure.
4. Optionally maintain a small hot-cache file of the latest relevant snippet that
   the agent checks first.

**Watch out for:** Not every project needs a hot cache — it helps for a live
assistant tracking recent events, but adds noise for a static reference corpus.
Tell the agent explicitly *not* to read the wiki unless required, or you lose the
token savings.

**Original example to invent:** Source wired an executive-assistant agent to a
personal-brain vault. Writers should connect a different agent to a shared
knowledge folder.
