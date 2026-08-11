---
id: kc-0239
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [n8n, error-handling, best-practices, sub-workflows, scalability]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# Error workflows and workflow-optimization best practices in n8n

**What:** How to make automations robust and maintainable: attach a dedicated error
workflow that runs whenever another workflow fails, plus a set of build best practices
(organization, reusable sub-workflows, error handling, and scalability).

**Why it matters:** No workflow is immune to failures (an API goes down, data
malforms). Without error handling, failures pass silently. And as workflows grow,
disorganized builds become impossible to debug or extend. These practices are what keep
a growing automation system reliable.

**The moves:**
1. Build an error workflow that starts with an error-trigger node and notifies you
   (message/email) with the failing workflow's name, the error message, and a link to
   the execution.
2. Attach it to any workflow via that workflow's settings ("error workflow").
3. Organize: descriptive node names and sticky-note comments so others can follow it.
4. Reuse: extract common tasks into sub-workflows (send email, create calendar event)
   and call them from many places instead of rebuilding.
5. Scale: use batch processing/pagination and conditional logic for larger datasets.

**Watch out for:** The error workflow must contain an error-trigger node to be
selectable. "Scaling" isn't just bigger workflows — it's smarter ones (batching,
branching). Skipping comments/naming now costs hours of confusion later. Learn by
doing: expect failures and use the executions view to diagnose them.

**Original example to invent:** Source hooked an error workflow to a personal-assistant
workflow and forced a failure by removing its model node. Writers should demonstrate
error handling on a different workflow and failure mode.
