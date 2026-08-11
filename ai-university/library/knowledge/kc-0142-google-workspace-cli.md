---
id: kc-0142
type: tool
track: "Elective — Model & Tool Literacy"
topics: [google-workspace-cli, gws, cli, gmail, drive, docs, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# The Google Workspace CLI (GWS) for agentic tools

**What:** GWS is an open-source command-line interface that gives an agentic coding tool one connection to all of Google Workspace — Gmail, Drive, Calendar, Docs, Sheets, Slides, and more — with JSON-first responses and 100+ built-in multi-step "recipe" skills (e.g., create a doc from a template, find free time and schedule a meeting). The agent operates it via bash commands, not per-endpoint API calls or MCP configs.

**Why it matters:** One CLI replaces a pile of API endpoints or MCP servers, so it's low-overhead on context and auto-updates as Workspace adds methods. It also produces properly formatted Google Docs (headers, images, links) instead of the raw-markdown mess you get building docs over the API.

**The moves:**
1. Give the agent the GWS GitHub repo and ask it to install the CLI and prerequisites.
2. Authenticate: create a Google Cloud project, set up an OAuth consent screen, create desktop-app credentials, download the client-secret JSON to the CLI's config path, and run the auth login.
3. Enable the specific Workspace APIs you'll use in the Cloud project.
4. Ask in natural language ("find my doc from April," "score today's unread emails and mark low-priority ones read") and let it run the right commands/recipes.
5. Pair with browser/dev-tools screenshots so it can visually validate outputs like Slides.

**Watch out for:** It's a pre-1.0 developer project (not officially supported) — expect breaking changes and occasional re-auth prompts. First runs may need back-and-forth; let the agent read the docs to fix issues.

**Original example to invent:** The source builds a branded resource-guide doc and triages email. Invent a different Workspace automation (e.g., auto-drafting meeting agendas) using the CLI.
