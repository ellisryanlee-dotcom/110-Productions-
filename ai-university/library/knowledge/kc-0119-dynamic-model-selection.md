---
id: kc-0119
type: how-to
track: "Elective — Model & Tool Literacy"
topics: [model-selection, openrouter, cost-optimization, routing, benchmarks]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Dynamic model selection to optimize cost and performance

**What:** A pattern where a lightweight "model selector" agent reads each incoming request and picks the most suitable model for the task; the main agent then uses that chosen model dynamically. A multi-model gateway (e.g., OpenRouter, which fronts hundreds of models) makes swapping trivial and shows per-call cost.

**Why it matters:** Different tasks warrant different models — a joke or a calendar lookup can use a free/cheap model, while deep research or reasoning warrants a stronger, pricier one. Routing dynamically avoids paying premium rates for trivial work and lets you compare models as new ones ship.

**The moves:**
1. Route model access through a gateway so you can reference any model by name and see costs.
2. Build a selector agent (on a cheap model) whose prompt lists the available models and each one's strengths, and returns only a model name.
3. Feed that returned name into the main agent's model slot as a variable.
4. Log input, output, and chosen model to a sheet for visibility and tuning.
5. Trim stray characters (some models append a newline to the name) or the reference fails.

**Watch out for:** A gateway's "auto" model option gives less control and may not be as cost-efficient as defining your own shortlist with when-to-use rules. Compare models with leaderboards/arenas, but treat their freshness cautiously — they lag new releases.

**Original example to invent:** The source routes jokes, calendar events, and research to different models. Design your own selector for a different mix of tasks (e.g., quick FAQ vs. contract analysis) with your own model shortlist.
