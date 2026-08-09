# EP-001 — "Claude Code, Nearly Free: The Cartridge Trick"

Runtime target ≈ 4:50. VO ≈ 735 words @ ~150 wpm. Card citations in
comments; stripped at publish. Segment ids (S1…S8) map to shots.json.

---

## S1 — COLD OPEN (0:00–0:22)

<!-- cards: kc-0401 -->
VO:
Your AI coding bill has one line item that matters: the model. Not the tool —
the model behind it. Here's the part almost nobody separates: Claude Code,
the tool, and the intelligence it runs on are two different things. And the
intelligence is swappable. Today: two ways to run Claude Code on models that
cost you nothing — and the two traps that quietly put you back on the meter.

## S2 — TITLE STING (0:22–0:26)

On screen: 110 AI UNIVERSITY — EP.001 — CLAUDE CODE, NEARLY FREE.

## S3 — THE CONSOLE AND THE CARTRIDGE (0:26–1:14)

<!-- cards: kc-0401 -->
VO:
Think of Claude Code as a game console. The console is the machine — it
handles the controllers, the memory card, the save files. In agent terms:
planning, file operations, tool calls. The cartridge is the game — the
model that actually does the thinking. By default, the console ships with
Anthropic's cartridges. Premium ones. Metered ones. But the slot is open.
Closed models — you rent them through an API, and you never see inside.
Open-weight models — anyone can download the file and run it. The best
closed models still lead the benchmarks, but the gap shrinks every release
cycle. Some open models you can run today already beat closed models that
were state of the art two years ago. And no — swapping the cartridge
doesn't break Anthropic's rules. It's their console, used as designed,
running a different game.

## S4 — ROUTE ONE: THE HOME CARTRIDGE (1:14–2:28)

<!-- cards: kc-0402, kc-0403 -->
VO:
Route one: burn your own cartridge. Local. The tool is Ollama — install it,
browse the open-model library, and pick a size your machine can hold.
Rule of thumb: your RAM decides. A laptop with sixteen gigs runs a small
model — say, a summarizer sidekick for your docs. A big desktop runs
something with real reasoning. Not sure? Paste your specs into any
assistant and ask what fits. Then three commands. One: pull the model —
that's the download. Two: run it in the terminal and say hello — if it
answers, the cartridge works. Three: launch Claude Code through Ollama's
launcher and pick that model from the menu. One catch at the door:
Claude Code's first-time setup still wants an Anthropic sign-in, and the
API-key path means a five-dollar minimum top-up. One time. It sits there
unused once your sessions route local. Before you trust it, run one read
test and one write test. Ask it to explain what your repo's README
promises. Then ask it to add a changelog entry. Reads and writes both
land? You're off the meter.

## S5 — TRAP ONE: THE SHRUNKEN MEMORY (2:28–3:10)

<!-- cards: kc-0404 -->
VO:
Now the first trap. Your local model will look smart for ten minutes, then
forget what it was doing mid-task. Ask it to rename a function across three
files — it does one and wanders off. That's not stupidity. That's memory.
Ollama can cap the context window far below what the model card advertises —
the screen says two hundred thousand tokens, the runtime says otherwise.
The fix is one command: create a custom copy of the model with the context
window set explicitly. It shows up as its own entry in the launch menu.
Pick it, re-run the same task, and watch it hold the thread. Config
problem — not a capability problem. Know the difference and you'll stop
blaming the cartridge.

## S6 — ROUTE TWO: THE RENTAL LIBRARY (3:10–4:02)

<!-- cards: kc-0407 -->
VO:
Route two: don't own the cartridge — borrow it. OpenRouter is a rental
library for models, and a shelf of them is free. The wiring is one settings
file. Point Claude Code's base URL at OpenRouter. Put your OpenRouter key
in the auth field. Leave the Anthropic key blank. And here is trap two —
the expensive one. Claude Code doesn't use one model. It quietly routes
small internal jobs to a fast sidekick model. Override only the main model,
and those sidekick calls silently fall back to Anthropic's paid ones. You
think you're free. The meter thinks otherwise. So: every model field in
that settings file gets a free model's exact ID. Every one. Then verify
like an accountant — after a session, open OpenRouter's logs and read the
cost column. All zeros, correct model names. And fund the account with
five or ten dollars anyway: free usage doesn't spend it, but it multiplies
your daily free-request ceiling.

## S7 — WHICH CARTRIDGE, WHEN (4:02–4:38)

<!-- cards: kc-0406, kc-0408, kc-0405 -->
VO:
So which cartridge, when? Free models earn their keep on the cheap seats:
summarizing files, searching a codebase, scaffolding, triage, research
runs. High volume, low stakes. Keep the frontier model for the work that
bleeds when it's wrong — and re-check anything a free model shipped. Two
warnings from the field. Free tiers rate-limit by the day and by the
minute. And an open model may fake a web search — answering from stale
training data with a straight face. Test it on something recent before you
trust it. If free gets cramped: same wiring, pick a cheap paid open model
instead — small fraction of frontier price, none of the free-tier limits.

## S8 — RECAP + OUTRO (4:38–4:58)

<!-- cards: kc-0403, kc-0407, kc-0406 -->
VO:
Three rules. Verify the backend before you prompt. Override every model
field — not just the main one. Route the cheap work to free cartridges and
guard the frontier for what matters. The full setup checklist is in the
description. This is 110 AI University. Class dismissed.

On screen: 110 mark + episode card + next-episode slate.

---
## Editor gate — PASSED (v1, 2026-08-09)
- Provenance: every segment cites card ids; all claims trace to kc-0401..0408 (+kc-0403/0405). No transcript-derived phrasing.
- Similarity: 0 overlapping 6/7/8-grams vs source transcript O2k_qwZA8HU (automated check).
- Examples: console/cartridge analogy original; verification examples (README/changelog, 3-file rename, recency test) invented per card notes.
- Facts: $5 minimum top-up, silent sidekick-model fallback, daily+per-minute free limits, fake-web-search failure mode, cheap-paid middle ground — all verified against cards.
