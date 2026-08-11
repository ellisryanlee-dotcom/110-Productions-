---
id: kc-0411
type: how-to
track: "Track 8 — Applied Automations"
topics: [claude-code, vps, remote, scheduling, background-tasks]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Run the agent always-on and steer it remotely

**What:** Techniques for keeping a coding agent working when you're away from the desk: host it on a remote server, control local sessions from your phone or a browser, schedule recurring prompts, and get pinged when a session needs you.

**Why it matters:** Long-running and recurring work shouldn't require babysitting a local terminal; you can start heavy tasks and keep steering from anywhere.

**The moves:**
1. Host the agent on a remote server so it keeps running with your laptop closed; connect in when you need to interact (including via a chat app).
2. Use remote control to steer a local session from your phone or browser — the code stays on your machine, only the control link is remote.
3. Use a recurring in-session loop to re-run a prompt on an interval (e.g., check a deployment every few minutes) that only interrupts you when attention is needed — note these loops are time-limited.
4. For longer-horizon recurrence, use scheduled tasks — but remember each scheduled run is a fresh session with no carried-over memory.
5. Set up a notification hook so a finished or blocked session pings you, letting you juggle many sessions at once.

**Watch out for:** In-session loops expire after a few days; scheduled tasks don't retain context between runs. Choose based on how long-lived and stateful the job is.

**Original example to invent:** Source mentions monitoring a deployment. Writers should invent a different always-on job (e.g., watching an error log overnight) and show which mechanism fits.
