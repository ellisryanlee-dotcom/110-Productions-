---
id: kc-0405
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [ollama, cloud-models, claude-code, local-models, hardware]
source_video: O2k_qwZA8HU
source_span: ["13:39", "16:16"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Using Ollama Cloud to run bigger models without local hardware

**What:** Beyond fully local models, Ollama also offers cloud-hosted models that Claude Code can route to without downloading or running anything locally — the launch flow is the same as for a local model, but selecting a cloud-hosted entry prompts a one-time device sign-in to your Ollama account instead of a download. This gives access to much larger, more capable models than most local hardware could run, with noticeably better speed and fuller tool-call visibility in Claude Code's UI, at the cost of no longer being fully private/offline and eventually hitting a usage ceiling that requires a paid plan to exceed.

**Why it matters:** Local hardware is a hard ceiling on model quality; cloud-hosted open models remove that ceiling while staying separate from Anthropic's own paid API — trading "free" for "cheap, with limits" once usage grows. This is a practical middle path between a small local model and a fully-paid closed-source subscription.

**The moves:**
1. From the same model-selection flow used for local models, choose a cloud-hosted model instead of a downloaded one.
2. Complete the one-time device authorization/sign-in to your model-provider cloud account when prompted.
3. Relaunch Claude Code and select the now-connected cloud model; expect noticeably faster responses and richer tool-call visibility than a small local model, since cloud models can be far larger.
4. Budget for the fact that free cloud usage has request/rate ceilings, and heavier or multi-session use eventually requires a paid tier.

**Watch out for:** A cloud-hosted open model is no longer fully private or offline the way a local model is, even though it is still separate from paying Anthropic directly — treat it as a different trust/cost boundary, not the same as running fully on your own machine.

**Original example to invent:** The source tested a large cloud-hosted open model by having it read a project and run one of the source's pre-built custom skills, noting it felt close to using a frontier hosted model. Writers should invent a different verification task (e.g., a multi-step refactor) rather than reusing the source's specific skill demo.
