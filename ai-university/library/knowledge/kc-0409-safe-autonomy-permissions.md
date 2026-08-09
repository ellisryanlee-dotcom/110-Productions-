---
id: kc-0409
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [claude-code, permissions, safety, autonomy]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Get autonomy without the danger: allow/deny lists

**What:** Instead of blanket-skipping all permission prompts (fast but risky), configure explicit allow and deny lists so the agent runs known-safe commands without asking while destructive commands are blocked.

**Why it matters:** You get nearly the same speed and hands-off flow as skipping all approvals, but destructive operations can't slip through.

**The moves:**
1. Explicitly allow the commands you know are safe so they run without interruption.
2. Explicitly deny destructive operations (deletes, removals, anything irreversible).
3. Rely on precedence: a deny rule overrides an allow rule, so anything on the deny list is blocked even if broadly allowed.

**Watch out for:** The "skip all approvals" mode is named for its danger for a reason — it will happily run destructive commands. Curated lists are the safer default for autonomous runs.

**Original example to invent:** Source is generic. Writers should show a concrete allow/deny config for a real stack (e.g., allow test/build commands, deny database drops).
