---
title: "I Tried to Break This AI Agent 25 Ways (so yours won't die in production)"
brief: production/briefs/brief-001.md
cards_used: [kc-0226, kc-0114, kc-0115, kc-0105, kc-0118, kc-0306, kc-0213, kc-0325, kc-0323, kc-0206, kc-0215, kc-0117]
target_length: 17:00
status: approved
---

## HOOK (0:00)

VO: This agent sorts my email. Watch.
[SCREEN: clean dashboard, "Sift — inbox triage for Harbor Supply Co." Live feed of emails getting labeled: Sales, Support, Billing. Green checks.]

VO: Beautiful. Now watch me feed it one weird message.
[SCREEN: a single malformed email drops in. The agent freezes, then fires the same reply four times to the same customer. Counter spins. A red API error stacks up.]

VO: There it is. The demo you'd post, and the thing you'd never show. Everyone shows the win. We break the agent on camera, then make it bulletproof.
[SCREEN: title card — "Crash Test Agents. We break AI agents so yours don't." Then: "25 ways to kill an agent → 25 fixes."]

VO: I'll attack this email assistant twenty-five ways — bad inputs, dead connections, a lying model, a runaway loop, leaked keys. Every break gets a fix and a rule, and the whole rulebook is a free download.
[SCREEN: agenda list of the five rounds + "Final safety net" + "Free: Agent Pre-Launch Checklist".]

## CONTEXT — why a broken agent costs real money (≤90s)

VO: Quick reason this matters. An agent isn't a chatbot you watch. It runs on its own, and it acts — it sends, it charges, it deletes. A confused chatbot just says something dumb. A confused agent does something dumb, two hundred times, while you sleep. [kc-0325]
[SCREEN: split — "chatbot: says a wrong thing" vs "agent: does a wrong thing x200".]

VO: And every action can cost. Each run spends tokens — the chunks of text the model reads and writes, which you pay for. Treat them like cash out of a wallet, because that's what they are. [kc-0323]
[SCREEN: a token meter ticking up next to a running dollar figure. Figure is illustrative. [VERIFY: exact per-run cost is a fabricated demo number, not a measured claim]]

VO: So here's the honest version of building agents. It's not the demo. It's what happens on day two, when a real inbox throws garbage at it. Let's build the victim, then go break it.
[SCREEN: cut to a code/workflow canvas.]

## BUILD THE VICTIM AGENT (fast)

VO: Meet the patient. Fake company: Harbor Supply Co., a wholesale kitchen outfit. Their inbox, support@harborsupply.co, gets slammed daily. Our agent's name is Sift. Everything here is invented — the company, the customers, the keys.
[SCREEN: fictional inbox, ~200 unread. Sender names like "Dana Okafor", "priya@vendorline.co", "deals@free-cruise-now.biz".]

VO: Sift's job sounds simple. Read each new email, figure out what it is — sales lead, support question, billing issue, spam, or something urgent — label it, look the person up in our fake CRM (that's a Customer Relationship Manager, the contact database — ours is Rolodash), and draft a reply for a human to send.
[SCREEN: flow diagram: Read → Classify → Label → Look up in Rolodash → Draft reply.]

VO: Here's the first honest call, and it's a big one. Most of that job does not need artificial intelligence. [kc-0226]
[SCREEN: the flow lights up chunk by chunk.]

VO: Break the job into chunks and ask, for each one, does this need judgment? "Does this email contain the word invoice?" — that's not judgment, that's a rule. "Is this the fourth email from this person today?" — a counter, not a genius. The only chunk that truly needs a model is reading a messy, human-written email and deciding what it's about. So we hard-code the boring chunks and reserve the model for the one that needs it. Boring is reliable. [kc-0226]
[SCREEN: chunks tagged "rule" in gray, one chunk tagged "needs AI" in the brand color.]

VO: That one reasoning chunk needs a system prompt — the standing instructions that tell the model who it is and how to behave. We'll build that in a second. First, let's give Sift no help at all and watch it fail. That's Round One.
[SCREEN: "ROUND 1" slate.]

## ROUND 1 — Bad inputs and the wrong tool for the job

VO: Break number one: the empty brain. I wired Sift up with tools but almost no instructions. Watch what a vague agent does with a normal email.
[SCREEN: email from Dana asking about a late order. Sift replies with a generic "Thank you for contacting us" and no answer.]

