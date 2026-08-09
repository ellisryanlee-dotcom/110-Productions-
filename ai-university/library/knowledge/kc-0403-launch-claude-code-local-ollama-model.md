---
id: kc-0403
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, ollama, local-models, setup, authentication]
source_video: O2k_qwZA8HU
source_span: ["8:45", "11:31"]
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Launching Claude Code against a locally-run Ollama model

**What:** Ollama's desktop app can generate a launch command that starts Claude Code and lets you pick, from a menu, which locally-installed (or cloud) model it should use as its backend for that session, instead of Claude Code's default Anthropic connection. The first time Claude Code is set up on a machine or account, it still runs through its normal onboarding (interface preference, sign-in method); choosing the API-key sign-in path requires authorizing an Anthropic account and purchasing a small minimum amount of prepaid API credit — a one-time setup cost that then goes unused once sessions are routed to a local model instead.

**Why it matters:** This is the actual connection point that makes a free Claude Code setup real: without explicitly launching through the local-model command, Claude Code defaults back to billing the connected Anthropic account the moment a message is sent, even with a local model installed and running.

**The moves:**
1. Open the Ollama app and use its launch action for Claude Code to generate a launch command already configured to prompt for a local (or cloud) model choice.
2. Run that command in the terminal, inside the project you want to work in, and select the desired installed model from the resulting list.
3. If Claude Code has never been set up on this machine/account, complete its one-time onboarding; choosing the API-key path requires authorizing an Anthropic account and a small minimum prepaid credit purchase, which is a one-time setup gate rather than an ongoing cost once local models are in use.
4. Confirm the session is actually routed to the local model, not the billed Anthropic API, before sending real prompts — the billing/usage indicator in Claude Code's UI shows which backend and plan is active.
5. Test with a read-oriented prompt first (e.g., asking it to summarize the current project), then a write-oriented prompt (e.g., asking it to create a file), to confirm both reasoning and tool-use work end-to-end.

**Watch out for:** Local-model sessions are noticeably slower than hosted Anthropic sessions, and because the local model isn't native to Claude Code's tool-call display, a session may not show the same step-by-step visibility into what tools are running — it can look idle until it finishes. Skipping the explicit local-model launch step and chatting normally attempts to bill the connected Anthropic account instead.

**Original example to invent:** The source demoed this by asking a locally-run model to describe an existing project's contents, then to create a small file. Writers should invent a different pair of verification prompts (one read-only, one write) rather than reusing the source's specific test.
