---
id: kc-0319
type: tool
track: "Elective — Model & Tool Literacy"
topics: [obsidian, markdown, visualization, knowledge-base, tooling]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: high
---
# Obsidian as a graph front end for a markdown vault

**What:** Obsidian is a free app that renders a folder of markdown files visually,
including a graph view showing files as nodes and links as edges. It's an optional
front end over the LLM wiki — the knowledge lives in plain markdown regardless; the
app just lets you see hubs, clusters, and relationships form in real time.

**Why it matters:** Seeing the graph makes structure legible: you can spot which
topics are central hubs versus isolated nodes, and watch relationships appear as
the LLM ingests. A web-clipper extension also makes it easy to pull articles
straight into the vault.

**The moves:**
1. Install Obsidian and create a new vault at a folder location.
2. Open that same folder in your coding environment so the LLM operates on the
   files while Obsidian visualizes them.
3. Use the graph view to watch pages and links populate during ingest.
4. Optionally add a web-clipper browser extension and set its save location to the
   raw folder so clipped articles land where the LLM ingests.

**Watch out for:** Obsidian is purely a viewer — it's not required for the wiki to
work; the value is the markdown files themselves. Set the clipper's default folder
to raw or clips land in the wrong place.

**Original example to invent:** Source visualized an AI-research vault. Writers
should show the graph view on a different vault's growth.
