---
id: kc-1125
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [conductor, orchestrator, workflow-modes, parallel-agents, oversight]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# Conductor vs orchestrator modes

**What:** Two modes for how an engineer works with a coding assistant. As the conductor, you steer nearly every move at the individual-file level — closer to tab-completion, granular oversight. As the orchestrator, you hand the agent much larger tasks that span whole codebases (or several), run agents in parallel, and review outcomes rather than individual changes.

**Why it matters:** It's a useful mental model for scaling output, and for organizations moving traditional engineers into agentic work. The source's own take: the vendor argues you move back and forth between both modes; Cole is skeptical, arguing that once your harness is reliable you can mostly live in the orchestrator mode and graduate out of constant conducting.

**The moves:**
1. Use orchestrator mode for large, well-specified work you can review at the outcome level.
2. Drop to conductor mode for deep debugging or initial exploration where you need to guide closely.
3. As your harness matures, spend more time orchestrating and less conducting.

**Watch out for:** Staying in conductor mode by default wastes the leverage of a good harness. But blindly orchestrating unfamiliar or under-specified work invites errors you won't catch until late.

**Original example to invent:** Source debates a vendor's claim. Give your own example of a task where you'd conduct vs one where you'd orchestrate.
