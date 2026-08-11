# EP1 "Crash Test #1" — Kill-Counter HUD: authoritative cue→shot map

**Status:** AUTHORITATIVE (v2, supersedes v1) · 2026-08-09 · owner ADAM (pre-EXPORT QA, issue c49c552c)
**Source of truth:** the 25 `[COUNTER: Break NN / 25]` cues in `production/scripts/crash-test-001-draft.md`.
**Reconciled against — and in full agreement with:** all 52 keyframes in `production/keyframes/`
and the per-shot `Kill-Counter HUD:` annotations in `production/screenplay/crash-test-001-screenplay.md`
(verified 52/52 keyframe `kc-n` == screenplay tally, monotonic, no skipped resting value).

## Why this exists
The approved script carries 25 explicit `[COUNTER: Break NN]` increment cues, but only the
hook shots (S001–S004) had per-shot HUD annotations. Every Round-1+ keyframe therefore baked
its tally by inference with no shot-level anchor, and several shots drifted (see Defects). This
document ties each of the 25 script breaks to the shot where the HUD rests at that value, and
fixes the end-of-shot tally for all 52 shots. Episodes 2+ inherit the method: **the counter is
monotonic non-decreasing, ticks once per break beat, shows every integer with no skipped
resting value, and rests each round at its boundary total (6 / 11 / 15 / 20 / 23 / 25).**

## v1→v2 note (concurrent-heartbeat reconciliation)
Two prior heartbeats produced divergent state: a v1 of this artifact used the map
`S015=01 S016=04 S026=10 S027=11 S039=21`, while the screenplay was synced to a different map
`S015=02 S016=03 S026=09 S027=10 S039=20`. On the merits the screenplay map is correct and v1
was wrong on Round 2 and Round 5 (below), so v2 adopts the screenplay map and the keyframes were
reconciled to it. All three surfaces (script cues, screenplay, 52 keyframes) now agree.

## Rule
The HUD shows the **cumulative breaks completed by the END of each shot.** A break "ticks" on
the shot by whose end it is counted. Where the screenplay condenses the teaching of a break
across shots, the tick is placed so the on-screen counter never skips an integer and never
runs ahead of the beat that dramatizes the break. It never decreases.

## Break → tick shot (25 cues)
| Break | Script beat (short) | Ticks / rests at |
|------:|---------------------|------------------|
| 01 | Empty brain: no system prompt | **S013–S014** (named S013, mush lands S014; holds 01) |
| 02 | AI for a job that was just rules | **S015** |
| 03 | Fixed step-order instead of conditional rules | **S016** |
| 04 | Guess-and-dump prompt, many changes at once | **S017** (soup metaphor) |
| 05 | Example bloat | **S018** |
| 06 | Garbage input straight to a tool → 400 | **S019** (holds through fix S020–S022) |
| 07 | Couldn't read the HTTP status | **S023** (Round 2 opens) |
| 08 | Trusting a green run that silently failed | **S024** |
| 09 | No shared error handler; failures vanish | **S025** (proof holds at S026) |
| 10 | Flaky tool, no error branch stalls the run | **S027** |
| 11 | Un-actionable error, no retry | **S028** (holds through checklist S029) |
| 12 | Confident hallucination stated as fact | **S030** |
| 13 | Treating a failure as noise, not data | **S031** |
| 14 | Fix patched the reply, not the rules | **S032** |
| 15 | Lesson lived only in the session | **S033** |
| 16 | Went live with no paper mode | **S034** |
| 17 | No caps or prohibitions; the runaway | **S035** |
| 18 | Auto-accepting actions without reading runs | **S036** |
| 19 | Re-reading the whole archive every run | **S037** |
| 20 | Overstuffed context degrades quality | **S038** (holds through slate S039) |
| 21 | Live key pasted into the prompt | **S040** |
| 22 | Secret used by value, no rotation plan | **S041** |
| 23 | Over-privilege: full-access personal account | **S042** (holds through fix S043) |
| 24 | No human gate on an irreversible action | **S044** (holds through S045) |
| 25 | Unreadable feedback; wrong-draft revisions | **S046** (locks 25/25) |

## Authoritative end-of-shot HUD tally (all 52 shots)
`00` armed through hook/context/build; `ticking` through the rounds; `locked` at S046; `fixed`
(green survivor state) on the clean rerun and outro.

