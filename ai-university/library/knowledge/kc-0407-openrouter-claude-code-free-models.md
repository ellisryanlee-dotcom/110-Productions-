---
id: kc-0407
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [openrouter, claude-code, free-models, setup, environment-variables]
source_video: O2k_qwZA8HU
source_span: ["17:20", "23:00"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Routing Claude Code through OpenRouter's free models

**What:** OpenRouter is a third-party model marketplace/router that exposes many hosted models — including a set of genuinely free ones — behind one API. Claude Code can be redirected to call OpenRouter instead of Anthropic by overriding a small set of settings in the project's local Claude Code settings file: the API base URL is pointed at OpenRouter, the field Claude Code normally uses for an Anthropic auth token instead holds an OpenRouter API key, the actual Anthropic API key field is left empty, and — critically — every model-role setting (not just the primary/main model) is set to a specific free OpenRouter model identifier.

**Why it matters:** OpenRouter's own minimal setup example only overrides the primary model setting, but Claude Code separately routes smaller/faster internal calls (tool use, quick lookups) to its own default fast model unless that role is also explicitly overridden — leaving it unset silently falls back to a paid Anthropic model for those calls and generates real charges without any obvious warning.

**The moves:**
1. Create an OpenRouter account and add a small amount of prepaid balance (on the order of $5–10) — this isn't spent by free-model usage, but it raises the daily free-tier rate limit substantially versus an unfunded account.
2. Generate an OpenRouter API key from the account's credits/API-key section.
3. In the project's local Claude Code settings file, set the base-URL setting to OpenRouter's endpoint, put the OpenRouter API key in the auth-token field, leave the real Anthropic API key field blank, and set every model-role field (the main model and the smaller/faster model roles) to a free OpenRouter model's exact identifier — not just the primary one.
4. Relaunch Claude Code and confirm the billing/usage indicator shows OpenRouter free usage rather than a subscription plan.
5. To verify no paid fallback is happening, check OpenRouter's own request logs after a session and confirm calls show $0 cost and the expected free model name.
6. To pin a specific free model rather than use an auto-router, browse OpenRouter's model catalog filtered to free models, copy that model's exact identifier, and paste it into all of the model-role fields from step 3.

**Watch out for:** OpenRouter also lists a free "auto-router" model that picks whichever free model is currently most available (useful for avoiding rate limits) but gives no control over which underlying model actually answers a given request — treat it as a convenience fallback, not a default, if consistent model behavior matters. Forgetting to override every model-role field, not just the main one, is the easiest way to get charged unexpectedly while believing the setup is fully free.

**Original example to invent:** The source verified the setup by creating an empty test file through the auto-router, then repeated the process pinned to one specific large-context free model. Writers should invent a different verification step (e.g., a short research/summarization prompt) rather than reusing the source's file-creation test.
