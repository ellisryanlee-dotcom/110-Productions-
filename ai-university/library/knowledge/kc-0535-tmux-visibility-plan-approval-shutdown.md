---
id: kc-0535
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, tmux, plan-approval, shutdown, visibility]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# Seeing and steering an agent team: tmux visibility, plan approval, clean shutdown

**What:** Three operational controls for running agent teams well: (1) run in a terminal multiplexer (tmux) to *see* each agent working in its own colored pane and message any teammate individually; (2) use plan-approval mode so teammates must get plans approved before executing; and (3) shut teammates down cleanly so their work is saved.

**Why it matters:** In some interfaces you only communicate through the main session and can't see what each agent is thinking. A multiplexed terminal exposes each agent's work and lets you approve, correct, or redirect an individual teammate — and lets you kill one early if it heads the wrong way. Plan approval catches bad approaches before tokens are spent, and clean shutdown prevents losing in-flight work.

**The moves:**
1. Run the harness inside a tmux terminal to get a split-pane view; each teammate shows as its own labeled/colored agent you can watch and message directly.
2. Use plan-approval mode: have teammates plan first and get approval before executing — usually the main session (the lead) approves, though you can require your own approval, or dedicate a teammate as plan reviewer.
3. At session end, request shutdown; a teammate can say "not done yet, let me save" so work is preserved before the team closes.
4. Prefer graceful shutdown over force-killing, which can leave work uncleaned.

**Watch out for:** In a non-terminal extension you lose per-agent visibility and can only talk through the main session. Windows users need a workaround to get a tmux-style terminal. Force-killing mid-run risks losing or corrupting work.

**Original example to invent:** The source watches a colored three-agent team in tmux and demonstrates shutdown. Writers should invent a different steering moment (e.g., catching one teammate off-track and messaging it directly to correct course).
