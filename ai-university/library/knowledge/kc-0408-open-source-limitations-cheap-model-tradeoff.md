---
id: kc-0408
type: pitfall
track: "Track 4 — Claude Code & Dev Agents"
topics: [open-source-models, rate-limits, cost-optimization, web-search, claude-code]
source_video: O2k_qwZA8HU
source_span: ["23:00", "24:55"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Open-source model gaps in Claude Code, and the cheap-model middle ground

**What:** Open-weight models routed into Claude Code weren't trained specifically on Claude Code's tool set the way Anthropic's own models were, and this shows up concretely: a model may attempt a native web-search tool call, fail because it lacks that capability, and silently fall back to answering from its training data instead of live results — looking superficially fine while actually being stale or wrong. Free-tier usage on services like OpenRouter also carries both daily and per-minute rate limits that can interrupt a workflow. A practical middle ground, if fully-free routing proves too limiting, is picking an extremely cheap (but still paid) small open model through the same router setup — some small open models price at a small fraction of a frontier closed model's rate, coming out roughly 50–100x cheaper for comparable work while avoiding free-tier rate limits and some capability gaps.

**Why it matters:** Free open-source routing isn't capability-equivalent to a frontier closed model — silently degraded behavior, like a fake-looking web search, is worse than an obvious error because it can pass unnoticed. Knowing the specific failure mode (missing native tools) and the fallback option (cheap-but-paid instead of free) keeps the free/local strategy from becoming a silent quality regression.

**The moves:**
1. Before relying on a free/local model for research tasks, verify it actually has live web-search/tool access rather than assuming it does — test with a query about something recent enough that training-data-only knowledge would visibly fail.
2. If native web search isn't available to the routed model, supply an external search API/tool instead, or plan to feed it reference material manually.
3. Monitor both daily and per-minute request counts against free-tier limits so a workflow doesn't silently stall mid-task.
4. If free-tier limits or capability gaps become a recurring blocker, compare a very cheap small paid model's per-token price against your usual frontier model's price on the same router — a large cost reduction (tens-of-times cheaper) without going fully free is often still a large win.

**Watch out for:** A model confidently answering a "search the web" request using only its training data can look identical, from the response text alone, to a real live lookup — always confirm tool-use actually happened rather than trusting the answer's tone. Context-window size differences between open models and large closed models also remain a separate constraint worth managing regardless of which routing method is used.

**Original example to invent:** The source demoed this failure by asking a routed model to research a real, recently-released AI model by name and watching the web-search tool call fail. Writers should invent a different research prompt (e.g., asking about a recent product update) rather than reusing the source's specific example.
