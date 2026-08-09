---
id: kc-0402
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [ollama, local-models, model-installation, claude-code]
source_video: O2k_qwZA8HU
source_span: ["5:05", "8:45"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Installing Ollama and pulling a local model to run

**What:** Ollama is a desktop application for downloading and running open-weight language models directly on your own machine. The workflow is: install the app for your OS, browse candidate models (either in Ollama's own library or by cross-referencing an external model-ranking site for a given use case, like programming), pull (download) a chosen model by name, and talk to it directly from a terminal to confirm it responds before wiring it into anything else.

**Why it matters:** This is the on-ramp for running an AI coding agent at zero marginal per-token cost — once a model is downloaded, inference runs on local hardware with no API bill, in exchange for needing adequate local compute and accepting slower, less capable output than a large hosted model.

**The moves:**
1. Download and install Ollama for your operating system from its website.
2. Decide which model to try by checking benchmark/ranking pages that compare open models for your target use case, noting model family, parameter count (size), and special capabilities (vision, tool-calling, extended "thinking"/reasoning) each variant supports.
3. Match model size to your hardware: more RAM/CPU/GPU headroom supports larger, smarter local models; if unsure, describe your machine's specs to an AI assistant and ask for a model-size recommendation that will realistically run well.
4. Pull the chosen model by name from a terminal to download it; download time scales with the model's file size.
5. Run the model directly from the terminal first and send it a trivial prompt to confirm it responds before connecting it to any other tool.
6. Note that some listed models are cloud-only (hosted rather than downloadable) — these show capability tags but no local size, since they never run on your machine.

**Watch out for:** Bigger, smarter models take longer to download and need more local RAM/VRAM; a small model chosen just to test the workflow will respond but noticeably less capably than a larger one, and local response speed is generally much slower than a hosted frontier model.

**Original example to invent:** The source downloaded a mid-size open-weight model (a few billion parameters, several gigabytes) as a demo and chatted with it in a terminal. Writers should invent a different model-selection scenario (e.g., picking a model for a non-coding task) rather than reusing the source's exact model choice.
