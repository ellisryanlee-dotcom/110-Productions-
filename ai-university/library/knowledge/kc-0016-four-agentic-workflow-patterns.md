---
id: kc-0016
type: framework
track: "Track 2 — AI Agents Core"
topics: [agentic-patterns, prompt-chaining, routing, parallelization, evaluator-optimizer]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Four agentic workflow design patterns

**What:** Four reusable ways to combine multiple model calls into a larger system, each suited to a different shape of problem. Prompt chaining: each step's output feeds directly into the next step's input (e.g., outline, then critique, then final draft). Routing: one classification call decides which of several specialized downstream handlers a request goes to. Parallelization: several specialized calls run on the same input simultaneously and their outputs are merged into a final synthesis call. Evaluator-optimizer: a generator's output is checked by a separate evaluator call against explicit pass/fail criteria, looping back through a revision call until the evaluator approves it.

**Why it matters:** These four patterns cover most multi-step AI system designs; naming and recognizing them turns "how should I structure this" into a matching exercise instead of an ad-hoc design each time, and each pattern also allows a different, cheaper model to be assigned to each step based on how demanding that specific step is.

**The moves:**
1. Use prompt chaining when a task benefits from being decomposed into ordered sub-steps where each step's whole job is to improve on the previous step's output — assign a cheaper/faster model to earlier, simpler steps and a stronger model to the step that most needs quality.
2. Use routing when incoming requests fall into a small number of known categories that each deserve a different specialized handler, persona, or tool set — a single classification call decides the branch, then each branch's handler can have its own system prompt, model, and tools.
3. Use parallelization when a single input needs to be evaluated from several independent angles at once — fire all the specialized calls concurrently, wait for all of them, then feed the combined outputs into one synthesis call rather than combining them by hand.
4. Use the evaluator-optimizer loop when output quality matters enough to justify automatic self-correction — write the evaluator's prompt with explicit, checkable pass/fail criteria and have it output either "approved" or specific actionable feedback; feed that feedback plus the current draft into a revision call, and loop back to the evaluator until it approves, only then continuing the workflow.
5. In any of the four, keep the current draft/state in one clearly-referenced place (a single "current version" field that always gets overwritten with the latest output) so a multi-round loop always operates on the most recent version, not the original.

**Watch out for:** An evaluator-optimizer loop with a vague or unmeasurable approval criterion (e.g., "make it good") can loop indefinitely or approve inconsistently — criteria need to be concrete and checkable. In parallelization, forgetting to wait for every parallel branch before merging produces a synthesis call working from incomplete input.

**Original example to invent:** Source demonstrated chaining with a blog-outline-then-write pipeline, routing with an inbox-priority classifier, parallelization with an emotion/intent/bias text analysis, and the evaluator loop with a biography-writing/revision pair. Writers should re-demonstrate each pattern using a different running example per pattern, such as a product-description pipeline, a support-ticket router, a multi-angle competitor analysis, and a headline generator with an approval loop.
