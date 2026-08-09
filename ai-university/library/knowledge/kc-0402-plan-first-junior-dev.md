---
id: kc-0402
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, plan-mode, prompting, extended-thinking]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: high
---
# Plan first, treat the agent like a junior developer

**What:** A prompting discipline that forces alignment before any code is written. You keep the agent in a read-only planning stance, hand it problems rather than exact commands, and make it interrogate you until it is confident it understands the goal.

**Why it matters:** Front-loading understanding dramatically cuts the number of correction rounds and has been shown to raise output quality versus letting the agent sprint straight to code.

**The moves:**
1. Start every non-trivial task in a planning mode where the agent can read and research but cannot change files; let it outline steps and surface clarifying questions first.
2. Frame work as problems, not dictations — ask "how should we approach X?" so the agent reasons through decisions you can then inspect and challenge.
3. Explicitly tell it to keep asking you questions until it is highly confident it understands exactly what you need.
4. For genuinely hard decisions (architecture, big refactors, stubborn bugs), invoke the maximum extended-thinking budget so it reasons deeply before responding — reserve this for high-stakes work, not trivial fixes.
5. Only after you approve the plan, switch out of planning and tell it to execute.

**Watch out for:** Maximum-thinking mode is expensive and slow; don't spend it on simple edits. Skipping the plan step is the fastest way to accumulate rework.

**Original example to invent:** Source alludes to generic tasks. Writers should script a realistic feature request and show the clarifying-question exchange that prevents a wrong build.
