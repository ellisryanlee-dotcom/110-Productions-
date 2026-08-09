---
id: kc-1116
type: tool
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-sdk, background-process, summarization, subscription-auth, automation]
source_video: 7huCP6RkcY4
source_channel: "@ColeMedin"
source_views: "151K"
confidence: high
---
# The agent SDK as a background worker

**What:** The same coding-agent capability packaged as an SDK can be invoked programmatically as a separate process behind the scenes — for example, to summarize a transcript, extract structured takeaways, or process knowledge without a human in the loop. It can authenticate off your existing subscription rather than requiring a separate API key.

**Why it matters:** It lets you build automations that reuse the agent's intelligence as a callable step in a pipeline (data processing, summarization, extraction) instead of only chatting with it interactively. No extra key setup lowers friction.

**The moves:**
1. Trigger the SDK from a hook, script, or scheduled job.
2. Pass it the input (a transcript, a document) and a prompt describing the transformation.
3. Capture its output as a file or record for downstream use.
4. Run it detached so it doesn't block the interactive session.

**Watch out for:** Because it runs in the background, surface its status/logs so you know when it finished. Keep its prompts in editable files so the behavior can be tuned.

**Original example to invent:** Source uses it to summarize sessions into logs. Invent a different background use (e.g., nightly changelog generation) with your own prompt.
