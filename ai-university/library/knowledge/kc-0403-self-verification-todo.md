---
id: kc-0403
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [claude-code, qa, self-verification, todo-lists]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: high
---
# Bake self-verification into the agent's to-do list

**What:** When the agent builds a task list, insert verification steps directly after each build step so it checks its own work before handing it to you, and hold it to a confidence bar per item.

**Why it matters:** AI rarely one-shots exactly what you want. It is far better for the agent to reliably one-shot most of the way there and self-correct than to hand you something that only looks finished.

**The moves:**
1. After a build step (e.g., "create the page"), add the next to-do as an explicit check (e.g., "capture a screenshot and confirm the layout is correct").
2. Add a functional check as its own step (e.g., open a browser dev-tools session and confirm there are no runtime errors).
3. Instruct the agent not to advance to the next item until it is highly confident the current one is actually good.
4. Let the agent build, check, fix, and only then bring the result to you for feedback.

**Watch out for:** Verification steps must be concrete and observable (a screenshot, an error console) — vague "make sure it works" instructions don't add real gates.

**Original example to invent:** Source uses a website build. Writers should pick a different artifact (e.g., a data import script) and show the interleaved build-then-verify to-do list.
