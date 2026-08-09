---
id: kc-0107
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agentic-workflow, claude-code, api-keys, iteration, first-build]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# End-to-end pattern for building a first agentic workflow

**What:** A repeatable end-to-end pattern for turning a plain-language request into a working automation inside a Claude Code project: set up the project's system-prompt file, describe the goal in plan mode, answer the agent's clarifying questions, review the resulting plan (workflow file + list of tool scripts it will build), approve and let it build, supply any needed API keys into an environment-variable file rather than in chat, run a first test, and iterate by describing what's wrong until output is acceptable.

**Why it matters:** This is the core loop the rest of the course builds on — every later chapter (deployment, skills, sub-agents) assumes the builder is comfortable with this cycle. It converts what looks like a large ambiguous task into a small number of concrete, observable steps.

**The moves:**
1. Drop in (or have the agent write) the project's claude.md before doing anything else.
2. In plan mode, describe the outcome wanted, referencing any files (logos, sample data) the agent should look at directly.
3. Answer the round of clarifying questions plan mode produces (data sources, output format, volume/limits, delivery destination); this materially changes the quality of the resulting plan.
4. Review the plan's proposed tool list and text stack; correct anything before accepting (e.g., swap a proposed service for a preferred one).
5. Switch to an autonomous execution mode, then create any requested API keys and paste them into the generated environment-variable file (never into the chat) when prompted.
6. Run the workflow once, inspect the actual output for concrete defects (broken formatting, wrong data, missing branding), and describe those defects back to the agent in plain language rather than trying to fix them by hand.
7. Repeat step 6 until the output is acceptable — each pass typically also updates the workflow/tool files so the same defect doesn't recur.

**Watch out for:** The first run of any new workflow reliably has multiple correctable issues (broken layout, empty fields, wrong assumptions); this is expected, not a sign something is broken. Treat the first successful run as a baseline to keep improving, not a finished product — running the same workflow repeatedly with feedback each time is what makes it reliable.

**Original example to invent:** The source built this pattern three times on camera — a branded-PDF competitor-research tool, a job-listing scraper, and a newsletter generator. Writers must invent a different first workflow (e.g., a weekly expense-report compiler) to walk through the same steps.
