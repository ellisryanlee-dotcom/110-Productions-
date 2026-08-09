---
id: kc-0542
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, cli, token-cost, tool-loading]
source_video: ZRb7D6R64hM
source_channel: "@nateherk"
source_views: "272K"
confidence: high
---
# CLI first, MCP last: how tool loading drives token cost

**What:** A priority order for connecting external tools to an agent, driven by token efficiency. When a command-line tool (CLI) exists for a job, prefer it over the equivalent MCP server, because a CLI loads nothing into context until you actually run it, whereas an MCP server loads all its tool definitions into context on every message. A rough priority: CLI first, API endpoints second, skills third, MCP only when nothing else fits.

**Why it matters:** MCP overhead is invisible but real — a single connected server can consume many thousands of tokens per message, quietly bloating context and cost. CLIs for common platforms reportedly use meaningfully fewer tokens (cited as ~60–70% fewer) because nothing loads until invoked. Choosing the right connection method can dramatically cut spend.

**The moves:**
1. Before adding an MCP server, check whether a CLI (or plain API) exists for the task and prefer it.
2. Disconnect MCP servers you aren't actively using; connect them only for the session that needs them.
3. When you must use MCP, lean on tool-search/deferred-loading features that defer loading tool definitions until needed (cited as auto-deferring once MCP overhead crosses ~10% of the window, cutting overhead sharply).
4. Follow the order CLI → API → skills → MCP as a default heuristic.

**Watch out for:** MCP definitions reload on *every* turn, so idle servers bleed tokens continuously. "It works" isn't the same as "it's efficient" — the cost is hidden until you inspect context usage. (Specific percentages are asserted; verify against current docs.)

**Original example to invent:** The source names workspace/cloud CLIs as examples. Writers should invent a before/after where swapping one MCP server for its CLI equivalent visibly reduces per-message token load.
