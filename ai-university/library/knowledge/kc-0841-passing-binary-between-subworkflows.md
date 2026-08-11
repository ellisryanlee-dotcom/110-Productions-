---
id: kc-0841
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, sub-workflows, binary-data, file-id, variables]
source_video: jBanaNBY-sM
source_channel: "@nateherk"
source_views: "197K"
confidence: high
---
# Passing media between n8n sub-workflows by ID

**What:** A pattern for handling images/videos in a multi-workflow automation: instead of
shuttling raw binary files between the main workflow and its tool sub-workflows, pass small
text variables (file IDs, a chat ID, prompts, titles) and let each sub-workflow fetch,
create, and store the actual binary itself.

**Why it matters:** Binary data is awkward to hand off between flows. Keeping the
inter-workflow interface to lightweight variables makes the whole system simpler and more
reliable — each sub-workflow downloads what it needs by ID and delivers results directly.

**The moves:**
1. Build each media capability (create image, edit image, image-to-video, create video) as
   its own sub-workflow triggered by "when executed by another workflow."
2. Define the small inputs each sub-workflow needs (e.g., file ID of the source, a prompt,
   a chat ID for replying, a title/aspect ratio).
3. Have the calling tool supply LLM-chosen values (like the prompt) plus fixed references
   (like the chat ID pulled from the original trigger).
4. Inside the sub-workflow, download the source file by its ID when editing, generate the
   output, then send it back to the user and save it to storage.

**Watch out for:** Because binaries move inside the sub-workflows, the user may receive the
media before the main agent's text reply — expected behavior with this design, not a bug.
Always pass the chat/reply ID through so results route back to the right conversation.

**Original example to invent:** Source moved speaker-ad images/videos between flows.
Writers should show a different media pipeline using ID hand-offs.
