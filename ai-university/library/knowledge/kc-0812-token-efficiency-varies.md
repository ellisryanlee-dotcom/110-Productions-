---
id: kc-0812
type: claim
track: "Elective — Model & Tool Literacy"
topics: [tokens, cost, efficiency, harness, agentic]
source_video: EthxaDswUFo
source_channel: "@nateherk"
source_views: "209K"
confidence: high
---
# Token efficiency varies by model and harness

**What:** Different models (and the coding harnesses around them) consume very
different token counts for the same task, and the cost gap between a "premium" and
a "cheaper" model widens dramatically in long agentic loops versus short one-shot
API calls.

**Why it matters:** Two models with similar quality can differ several-fold in
total cost, driven partly by per-token price and partly by how many tokens each
spends. In quick stateless calls the price difference is modest; in extended
agentic reasoning it compounds into a large gap.

**The moves:**
1. Compare not only per-token pricing but how many output tokens each model
   actually spends on the same job.
2. Expect the cheaper/more-efficient model's advantage to look small on one-shot
   calls and large on multi-step agentic runs.
3. Factor the harness itself into efficiency — some harnesses are consistently
   faster and leaner with tokens.

**Watch out for:** Efficiency and thoroughness can trade off oddly — a token-lean
model may still run many tests or overthink on higher effort settings. Don't
assume "fewer tokens" always means "cheaper for your workload"; measure on your
tasks.

**Original example to invent:** Source measured specific dollar and token figures
across two named models. Writers should generalize the principle without those
numbers or names.
