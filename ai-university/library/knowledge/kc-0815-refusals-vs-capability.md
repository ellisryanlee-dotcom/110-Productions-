---
id: kc-0815
type: pitfall
track: "Elective — Model & Tool Literacy"
topics: [refusals, guardrails, evaluation, reliability]
source_video: EthxaDswUFo
source_channel: "@nateherk"
source_views: "209K"
confidence: medium
---
# Refusal rate can mask real capability

**What:** In head-to-head scoring, a model can appear to lose badly simply because
it refuses to answer many prompts, even though its answers — when it does answer —
are essentially as good as the winner's.

**Why it matters:** If you only look at an aggregate win count, you'll misjudge a
model that has aggressive safety guardrails. The honest read separates two metrics:
overall score (which punishes non-answers) and score-when-answered (which reflects
true capability on completed responses).

**The moves:**
1. Track how often each model actually returns an answer versus declines.
2. Compute quality only over answered prompts to see real capability.
3. Decide whether the refusal behavior matters for your use case — for some
   workloads reliability of answering outweighs a slightly higher ceiling.

**Watch out for:** Don't conclude "this model is far worse" from a lopsided tally
alone; the gap may be answer-rate, not intelligence. Conversely, a high answer rate
isn't valuable if the answers are poor — always read both numbers together.

**Original example to invent:** Illustrate the answered-vs-refused distinction with
a different prompt set than the source used.
