---
title: "I Tried to Break This AI Agent 25 Ways (so yours won't die in production)"
stage: screenplay
source_script: production/scripts/crash-test-001-draft.md
brief: production/briefs/brief-001.md
status: draft
episode: 1
---

# Visual Screenplay — Crash Test #1 (Episode 1)

## Format spec (reusable — Episodes 2+ inherit this)

- **Aspect ratio:** 16:9 (1920×1080), faceless — screen recordings + motion graphics only, no on-camera host.
- **Target runtime:** 17:00 (paced from the approved script's `target_length: 17:00`; VO clocked at ~150 wpm plus visual-business buffers on slates/gags/montages).
- **Visual system:** all assets ORIGINAL and fictional. Fictional universe locked by the script — company "Harbor Supply Co.", agent "Sift", CRM "Rolodash". No source-channel footage, thumbnails, examples, or metaphors.
- **Brand tokens:** brand colors/logo/typography are set downstream in the BRANDING stage — this file uses placeholder tokens like `[BRAND palette]`, `[BRAND accent]`, `[BRAND logo]`. Do not hard-code hex.
- **Per-shot field schema:** `Shot ID` · `Timecode` (approx start–end) · `VO` (verbatim from approved script) · `Visual` (generatable on-screen description) · `On-screen text` (captions/titles/labels) · `Motion/Transition` · `Keyframe prompt seed` (one-line establishing-frame prompt for the image model).
- **⚠️ VERIFY:** unresolved factual/demo caveats flagged by the editor are carried forward on the relevant shot; never silently dropped.
- **Compliance:** realistic synthetic media requires YouTube's synthetic-media disclosure on title/end cards (see S052 VERIFY).

## Summary

| Metric | Value |
|---|---|
| Total shots | 52 (S001–S052) |
| Total estimated runtime | 17:00 |
| ⚠️ VERIFY flags carried forward | 3 |

| Section | Shots | Count |
|---|---|---|
| HOOK | S001–S004 | 4 |
| CONTEXT — why a broken agent costs real money | S005–S007 | 3 |
| BUILD THE VICTIM AGENT (fast) | S008–S012 | 5 |
| ROUND 1 — Bad inputs and the wrong tool for the job | S013–S022 | 10 |
| ROUND 2 — Dead APIs and fragile chains | S023–S029 | 7 |
| ROUND 3 — The lying model | S030–S033 | 4 |
| ROUND 4 — The runaway, eager agent and the cost blowup | S034–S038 | 5 |
| ROUND 5 — Leaky secrets and over-privilege | S039–S043 | 5 |
| FINAL SAFETY NET — human in the loop | S044–S046 | 3 |
| WHAT SURVIVED — the clean rerun | S047–S049 | 3 |
| ARTIFACT DROP + CTA | S050–S052 | 3 |

---

## HOOK

### S001
- **Timecode:** 0:00–0:09
- **VO:** "This agent sorts my email. Watch."
- **Visual:** A clean, calm inbox-triage dashboard on a dark UI. A live feed of incoming emails streams down the center column; each card animates a colored label snapping onto it — "Sales", "Support", "Billing" — followed by a small green check. Header reads the product name. Everything looks effortless and trustworthy.
- **On-screen text:** Header: "Sift — inbox triage for Harbor Supply Co." · Labels: "Sales" / "Support" / "Billing" · green ✓ per row.
- **Motion/Transition:** Slow push-in on the dashboard as three emails auto-label in sequence; hard cut to S002.
- **Keyframe prompt seed:** Faceless dark-mode SaaS inbox dashboard, live email cards being auto-tagged Sales/Support/Billing with green checkmarks, calm confident UI, [BRAND palette] accents, 16:9.

### S002
- **Timecode:** 0:09–0:22
- **VO:** "Beautiful. Now watch me feed it one weird message."
- **Visual:** A single malformed email card drops into the feed — its body is visibly broken (garbled characters, a collapsed form). The agent's status pill freezes mid-spin. Then the same outbound reply fires four times at one customer: four identical "sent" cards stack up fast. A run counter spins upward and a red API error banner stacks in the corner.
- **On-screen text:** Malformed email card (glitched body) · outbound counter incrementing 1→2→3→4 · red banner: "API error".
- **Motion/Transition:** Quick zoom to the frozen status pill, then whip to the stacking duplicate-send cards; glitch cut to S003.
- **Keyframe prompt seed:** Same inbox dashboard glitching, one corrupted email card, four identical duplicate "sent" replies stacking, red API error banner, spinning counter, tension, [BRAND palette], 16:9.

### S003
- **Timecode:** 0:22–0:36
- **VO:** "There it is. The demo you'd post, and the thing you'd never show. Everyone shows the win. We break the agent on camera, then make it bulletproof."
- **Visual:** The chaotic dashboard freezes and desaturates behind a bold title card that slams on. Below the title, a subtitle line resolves into the channel promise. Clean, high-contrast motion-graphics title treatment.
- **On-screen text:** Title card: "Crash Test Agents. We break AI agents so yours don't." → then: "25 ways to kill an agent → 25 fixes."
- **Motion/Transition:** Frozen dashboard blurs back; title card scales in with a snap; wipe to S004.
- **Keyframe prompt seed:** Bold full-frame title card "Crash Test Agents / We break AI agents so yours don't", blurred glitched dashboard behind, high-contrast motion-graphic type, [BRAND palette] and [BRAND accent], 16:9.

### S004
- **Timecode:** 0:36–0:51
- **VO:** "I'll attack this email assistant twenty-five ways — bad inputs, dead connections, a lying model, a runaway loop, leaked keys. Every break gets a fix and a rule, and the whole rulebook is a free download."
- **Visual:** An agenda list assembles on a dark panel — five round titles animate in as stacked rows, each with a small icon (broken input, unplugged cable, masked/lying face, looping arrow, leaking key). Below them a "Final safety net" row and a highlighted free-download row.
- **On-screen text:** Agenda: "1 Bad inputs · 2 Dead APIs · 3 The lying model · 4 Runaway loop · 5 Leaky secrets" · "Final safety net" · "Free: Agent Pre-Launch Checklist".
- **Motion/Transition:** Rows cascade in one by one; the download row pulses; cut to S005.
- **Keyframe prompt seed:** Dark agenda panel listing five agent-failure rounds with minimal icons plus "Final safety net" and a highlighted "Free download" row, clean motion-graphic list, [BRAND palette], 16:9.

---

## CONTEXT — why a broken agent costs real money

### S005
- **Timecode:** 0:51–1:10
- **VO:** "Quick reason this matters. An agent isn't a chatbot you watch. It runs on its own, and it acts — it sends, it charges, it deletes. A confused chatbot just says something dumb. A confused agent does something dumb, two hundred times, while you sleep."
- **Visual:** A split-screen diagram. LEFT: a single passive chat bubble emitting one wrong-looking speech blip (static, harmless). RIGHT: an autonomous robot node firing a burst of outbound action arrows — send/charge/delete icons multiplying across a grid, unattended, with a small "×200" tally climbing. A faint moon/night motif on the right to signal "while you sleep."
- **On-screen text:** Left label: "chatbot: says a wrong thing" · Right label: "agent: does a wrong thing ×200".
- **Motion/Transition:** Left half static; right half animates the ×200 cascade; cut to S006.
- **Keyframe prompt seed:** Split-screen infographic, left a single passive chat bubble, right an autonomous agent node spraying send/charge/delete action arrows "×200" at night, [BRAND palette], 16:9.

### S006
- **Timecode:** 1:10–1:24
- **VO:** "And every action can cost. Each run spends tokens — the chunks of text the model reads and writes, which you pay for. Treat them like cash out of a wallet, because that's what they are."
- **Visual:** A token meter (segmented gauge filling with small text-chunk blocks) ticks upward beside a running dollar figure that climbs in sync. A stylized wallet icon sits adjacent, hinting the money is real cash flowing out. Numbers are clearly stylized/illustrative, not a spec sheet.
- **On-screen text:** "Tokens" meter · running "$" figure (illustrative) · small caption: "you pay per token".
- **Motion/Transition:** Meter and dollar counter climb together; slow cut to S007.
- **Keyframe prompt seed:** Motion-graphic token meter filling with text-chunk blocks next to a rising dollar counter and a wallet icon, "you pay per token", illustrative figures, [BRAND palette], 16:9.
- **⚠️ VERIFY:** exact per-run cost is a fabricated demo number, not a measured claim.

### S007
- **Timecode:** 1:24–1:38
- **VO:** "So here's the honest version of building agents. It's not the demo. It's what happens on day two, when a real inbox throws garbage at it. Let's build the victim, then go break it."
- **Visual:** Transition from the polished dashboard into a working code/workflow canvas — a node-graph editor with an empty-ish flow ready to be built. A small "Day 2" tab or sticky sits in the corner. The mood shifts from marketing-clean to workshop-real.
- **On-screen text:** Corner sticky: "Day 2" · canvas title: "Build the victim".
- **Motion/Transition:** Dashboard peels away to reveal the workflow canvas underneath; cut to S008.
- **Keyframe prompt seed:** Node-based workflow/code canvas editor, mostly empty flow ready to build, "Day 2" sticky note, workshop mood, dark IDE aesthetic, [BRAND palette], 16:9.

---

## BUILD THE VICTIM AGENT (fast)

### S008
- **Timecode:** 1:38–1:52
- **VO:** "Meet the patient. Fake company: Harbor Supply Co., a wholesale kitchen outfit. Their inbox, support@harborsupply.co, gets slammed daily. Our agent's name is Sift. Everything here is invented — the company, the customers, the keys."
- **Visual:** A fictional inbox at scale — an unread counter around 200, a scroll of sender rows with invented names and addresses, some clearly spammy. A small "Harbor Supply Co." company chip and a "FICTIONAL — all invented" watermark strip along the bottom.
- **On-screen text:** "Harbor Supply Co. · support@harborsupply.co" · unread "~200" · sender rows: "Dana Okafor", "priya@vendorline.co", "deals@free-cruise-now.biz" · footer: "Everything here is invented".
- **Motion/Transition:** Inbox list scrolls a beat to show volume; cut to S009.
- **Keyframe prompt seed:** Fictional busy support inbox ~200 unread, invented sender names incl. a spammy "free-cruise-now" address, "Harbor Supply Co." chip, "all invented" footer, [BRAND palette], 16:9.

### S009
- **Timecode:** 1:52–2:14
- **VO:** "Sift's job sounds simple. Read each new email, figure out what it is — sales lead, support question, billing issue, spam, or something urgent — label it, look the person up in our fake CRM (that's a Customer Relationship Manager, the contact database — ours is Rolodash), and draft a reply for a human to send."
- **Visual:** A clean left-to-right flow diagram of five connected nodes. A CRM node is labeled "Rolodash" with a small callout defining CRM in plain language. Each node has a simple glyph (envelope, tag, magnifier over a contact card, pencil).
- **On-screen text:** Flow: "Read → Classify → Label → Look up in Rolodash → Draft reply" · callout: "CRM = Customer Relationship Manager (contact database)".
- **Motion/Transition:** Nodes connect left to right as narrated; cut to S010.
- **Keyframe prompt seed:** Horizontal 5-node agent flow "Read → Classify → Label → Look up in Rolodash → Draft reply" with a CRM definition callout, clean diagram, [BRAND palette], 16:9.

### S010
- **Timecode:** 2:14–2:23
- **VO:** "Here's the first honest call, and it's a big one. Most of that job does not need artificial intelligence."
- **Visual:** The same five-node flow, but most nodes dim to a plain gray while a single blunt caption punches in over the diagram. Emphasis on how little of the flow is actually "AI."
- **On-screen text:** Big overlay: "Most of this does not need AI."
- **Motion/Transition:** Nodes desaturate; caption slams in center; cut to S011.
- **Keyframe prompt seed:** Same 5-node flow mostly grayed out, bold overlay caption "Most of this does not need AI", [BRAND palette], 16:9.

### S011
- **Timecode:** 2:23–2:55
- **VO:** "Break the job into chunks and ask, for each one, does this need judgment? \"Does this email contain the word invoice?\" — that's not judgment, that's a rule. \"Is this the fourth email from this person today?\" — a counter, not a genius. The only chunk that truly needs a model is reading a messy, human-written email and deciding what it's about. So we hard-code the boring chunks and reserve the model for the one that needs it. Boring is reliable."
- **Visual:** The flow explodes into labeled sub-chunks. Two example chunks pop up as small logic cards — one keyword check, one counter — each stamped "rule". As narration lands, chunks light up one at a time and get a gray "rule" tag, except the single "read & understand the email" chunk which glows in the brand accent and gets a "needs AI" tag.
- **On-screen text:** Chunk cards: "contains 'invoice'? → rule" · "4th email today? → counter" · tags: "rule" (gray) vs "needs AI" ([BRAND accent]) · caption: "Boring is reliable."
- **Motion/Transition:** Chunk-by-chunk light-up sequence; the AI chunk pulses; cut to S012.
- **Keyframe prompt seed:** Agent job broken into logic chunks, most tagged gray "rule" (keyword check, counter), one chunk glowing "needs AI", "Boring is reliable", [BRAND palette] + [BRAND accent], 16:9.

### S012
- **Timecode:** 2:55–3:13
- **VO:** "That one reasoning chunk needs a system prompt — the standing instructions that tell the model who it is and how to behave. We'll build that in a second. First, let's give Sift no help at all and watch it fail. That's Round One."
- **Visual:** The glowing "needs AI" chunk zooms forward and reveals an empty document labeled "System prompt" with blank placeholder lines. Then a bold round slate wipes across the frame.
- **On-screen text:** Doc header: "System prompt" (empty) · then slate: "ROUND 1".
- **Motion/Transition:** Zoom into the AI chunk → empty prompt doc; slate wipe into S013.
- **Keyframe prompt seed:** Empty "System prompt" document with blank lines emerging from a glowing AI node, transitioning to a bold "ROUND 1" slate, [BRAND palette], 16:9.

---

## ROUND 1 — Bad inputs and the wrong tool for the job

### S013
- **Timecode:** 3:13–3:24
- **VO:** "Break number one: the empty brain. I wired Sift up with tools but almost no instructions. Watch what a vague agent does with a normal email."
- **Visual:** Split view: on the left, a normal, polite email from a customer asking about a late order; on the right, the agent panel with a nearly-empty instructions field (one lonely line) but several connected tool icons. A "watch" beat before the reply.
- **On-screen text:** Email subject: "Where's my order?" from "Dana Okafor" · agent field: "Instructions: (almost empty)".
- **Motion/Transition:** Hold on the empty instructions field, then pan to the reply drafting in S014; match cut.
- **Keyframe prompt seed:** Split screen, left a normal customer email about a late order, right an agent with tools wired but an almost-empty instructions field, [BRAND palette], 16:9.

### S014
- **Timecode:** 3:24–3:40
- **VO:** "Generic mush. That's the classic signature of a missing system prompt. When an agent has no role, it writes like nobody. No defined context, it gets confused about what it's even looking at. No rules, it starts making things up."
- **Visual:** The drafted reply appears: a bland, useless "Thank you for contacting us" with no actual answer, visibly hollow. Beside it, a checklist of prompt sections floats with every box unchecked and grayed.
- **On-screen text:** Draft reply: "Thank you for contacting us." (no answer) · checklist (all unchecked): "Role ☐ Context ☐ Tools ☐ Rules ☐ Examples ☐ Final notes".
- **Motion/Transition:** Reply fades in as "mush"; checklist slides in from the right; cut to S015.
- **Keyframe prompt seed:** Hollow generic auto-reply "Thank you for contacting us" beside an all-unchecked prompt-section checklist (Role/Context/Tools/Rules/Examples/Final notes), [BRAND palette], 16:9.

### S015
- **Timecode:** 3:40–4:14
- **VO:** "So let's give it a real prompt with the sections that matter. A background — who Sift is and its goal. A context section — what it receives each run, since the email changes but the instructions don't. A tools section — each tool, when to use it, and the order, like \"look the customer up in Rolodash before you draft.\" Rules as conditions — if the email mentions a refund, tag it billing. Examples, but only for stuff it gets wrong. And final notes — today's date, and a plain \"if you don't know, say so.\""
- **Visual:** The empty system-prompt document now fills in, section by section, with clear markdown headers. As each section name is spoken, its header and a couple of example lines type themselves in and the matching checklist box ticks green.
- **On-screen text:** Markdown headers filling in: "## Role · ## Context · ## Tools · ## Rules · ## Examples · ## Final notes" · sample line: "Look up in Rolodash before you draft." · checklist boxes ticking green.
- **Motion/Transition:** Sequential typewriter reveal synced to VO; each header check turns green; cut to S016.
- **Keyframe prompt seed:** System-prompt document filling section by section with markdown headers Role/Context/Tools/Rules/Examples/Final notes, checklist boxes turning green, [BRAND palette], 16:9.

### S016
- **Timecode:** 4:14–4:26
- **VO:** "Notice what I did not do. I did not paste in a giant three-page prompt I generated somewhere and hope. I built it reactively — one fix at a time."
- **Visual:** Side-by-side contrast: LEFT, a comically long "3-page" wall-of-text prompt with a red "✗ dumped & hoped" stamp; RIGHT, a lean prompt being assembled line by line, each line connected by a thin tether to a small test-run tile.
- **On-screen text:** Left stamp: "✗ dump & hope" · right label: "✓ built reactively, one line at a time".
- **Motion/Transition:** Left wall dims; right assembly animates line→test tethers; cut to S017.
- **Keyframe prompt seed:** Contrast of a giant rejected 3-page prompt vs a lean prompt built line-by-line each tethered to a test run, [BRAND palette] + [BRAND accent], 16:9.

### S017
- **Timecode:** 4:26–5:03
- **VO:** "Reactive prompting is like seasoning a pot of soup. You don't dump in every spice up front and hope. You taste it, add one pinch, taste again — because if you throw five things in at once and it comes out wrong, you have no idea which one to blame. Same here: add one tool, test a real email, watch what Sift does, then add one line to correct the exact thing it got wrong. Change one thing at a time so you always know which line caused which behavior."
- **Visual:** Original animated metaphor: a stylized pot of soup on a burner. A single pinch of seasoning drops in, then a spoon "tastes" (a small check appears). This mirrors, in a parallel lane, the prompt gaining one line then a green test tick. The two lanes (kitchen / prompt) stay visually paired: one pinch = one line = one retest.
- **On-screen text:** Loop caption: "one pinch → taste → adjust" mirrored by "one line → test → adjust".
- **Motion/Transition:** Gentle steam and drip motion; the pinch and the prompt-line land in sync; cut to S018.
- **Keyframe prompt seed:** Original metaphor illustration, a soup pot with a single pinch of seasoning dropping in and a tasting spoon, paired with a prompt gaining one line and a green test tick, "one pinch → taste → adjust", [BRAND palette], 16:9.

### S018
- **Timecode:** 5:03–5:22
- **VO:** "And when it does get something wrong, hard-prompt it. Paste the real email it fumbled, the wrong move it made, and the move you wanted. Show it the miss. Don't waste examples on emails it already handles fine — those are just tokens you're paying for."
- **Visual:** A structured "example" correction block with three stacked fields. The first holds a real fumbled email, the second the wrong action (red), the third the correct action (green). A small crossed-out redundant example floats off to the side with a token-cost tag to show waste.
- **On-screen text:** Block fields: "Input" / "What it did wrong" (red) / "Correct action" (green) · side note: "don't pay tokens for examples it already gets right".
- **Motion/Transition:** Fields snap in top-to-bottom; the wasteful example dims and drifts away; cut to S019.
- **Keyframe prompt seed:** Three-field correction/example block Input / What it did wrong (red) / Correct action (green), plus a discarded redundant example with a token-cost tag, [BRAND palette], 16:9.

### S019
- **Timecode:** 5:22–5:40
- **VO:** "Now for the ugly input. Real inboxes are full of garbage, so I sent Sift a malformed one — a customer form that dumped raw broken data into the body. Sift passed that mess straight into the Rolodash lookup, and the connection screamed back."
- **Visual:** A malformed email opens — its body is a dump of raw broken form data (stray brackets, key:value fragments, no structure). An arrow shoves that raw mess straight into the "Rolodash lookup" node, which flashes red and throws an error banner.
- **On-screen text:** Email body: raw broken form dump · node: "Rolodash lookup" flashing red · red banner: "400 Bad Request".
- **Motion/Transition:** Raw data flows down the wire into the CRM node; node flares red; cut to S020.
- **Keyframe prompt seed:** Malformed email with raw broken form-data body piped straight into a "Rolodash lookup" node that flares red with "400 Bad Request", [BRAND palette] + red error, 16:9.

### S020
- **Timecode:** 5:40–6:00
- **VO:** "Time to read status codes. Every time an agent talks to another service over the web, that service answers with an HTTP status code — HTTP is just the language web services speak, and the code is a three-digit verdict on what happened. Learn the families and you save yourself hours."
- **Visual:** A clean explainer graphic: the agent sends a request across a wire to a "service," and the service returns a numbered badge. A "families" chart begins to form — grouped rows for the 2xx / 4xx / 5xx families, still mostly blank, ready to fill. A small plain-language definition of HTTP sits at the top.
- **On-screen text:** "HTTP status code = a 3-digit verdict" · "HTTP = the language web services speak" · chart headers: "2xx · 4xx · 5xx".
- **Motion/Transition:** Request/response arrows animate; the status-families chart frame draws in; cut to S021.
- **Keyframe prompt seed:** Explainer of an agent sending a request and a service returning an HTTP status badge, a status-families chart forming (2xx/4xx/5xx), plain HTTP definition, [BRAND palette], 16:9.

### S021
- **Timecode:** 6:00–6:34
- **VO:** "Two hundreds mean success. Four hundreds mean you messed up the request — a four-oh-oh is usually malformed data like a stray comma or a broken field, exactly what our garbage input caused. Four-oh-one means your key is wrong. Four-oh-three means your account isn't allowed. Four-oh-four means the address is a typo. And five hundreds mean the other server broke — not your fault, so stop rewriting a good request and just wait and retry."
- **Visual:** The families chart fully populates. Each code gets its own row with a plain-English gloss and a tiny icon: 200 (green check), 400 (broken field), 401 (wrong key), 403 (no-entry/account), 404 (typo/missing address), 500 (other server on fire). The 400 row is highlighted to tie back to the garbage input.
- **On-screen text:** "200 = success · 400 = malformed request · 401 = wrong key · 403 = not allowed · 404 = wrong address · 500 = their server broke (wait & retry)" · 400 row highlighted.
- **Motion/Transition:** Rows populate top-to-bottom; 400 row pulses; cut to S022.
- **Keyframe prompt seed:** Full HTTP status-family chart 200/400/401/403/404/500 each with a plain-English meaning and small icon, 400 row highlighted, [BRAND palette], 16:9.

### S022
- **Timecode:** 6:34–6:52
- **VO:** "The fix for our four-oh-oh: validate and clean the input before it reaches a tool. Expect garbage, strip it, and confirm required fields exist before you call anything. Rule for the checklist: check your inputs before your agent acts on them."
- **Visual:** A new "clean & validate" step slots into the flow just before the Rolodash node. Raw garbage enters it, gets scrubbed (broken bits fall away, required fields checked off), and clean structured data continues. The earlier red "400" flips to a green "200". A checklist row materializes.
- **On-screen text:** New node: "Clean & validate" · "400" → "200" · checklist line lands: "☑ Check inputs before the agent acts".
- **Motion/Transition:** Node slides into the wire; garbage-to-clean scrub animation; 400 flips to 200; cut to S023.
- **Keyframe prompt seed:** A "Clean & validate" node inserted before the CRM call scrubbing garbage into clean fields, red "400" flipping to green "200", new checklist row, [BRAND palette], 16:9.

---

## ROUND 2 — Dead APIs and fragile chains

### S023
- **Timecode:** 6:52–7:05
- **VO:** "Round two. Things break that aren't your fault, and the worst part is you often won't know. Watch this — I quietly expire Sift's Rolodash key, like a credential that lapsed overnight."
- **Visual:** A "ROUND 2" slate flashes, then dissolves to the Rolodash connection settings. A key-status pill silently flips from "active" (green) to "expired" (amber), with no alarm. In the background the agent keeps cheerfully labeling emails as if nothing changed.
- **On-screen text:** Slate: "ROUND 2" · key status: "active" → "expired" · background: agent still labeling.
- **Motion/Transition:** Slate wipe; status pill flips quietly; background labeling continues; cut to S024.
- **Keyframe prompt seed:** "ROUND 2" slate dissolving to a Rolodash key status pill flipping green "active" to amber "expired" while the agent keeps labeling unaware, [BRAND palette], 16:9.

### S024
- **Timecode:** 7:05–7:24
- **VO:** "See the trap? It looks fine. But a run can go green while a tool inside it quietly failed — a call errored, and the agent shrugged and moved on. Green is not proof the thing worked. That's how agents fail silently for a week before anyone notices."
- **Visual:** A run summary shows a big reassuring green check at the top — but zoom into one nested step and the "Rolodash lookup" actually returned nothing (empty result), with a tiny error swallowed inside. A magnifier reveals the hidden failure under the green.
- **On-screen text:** Top: "Run: ✓ success" · nested step callout: "lookup returned nothing" · caption: "Green ≠ proof it worked".
- **Motion/Transition:** Magnifier pushes into the green run to expose the empty lookup; cut to S025.
- **Keyframe prompt seed:** A green "success" run with a magnifier revealing a nested lookup step that silently returned nothing, caption "Green ≠ proof it worked", [BRAND palette] + subtle red, 16:9.

### S025
- **Timecode:** 7:24–7:47
- **VO:** "So we build one error-logging workflow, once, and reuse it everywhere. It starts with an error trigger, and every other workflow points its \"on failure\" setting at it. When something goes red, the handler catches the details — which run, which workflow, which step failed, and the error message — logs a row, and pings me with a link straight to the broken run."
- **Visual:** A central "error handler" workflow with an error-trigger start node. Several other workflows around it each draw a dotted "on failure →" line pointing into it. The handler branches to two outputs: appending a row to a log sheet (columns visible) and sending an alert message containing a "view run" link.
- **On-screen text:** Node: "Error trigger" · dotted labels: "on failure →" · log columns: "run · workflow · step · error" · alert: "⚠️ failure — [view run]".
- **Motion/Transition:** Dotted failure-lines route into the handler; handler fans out to log + alert; cut to S026.
- **Keyframe prompt seed:** Central error-handler workflow with an error-trigger node, multiple workflows routing "on failure" into it, branching to a log sheet row and an alert with a "view run" link, [BRAND palette], 16:9.

### S026
- **Timecode:** 7:47–8:05
- **VO:** "To prove it works, I forced a failure and watched the alert land. One honest caveat: this only catches runs that actually go red. A tool that fails quietly while the step stays green still slips through — so pair the log with a real check that the action happened."
- **Visual:** A three-beat proof sequence, left to right: (1) a test node deliberately fails red; (2) a new row appears in the log sheet; (3) a phone buzzes with the alert. Then an honest caveat note fades in reminding that silent (green) failures still slip through.
- **On-screen text:** "test failure" → "row logged" → phone: "⚠️ new alert" · caveat note: "green ≠ success — also verify the action happened".
- **Motion/Transition:** Sequential left-to-right reveal; caveat note fades in last; cut to S027.
- **Keyframe prompt seed:** Three-beat proof: forced red failure → new log row → buzzing phone alert, with a caveat note "green ≠ success", [BRAND palette], 16:9.

### S027
- **Timecode:** 8:05–8:26
- **VO:** "Now the fragile chain. Sift's draft-reply step leans on an outside writing service that gets flaky under load. When it hiccups, the old Sift returned nothing and the whole run stalled. So we split that step into two exits: a success path and an error path."
- **Visual:** Focus on the "Draft reply" node, which calls an external writing service icon that flickers/overloaded. In the old version, the node dead-ends (stalled, grayed). Then the node visibly splits into two labeled outgoing branches.
- **On-screen text:** Node: "Draft reply" · external service: "overloaded" · two new branches: "success" / "error".
- **Motion/Transition:** Old node stalls and grays; then the node splits into two branch outputs; cut to S028.
- **Keyframe prompt seed:** A "Draft reply" node calling a flaky external writing service, splitting into two labeled outgoing branches "success" and "error", [BRAND palette], 16:9.

### S028
- **Timecode:** 8:26–8:52
- **VO:** "On success, it returns the finished draft, normal as ever. On error, instead of dying, it returns a short, plain-English message: \"couldn't draft that one, please try again.\" The main agent reads that sentence like a note from a coworker, and simply reissues the task. A flaky failure becomes a retry instead of a dead run. Keep that failure message human-readable — the next step reads it as instructions, not as a stack trace."
- **Visual:** The two branches resolve: the success branch outputs a tidy finished draft card; the error branch outputs a plain sentence card. That plain sentence flows back to the orchestrator node, which loops the task around for a second attempt that lands as a green success.
- **On-screen text:** Error output card: "couldn't draft that one, please try again" · loop label: "reissue task" · second attempt: "✓".
- **Motion/Transition:** Error message travels back along a loop arrow to the orchestrator; retry completes green; cut to S029.
- **Keyframe prompt seed:** Success branch returning a finished draft, error branch returning a plain-English "please try again" note that loops back to the orchestrator for a successful retry, [BRAND palette], 16:9.

### S029
- **Timecode:** 8:52–9:05
- **VO:** "Quick note. Every rule we've earned is landing on one page as we go — the Agent Pre-Launch Checklist, yours free at the end. Watch it fill up."
- **Visual:** A checklist sidebar slides into view on the right edge. The Round 1 and Round 2 rows are already ticked green; more empty rows sit below, waiting. The sheet is clearly the "Agent Pre-Launch Checklist" artifact.
- **On-screen text:** Sidebar title: "Agent Pre-Launch Checklist" · Round 1 & Round 2 rows ✓ · lower rows empty · badge: "free at the end".
- **Motion/Transition:** Sidebar slides in from the right; two rows tick; cut to S030.
- **Keyframe prompt seed:** A right-edge "Agent Pre-Launch Checklist" sidebar with Round 1 and Round 2 rows ticked green and empty rows below, "free at the end" badge, [BRAND palette], 16:9.

---

## ROUND 3 — The lying model

### S030
- **Timecode:** 9:05–9:13
- **VO:** "Round three, and this is the sneaky one. The model doesn't crash. It lies with total confidence."
- **Visual:** "ROUND 3" slate, then a customer email from Dana asking about an order, and Sift's draft reply appearing smooth and confident — no error, no red, everything looks perfectly normal and trustworthy (which is the trap).
- **On-screen text:** Slate: "ROUND 3" · email: "where's order 4471?" · draft (confident): "Your order 4471 shipped Tuesday via GreyRoute, tracking GR-88231."
- **Motion/Transition:** Slate wipe; the confident draft types out cleanly; hold on it; cut to S031.
- **Keyframe prompt seed:** "ROUND 3" slate to a confident polished draft reply "order 4471 shipped Tuesday via GreyRoute, tracking GR-88231", no errors, deceptively trustworthy, [BRAND palette], 16:9.

### S031
- **Timecode:** 9:13–9:35
- **VO:** "Sounds perfect. It's fiction. There is no GreyRoute, there is no tracking number. Sift invented a shipping update because it sounded like the kind of thing that goes in that sentence. This is a hallucination — a made-up fact stated as truth — and if a human hits send, we just lied to a customer in writing."
- **Visual:** Side-by-side comparison. LEFT: the confident draft with "GreyRoute / GR-88231" now highlighted and stamped red "invented". RIGHT: the real order record from the source of truth showing "no shipment logged". A plain definition of "hallucination" sits between them.
- **On-screen text:** Left: draft with "GreyRoute · GR-88231" stamped "✗ invented" · Right: record: "no shipment logged" · center: "hallucination = a made-up fact stated as truth".
- **Motion/Transition:** Draft and record slide in from opposite sides; the invented fields flash red; cut to S032.
- **Keyframe prompt seed:** Side-by-side, left a confident draft with an invented courier and tracking number stamped "invented", right the real record "no shipment logged", "hallucination" definition, [BRAND palette] + red, 16:9.

### S032
- **Timecode:** 9:35–9:42
- **VO:** "The fix isn't to yell at the model. It's a mindset: every failure is data."
- **Visual:** A clean, bold mindset slate. The word "failure" transforms/morphs into "data" — a small animation where a red error glyph converts into a neat data row or datapoint.
- **On-screen text:** Slate: "failure = data".
- **Motion/Transition:** Red error glyph morphs into a data point; slate holds; cut to S033.
- **Keyframe prompt seed:** Bold mindset slate "failure = data" with a red error glyph morphing into a clean data point, [BRAND palette], 16:9.

### S033
- **Timecode:** 9:42–10:16
- **VO:** "So we diagnose it — Sift was drafting shipping details it never looked up. We fix the underlying step: force it to pull real order data from the source of truth first, and forbid any status it can't cite. We retest on the same email. Then — the part people skip — we write the lesson into the workflow's own rules, so this exact failure can't come back, and save it to a memory file so it survives the next run, not just this session. Fix once, remember forever."
- **Visual:** A four-beat repair sequence: (1) diagnosis note "drafted details it never looked up"; (2) a patched rule appears forbidding uncited statuses, with a forced "fetch order data first" step; (3) retest on the same email now yields a safe draft; (4) the lesson writes itself into a "memory file" document that persists. Emphasis on the rule + memory-file persistence.
- **On-screen text:** Patched rule: "never state a shipping status without a verified record" · retest draft: "I'm checking on 4471 now" · memory file: "lesson saved" · caption: "Fix once, remember forever."
- **Motion/Transition:** Four beats reveal in sequence; the lesson visibly writes into the memory file; cut to S034.
- **Keyframe prompt seed:** Four-beat repair: diagnosis → patched rule "never state a shipping status without a verified record" → safe retest draft "I'm checking on 4471 now" → lesson saved to a persistent memory file, "Fix once, remember forever", [BRAND palette], 16:9.

---

## ROUND 4 — The runaway, eager agent and the cost blowup

### S034
- **Timecode:** 10:16–10:30
- **VO:** "Round four. Autonomous agents are eager — give one no limits and it will act, a lot. Remember the hook, where Sift emailed the same customer four times? Here's why, at full scale."
- **Visual:** "ROUND 4" slate, then a callback to the cold-open gag but escalated: Sift firing duplicate replies at a single customer, the send counter now climbing past 40. Outbound cards fan out uncontrollably.
- **On-screen text:** Slate: "ROUND 4" · counter climbing "…41, 42, 43" · label: "same customer, again and again".
- **Motion/Transition:** Slate wipe; duplicate-send fan-out accelerates; counter blurs upward; cut to S035.
- **Keyframe prompt seed:** "ROUND 4" slate to an agent firing duplicate replies at one customer with a send counter climbing past 40, out-of-control fan-out, [BRAND palette] + red, 16:9.

### S035
- **Timecode:** 10:30–10:44
- **VO:** "An eager agent with no guardrails is a puppy with the keys to the warehouse — not malicious, just enthusiastic, and enthusiasm at machine speed is a bill. So we bound the blast radius with hard rules."
- **Visual:** Original metaphor illustration: an over-eager cartoon puppy loose in a vast warehouse, a ring of keys in its mouth, boxes tumbling — clearly harmless but chaotic. Overlaid, a rising "$" bill hints the enthusiasm costs money. Then a "guardrails" slate transitions in.
- **On-screen text:** Caption: "enthusiasm at machine speed = a bill" · then slate: "guardrails".
- **Motion/Transition:** Playful puppy-in-warehouse motion; dollar figure ticks; transition to "guardrails" slate; cut to S036.
- **Keyframe prompt seed:** Original illustration of an over-eager puppy loose in a warehouse holding a ring of keys, boxes tumbling, a rising dollar bill, "enthusiasm at machine speed = a bill", [BRAND palette], 16:9.

### S036
- **Timecode:** 10:44–11:15
- **VO:** "First, start in paper mode — a safe simulation where Sift drafts and logs what it would send, but sends nothing real, until I trust it. Then write explicit caps and prohibitions into its rules: one reply per customer per run, a hard limit per hour, and never touch anything outside the support inbox. And early on, I read the full history of its runs and tune from what I see, instead of auto-accepting whatever it wants to do."
- **Visual:** A rules/config panel builds up. A prominent "Paper mode: ON" toggle (with a "simulation — nothing sent for real" note). Below it, hard-rule rows appear one by one. To the side, a human cursor scrolls through a full run-history transcript, reviewing rather than auto-approving.
- **On-screen text:** Toggle: "Paper mode: ON" (simulation) · rules: "max 1 reply / customer / run · max N / hour · inbox-only" · side: "reading the full run history".
- **Motion/Transition:** Toggle flips on; rule rows stack in; side transcript scrolls under a human cursor; cut to S037.
- **Keyframe prompt seed:** Guardrails config panel with "Paper mode: ON" toggle and hard rules "1 reply/customer/run, max N/hour, inbox-only", a human scrolling a run-history transcript, [BRAND palette], 16:9.

### S037
- **Timecode:** 11:15–11:26
- **VO:** "Second half of this round is quieter but just as expensive: context. Sift was re-reading the customer's entire two-year email history on every single run."
- **Visual:** An enormous email thread scrolls endlessly — labeled as two years of history — being loaded in full into the agent on a single run. A token meter spikes hard and a cost figure climbs alongside as the giant thread loads. Figures clearly stylized/illustrative.
- **On-screen text:** Thread label: "2 years of email — loaded every run" · token meter spiking · rising "$" (illustrative).
- **Motion/Transition:** Giant thread scrolls fast; token meter and cost spike together; cut to S038.
- **Keyframe prompt seed:** A giant two-year email thread being loaded whole into an agent each run, token meter spiking and a cost figure climbing, illustrative figures, [BRAND palette] + red, 16:9.
- **⚠️ VERIFY:** token and dollar figures are fabricated demo values.

### S038
- **Timecode:** 11:26–12:00
- **VO:** "Two problems. One, you pay for every token, every run — cash on fire. Two, and this surprises people, more context can make the agent worse. Stuff too much in and quality rots — the model loses the plot in the noise. So budget context like money: give each run only what it needs — the instructions, the current email, a short customer summary — not the whole archive. Keep memory files short. A lean agent is a sharp agent and a cheap one."
- **Visual:** The giant thread collapses down to a tidy, minimal context bundle: "instructions + current email + short customer summary (last 3 messages)". As it shrinks, the token meter drops and the cost falls. A small "quality" indicator ticks up as the noise is removed.
- **On-screen text:** Collapse: "whole archive → last 3 messages + customer summary" · meter dropping · caption: "budget context like money".
- **Motion/Transition:** Giant thread compresses into a small tidy bundle; meter and cost fall; cut to S039.
- **Keyframe prompt seed:** A giant email archive collapsing into a lean bundle "instructions + current email + last 3 messages + short customer summary", token meter dropping, "budget context like money", [BRAND palette], 16:9.

---

## ROUND 5 — Leaky secrets and over-privilege

### S039
- **Timecode:** 12:00–12:06
- **VO:** "Round five, the one that ends careers. Secrets and permissions."
- **Visual:** A stark, slightly ominous "ROUND 5" slate resolving into a "secrets & permissions" title, with subtle icons of a key and a lock/shield. Higher-stakes tone than prior slates.
- **On-screen text:** Slate: "ROUND 5 — secrets & permissions".
- **Motion/Transition:** Slate snaps in with a heavier, darker treatment; cut to S040.
- **Keyframe prompt seed:** Ominous "ROUND 5 — secrets & permissions" slate with a key and shield icon, high-stakes tone, [BRAND palette], 16:9.

### S040
- **Timecode:** 12:06–12:18
- **VO:** "Break number one here: I found the Rolodash key pasted directly into the agent's instructions, in plain text. Something like rd_live_8fQ2x… right there in the prompt."
- **Visual:** The system prompt document, scrolled to a line where a live API key sits in plain text, highlighted with a warning outline. The key value is partially blurred/redacted to signal it's sensitive even though fictional.
- **On-screen text:** Prompt line highlighted: "api_key = rd_live_8fQ2x•••••" (value blurred) · warning tag: "plaintext key in prompt".
- **Motion/Transition:** Scroll to the offending line; warning outline pulses on the key; cut to S041.
- **Keyframe prompt seed:** A system prompt with a plaintext API key "rd_live_8fQ2x•••" highlighted with a warning outline, value partially blurred, [BRAND palette] + warning amber, 16:9.

### S041
- **Timecode:** 12:18–12:57
- **VO:** "That's a leak waiting to happen. A key in your prompt or code can ride along into a repository, a screenshot, or the chat history — and chat history can travel off to a model provider. The fix is a .env file: a plain settings file, kept out of version control, that holds your keys under placeholder names. Your code refers to the key by name, never its value. You paste the real value into that file yourself, locally — never hand it to the agent in chat — and add the file to your ignore list so it can't get pushed. If a key ever leaks, you rotate it: cancel the old one, issue a new one."
- **Visual:** Two-part animation. Part 1 (risk): the highlighted key sprouts arrows leaking outward into a repository icon, a screenshot, and a chat-history bubble that drifts toward a "model provider" cloud. Part 2 (fix): the key lifts out of the prompt and drops into a ".env" file where it becomes a placeholder name; the .env filename is added to a ".gitignore"; the code now references the variable name only. A small "rotate key" chip shows old→new.
- **On-screen text:** Risk arrows: "repo · screenshot · chat history → provider" · .env: "ROLODASH_API_KEY=•••" · .gitignore: ".env" added · code: "key = env('ROLODASH_API_KEY')" · chip: "leak? → rotate (cancel old, issue new)".
- **Motion/Transition:** Leak arrows fan out; then reverse as the key is pulled into .env and gitignored; cut to S042.
- **Keyframe prompt seed:** Two-part graphic, a plaintext key leaking to repo/screenshot/chat-history/provider, then moving into a gitignored ".env" file with a placeholder name while code references it by name, plus a "rotate key" chip, [BRAND palette], 16:9.

### S042
- **Timecode:** 12:57–13:06
- **VO:** "Break number two: over-privilege. Sift was logged into my own account, with full access to everything — send, delete, admin, the works."
- **Visual:** A permissions panel where every capability toggle is switched ON (all green/enabled) under a personal account avatar — send, delete, admin, billing, everything. The blanket access is visually alarming (a wall of "on" toggles).
- **On-screen text:** Account: "(my personal account)" · toggles all ON: "send · delete · admin · billing · everything".
- **Motion/Transition:** Camera pans across the wall of enabled toggles; cut to S043.
- **Keyframe prompt seed:** A permissions panel with every capability toggle switched ON (send/delete/admin/billing) under a personal account avatar, alarming blanket access, [BRAND palette] + warning, 16:9.

### S043
- **Timecode:** 13:06–13:40
- **VO:** "Think of it like a valet key. You hand the parking attendant a key that starts the car and nothing else — it won't open the trunk or the glovebox where your things are. Sift gets the same treatment: its own dedicated account, scoped to the support inbox and read-only on the CRM, since it only needs to look people up, not edit them. And its own named key — so when I check the bill I can see exactly what Sift spent and did, separate from everything else. Least privilege shrinks the damage any single agent can do, and makes its costs and actions traceable."
- **Visual:** Original metaphor: a single "valet key" that starts a car but visibly cannot open the trunk or glovebox (those stay locked, contents safe). Cross-fade to the applied setup: a dedicated "sift-bot" account with a scoped permission set — inbox-only mail access, read-only CRM — plus its own named key line-itemed on an invoice, separate from everything else.
- **On-screen text:** Metaphor: "valet key — starts the car, not the trunk/glovebox" · setup: "sift-bot account · inbox-only · CRM read-only · own named key on the invoice".
- **Motion/Transition:** Valet key demo (trunk/glovebox stay locked) cross-fades to the scoped sift-bot account + invoice line; cut to S044.
- **Keyframe prompt seed:** Original valet-key metaphor (key starts a car but can't open trunk/glovebox) cross-fading to a scoped "sift-bot" account, inbox-only, CRM read-only, own named key on an invoice, [BRAND palette], 16:9.

---

## FINAL SAFETY NET — human in the loop

### S044
- **Timecode:** 13:40–13:50
- **VO:** "One net under all of it. Before Sift sends anything a customer will actually read, it stops and asks a person."
- **Visual:** A visual metaphor of a safety net stretched beneath the whole pipeline: the five-round flow runs above, and a literal net graphic spans underneath. At the final send step, the agent pauses (a "hold" state) and hands off to a human icon. A "human-in-the-loop" slate resolves.
- **On-screen text:** Net label: "safety net under everything" · pause state: "waiting for a person" · slate: "human-in-the-loop".
- **Motion/Transition:** Camera pulls back to reveal the net under the pipeline; send step pauses; cut to S045.
- **Keyframe prompt seed:** The full agent pipeline running above a literal safety-net graphic, the final send step paused and handing off to a human, "human-in-the-loop" slate, [BRAND palette], 16:9.

### S045
- **Timecode:** 13:50–14:08
- **VO:** "The pattern is send-and-wait. Sift drafts the reply, pauses, and pushes it to me — in our case a quick Slack message — and does nothing until I respond. I can approve it, or just type back what I want changed in plain English: \"warmer, and mention the reship.\""
- **Visual:** A chat-style approval card (invented messaging surface) appears containing the drafted reply, with "Approve" and "Send feedback" actions. A user types a plain-English revision note. The agent sits visibly idle/paused ("waiting") until a response comes.
- **On-screen text:** Card: draft reply + buttons "Approve / Send feedback" · typed note: "warmer, and mention the reship" · agent status: "paused — waiting for you".
- **Motion/Transition:** Draft card slides in; a feedback message is typed; agent stays paused; cut to S046.
- **Keyframe prompt seed:** An invented chat approval card showing a draft reply with "Approve / Send feedback" and a typed note "warmer, and mention the reship", agent paused waiting, [BRAND palette], 16:9.

### S046
- **Timecode:** 14:08–14:46
- **VO:** "Here's the clever part. A yes-or-no is easy, but free-text feedback isn't. So a small AI classifier reads my reply and decides: approval, or revision request? Rules alone couldn't tell those apart. If it's a revision, my feedback and the current draft go to a revision step that rewrites it, then loops right back to me. It can keep stacking edit on edit, round after round, until I sign off — and each pass has to build on the newest version, never the first draft, or the fixes just get lost."
- **Visual:** A branching flow: the human reply enters a small "classifier" node that splits into two paths — "approve → send" (green) and "revise → rewrite → back to review" (loop). On the revise path, feedback + the current draft feed a rewrite node, then loop back to the approval card. A version tag increments each loop (v1 → v2 → v3) to stress "build on the newest version."
- **On-screen text:** Classifier: "approval or revision?" · paths: "approve → send" / "revise → rewrite → back to review" · version tag: "v1 → v2 → v3 (always the newest)".
- **Motion/Transition:** Classifier splits the two paths; the revise loop cycles and the version tag ticks up; cut to S047.
- **Keyframe prompt seed:** A classifier node splitting human feedback into "approve → send" vs "revise → rewrite → back to review" loop with a version tag incrementing v1→v2→v3, [BRAND palette], 16:9.

---

## WHAT SURVIVED — the clean rerun

### S047
- **Timecode:** 14:46–14:54
- **VO:** "So let's run the whole gauntlet again, on the hardened Sift, and see what's left standing."
- **Visual:** A "clean rerun" slate over the hardened dashboard, with the five rounds listed as a lineup ready to replay — each round a card in a row, all queued. A confident, armored tone (a subtle shield/reinforced motif on the agent).
- **On-screen text:** Slate: "clean rerun" · lineup: "1 Bad inputs · 2 Dead APIs · 3 Lying model · 4 Runaway loop · 5 Leaky secrets".
- **Motion/Transition:** Slate resolves to the queued round lineup; cut to S048.
- **Keyframe prompt seed:** "Clean rerun" slate over a hardened agent dashboard with the five rounds queued as cards ready to replay, reinforced/shielded motif, [BRAND palette], 16:9.

### S048
- **Timecode:** 14:54–15:28
- **VO:** "The malformed input? Cleaned before the call — no more four-oh-oh. The expired key? The error handler catches it and pings me. The flaky draft service? Retries and recovers. The hallucinated tracking number? Gone — Sift now says \"let me check\" instead of inventing a fact. The runaway loop? Capped at one reply per customer, in paper mode until I trusted it. The leaked key? In an ignored .env file, on its own scoped account. And nothing customer-facing ships without my thumbs-up."
- **Visual:** A rapid montage: each of the five rounds replays as a quick beat and now passes green — malformed input scrubbed (400→200), expired key caught (alert lands), flaky service retries and recovers, hallucination replaced with "let me check", runaway loop capped, leaked key safely in .env on a scoped account, final human thumbs-up gate. The duplicate-send counter, once past 40, now reads 1.
- **On-screen text:** Round-by-round green ticks · "400 → 200 · alert caught · retry recovered · 'let me check' · capped at 1 · .env + scoped · human approval" · counter: "1".
- **Motion/Transition:** Fast rhythmic montage, each round flashing green in turn; land on the counter reading "1"; cut to S049.
- **Keyframe prompt seed:** Rapid montage of five agent-failure rounds all replaying and passing green, ending on a duplicate-send counter reading "1", triumphant, [BRAND palette] + green, 16:9.

### S049
- **Timecode:** 15:28–15:45
- **VO:** "Same agent, same inbox. The difference is every one of those failures now has a floor under it. That's the whole game — not a flashier demo, a system that doesn't fall over on day two."
- **Visual:** Return to the exact dashboard from the hook (S001), now running clean under the same weird inputs — the malformed email drops in and is handled calmly, no duplicate sends, no red errors. A quiet, confident "day two" callback. The safety-net motif faintly visible beneath.
- **On-screen text:** Callback: "same inbox, day two" · status: "handled — no errors".
- **Motion/Transition:** Mirror of S001/S002 but stable; the weird input resolves cleanly; slow settle; cut to S050.
- **Keyframe prompt seed:** The original hook dashboard now running clean under the same malformed input, no duplicate sends or errors, faint safety-net motif, "day two — handled", [BRAND palette], 16:9.

---

## ARTIFACT DROP + CTA

### S050
- **Timecode:** 15:45–16:12
- **VO:** "Every rule we just earned is on one page. It's called the Agent Pre-Launch Checklist — about twenty-five checks, grouped exactly like these rounds: input and scope, errors and retries, verification, guardrails and cost, secrets and permissions, and human gates. Run it before you let any agent touch real work. Free link in the description, no email wall."
- **Visual:** The full one-page "Agent Pre-Launch Checklist" scrolls, now fully populated — grouped into the six labeled sections matching the rounds, ~25 ticked rows. A prominent "free download" banner with an arrow pointing down toward the description bar.
- **On-screen text:** Title: "Agent Pre-Launch Checklist" · groups: "input & scope · errors & retries · verification · guardrails & cost · secrets & permissions · human gates" · banner: "Free download ↓ (no email wall)".
- **Motion/Transition:** Checklist scrolls through all groups; download banner pulses with a down-arrow to the description; cut to S051.
- **Keyframe prompt seed:** A full one-page "Agent Pre-Launch Checklist" scrolling, ~25 checks in six labeled groups, a "Free download ↓ no email wall" banner, [BRAND palette], 16:9.

### S051
- **Timecode:** 16:12–16:30
- **VO:** "And here's where you come in. Think your agent can survive this? Send it to us. We'll put it on the rack and break it on camera — that's the whole channel. We break AI agents so yours don't."
- **Visual:** A community-seed call-to-action card: a stylized "test rack" or crash-test rig graphic where a submitted agent would be mounted, with a "send us your agent" prompt. The channel logo and a subscribe prompt. A required synthetic-media disclosure line sits visibly on screen.
- **On-screen text:** "Send us your agent → we'll break it." · [BRAND logo] · "Subscribe" · disclosure line: "Contains realistic AI-generated media."
- **Motion/Transition:** CTA card assembles; subscribe prompt animates; disclosure line held legibly; cut to S052.
- **Keyframe prompt seed:** Community CTA card with a crash-test rig graphic "Send us your agent → we'll break it", channel logo, subscribe prompt, visible synthetic-media disclosure line, [BRAND palette] + [BRAND logo], 16:9.

### S052
- **Timecode:** 16:30–17:00
- **VO:** "Build the boring parts deterministic, reserve the model for real judgment, and put a net under everything that can hurt you. Do that, and your agent survives production. See you at the next crash test."
- **Visual:** End card. A three-line takeaway summary animates in, then resolves to the outro layout: a next-video thumbnail placeholder on one side, the checklist download link on the other, channel logo, and the synthetic-media disclosure line held on screen. Clean, confident sign-off.
- **On-screen text:** Takeaways: "1 Boring parts deterministic · 2 Model for real judgment · 3 A net under everything" · end card: "[Next crash test →]" · "Checklist ↓" · [BRAND logo] · disclosure: "Contains realistic AI-generated media."
- **Motion/Transition:** Takeaway lines cascade; resolve into the end-card layout; hold to fade-out at 17:00.
- **Keyframe prompt seed:** End card with three takeaway lines, a next-video thumbnail placeholder, a checklist download link, channel logo, and a synthetic-media disclosure line, clean outro, [BRAND palette] + [BRAND logo], 16:9.
- **⚠️ VERIFY:** confirm synthetic-media disclosure placement meets current YouTube policy.

---

## Notes for downstream stages (KEYFRAMES / BRANDING)

- **Open brand slots ([ELLIS] / BRANDING-dependent):** all `[BRAND palette]`, `[BRAND accent]`, and `[BRAND logo]` tokens are unresolved by design — BRANDING sets actual colors, logo, and type. The voice-guide's only open `[ELLIS]` slot (community/funnel link) does not affect visuals here; S050–S051 intentionally use "free link in the description / no email wall" with no funnel URL.
- **Recurring assets to design once and reuse:** (1) the five-node Sift flow diagram (S009–S012, S019–S022, S027–S028); (2) the "Agent Pre-Launch Checklist" sidebar/one-pager (S029, S050); (3) round slates; (4) the hook dashboard, reused clean in S049; (5) the token/cost meter (S006, S037–S038).
- **Two original metaphor illustrations need art direction:** the "seasoning a pot of soup" sequence (S017) and the "puppy in a warehouse / valet key" pair (S035, S043). These are the editor-approved original replacements for scrubbed source analogies — keep them ORIGINAL; do not drift toward any source metaphor.
- **Vague-ish screen directions expanded with judgment (flag for review):** S007 ("cut to a code/workflow canvas"), S044 (safety-net was implied, rendered as a literal net motif), S047 ("clean rerun slate") — confirm the expanded visual intent matches the director's vision before keyframing.
- **Illustrative figures:** S006, S037, S038 show token/dollar numbers that must remain visibly stylized (not spec-accurate) — see the two VERIFY flags; keep any on-screen number clearly "demo/illustrative".
- **Compliance blocker:** the synthetic-media disclosure (S051, S052) placement is a hard VERIFY against current YouTube policy before publish (out of scope for this repo artifact, but must not be dropped).
