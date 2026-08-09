---
id: kc-0523
type: concept
track: "Track 2 — AI Agents Core"
topics: [context-engineering, prompt-engineering, llm-fundamentals]
source_video: Fqeo8q8-nJg
source_channel: "@nateherk"
source_views: "293K"
confidence: medium
---
# Context engineering vs. prompt engineering

**What:** A distinction between two related skills. **Prompt engineering** is telling the model *what to do*. **Context engineering** is the broader discipline of giving the model the *information it needs to think well* at the moment it needs it. Prompting is a subset of context engineering. An LLM doesn't inherently know your business, clients, or internal processes — at its core it predicts the next plausible token — so output quality is bounded by the context and subject-matter expertise you supply.

**Why it matters:** People expect models to "just know" and then distrust them when they guess wrong. Reframing the job as supplying the right context at the right time is what actually produces useful outputs and stops you from treating the model as a mind reader.

**The moves:**
1. Separate the two: write clear task instructions (prompt) *and* supply the surrounding information (context).
2. Distinguish base rules/tone/knowledge (a system prompt) from just-in-time specifics delivered exactly when needed — the source compares this to broad preparation versus having the precise facts available at the decision moment.
3. Feed real subject-matter expertise and current data; the system is only as smart as what you give it.
4. Never blindly trust model output — validate against the context you know is true.

**Watch out for:** A great prompt on top of thin context still produces weak, guess-y answers. The best results need both broad preparation and just-in-time specifics.

**Original example to invent:** The source uses a studying-vs-cheat-sheet comparison. Writers must invent a different analogy for "base knowledge vs. exact info at the right moment" rather than reusing that one.
