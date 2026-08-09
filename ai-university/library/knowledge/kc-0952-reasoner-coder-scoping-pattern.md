---
id: kc-0952
type: framework
track: "Track 2 — AI Agents Core"
topics: [reasoning-models, scoping, multi-agent, agent-workflows, planning]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# The reasoner-then-doer scoping pattern

**What:** Put a reasoning model at the front of a workflow whose only job is to turn the user's request into a scope document — an outline of everything that must be produced — and to pre-select which reference materials the downstream worker agent should retrieve. That scope is then injected into the worker (coder) agent so it starts with far richer context than the raw request alone provided.

**Why it matters:** A single agent given only a terse request produces thin, error-prone output. Adding an upstream planning pass that expands the request into structured scope and points at the right context measurably improves the final result, because the worker no longer has to infer everything itself.

**The moves:**
1. Add a first node backed by a reasoning-capable model.
2. Prompt it to produce a scope/plan document covering what needs to be built.
3. Have it also nominate the specific docs/resources the worker should pull.
4. Store the scope in workflow state and inject it (e.g., into the worker's system prompt).
5. Let the worker agent execute with that expanded context.

**Watch out for:** Reasoning models are slower, so use them where planning pays off, not for every call. The quality of the scope depends on the prompt; a rudimentary prompt still helps but leaves gains on the table. Using the same strong reasoner in both a demo and a baseline comparison can be unfair — match model strength when benchmarking.

**Original example to invent:** The source used a reasoner to scope an agent-building task before a coder agent ran. Writers should apply the pattern to a different domain (e.g., a reasoner scoping a marketing brief before a copywriting agent) with their own scope fields.
