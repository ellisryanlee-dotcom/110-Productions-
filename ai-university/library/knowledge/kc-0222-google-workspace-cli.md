---
id: kc-0222
type: tool
track: "Track 8 — Applied Automations"
topics: [google-workspace, cli, gws, bash, integrations]
source_video: bCljOfCH8Ms
source_channel: "@nateherk"
source_views: "395K"
confidence: high
---
# The Google Workspace CLI (one tool for the whole suite)

**What:** An open-source command-line tool that gives a coding agent one interface
to an entire productivity suite — mail, drive, docs, sheets, slides, calendar, admin.
The agent drives it with terminal (bash) commands rather than per-service API calls
or MCP servers, and it ships with a large library of prebuilt multi-step "recipes"
(e.g., build a doc from a template, find free time and schedule a meeting).

**Why it matters:** It replaces a pile of separate API integrations/MCP configs with
a single low-overhead tool, which is far more token-efficient and auto-stays current
as the suite adds endpoints. Because it creates real documents via commands (not raw
API markdown dumps), formatted output like properly styled docs and decks becomes
achievable.

**The moves:**
1. Give the agent the tool's repo link and have it read the docs and install.
2. Create a cloud project, configure OAuth consent, generate a desktop client ID,
   and download the credentials JSON to the expected config path.
3. Authenticate (an OAuth login flow), then enable each service's API you plan to use.
4. Ask in natural language for cross-service tasks (search drive, triage inbox,
   build a slide deck) and lean on the built-in recipes.
5. Pair with browser/devtools screenshots for visual validation of generated slides.

**Watch out for:** It's pre-1.0 and "not an officially supported product" — expect
breaking changes and occasional re-authentication. It generates slides/docs
programmatically and can't "see" them, so spacing errors happen unless you add a
visual-validation step. It's suited to a Google-centric stack; a different office
suite needs its own tooling.

**Original example to invent:** Source used it to build a branded resource doc and a
tracker sheet from a messy doc. Writers should demonstrate a different cross-suite
task (e.g., turning a folder of notes into an organized shared drive).
