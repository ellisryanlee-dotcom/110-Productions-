---
id: kc-0811
type: how-to
track: "Elective — Model & Tool Literacy"
topics: [model-evaluation, benchmarks, cost, tokens, testing]
source_video: EthxaDswUFo
source_channel: "@nateherk"
source_views: "209K"
confidence: high
---
# Evaluating LLMs beyond benchmarks

**What:** A hands-on method for deciding which model to use: run the same prompts
through each model side by side, drive your actual day-to-day work with them, and
measure not just quality but time, dollar cost, and output-token counts.

**Why it matters:** Benchmarks tell you a model's ceiling, not how it feels on your
real tasks. Which model wins depends on your use case, your harness, and how you
instruct it — so the only reliable read comes from your own comparative testing.

**The moves:**
1. Give every model the identical prompt and, where possible, the same harness.
2. Test across categories: agentic builds (multi-step tool use), one-shot API
   calls, and design tasks — behavior differs a lot between them.
3. Log elapsed time, total cost, and output tokens per run, not just a gut verdict.
4. Also just live with each model for a full day of normal work to get the "feel."
5. Judge quality against cost together (was the pricier output actually N times
   better, or just a little better?).

**Watch out for:** A model can win a head-to-head tally for reasons unrelated to
raw capability (e.g., the other refused to answer). Separate "did it answer" from
"how good was the answer." Median and mean latency can disagree when one model is
inconsistent.

**Original example to invent:** Source built browser games and scroll websites to
compare models. Writers should design a different comparison task battery.
