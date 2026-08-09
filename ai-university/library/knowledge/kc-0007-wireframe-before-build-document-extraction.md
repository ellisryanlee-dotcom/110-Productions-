---
id: kc-0007
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [wireframing, planning-methodology, document-extraction, ai-information-extraction, workflow-design]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Wireframe before you build: planning a document-processing automation

**What:** A planning method for sequential (non-agent) automations: before opening the workflow builder, sketch the trigger, every intermediate step, and the branch points on a diagram tool, explicitly asking what triggers the process, what the data looks like at each hand-off, where a decision or AI step is actually required, and what the final action(s) are. Only after that skeleton is settled do you rebuild it node-by-node. The method is demonstrated on an invoice-processing workflow: watch a folder for new invoice files, extract text from the PDF, run an AI "information extractor" against a fixed list of fields (defined by looking at what a tracking spreadsheet needs), append the extracted record to that spreadsheet, then draft and send an internal notification email.

**Why it matters:** Building directly in a visual canvas without a plan reliably produces overbuilt, hard-to-follow workflows, causes confusion about where AI is actually needed versus a plain step, and leads to rework once a missed step is discovered mid-build. Planning first turns a vague goal into an explicit list of small, individually testable tasks.

**The moves:**
1. Before touching the builder, write down: what starts this process and what the incoming data looks like; whether the format varies enough between instances that a rule-based parser won't work (if so, that step needs AI); where each intermediate result needs to end up; what final action(s) happen at the end.
2. For a "same information, inconsistent layout" document type, define the fixed target field list first by looking at what the destination (a database or spreadsheet) actually needs, then use an AI information-extractor node with one named, described attribute per field rather than a rules-based text parser.
3. Convert the source file into extractable text before the extraction step — a file trigger typically only provides metadata or an ID, so a download step (to get binary) followed by a text-extraction step is required before an AI node can read the content.
4. Map each extracted attribute to its matching destination column by name, then add any downstream step (like drafting a notification) as a separate, narrowly-scoped AI call that receives only the specific extracted fields it needs, not the entire raw document.
5. Test the finished sequence against at least two real inputs with different formatting to confirm the extractor generalizes, not just the one sample used while building.

**Watch out for:** Skipping the planning step tends to surface a missing hop only after several nodes are already built (e.g., realizing a file needs to be downloaded again because binary data can't be referenced across an earlier upload/re-download boundary), forcing rework. An extractor with vague per-field descriptions will sometimes omit or misformat a field — tightening the field's description and explicitly setting its data type (string vs. date vs. number) fixes most of these.

**Original example to invent:** Source used a fictional invoice with client and amount and due-date fields flowing into a billing-team notification email. Writers should apply the same wireframe-first, fixed-field-extraction method to a different inconsistent-format document, such as intake forms or vendor contracts.
