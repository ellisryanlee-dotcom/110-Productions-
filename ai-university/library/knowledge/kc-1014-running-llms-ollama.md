---
id: kc-1014
type: tool
track: "Elective — Model & Tool Literacy"
topics: [ollama, local-llm, open-source-models, inference]
source_video: [mNcXue7X8H0, V_0dNE-H2gw]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# Running open-source LLMs locally with Ollama

**What:** Ollama is a free, cross-platform tool that lets you download and run open-source language models directly on your own machine. After installing it, you use terminal commands to pull models, run them in a chat, and list what you have — and the same running service can be used by your code and no-code workflows.

**Why it matters:** It's the easiest on-ramp to local AI. Instead of calling a hosted API, the model's parameters load onto your GPU and generate responses on your hardware — fully offline and free. It also exposes an OpenAI-compatible API, so existing agents can point at it with almost no change.

**The moves:**
1. Download and install Ollama for your OS.
2. Browse the model catalog to find a model and size that fits your hardware; copy its pull/run command.
3. Run a model to install and immediately chat with it, or pull it to install without launching.
4. List installed models; switch between them freely (a model stays loaded in the GPU for a while after use, so subsequent responses are faster).
5. Use it programmatically by pointing an OpenAI-style client at Ollama's local endpoint, or select the model inside a no-code node.

**Watch out for:** The first request after loading a new model is slower because it has to load into the GPU. Model choice is bounded by your hardware (see sizing/quantization). Ollama defaults to a small context limit and a Q4 quantization unless you change them.

**Original example to invent:** Install Ollama, pull two different-sized models, and compare their answers and speed on the same prompt — narrated in your own words, not the source's demo.
