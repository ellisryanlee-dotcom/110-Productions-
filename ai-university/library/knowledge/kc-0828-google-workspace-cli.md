---
id: kc-0828
type: tool
track: "Track 4 — Claude Code & Dev Agents"
topics: [google-workspace, cli, claude-code, gmail, drive, docs, sheets, slides]
source_video: Wu67lLD8bB0
source_channel: "@nateherk"
source_views: "205K"
confidence: high
---
# Google Workspace CLI for agent access to Google apps

**What:** An open-source command-line interface that gives a coding agent full access
to a user's Google environment — Drive, Gmail, Calendar, Docs, Sheets, Slides, admin —
through terminal (bash) commands rather than API calls or MCP servers. It ships with a
large library of multi-step "recipe" workflows (skill-like chained commands) for common
tasks.

**Why it matters:** It lets an agent do real work across Google apps — search, create,
share, format — as one tool. Notably, it can produce properly formatted Google Docs (not
raw markdown dumps), because it drives Google natively via commands.

**The moves:**
1. Give the agent the tool's repo/docs and let it install and configure the CLI.
2. Authenticate once; the CLI stays current automatically as Google adds endpoints
   (auto-discovery), so it's low maintenance.
3. Invoke capabilities in natural language (e.g., "create a formatted doc from this
   transcript," "score my unread emails and archive the low-priority ones").
4. Use the built-in recipes for common multi-step patterns instead of scripting them.

**Watch out for:** It's an unofficial/beta project under active development — expect
breaking changes before v1.0, and some users report needing to re-authenticate. It works
best paired with the OAuth setup and, for visual outputs, a validation loop (see related
cards).

**Original example to invent:** Source generated a YouTube resource guide doc. Writers
should demonstrate a different Google-app task.
