---
id: kc-0804
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [n8n, webhook, deployment, activation]
source_video: kUpTUEwKnrk
source_channel: "@nateherk"
source_views: "217K"
confidence: high
---
# Test URL vs production URL when activating an n8n workflow

**What:** A workflow has two webhook URLs — a test URL that only listens after you
manually start a single test run, and a production URL that listens continuously
once the workflow is toggled active.

**Why it matters:** People build against the test URL, then wonder why their app
stops working "randomly" — it's because the test listener only accepts one event
at a time and only while armed. Going live requires switching both the activation
state and the URL the caller uses.

**The moves:**
1. During building, arm the test listener before each trigger to catch one event.
2. When ready for hands-off operation, toggle the workflow to active.
3. Copy the production URL and update the calling app to use it instead of the
   test URL.
4. Confirm live runs appear in the executions history rather than as live test
   overlays.

**Watch out for:** After activating, you no longer see the live green-node run
view; check the executions log instead. Forgetting to swap the URL means the app
still points at a dead test listener.

**Original example to invent:** Describe the go-live cutover for a different app,
not the source's excuse tool.
