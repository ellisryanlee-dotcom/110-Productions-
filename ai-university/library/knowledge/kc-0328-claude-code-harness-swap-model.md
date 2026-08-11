---
id: kc-0328
type: concept
track: "Elective — Model & Tool Literacy"
topics: [claude-code, harness, model-swap, architecture, open-source-models]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Claude Code is a harness; the model is swappable

**What:** Claude Code is a harness — the scaffolding that tells a model how to
organize files, call tools, plan, and execute — wrapped by default around
Anthropic's own models. That default is what you pay for and hit limits on. But
you can keep the harness and swap the underlying model for a local open-source
model or a cheaper hosted one, which changes (or removes) the usage limits and
cost.

**Why it matters:** Understanding this separation is the key that unlocks running
Claude Code cheaply or free. It also frames why an unfamiliar model may misbehave:
the harness expects certain behaviors the swapped-in model wasn't trained for.

**The moves:**
1. Think of the harness (Claude Code) and the engine (the model) as separable.
2. To reduce cost/limits, point the harness at a different engine — local via a
   model runner, or hosted via a router.
3. Expect capability differences: a swapped model may have a smaller context
   window, may not follow the exact tool/JSON protocol, or may not know Claude
   Code's tooling.
4. Test tool-calling behavior after swapping before relying on it.

**Watch out for:** Swapping models this way uses Anthropic's harness with a
different engine and is within terms of service. But quality and protocol
compatibility vary — a weaker model can produce a much worse experience even inside
the same harness.

**Original example to invent:** Source swapped in local and hosted open models.
Writers should explain the harness/engine split with their own analogy (not the
source's).
