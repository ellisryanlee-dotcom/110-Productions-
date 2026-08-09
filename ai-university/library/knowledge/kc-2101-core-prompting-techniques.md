---
id: kc-2101
type: framework
track: "Track 9 — Reliability & Craft"
topics: [prompt-engineering, role-prompting, few-shot, chain-of-thought]
source_video: ydjRYmM19DY
source_channel: "@LiamOttley"
source_views: "440K"
confidence: high
---
# Core prompting techniques: roles, shots, and chain-of-thought

**What:** A small toolkit of prompting patterns that reliably improve results across tasks.

**Why it matters:** These are the reusable levers you reach for when a plain request underperforms. Because these models are pattern-completion engines, structuring the prompt to supply a role and examples steers tone, format, and accuracy.

**The moves:**
1. **Role / persona prompting** — tell the model who it is ("you are a specialist in X"). Extra context about the role narrows the response and often corrects mistakes; it's also how a raw model is turned into a friendly assistant persona.
2. **Zero-shot** — give only the instruction or question with no example; the model free-completes with no imposed structure.
3. **One-shot** — supply a single example interaction so the model mirrors its structure, tone, and length.
4. **Few-shot** — supply several examples; the more examples, the more precisely you pin down the desired output. The content/quality of the examples strongly determines the result.
5. **Chain-of-thought** — ask the model to reason step by step before answering; improves arithmetic, logic, and common-sense tasks. A zero-shot variant just appends a short "reason step by step" instruction when you can't supply worked examples.

**Watch out for:** In few-shot, your examples *are* the specification — poor examples produce poor outputs. Chain-of-thought mainly helps reasoning-heavy tasks; it adds length/cost elsewhere.

**Original example to invent:** The source demoed name reordering, PII redaction, a Q&A bot, and a song-lyric generator. Build entirely different demo prompts for each technique.
