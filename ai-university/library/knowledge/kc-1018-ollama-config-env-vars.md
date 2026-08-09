---
id: kc-1018
type: pitfall
track: "Elective — Model & Tool Literacy"
topics: [ollama, configuration, context-length, flash-attention, local-llm]
source_video: mNcXue7X8H0
source_channel: "@ColeMedin"
source_views: "256K"
confidence: medium
---
# The Ollama settings people miss (especially the 2K context default)

**What:** Ollama has a few environment variables that materially affect how well local models run, and they're easy to skip. The most important: by default Ollama caps every model's context at ~2,000 tokens regardless of what the model actually supports, so you must raise it yourself.

**Why it matters:** The tiny default context silently breaks agents. Once a conversation exceeds ~2,000 tokens, the model starts ignoring its system prompt and forgetting its tools — behavior that looks like the model "going off the rails" but is really the context limit. The other variables improve efficiency and VRAM usage.

**The moves:**
1. Raise the context length well above the default — start around 8,000 tokens, up to ~32,000 if the model supports it (check the model's page for its max).
2. Enable flash attention (set to true) to make the attention computation more efficient with little quality loss.
3. Quantize the KV cache / context (a Q8 setting is the common recommendation) to compress long conversations and save VRAM.
4. Limit the number of models kept loaded at once (typically 1, or 2 if smaller models fit together) to avoid VRAM contention.

**Watch out for:** If a local model starts ignoring instructions or forgetting its tools, suspect the context limit first. Set these before relying on the model. Setting env vars differs per OS — Ollama's FAQ documents the method and also helps verify the model is actually on the GPU.

**Original example to invent:** Demonstrate an agent degrading once a long conversation passes the default context cap, then working after raising the limit — your own scenario.
