# Brief: Crash Test #1 — break an AI agent until it's bulletproof

track: "Track 9 — Reliability & Craft"
target_length: 15–17 min
status: commissioned

## Working title (writer may sharpen within voice-guide rules)
"I Tried to Break This AI Agent 25 Ways (so yours won't die in production)"

## Angle
Launch video for the channel's signature format. Build a simple, believable
agent fast (email-triage assistant — universally understood), then spend the
video attacking it: malformed inputs, API failures, hallucinated tool calls,
secret leakage, runaway loops, cost blowups. Each break → a fix → a rule.
Ends with the artifact: the Agent Pre-Launch Checklist (free download).

## Cards (writer works ONLY from these + voice-guide)
- kc-0226 [claim] Deterministic workflows beat AI agents most of the time
- kc-0114 [framework] Reactive prompting: build the system prompt one fix at a time
- kc-0115 [how-to] Anatomy of an effective system prompt
- kc-0117 [how-to] Human-in-the-loop approval and revision loops
- kc-0118 [how-to] Error-logging workflows: catch and get notified of failure
- kc-0306 [how-to] Success/error branches so agents can tell each other to retry
- kc-0105 [pitfall] Reading HTTP status codes to debug API calls
- kc-0325 [how-to] Guardrails for an eager autonomous agent
- kc-0213 [concept] The self-improving loop: treat every failure as data
- kc-0206 [how-to] Handling secrets safely with .env files
- kc-0215 [pitfall] Least privilege: separate accounts and scoped keys per agent
- kc-0323 [concept] Treating context as a budget per run

## Artifact
"Agent Pre-Launch Checklist" — one page, ~25 checks distilled from the cards
(input validation, error branches, logging, secrets, permissions, cost caps,
human gates). Ship as `production/artifacts/agent-prelaunch-checklist.md`.

## Beats (house structure, voice-guide §Structure)
1. Hook ≤30s: agent dies on screen mid-demo → "everyone shows you the demo;
   nobody shows you this" → promise + agenda.
2. Context ≤90s: why broken agents cost real money (invoice framing).
3. Build the victim agent quickly (2–3 min, not a tutorial — link the concept).
4. THE CRASH TESTS (core, ~8 min): grouped rounds — bad inputs / dead APIs /
   lying model / leaky secrets / runaway cost. Each: break on screen → why →
   fix → one-line rule (checklist line materializes).
5. What survived: rerun the gauntlet clean.
6. Artifact drop + CTA: checklist download; "send us your agent, we'll break
   it" (community seed).

## Notes for the writer
- Invent ALL demo specifics (fake company, fake emails, fake keys) — cards
  flag where sources used their own examples; ours must differ.
- Every claim margin-cited to a card id; unknowns marked [VERIFY], never guessed.
- Failures stay honest: if a fix is partial, the script says so — that IS the brand.
