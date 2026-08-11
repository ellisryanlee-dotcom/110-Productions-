---
id: kc-0113
type: framework
track: "Track 2 — AI Agents Core"
topics: [prompt-chaining, routing, parallelization, evaluator-optimizer, patterns]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Four agentic workflow patterns

**What:** Four reusable ways to arrange multiple AI steps, each suited to a different problem:
- Prompt chaining: pass one agent's output as the next's input in a line (e.g., outline → evaluate/revise → write).
- Routing: one classifier agent decides which downstream agent handles the input (e.g., sort incoming email into support/high-priority/promotion/finance).
- Parallelization: several agents analyze the same input at once, then merge outputs into a final synthesis (e.g., emotion + intent + bias analyses combined).
- Evaluator-optimizer: an evaluator agent judges an output; if it fails criteria, an optimizer revises and sends it back, looping until it passes.

**Why it matters:** Splitting a big job into specialized steps improves quality, gives control over each step, and lets you plug a different model in per step (cheap for easy steps, powerful for hard ones). Each pattern targets a distinct need: sequential refinement, branching, speed via concurrency, or automated self-correction.

**The moves:**
1. Identify the shape of the problem: linear refinement, classification/branching, independent parallel analyses, or iterative quality control.
2. Pick the matching pattern.
3. Give each agent a narrow role and its own model.
4. For routing, set up per-branch personas and optional human escalation.
5. For evaluator-optimizer, define pass criteria and a check that ends the loop when met.

**Watch out for:** More structure means more calls and latency — don't over-engineer a simple task. The evaluator's criteria must be unambiguous or the loop never terminates cleanly.

**Original example to invent:** The source demos coffee-blog chaining, email routing, text-analysis parallelization, and a biography evaluator-optimizer. Re-create each pattern in a different domain (e.g., product-description QA) so no example matches the source.
