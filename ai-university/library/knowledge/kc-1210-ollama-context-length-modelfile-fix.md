---
id: kc-1210
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [ollama, local-llms, context-window, modelfile, hallucination, debugging]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K"
confidence: high
---
# Fixing Ollama's small default context window with a Modelfile

**What:** By default, models run through Ollama get a very small context window (about 2,048 tokens). That's too small for agent and coding prompts, so the start of the prompt — system message, tool instructions — gets pushed out, and the model appears to "hallucinate" or ignore its tools. The fix is to create a lightweight Modelfile that inherits from the base model and only overrides the context-length parameter, then register it as a new named model.

**Why it matters:** This one setting is the difference between a local model that behaves and one that seems broken. It surfaces in RAG agents (long retrieved context), coding assistants (large scaffolding prompts), and any tool-using agent. Recognizing it saves hours of chasing a phantom "the model is dumb" problem.

**The moves:**
1. Create a small Modelfile: one line for the base model id, one line setting the context-length parameter higher (e.g., ~8K for small models; 32K or more if the model and hardware support it).
2. Run the create command to register a new model variant from that file, naming it whatever you like.
3. This reuses the already-downloaded weights — the variant takes essentially no extra disk space and creates instantly.
4. Select the new variant wherever you pick your model.

**Watch out for:** Raising context only helps up to what the model was trained for and what your hardware can hold. Some tools (certain coding UIs, some node integrations) don't expose a context-length setting at all, which is exactly why creating a bigger-context model variant is the reliable workaround. Note this is the same root fix whether the symptom is a coding tool not opening files, a RAG agent losing its system prompt, or an agent forgetting its tools.

**Original example to invent:** Show a before/after where a local model ignores its tools until a larger-context variant is registered — with a different prompt/task than the source demos.