```
S001–S012 = 00  (armed — HUD present, holds at zero; ticking starts at Round 1)
S013 01  S014 01  S015 02  S016 03  S017 04  S018 05  S019 06  S020 06  S021 06  S022 06   (R1 → 6)
S023 07  S024 08  S025 09  S026 09  S027 10  S028 11  S029 11                                (R2 → 11)
S030 12  S031 13  S032 14  S033 15                                                          (R3 → 15)
S034 16  S035 17  S036 18  S037 19  S038 20                                                 (R4 → 20)
S039 20  S040 21  S041 22  S042 23  S043 23                                                 (R5 → 23)
S044 24  S045 24  S046 25(lock)                                                             (net → 25)
S047 25  S048 25  S049 25  S050 25  S051 25  S052 25   (fixed / green — survivor state)
```
Round-boundary totals — 6 / 11 / 15 / 20 / 23 / 25 — match the draft's round slates
(Round 1 "Breaks 1–6", Round 2 "7–11", Round 3 "12–15", Round 4 "16–20", Round 5 "21–23",
Final safety net "24–25"). Sequence is monotonic with **no skipped resting value**.

## Defects found & fixed (2026-08-09, v2)
1. **S015→S016 skipped resting values 02 and 03.** Keyframes baked S013=S014=S015=`01` then
   jumped to S016=`04`, so "02/25" and "03/25" never appeared on screen. → S015=`02`, S016=`03`,
   S017=`04`. Round 1 now ticks 01→…→06 with no skip.
2. **Round 2 ran one break ahead (the reported off-by-one).** Keyframes baked S026=`10`,
   S027=`11`, S028=`11`, so "11/25" showed on two consecutive shots and S026 counted break 10
   before the fragile-chain shot (S027) that dramatizes it. Content: S025 builds the error
   handler (break 9), S026 is its *proof* (holds at 9), S027 is the fragile chain (break 10),
   S028 is the retry (break 11). → S026=`09`, S027=`10`, S028=`11`. (This overturns v1, which
   had wrongly dismissed the defect.)
3. **S039 ticked break 21 on the Round-5 slate.** S039 is the "secrets & permissions" slate —
   no key on screen; the plaintext key first appears at S040. → S039 holds at `20`, S040=`21`.
4. **S020 ran the counter backwards** (baked `04` between S019=06 and S021=06). → `06`. *(fixed
   in a prior heartbeat; retained here for the record.)*
5. **S016 break-16 skip / S034.** In v1 the Round-4 open drifted; v2 sets S034=`16`, S035=`17`
   so Round 4 ticks 16→17→18→19→20 cleanly. *(S034 fixed in a prior heartbeat.)*
6. **S050–S052 state.** Left `locked` while the clean-rerun shots S047–S049 were `fixed` (green).
   → S050–S052 set to `fixed` for a consistent green survivor state across the whole rerun+outro.
7. **On-card kicker prose lagged the Round-2 HUD fix (found in pre-EXPORT QA, this pass).** The
   HUD-tally reconciliation (Defect #2) corrected the `kc-n`/`aria-label`/`data-state` on S026/S027
   but left the *visible* kicker text at the pre-fix numbers — S026 read `Proof · break 10 of 25`
   and S027 read `Fix · break 11 of 25`. That text renders into the exported frame, so the counter
   said 09/10 while the caption said 10/11. → S026 kicker `break 9`, S027 kicker `break 10`; stale
   HTML build-comments in both files also corrected. Now every visible break-number on-frame
   (HUD tally + kicker + tag) agrees with this map. **Downstream:** S026/S027 were already in the
   stale-frame re-render list below, so the animatic re-render already scheduled also carries this
   caption fix — no new frames added.

## Reconciliation status
- **Keyframes:** all 52 reconciled; monotonic; `kc-n`, `aria-label`, and `data-state` consistent ✔.
- **Screenplay:** all 52 shot blocks carry a `Kill-Counter HUD:` line matching the keyframe
  tally (S005–S052 gap filled; S001–S004 pre-existing) ✔.
- **This map:** in full agreement with both ✔.
- **⚠️ Downstream (EDIT stage):** the silent animatic
  (`production/animatic/crash-test-001-animatic.mp4`) was assembled from pre-fix keyframes and is
  now stale for the corrected frames — **S015, S016, S020, S026, S027, S034, S039** (value
  changes) and **S050–S052** (state/colour). Re-render those frames (Chrome headless) and
  re-assemble before EXPORT. Deterministic, $0, no new paid surface.
