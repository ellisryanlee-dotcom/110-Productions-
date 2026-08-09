---
id: kc-0330
type: pitfall
track: "Track 4 — Claude Code & Dev Agents"
topics: [ollama, context-window, local-models, configuration, claude-code]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Fixing Ollama's default context window for a local model

**What:** A locally-served model may default to a much smaller context window than
its advertised maximum (a listing might say 200k while the running default is far
lower). If a task exceeds that hidden default, the model loses state mid-task. The
fix is to create a custom variant of the model configured with a larger context
window.

**Why it matters:** Symptoms of the default limit — the model "forgets" what it was
doing, fails to complete a file edit, behaves as if it lost the thread — look like
model incompetence but are really a context-window misconfiguration.

**The moves:**
1. If a local model loses state on a moderately large task, suspect the default
   context window, not the model's intelligence.
2. Create a custom model definition off the base model with an increased context
   window (e.g., a 64k variant).
3. Launch Claude Code against that custom variant instead of the stock one.
4. Ask the agent to generate the exact config/commands; tell it your OS and shell
   so the command is correct.

**Watch out for:** The advertised context on the model page is not necessarily what
the local runtime uses by default. Bigger context also demands more memory, so
size the variant to your hardware.

**Original example to invent:** Source raised a mid-size model's context to 64k.
Writers should demonstrate diagnosing and fixing the window on a different model.
