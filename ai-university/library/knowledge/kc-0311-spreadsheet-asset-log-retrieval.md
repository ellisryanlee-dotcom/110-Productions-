---
id: kc-0311
type: how-to
track: "Track 8 — Applied Automations"
topics: [google-sheets, google-drive, asset-management, retrieval, n8n]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# A spreadsheet as an asset log plus a retrieval agent over it

**What:** Every generated asset gets written to a Google Sheet (title, type,
request/prompt, storage ID, view link, and post text) while the file itself lands
in Drive. A small retrieval agent can then search that sheet to find a past asset
by description and return its name, ID, and link — giving you a lightweight "asset
database" without any real database.

**Why it matters:** It lets the system answer "get that crocodile image I made
last week" and, crucially, fetch the storage ID needed to edit an existing asset.
A sheet is cheap, human-inspectable, and good enough at small scale.

**The moves:**
1. After creating each asset, upload the binary to Drive and log a row: title,
   type (image/edit/post), request, Drive ID, web-view link, and content.
2. Build a retrieval agent whose tool is read access to that sheet.
3. Pass it an intent (get vs. edit) and a title; have it return name, ID, link,
   and a status.
4. Use a structured-output parser so "not found" is an explicit status you can
   branch on.
5. On "get" intent, download and send the file; on "edit" intent, return just the
   ID so the edit tool has what it needs.

**Watch out for:** Keep column names stable so lookups don't break. Distinguish
the two intents — you don't need to send the whole file when the caller only needs
the ID.

**Original example to invent:** Source logged marketing images to a sheet. Writers
should show the pattern for a different asset type (e.g., generated audio clips).
