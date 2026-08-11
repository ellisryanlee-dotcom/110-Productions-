---
id: kc-1224
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, agent-sdk, heartbeat, proactivity, automation, second-brain]
source_video: 1FiER-40zng
source_channel: "@ColeMedin"
source_views: "108K"
confidence: medium
---
# The proactive agent "heartbeat" loop

**What:** A heartbeat is a scheduled loop that makes an agent proactive instead of purely reactive. On each tick, a deterministic step gathers current context by pulling from your integrated services (email, tasks, code repos), then hands that context plus a preconfigured prompt to the agent (invoked programmatically via the Agent SDK). The agent reasons about what to do — draft replies, handle a pull request — acts, and sends you a summary notification so you stay in the loop.

**Why it matters:** The highest-leverage assistant behavior is the stuff you didn't have to ask for. A heartbeat is what lets the agent anticipate needs and take action on your behalf on a schedule — often the single biggest time-saver in a personal-agent setup.

**The moves:**
1. Schedule the loop (e.g., a cron job) at whatever cadence fits.
2. Deterministic gather step: call your service integrations to assemble a snapshot of what's currently happening.
3. Invoke the agent programmatically with that snapshot plus a fixed instruction prompt.
4. Let it reason and act within its permitted capabilities.
5. Have it notify you (e.g., a chat message) summarizing what it did, with a way to reply and continue the thread.

**Watch out for:** Proactivity amplifies the security stakes — scope what the heartbeat is allowed to *do* (draft vs send, which projects it can touch) deliberately. Start conservative and expand.

**Original example to invent:** Describe a heartbeat that surfaces a morning briefing and drafts a couple of actions for an invented user's day — not the source's blurred personal alerts.
