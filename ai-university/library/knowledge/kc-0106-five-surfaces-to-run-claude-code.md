---
id: kc-0106
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code-setup, terminal, ide, desktop-app, vps, getting-started]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Five surfaces for running Claude Code, and how to pick one

**What:** Claude Code can be run from five different surfaces that all share the same underlying engine but trade off control, visual feedback, and accessibility differently: a terminal CLI (most control, text-only, steepest learning curve), a desktop GUI app (most visual, least hackable, limited platform support), a browser-based hosted version (no local setup, clones a connected repo, keeps running after the laptop closes), an IDE extension (files and agent side by side, some CLI-only features unavailable), and a virtual private server (always-on, reachable remotely, requires basic server knowledge).

**Why it matters:** Beginners often get stuck deciding "where" to run Claude Code as if it were a single choice; understanding that all five are the same engine with different trade-offs removes that friction and lets someone pick (or mix) surfaces based on the task rather than confusion about which is "correct."

**The moves:**
1. Pick the IDE-extension surface as a default for hands-on building — it shows files and the agent side by side and still allows dropping into a terminal for CLI-only commands.
2. Use the browser-hosted surface for tasks that should keep running after stepping away, or for working from a device with no local setup.
3. Use the desktop app if a fully visual, no-terminal experience matters more than advanced customization.
4. Use a VPS when the automation needs to sit next to other always-on infrastructure (databases, other services) or be reachable via chat apps from a phone.
5. It's normal to run several surfaces in parallel (e.g., several terminal sessions plus a browser session) rather than committing to exactly one.

**Watch out for:** Some commands and features roll out to the terminal/CLI first and take time to reach the desktop app or IDE extensions, so a feature's absence in one surface doesn't mean it doesn't exist yet. The desktop app was noted as available on a limited set of operating systems.

**Original example to invent:** The source illustrated each surface with its own account and setup. Writers should describe a fictional user's situation (e.g., a solo builder who prototypes in an IDE, then moves a finished automation to a VPS) rather than reusing the source's specific accounts.
