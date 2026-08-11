---
id: kc-1053
type: pitfall
track: "Elective — Model & Tool Literacy"
topics: [local-llms, ollama, context-window, modelfile, debugging]
source_video: [uWDocIoiaXE, T2QWhXpnT5I, 8ommGcs_-VU]
source_channel: "@ColeMedin"
source_views: ["122K views", "109K views", "97K views"]
confidence: high
---
# Ollama's tiny default context limit and the Modelfile fix

**What:** By default the local model runtime gives every model a very small context window (about two thousand tokens). That's too small for agent and coding prompts, so the start of the prompt — system message, tool instructions — gets pushed out of context, causing hallucination or the app failing to behave correctly. The fix is to create a lightweight derived model with a larger context length.

**Why it matters:** This single setting is behind a whole class of confusing local-model failures: an agent that ignores its tools, a code assistant that won't open its editor/preview, or a RAG agent that loses its instructions once retrieved chunks are added. Raising the limit reliably fixes all of them.

**The moves:**
1. Create a small "Modelfile" with two lines: a `FROM` line naming the base model you already pulled, and a parameter line setting the context length (e.g., 8K, or up to ~32K for larger models).
2. Run the create command to register a new named variant based on that file.
3. This variant reuses the already-downloaded weights — it takes no extra disk space and registers almost instantly.
4. Point your app or agent at the new variant instead of the base model.

**Watch out for:** Size the context to what the model and your prompts actually need; bigger costs more memory. Note that some higher-level nodes (e.g., an "output tokens" setting) do not change the input context length — you must set it on the model itself. This is the most common local-LLM gotcha across RAG agents, agentic frameworks, and browser app builders alike.

**Original example to invent:** Writers should demonstrate the before/after (broken vs. working) with their own model and prompt rather than reusing a source's specific demo.