VO: Generic mush. That's the classic signature of a missing system prompt. When an agent has no role, it writes like nobody. No defined context, it gets confused about what it's even looking at. No rules, it starts making things up. [kc-0115]
[SCREEN: checklist of prompt sections, all unchecked.]

VO: So let's give it a real prompt with the sections that matter. A background — who Sift is and its goal. A context section — what it receives each run, since the email changes but the instructions don't. A tools section — each tool, when to use it, and the order, like "look the customer up in Rolodash before you draft." Rules as conditions — if the email mentions a refund, tag it billing. Examples, but only for stuff it gets wrong. And final notes — today's date, and a plain "if you don't know, say so." [kc-0115]
[SCREEN: the system prompt filling in, section by section with markdown headers: Role, Context, Tools, Rules, Examples, Final notes.]

VO: Notice what I did not do. I did not paste in a giant three-page prompt I generated somewhere and hope. I built it reactively — one fix at a time. [kc-0114]
[SCREEN: prompt being assembled line by line, each line tied to a test run.]

VO: Reactive prompting is like seasoning a pot of soup. You don't dump in every spice up front and hope. You taste it, add one pinch, taste again — because if you throw five things in at once and it comes out wrong, you have no idea which one to blame. Same here: add one tool, test a real email, watch what Sift does, then add one line to correct the exact thing it got wrong. Change one thing at a time so you always know which line caused which behavior. [kc-0114]
[SCREEN: animation of one line added → one behavior fixed → retest.]

VO: And when it does get something wrong, hard-prompt it. Paste the real email it fumbled, the wrong move it made, and the move you wanted. Show it the miss. Don't waste examples on emails it already handles fine — those are just tokens you're paying for. [kc-0114]
[SCREEN: an example block with "Input / What it did wrong / Correct action".]

VO: Now for the ugly input. Real inboxes are full of garbage, so I sent Sift a malformed one — a customer form that dumped raw broken data into the body. Sift passed that mess straight into the Rolodash lookup, and the connection screamed back.
[SCREEN: a red response: "400 Bad Request".]

VO: Time to read status codes. Every time an agent talks to another service over the web, that service answers with an HTTP status code — HTTP is just the language web services speak, and the code is a three-digit verdict on what happened. Learn the families and you save yourself hours. [kc-0105]
[SCREEN: the status families as a chart.]

VO: Two hundreds mean success. Four hundreds mean you messed up the request — a four-oh-oh is usually malformed data like a stray comma or a broken field, exactly what our garbage input caused. Four-oh-one means your key is wrong. Four-oh-three means your account isn't allowed. Four-oh-four means the address is a typo. And five hundreds mean the other server broke — not your fault, so stop rewriting a good request and just wait and retry. [kc-0105]
[SCREEN: 400/401/403/404/500 each with its plain-English meaning.]

VO: The fix for our four-oh-oh: validate and clean the input before it reaches a tool. Expect garbage, strip it, and confirm required fields exist before you call anything. Rule for the checklist: check your inputs before your agent acts on them. [kc-0105]
[SCREEN: a small "clean & validate" step slotting in before the CRM call; the 400 turns to a 200.]

## ROUND 2 — Dead APIs and fragile chains

VO: Round two. Things break that aren't your fault, and the worst part is you often won't know. Watch this — I quietly expire Sift's Rolodash key, like a credential that lapsed overnight.
[SCREEN: key status flips to "expired". Sift keeps running, cheerfully labeling.]

VO: See the trap? It looks fine. But a run can go green while a tool inside it quietly failed — a call errored, and the agent shrugged and moved on. Green is not proof the thing worked. That's how agents fail silently for a week before anyone notices. [kc-0118]
[SCREEN: green checkmark next to a lookup that actually returned nothing.]

VO: So we build one error-logging workflow, once, and reuse it everywhere. It starts with an error trigger, and every other workflow points its "on failure" setting at it. When something goes red, the handler catches the details — which run, which workflow, which step failed, and the error message — logs a row, and pings me with a link straight to the broken run. [kc-0118]
[SCREEN: error-trigger workflow → append row to a log sheet → alert message with a "view run" link.]

