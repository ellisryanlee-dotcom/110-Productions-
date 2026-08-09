---
id: kc-0306
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [error-handling, n8n, agent-communication, reliability]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Success/error branches so agents can tell each other to retry

**What:** In a sub-agent workflow, split the ending into two paths: on success,
return the agent's real output to the caller; on error, return a short "couldn't
do it, please try again" message. The calling agent reads that failure text and
can reissue the task, turning tool calls into a two-way conversation instead of a
one-shot fire-and-forget.

**Why it matters:** Without an error path, a failed sub-agent returns nothing or a
raw error, and the orchestrator has no idea what happened. A clean failure signal
lets the system self-recover on transient issues.

**The moves:**
1. On the sub-agent node, open settings and set "on error, continue using error
   output" so the flow branches instead of halting.
2. On the success branch, return the agent's output (the last node the caller
   reads).
3. On the error branch, return a concise natural-language failure message.
4. Let the orchestrator interpret that message and decide whether to retry with a
   fresh query.

**Watch out for:** Keep the failure message human-readable and actionable — the
next agent parses it as instructions, not as a stack trace.

**Original example to invent:** Source applied this to an email sub-agent. Writers
should demo the retry loop on a different failure-prone step (e.g., a flaky
third-party API call).
