---
id: kc-0329
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [ollama, local-models, claude-code, self-hosting, privacy]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Running a local model in Claude Code via Ollama

**What:** Ollama runs open-source models on your own machine. You download it,
pull a model, and then launch Claude Code pointed at that local model — so all
inference happens on your desktop: free to run, fully private, and unconstrained by
subscription limits.

**Why it matters:** It's the cheapest and most private way to use the Claude Code
harness, ideal for high-volume low-stakes work or when you're rate-limited or the
hosted service is down.

**The moves:**
1. Install Ollama for your OS.
2. Pick a model (browse Ollama's or a router's rankings; check its sizes, context
   window, and capability tags like tools/thinking/vision).
3. Pull the model locally with the pull command; larger models download slower and
   need more RAM.
4. Use Ollama's "launch Claude" command and select the pulled model, which starts
   Claude Code running on that local engine.
5. Unsure which size to run? Ask the agent for a recommendation given your
   hardware specs.

**Watch out for:** Local inference is noticeably slower than a hosted API, and you
may lose visibility into tool calls with smaller models (it can appear to "spin"
until it answers). Model quality is bounded by what your hardware can hold —
bigger/smarter models need more RAM/GPU.

**Original example to invent:** Source pulled a mid-size open model for a demo.
Writers should walk a local run with a different model and task.
