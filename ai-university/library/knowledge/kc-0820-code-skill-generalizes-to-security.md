---
id: kc-0820
type: concept
track: "Elective — Model & Tool Literacy"
topics: [security, dual-use, capabilities, vulnerabilities]
source_video: DG1wRgEpdO4
source_channel: "@nateherk"
source_views: "208K"
confidence: medium
---
# Code mastery generalizes to security exploitation

**What:** Training a model to be extremely good at writing code appears to make it
extremely good at finding and exploiting weaknesses in code — the security ability
emerges as a side effect, without being trained for directly.

**Why it matters:** It means defensive and offensive capability are two faces of the
same underlying skill. A model built to fix software is, by construction, also
capable of breaking it — including finding bugs that sat undiscovered for years and
that large automated test suites missed.

**The moves:**
1. Assume that any model strong at code is also strong at vulnerability discovery.
2. When judging a coding model, consider its security implications, not just its
   build quality.
3. Watch benchmarks that measure exploit-finding, not only bug-fixing, to gauge
   this dual-use dimension.

**Watch out for:** This capability doesn't stay contained to one lab or one model —
if it comes free with code skill, every frontier coding model trends toward it. Treat
it as a property of the capability class, not a one-off.

**Original example to invent:** The source used a locksmith-style comparison to
explain skill transfer; writers must invent their own analogy for one skill implying
another, and cite different real-world bugs or none.
