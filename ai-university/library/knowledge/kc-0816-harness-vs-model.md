---
id: kc-0816
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agentic-coding, harness, models, tokens, pricing]
source_video: 99VHENEKA9o
source_channel: "@nateherk"
source_views: "209K"
confidence: high
---
# Harness vs model in agentic coding

**What:** In agentic coding tools, the harness (the tool) and the model (the AI) are
separate levers: the harness shapes how work flows — planning, sub-agents, file
access, terminal commands — while the model sets the quality ceiling. The tools
themselves are typically free; what you pay for is model token usage.

**Why it matters:** People argue "tool A vs tool B," but the same tool feels
completely different with a weak versus a strong model, and a great model still
needs a good harness to reach its ceiling. Separating the two clarifies both your
cost (tokens) and your quality (model choice).

**The moves:**
1. Treat the tool as the workflow layer and the model as the capability layer.
2. When comparing outputs, hold the model roughly constant, or note which model
   each tool ran.
3. Budget around tokens, not a per-seat tool fee, since heavy use burns limits fast.
4. Swap in a cheaper/open model to cut cost, accepting a lower ceiling.

**Watch out for:** Token usage can spike unexpectedly (caching bugs, long sessions),
draining plan limits far faster than expected — context/token management is the
transferable skill regardless of which tool you pick.

**Original example to invent:** Explain the harness/model split using different
tools or models than the two the source compared.
