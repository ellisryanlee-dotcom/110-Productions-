---
id: kc-0401
type: concept
track: "Elective — Model & Tool Literacy"
topics: [open-source-models, closed-source-models, model-benchmarks, model-selection, claude-code]
source_video: O2k_qwZA8HU
source_span: ["0:00", "5:05"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Open-source vs. closed-source models: the engine you can swap under Claude Code

**What:** Claude Code is an agent harness — it handles planning, file/folder operations, and tool orchestration — that by default drives Anthropic's own closed-source models. Because the harness and the underlying model are separable, the same harness can be pointed at a different backend model instead, whether self-hosted and open-source or hosted by a third party. Closed-source models are reachable only through their maker's paid API and can't be inspected or modified; open-source (open-weight) models are published so anyone can download, inspect, and run them. On leading coding benchmarks, top closed-source models still lead overall, but the gap between the best open-weight models and the best closed models has been narrowing release over release — some current open-weight models now beat closed models that were themselves considered state-of-the-art within the past couple of years.

**Why it matters:** This separation is what makes running Claude Code at low or no marginal cost possible at all — you aren't getting Anthropic's own models for free, you're keeping Claude Code's agent behavior and pointing it at a different, cheaper or free model. It also sets realistic expectations: an open-weight model swapped into Claude Code isn't guaranteed to behave the same as Anthropic's models, because behavior depends on how well that specific model was trained to work with Claude Code's tool set.

**The moves:**
1. Separate the two layers mentally: the agent harness (planning, tool calls, file operations) versus the language model actually doing the reasoning behind it.
2. When judging whether an open-weight model is "good enough," check independent coding-benchmark leaderboards rather than assuming closed-source always wins — compare candidates against both current and recent-past closed-source models.
3. When picking a model to self-host, weigh model size against your available hardware (RAM/CPU/GPU); a smaller model with a strong benchmark score relative to its size is the more practical local choice.
4. If a swapped-in open model misbehaves inside Claude Code, suspect one of three causes: it wasn't trained on Claude Code's specific tools, its usable context window is smaller than what Claude Code's system prompt needs, or it doesn't reliably follow the structured tool-call format Claude Code expects.

**Watch out for:** Swapping the backend model this way is a supported use of the harness, not a terms-of-service violation, since you're still using the vendor's own agent software and just changing which model answers — but don't assume every open model is a drop-in replacement. Smaller or less-compatible models can misinterpret tool-calling instructions in ways that are hard to diagnose from the Claude Code UI alone.

**Original example to invent:** The source illustrated this with a coding-benchmark chart comparing several closed- and open-weight models, plus a separate chart plotting a newly-released small open model's benchmark score against its parameter count. Writers should invent a different benchmark comparison (e.g., a reasoning or writing-quality benchmark) rather than reusing the source's specific chart or model names.
