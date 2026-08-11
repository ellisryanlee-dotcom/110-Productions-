# Agent Pre-Launch Checklist — 25 checks
**Crash Test Agents — we break AI agents so yours don't.**

25 ways to kill an agent, 25 fixes. Each line is one break from the video, in order. Run every line before you let an agent touch real work — if you can't tick it, don't launch it.

## Input & scope (breaks 1–6)
- [ ] **1.** Give the agent a real system prompt with every section — role/goal, per-run context, tools, rules, examples, final notes; an empty brain writes generic mush.
- [ ] **2.** Break the job into chunks and hard-code every chunk that doesn't need judgment — reserve the model only for the parts that truly require reasoning.
- [ ] **3.** Write rules as conditions ("if X, do Y"), never a fixed step order — a fixed order means you wanted a workflow, not an agent.
- [ ] **4.** Build the prompt reactively and change one thing at a time — add one tool, test a real input, add one line to fix the exact behavior you saw; never dump a giant pre-written prompt.
- [ ] **5.** Add examples only for cases the agent actually gets wrong (real input, wrong action, correct action) — padding examples it already handles just burns tokens.
- [ ] **6.** Validate and clean every incoming input before the agent acts on it — assume real-world data is malformed, or a bad field becomes a 400.

## Errors & retries (breaks 7–11)
- [ ] **7.** Read the HTTP status class on any failed call: 400 = your request, 401 = key, 403 = access, 404 = wrong URL, 500 = server broke (wait and retry).
- [ ] **8.** Never trust a green run alone — confirm the action actually happened, because a step can go green while a tool inside it quietly failed.
- [ ] **9.** Wire one shared error-logging workflow (error trigger → log the run, workflow, failed step, and message → alert you with a link), and force a failure to confirm the row and alert both appear.
- [ ] **10.** Give failure-prone steps a success branch and an error branch instead of letting one failure halt the whole run.
- [ ] **11.** On the error branch return a short, human-readable "couldn't do it, please retry" message the orchestrator can read and retry — never a raw stack trace that turns a transient blip into a dead run.

## Verification (breaks 12–15)
- [ ] **12.** Forbid the agent from stating any fact it can't pull from a source of truth — verify names, numbers, and statuses before acting, or it will hallucinate one with total confidence.
- [ ] **13.** Treat every failure as data: diagnose the cause and fix the underlying step, don't dismiss the miss as a fluke.
- [ ] **14.** Record each fix in the workflow's own rules so the same break can't recur.
- [ ] **15.** Persist durable lessons to a memory/reference file so they survive future runs, not just the current session.

## Guardrails & cost (breaks 16–20)
- [ ] **16.** Start in sandbox/paper mode (draft and log, send nothing real) and switch to live actions only once you trust it.
- [ ] **17.** Write explicit caps and prohibitions into the rules — max actions per run and per period, plus forbidden action types — so an eager agent can't run the same action dozens of times.
- [ ] **18.** Read the full history of early runs and tune from what you see — don't auto-accept whatever the agent decides to do.
- [ ] **19.** Budget context per run: give it instructions, the current item, and a short summary — not the entire archive you re-pay for every run.
- [ ] **20.** Keep memory files lean and summarize/clear context mid-session; past a point, more context makes the agent worse, not just costlier.

## Secrets & permissions (breaks 21–23)
- [ ] **21.** Keep keys in an ignored .env file under placeholder names — never paste a real key into the prompt, code, screenshot, or chat.
- [ ] **22.** Reference secrets by variable name (supply them as environment variables for cloud runs) and rotate any key that leaks — cancel the old one, issue a new one.
- [ ] **23.** Give the agent its own scoped account and a separate named key with the minimum permissions it needs (read-only wherever writes aren't required), so spend and actions are attributable and blast radius is small.

## Human gates (breaks 24–25)
- [ ] **24.** Gate every irreversible action (anything a customer sees, anything you can't undo) behind a send-and-wait approval step.
- [ ] **25.** Use an AI classifier to read free-text feedback (approve vs. revise) and loop revisions on the latest version — never the first draft — until you approve.
