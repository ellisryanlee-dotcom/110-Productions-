---
id: kc-0730
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, items, split-out, merge, limit, data-flow]
source_video: Gc03J27xmBc
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Fan-out / fan-in item control in n8n

**What:** Techniques for controlling how many items flow through a branch. *Split
out* a list field so each element becomes its own item (fan-out) — useful to run a
node once per element (e.g., generate one image per subject). *Limit* to a single
item when a step should run only once (e.g., one audio track, one sheet update).
*Merge* separate branches back together (combining by all possible combinations
just recombines everything into one dataset), and split-out arrays into a single
consolidated item when a later step needs all values at once (e.g., one final
render).

**Why it matters:** Many workflow bugs are really item-count bugs — a step runs
four times when it should run once, or once when it should run per element.
Knowing when to fan out, limit, and merge keeps costs down and outputs correct.

**The moves:**
1. Split out a list to process each element separately.
2. Limit to one item before steps that should execute a single time.
3. Merge branches to bring parallel results back together.
4. Consolidate arrays into one item when a downstream node needs all values in a
   single call.

**Watch out for:** Merging "by matching fields" vs "by position" vs "all
combinations" behave differently — pick deliberately. Forgetting to limit before a
write/notify step causes duplicate actions. Fan-out multiplies API cost.

**Original example to invent:** Diagram a small flow where one input fans out to
several generations and then fans back in to a single output, in your own words.
