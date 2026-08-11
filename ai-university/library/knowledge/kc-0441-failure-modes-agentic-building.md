---
id: kc-0441
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [agentic-workflows, context-drift, hallucination, scoping]
source_video: ZeJXI2MAhj0
source_channel: "@nateherk"
source_views: "387K"
confidence: medium
---
# The failure modes of agentic building (and their fixes)

**What:** Four recurring problems when building with coding agents, each with a manageable fix: context drift (the agent forgets earlier instructions over a long session), hallucinations (it invents functions, rules, or endpoints that don't exist), and scoping errors — over-engineering (a needlessly complex architecture for a simple ask) or under-engineering (a band-aid instead of a real fix).

**Why it matters:** Newcomers hit these walls, assume the tool is broken, and give up — when in reality each is a known issue with a straightforward remedy.

**The moves:**
1. Context drift: break work into shorter focused sessions and keep an updated project summary so the agent always knows the current state.
2. Hallucinations: always run whatever it builds — never take its word — and consider a dedicated QA/review sub-agent, since review agents catch things humans miss.
3. Scoping: spell out the requirements before work starts, run plan mode, prompt the agent to ask clarifying questions, and set explicit boundaries so it neither over- nor under-builds.
4. Frame all of these as normal parts of directing an agent, not signs the tool failed.

**Watch out for:** Hallucinated errors are often subtle and only surface when real data hits the code — testing is the only reliable catch, especially if you can't read the code yourself.

**Original example to invent:** Source describes these abstractly with a note-taking comparison for context drift. Describe that idea abstractly and invent a concrete instance of each failure mode.