VO: To prove it works, I forced a failure and watched the alert land. One honest caveat: this only catches runs that actually go red. A tool that fails quietly while the step stays green still slips through — so pair the log with a real check that the action happened. [kc-0118]
[SCREEN: test failure → row appears → phone buzzes. Then a note: "green != success".]

VO: Now the fragile chain. Sift's draft-reply step leans on an outside writing service that gets flaky under load. When it hiccups, the old Sift returned nothing and the whole run stalled. So we split that step into two exits: a success path and an error path. [kc-0306]
[SCREEN: the draft node with two outgoing branches, "success" and "error".]

VO: On success, it returns the finished draft, normal as ever. On error, instead of dying, it returns a short, plain-English message: "couldn't draft that one, please try again." The main agent reads that sentence like a note from a coworker, and simply reissues the task. A flaky failure becomes a retry instead of a dead run. Keep that failure message human-readable — the next step reads it as instructions, not as a stack trace. [kc-0306]
[SCREEN: error branch returns the retry message → orchestrator loops back → second attempt succeeds.]

VO: Quick note. Every rule we've earned is landing on one page as we go — the Agent Pre-Launch Checklist, yours free at the end. Watch it fill up.
[SCREEN: the checklist sidebar, rounds one and two already ticked, more rows waiting.]

## ROUND 3 — The lying model

