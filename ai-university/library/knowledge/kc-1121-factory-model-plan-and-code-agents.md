---
id: kc-1121
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [factory-model, planning-agent, coding-agent, quality-gates, context-separation]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# The factory model: separate planning and coding agents

**What:** Instead of a person writing the code or the PRD by hand, you design the system (the harness) and the agent produces the code and docs. The repeatable loop: a planning agent turns specs into a plan; that plan is handed as an artifact to a separate coding agent; quality gates (tests, evals, review) run; the agent iterates autonomously; then a human reviews and ships. Crucially the planning and coding happen in two separate sessions.

**Why it matters:** Splitting sessions prevents the coding agent from inheriting the planning agent's context bloat and bias (context rot). Passing only the plan as a clean artifact keeps the coder focused. The human stays in the loop at review — skipping review slides you back toward vibe coding regardless of how autonomous the system is.

**The moves:**
1. Draft specs, context, and requirements up front.
2. Run a planning agent to produce a plan for the change.
3. Start a fresh coding-agent session; feed it only the plan.
4. Run tests/verification and let the agent iterate.
5. Human-review the result (e.g., the final PR) before deploying.

**Watch out for:** Reusing one long session for both plan and build accumulates bias and wastes context. Guardrails (token limits, sandboxing, security policies) should wrap the whole loop.

**Original example to invent:** Source paraphrases a vendor's "factory" diagram. Walk a concrete feature through plan-agent → code-agent → gates → review in your own words.
