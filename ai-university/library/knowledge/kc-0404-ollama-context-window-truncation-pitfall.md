---
id: kc-0404
type: pitfall
track: "Track 4 — Claude Code & Dev Agents"
topics: [ollama, context-window, local-models, claude-code, troubleshooting]
source_video: O2k_qwZA8HU
source_span: ["11:31", "13:39"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Ollama's default context window silently truncates Claude Code sessions

**What:** Local models run through Ollama can be configured with a context window (working-memory size) far smaller than what Claude Code's own UI reports as the model's limit — a model whose card advertises a large window may actually be capped much lower by Ollama's default runtime settings. When that smaller real limit is exceeded mid-session, symptoms look like the agent "forgetting" earlier instructions or losing track of a multi-step task, and tool calls may stop showing their normal step-by-step detail in the UI. The fix is to create a custom copy of the model with an explicitly larger context-window setting, which then appears as its own separate, selectable entry in the local-model launch menu.

**Why it matters:** This is easy to misdiagnose as "the model just isn't smart enough" when the real cause is a silent, much-smaller-than-advertised memory ceiling — wasting time debugging a capability problem that is actually a configuration problem.

**The moves:**
1. If a local model loses context, stops following multi-step instructions, or its tool-call visibility disappears mid-task, suspect a context-window mismatch before assuming a model-capability problem.
2. Create a custom variant of the base model with a larger explicit context-window value using Ollama's model-customization mechanism; an AI assistant can generate the exact terminal command for this given your OS/shell.
3. The new custom-context model appears as its own separate entry in the model-selection list; relaunch Claude Code and pick it explicitly.
4. Re-run the same failing multi-step task against the new custom-context model and confirm tool-call visibility and task completion both return.

**Watch out for:** A larger context window increases the memory/compute the local model needs to run, so this trade-off is bounded by your hardware — there is a ceiling past which you cannot keep raising the context setting on a given machine.

**Original example to invent:** The source's failure case was asking a local model to create a file and write specific content into it, which silently lost track of the task before the fix and worked cleanly after. Writers should invent a different multi-step task (e.g., a small multi-file refactor) to illustrate the same before/after contrast.
