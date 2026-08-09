---
id: kc-0518
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [plan-mode, planning, token-savings, quality]
source_video: Aw3BkmhYu4I
source_channel: "@nateherk"
source_views: "314K"
confidence: high
---
# Use plan mode before executing to avoid wasted work

**What:** Plan mode is a state where the agent reads the relevant files/context, presents a plan (and often asks clarifying questions), and waits for your approval before writing anything. You review or revise the plan, then let it build. It's typically toggled with a keyboard shortcut in the harness.

**Why it matters:** The single biggest source of wasted tokens and time is letting an agent charge down the wrong path, produce work, and then having to scrap and redo it. Approving a plan first lets you catch a wrong approach cheaply — before it spends a session coding the wrong thing.

**The moves:**
1. Switch to plan mode before any substantive task.
2. Read the proposed plan; check that scope, order, and assumptions match what you want.
3. Revise iteratively while it's still cheap — comment on specific parts, add missing steps, or correct direction.
4. Approve only when the plan is right, then let it execute.
5. Reinforce with a project rule that the agent shouldn't make changes until it has high confidence, and should ask questions until it reaches that confidence.
6. Consider a split where a stronger model plans and a cheaper model executes.

**Watch out for:** Skipping planning to "save a step" usually costs more when the output has to be thrown away. Planning is where you steer; execution is expensive to redo.

**Original example to invent:** The source uses plan mode to lay out motion-graphic beats before building. Writers should invent a different task (e.g., a data-migration script) planned and approved before any code is written.