VO: Round three, and this is the sneaky one. The model doesn't crash. It lies with total confidence.
[SCREEN: Dana's email: "where's order 4471?" Sift's draft: "Your order 4471 shipped Tuesday via GreyRoute, tracking GR-88231."]

VO: Sounds perfect. It's fiction. There is no GreyRoute, there is no tracking number. Sift invented a shipping update because it sounded like the kind of thing that goes in that sentence. This is a hallucination — a made-up fact stated as truth — and if a human hits send, we just lied to a customer in writing. [kc-0213]
[SCREEN: side-by-side — the confident draft vs the real record showing "no shipment logged".]

VO: The fix isn't to yell at the model. It's a mindset: every failure is data. [kc-0213]
[SCREEN: "failure = data" slate.]

VO: So we diagnose it — Sift was drafting shipping details it never looked up. We fix the underlying step: force it to pull real order data from the source of truth first, and forbid any status it can't cite. We retest on the same email. Then — the part people skip — we write the lesson into the workflow's own rules, so this exact failure can't come back, and save it to a memory file so it survives the next run, not just this session. Fix once, remember forever. [kc-0213]
[SCREEN: patched rule "never state a shipping status without a verified record" → retest → Dana's draft now says "I'm checking on 4471 now" → lesson saved to a memory file.]

## ROUND 4 — The runaway, eager agent and the cost blowup

VO: Round four. Autonomous agents are eager — give one no limits and it will act, a lot. Remember the hook, where Sift emailed the same customer four times? Here's why, at full scale.
[SCREEN: from the cold open, Sift firing duplicate replies, counter climbing past 40.]

VO: An eager agent with no guardrails is a puppy with the keys to the warehouse — not malicious, just enthusiastic, and enthusiasm at machine speed is a bill. So we bound the blast radius with hard rules. [kc-0325]
[SCREEN: "guardrails" slate.]

VO: First, start in paper mode — a safe simulation where Sift drafts and logs what it would send, but sends nothing real, until I trust it. Then write explicit caps and prohibitions into its rules: one reply per customer per run, a hard limit per hour, and never touch anything outside the support inbox. And early on, I read the full history of its runs and tune from what I see, instead of auto-accepting whatever it wants to do. [kc-0325]
[SCREEN: rules block: "paper mode: ON", "max 1 reply/customer/run", "max N/hour", "inbox-only". Then a human scrolling a run transcript.]

VO: Second half of this round is quieter but just as expensive: context. Sift was re-reading the customer's entire two-year email history on every single run. [kc-0323]
[SCREEN: a giant thread being loaded, token meter spiking, cost climbing. Figures are illustrative. [VERIFY: token and dollar figures are fabricated demo values]]

VO: Two problems. One, you pay for every token, every run — cash on fire. Two, and this surprises people, more context can make the agent worse. Stuff too much in and quality rots — the model loses the plot in the noise. So budget context like money: give each run only what it needs — the instructions, the current email, a short customer summary — not the whole archive. Keep memory files short. A lean agent is a sharp agent and a cheap one. [kc-0323]
[SCREEN: the giant thread collapsing to a tidy "last 3 messages + customer summary"; meter drops.]

## ROUND 5 — Leaky secrets and over-privilege

VO: Round five, the one that ends careers. Secrets and permissions.
[SCREEN: "secrets & permissions" slate.]

VO: Break number one here: I found the Rolodash key pasted directly into the agent's instructions, in plain text. Something like rd_live_8fQ2x… right there in the prompt. [kc-0206]
[SCREEN: a fake key highlighted inside the system prompt. Value blurred.]

VO: That's a leak waiting to happen. A key in your prompt or code can ride along into a repository, a screenshot, or the chat history — and chat history can travel off to a model provider. The fix is a .env file: a plain settings file, kept out of version control, that holds your keys under placeholder names. Your code refers to the key by name, never its value. You paste the real value into that file yourself, locally — never hand it to the agent in chat — and add the file to your ignore list so it can't get pushed. If a key ever leaks, you rotate it: cancel the old one, issue a new one. [kc-0206]
[SCREEN: key moving from the prompt into a .env file with placeholders; the file being added to a .gitignore; code referencing the variable name.]

VO: Break number two: over-privilege. Sift was logged into my own account, with full access to everything — send, delete, admin, the works. [kc-0215]
[SCREEN: permission list, everything toggled on.]

VO: Think of it like a valet key. You hand the parking attendant a key that starts the car and nothing else — it won't open the trunk or the glovebox where your things are. Sift gets the same treatment: its own dedicated account, scoped to the support inbox and read-only on the CRM, since it only needs to look people up, not edit them. And its own named key — so when I check the bill I can see exactly what Sift spent and did, separate from everything else. Least privilege shrinks the damage any single agent can do, and makes its costs and actions traceable. [kc-0215]
[SCREEN: a scoped "sift-bot" account, read-only CRM, inbox-only mail, its own labeled key on the invoice.]

## FINAL SAFETY NET — human in the loop

VO: One net under all of it. Before Sift sends anything a customer will actually read, it stops and asks a person. [kc-0117]
[SCREEN: "human-in-the-loop" slate.]

VO: The pattern is send-and-wait. Sift drafts the reply, pauses, and pushes it to me — in our case a quick Slack message — and does nothing until I respond. I can approve it, or just type back what I want changed in plain English: "warmer, and mention the reship." [kc-0117]
[SCREEN: a Slack card with the draft and "Approve / Send feedback" — feedback channel is invented.]

VO: Here's the clever part. A yes-or-no is easy, but free-text feedback isn't. So a small AI classifier reads my reply and decides: approval, or revision request? Rules alone couldn't tell those apart. If it's a revision, my feedback and the current draft go to a revision step that rewrites it, then loops right back to me. It can keep stacking edit on edit, round after round, until I sign off — and each pass has to build on the newest version, never the first draft, or the fixes just get lost. [kc-0117]
[SCREEN: classifier splitting into "approve → send" vs "revise → rewrite → back to review"; a version tag incrementing each loop.]

## WHAT SURVIVED — the clean rerun

VO: So let's run the whole gauntlet again, on the hardened Sift, and see what's left standing.
[SCREEN: "clean rerun" slate; the five rounds listed, ready to replay.]

VO: The malformed input? Cleaned before the call — no more four-oh-oh. The expired key? The error handler catches it and pings me. The flaky draft service? Retries and recovers. The hallucinated tracking number? Gone — Sift now says "let me check" instead of inventing a fact. The runaway loop? Capped at one reply per customer, in paper mode until I trusted it. The leaked key? In an ignored .env file, on its own scoped account. And nothing customer-facing ships without my thumbs-up. [kc-0105][kc-0118][kc-0306][kc-0213][kc-0325][kc-0206][kc-0215][kc-0117]
[SCREEN: each round replays and passes green; the duplicate-send counter now reads 1.]

VO: Same agent, same inbox. The difference is every one of those failures now has a floor under it. That's the whole game — not a flashier demo, a system that doesn't fall over on day two.
[SCREEN: the dashboard from the hook, now running clean under the same weird inputs.]

## ARTIFACT DROP + CTA

VO: Every rule we just earned is on one page. It's called the Agent Pre-Launch Checklist — about twenty-five checks, grouped exactly like these rounds: input and scope, errors and retries, verification, guardrails and cost, secrets and permissions, and human gates. Run it before you let any agent touch real work. Free link in the description, no email wall.
[SCREEN: the one-page checklist scrolling; "Agent Pre-Launch Checklist — free download" with an arrow to the description.]

VO: And here's where you come in. Think your agent can survive this? Send it to us. We'll put it on the rack and break it on camera — that's the whole channel. We break AI agents so yours don't.
[SCREEN: "Send us your agent → we'll break it." Channel logo. Subscribe prompt. YouTube synthetic-media disclosure line visible.]

VO: Build the boring parts deterministic, reserve the model for real judgment, and put a net under everything that can hurt you. Do that, and your agent survives production. See you at the next crash test.
[SCREEN: end card — next video thumbnail + checklist link. [VERIFY: confirm synthetic-media disclosure placement meets current YouTube policy]]

## EDITOR VERDICT — 2026-08-09
APPROVED (after Round 1 revision)

Round 1 gate = KICKBACK on 3 items; all revised in place by the editor and re-gated clean. Similarity sweep run across all 6 source transcripts (Ey18PDiaAYI, bCljOfCH8Ms, saggDHHnmtQ, gb5TlGw6Uks, 9FuNtfsnRNo, 6MC1XqZSltw), one transcript per checker, covering every draft passage against the card(s) derived from it.

Kickback items (fixed):
1. Reactive-prompting analogy (kc-0114): draft used a bicycle analogy; source's own reactive-prompting analogy is also a bicycle (teaching a kid to ride) → replaced with an original "seasoning a pot of soup" analogy (soup/spice/pinch: 0 hits in any source).
2. Least-privilege analogy (kc-0215): draft used "new hire / intern + credit card + day one," which is the source's signature framing → replaced with an original "valet key" analogy (valet/trunk/glovebox: 0 hits in any source). Note: a first replacement — hotel key card — was itself swapped out because the source's example universe includes a travel/booking assistant ("check-in and checkout date"), so "hotel/checkout" sat in an adjacent domain.
3. Human-in-the-loop phrasing (kc-0117): draft carried the source's distinctive verbatim phrase "revisions on top of revisions" (leaked in via the card) → reworded to "keep stacking edit on edit, round after round," and dropped the echoing "the whole loop is pointless" beat.

similarity_sweep: clean — 0 shared non-generic 8-grams across all six transcripts. The only sub-8-gram verbatim echo ("revisions on top of revisions", 5-gram) was item 3 above and is now removed. Re-gate of the three edited passages: new analogy vehicles confirmed absent from all sources.

example_originality: clean (post-fix) — all invented proper nouns verified absent from every source transcript (Harbor Supply Co, Sift, Rolodash, Dana Okafor, GreyRoute/GR-88231, rd_live_8fQ2x). Both reused analogies replaced.

provenance: clean — every card-cited claim traces to its card. Two minor unsourced details accepted as general-knowledge framing, not card claims: the one-line definition of "hallucination" (line ~111) and "a screenshot" as a secret-leak vector (kc-0206 lists repo + chat history). Neither is a factual claim requiring a card.

facts_checked: HTTP status families 200/400/401/403/404/500 (correct as written), token definition, and the artifact's 28 checks in 6 groups (matches the CTA's "about twenty-five checks, grouped exactly like these rounds"). 0 facts corrected.

voice: clean — no banned words; acronyms (tokens, CRM, HTTP, .env) explained on first use; first-person builder voice; failures/costs shown honestly; all house structure beats present; artifact real and named (production/artifacts/agent-prelaunch-checklist.md). Minor: hook VO ≈ 82 words (~33s) vs the ≤30s guideline — within tolerance given the interleaved on-screen agent-failure business; no change required.

compliance: synthetic-media disclosure is planned and noted on-screen (title/end cards); exact placement carries a [VERIFY] for the production/upload step against current YouTube policy. Two [VERIFY] tags on illustrative token/dollar figures are correctly self-labeled as fabricated demo values, not measured claims.

runtime estimate: ~2,530 VO-only words ≈ 16–17 min at normal narration pace — within the 15–17 min brief target.
