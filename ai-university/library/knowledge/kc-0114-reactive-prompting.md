---
id: kc-0114
type: framework
track: "Track 9 — Reliability & Craft"
topics: [prompting, reactive-prompting, debugging, system-prompt, agents]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Reactive prompting: build the system prompt one fix at a time

**What:** Reactive prompting means starting an agent with essentially no system prompt, adding one tool, testing it, and only then adding instructions to correct the specific behavior you observe — sentence by sentence. It's the opposite of proactive prompting, where you write a long prompt up front (or paste a generated one) before testing.

**Why it matters:** Agents run autonomously with no chance to say "make it shorter" mid-run, so the prompt must be right the first time. Building it reactively means you always know which line caused which change, so debugging is precise. A giant pre-written prompt hides the source of errors and creates a whack-a-mole of new problems.

**The moves:**
1. Start with a near-empty prompt; add one tool and test real queries.
2. Observe what the agent actually does before adding any instruction.
3. When it errs, add one targeted line (or a concrete example) to fix that exact behavior, then retest.
4. Use hard-prompting: paste in a real failing input, the wrong action it took, and the correct action, so it learns the pattern.
5. Change one thing at a time so cause and effect stay clear.
6. Once stable, add the next tool and its line, and repeat.

**Watch out for:** Only add examples for behaviors the agent actually gets wrong — examples it would nail anyway are wasted tokens. Less is more: bloated prompts cost more and confuse the model. Auto-generated system prompts undercut the whole method because you can't trace behavior back to a line.

**Original example to invent:** The source compares this to correcting a learner mid-activity only when they actually go off course. Describe that idea abstractly and invent your own analogy for observe-then-correct so writers don't reuse the source's.
