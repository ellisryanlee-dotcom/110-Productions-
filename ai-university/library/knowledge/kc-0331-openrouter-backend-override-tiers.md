---
id: kc-0331
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [openrouter, claude-code, environment-variables, model-routing, cost]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Pointing Claude Code at OpenRouter (and overriding every model tier)

**What:** You can route Claude Code through OpenRouter by setting a few environment
variables in the project settings: change the base URL to OpenRouter, put your
OpenRouter key in the auth-token variable, leave the Anthropic API key blank, and
set the model variables to a free/cheap OpenRouter model. Critically, you must
override *all* the model-tier variables, not just the main one.

**Why it matters:** This gives you free or ~50–100x cheaper Claude Code without
local hardware. But if you only override the primary model and leave the smaller
tiers unset, the harness silently falls back to paid Anthropic models for its
frequent little tool calls and searches — charging you without warning.

**The moves:**
1. In the project's local settings JSON, set the base URL to OpenRouter and the
   auth token to your OpenRouter key (the variable is named for Anthropic but
   holds the OpenRouter key).
2. Leave the Anthropic API key blank.
3. Set every model-tier variable (main plus the smaller/faster tiers) to a chosen
   OpenRouter model, not just the top one.
4. Fund the OpenRouter account modestly to raise the free-model daily request cap.
5. To switch models, replace the model IDs across those variables.

**Watch out for:** Overriding only the main model leaves the utility tiers pointing
at paid models — the exact trap that quietly runs up charges. Free models also have
per-day and per-minute request caps, and some may lack native web-search, so you
route search through a dedicated search tool instead.

**Original example to invent:** Source configured a free open model as the backend.
Writers should show the settings for a different chosen model and verify no paid
fallback in the logs.
