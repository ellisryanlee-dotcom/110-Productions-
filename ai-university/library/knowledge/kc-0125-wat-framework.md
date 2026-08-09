---
id: kc-0125
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [wat-framework, workflows, tools, claude-code, architecture]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# The WAT framework: Workflows, Agent, Tools

**What:** A structure for building reliable automations in an agentic coding tool. W = Workflows: natural-language instruction files (markdown SOPs) that lay out a process — what comes in, which tools get called, what should come out, and the edge cases to handle. A = Agent: the coding model itself, which reads workflows, decides sequencing, calls tools, and handles failures. T = Tools: small code scripts (e.g., Python) that each perform one concrete action (scrape a page, generate a PDF, send an email).

**Why it matters:** It separates probabilistic reasoning (the agent) from deterministic execution (the tools), which is what makes agent-built systems dependable. Structure also prevents the mess of an unorganized project, and both workflows and tools improve over time as the agent learns from failures.

**The moves:**
1. Give the project a system-prompt file that explains the WAT layers and folder structure (workflows/, tools/, a temp folder, a secrets file).
2. Describe a goal in plain language; let the agent plan the workflow and generate the tools.
3. The agent writes workflow markdown that orders the tool calls.
4. On errors, the agent researches, fixes the tool, and updates the workflow so the failure won't recur (the self-improvement loop).
5. Reuse tools across workflows since each does one modular job.

**Watch out for:** Keep secrets (API keys) in an environment file, never hard-coded in tools. Without structure, files pile up and both you and the agent lose track.

**Original example to invent:** The source compares a workflow to a recipe and tools to individual ingredients. Describe that relationship abstractly and invent a different framing so writers don't reuse the cooking metaphor.
