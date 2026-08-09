---
id: kc-0421
type: tool
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, superpowers, tdd, code-quality, planning]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: medium
---
# Superpowers: force a senior-developer workflow

**What:** A popular community plugin that enforces a disciplined senior-developer workflow instead of jumping straight to code: it plans first, works in an isolated environment, writes tests before code, and reviews its own work in two passes — once for spec match, once for code quality.

**Why it matters:** The number-one failure mode is rushed code that looks fine but falls apart in use — or worse, in front of a client. Slowing the agent down just enough to think the problem through means fewer edge-case misses and lower debugging and token costs.

**The moves:**
1. Install it for any project where the software or automation will actually go into production.
2. Let it plan and brainstorm before writing anything.
3. Rely on its isolated environment so experiments don't break your main project.
4. Use its test-first approach and two-stage self-review to catch spec gaps and quality issues before delivery.

**Watch out for:** It won't magically one-shot everything — a large part of your job is still QA. The realistic win is getting to ~80% on the first pass instead of ~60%, with fewer debugging cycles.

**Original example to invent:** Source cites HVAC/marketing production tools generically. Writers should invent a concrete production build and show an edge case the plan-test-review loop catches. Avoid the source's "works like a senior engineer / sprinting to code" phrasing.
