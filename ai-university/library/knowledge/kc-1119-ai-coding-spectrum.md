---
id: kc-1119
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [vibe-coding, agentic-engineering, spectrum, verification, specifications]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# AI coding is a spectrum, not a switch

**What:** AI-assisted coding spans a spectrum, not a binary of "vibe coding vs. real engineering." At one end, vibe coding: a prompt with little planning, validated only by "does it seem to work," acceptable risk for disposable code. In the middle, structured AI-assisted: more detailed prompts and manual spot-checking. At the other end, agentic engineering: engineered specs, automated tests/evals, CI gates, and LLM-judge review, so the agent catches its own mistakes before you do.

**Why it matters:** You pick the level to match the job rather than always maxing it out. Vibe coding is genuinely fine for proofs-of-concept and MVPs; agentic engineering is where reliable, production-grade code comes from. Importantly, even at the agentic end you still delegate all the actual coding — the spectrum measures how engineered your system is, not how much you type by hand.

**The moves:**
1. Judge the task's risk profile (disposable vs. production).
2. For throwaway work, a quick prompt-and-check is enough.
3. For reliable work, invest in specs, automated verification, and review gates.
4. Match specification intensity and verification depth to the chosen level.

**Watch out for:** Leaning on vibe coding for work that needs reliability burns tokens iterating on low-quality output. But over-engineering a throwaway prototype wastes setup effort.

**Original example to invent:** Source paraphrases a vendor's level table. Build your own three-tier table for a specific team and task type, in your own phrasing.
