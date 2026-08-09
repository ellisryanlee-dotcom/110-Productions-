---
id: kc-0617
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [security, least-privilege, agent-access, permissions, blast-radius]
source_video: [CBNbcbMs_Lc, HJ-dwefABss]
source_channel: "@nateherk"
source_views: ["251K", "244K"]
confidence: high
---
# Give agents their own scoped accounts and least-privilege access

**What:** Give an autonomous agent its own credentials and only the access it needs,
rather than sharing your own. In practice that means its own email and workspace so its
output is separate from yours, read-only access where it only needs to look, and a
design where it drafts/analyzes/organizes but waits for approval before external
actions. Because agents are non-deterministic, anything you hand them
they might actually use — and get wrong.

**Why it matters:** Least privilege caps the blast radius. If the agent misunderstands
something (or is compromised), it can't delete your real data, spend from your real
accounts, or act with your identity. Its own scoped account also keeps its work
auditable and reversible.

**The moves:**
1. Create dedicated accounts/logins for the agent instead of sharing yours.
2. Grant read-only where viewing is enough; withhold delete/write on anything
   irreplaceable.
3. Have it draft and stage external actions (emails, posts, transactions) for your
   approval rather than firing them autonomously.
4. Scope tool and API access to the minimum the task requires.
5. Review high-impact actions before they execute.

**Watch out for:** Handing over passwords, payment details, or full-account access is
a standing risk — the agent can and will act on whatever it's given, so the downside is
real. The worst-case scenario scales with how much access you granted.

**Original example to invent:** Source gave an assistant its own email and view-only
calendar. Writers should design a different least-privilege setup and name one action
that should stay behind human approval. The source framed least-privilege with two
role-comparison figures (an agent as a *new hire you don't fully trust yet*; full access
as *handing an unvetted contractor the keys*). The load-bearing idea is *minimum standing
authority / earn-scope-over-time* — invent a fresh analogy from a different domain and do
NOT reuse the new-hire, intern, or contractor-with-the-keys framing (also used in kc-0215).
