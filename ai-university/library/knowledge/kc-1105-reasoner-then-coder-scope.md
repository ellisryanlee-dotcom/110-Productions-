---
id: kc-1105
type: framework
track: "Track 9 — Reliability & Craft"
topics: [reasoning-model, scoping, dynamic-system-prompt, code-generation, planning]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# Reasoner-then-worker: scope first, then execute

**What:** A pattern where a first agent using a reasoning model turns the user's request into a detailed scope/spec document (what to build, plus which reference sources to consult). That scope is then injected into a second worker agent's system prompt so it has rich context before it acts. A cheaper "wrap-up" agent can summarize the result and give run instructions at the end.

**Why it matters:** Giving the worker a pre-computed scope dramatically improves output quality versus asking it to plan and produce in one shot. It's the difference between a broken first draft and something close to runnable.

**The moves:**
1. Route the raw request to a reasoning-model agent that outputs a structured scope.
2. Have it also select which reference/documentation pages the worker should retrieve.
3. Inject the scope into the worker's system prompt dynamically (the framework can compute part of the prompt at call time from a dependency).
4. Run the worker with that enriched context; loop with feedback if needed.
5. End with a lightweight summarizer agent.

**Watch out for:** Put the scope in the system prompt (overarching behavior), not buried in conversation history. Reasoning models are slower — reserve them for the planning step.

**Original example to invent:** Source builds an "agent that builds agents." Apply reasoner-then-worker to a different generation task (e.g., spec → SQL migration) with your own scope document.
