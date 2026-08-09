# Agent Pre-Launch Checklist
**Crash Test Agents — we break AI agents so yours don't.**

Run every line before you let an agent touch real work. If you can't tick it, don't launch it.

## Input & scope
- [ ] Break the job into chunks, hard-code every chunk that doesn't need judgment, and reserve the model only for the parts that truly require reasoning — if a chunk runs the same fixed steps every time, it's a workflow, not an agent.
- [ ] Give the system prompt all its sections: role/goal, per-run context, tools, rules, examples, and final notes.
- [ ] Write rules as conditions ("if X, do Y"), never a fixed step order — a fixed order means you want a workflow instead.
- [ ] Build the prompt reactively: add one tool, test a real input, then add one line to fix the exact behavior you saw.
- [ ] Change one thing at a time so you always know which line caused which behavior.
- [ ] Add examples only for cases the agent actually gets wrong; paste the real input, the wrong action, and the correct action.
- [ ] Validate and clean every incoming input before the agent acts on it — assume real-world data will be malformed.

## Errors & retries
- [ ] Read the HTTP status class on any failed call: 400 = your request, 401 = key, 403 = access, 404 = wrong URL, 500 = server broke (wait and retry).
- [ ] Never trust a green run alone — confirm the action actually happened, because a step can go green while a tool inside it quietly failed.
- [ ] Wire one shared error-logging workflow (error trigger → log the run, workflow, failed step, and message → alert you with a link), and trigger a deliberate failure to confirm the row and alert both appear.
- [ ] Give failure-prone steps a success branch and an error branch instead of letting a failure halt the whole run.
- [ ] On the error branch, return a short, human-readable "couldn't do it, please retry" message — not a raw stack trace.
- [ ] Let the orchestrator read that message and retry transient failures with a fresh request.

## Verification
- [ ] Treat every failure as data: diagnose the cause, fix the underlying step, and retest.
- [ ] Forbid the agent from stating any fact it can't pull from a source of truth — verify names, numbers, and statuses before acting on them.
- [ ] Record each fix in the workflow's own rules so the same break can't recur.
- [ ] Persist durable lessons to a memory/reference file so they survive future runs, not just the current session.

## Guardrails & cost
- [ ] Start in sandbox/paper mode (draft and log, send nothing real) and switch to live actions only once you trust it.
- [ ] Write explicit caps and prohibitions into the rules (max actions per run and per period, plus forbidden action types).
- [ ] Read the full history of early runs and tune the prompt and settings from what you see — don't auto-accept.
- [ ] Budget context per run: give it instructions, the current item, and a short summary — not the entire archive.
- [ ] Keep memory files lean and summarize/clear context mid-session; more context past a point makes the agent worse and costlier.

## Secrets & permissions
- [ ] Keep keys in an ignored .env file under placeholder names — never paste a real key into the prompt, code, or chat.
- [ ] Reference secrets by variable name; for cloud runs supply them as environment variables, and rotate any key that leaks.
- [ ] Give the agent its own scoped account or key with the minimum permissions it needs (read-only wherever writes aren't required).
- [ ] Use a separate named key per agent so spend and actions are attributable, and keep each agent's secrets isolated.

## Human gates
- [ ] Gate every irreversible action (anything a customer sees, anything you can't undo) behind a send-and-wait approval step.
- [ ] Use an AI classifier to read free-text feedback (approve vs. revise) and loop revisions on the latest version until you approve.
