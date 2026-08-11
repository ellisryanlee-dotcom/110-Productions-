# KEYFRAME BUILD BRIEF — scale-out (S011–S052)

You are building **static, rested, 1920×1080 HTML/CSS/SVG keyframes** for *AI University ·
Crash Test #1 (Episode 1)*. Each keyframe is the **final on-screen state** of one shot (not the
animation). Tier-0 deterministic: **pure HTML/CSS/SVG, no images, no paid APIs, no paid fonts.**

## Single source of truth — READ THESE, IGNORE EVERYTHING ELSE
1. **`production/keyframes/tokens.css`** — the LOCKED design system. Use its `--ct-*` tokens,
   `.stage`, and `.ct-killcounter` verbatim. Your file must `<link rel="stylesheet" href="tokens.css">`.
2. **Exemplars** already built to spec — copy their structure exactly:
   `s005.html` (SVG motion-graphic), `s008.html` (screen-sim dashboard), `s003.html` (title-card).
3. **`production/screenplay/crash-test-001-screenplay.md`** — find your shot's `### SNNN` block.
   It gives **VO / Visual / On-screen text / Motion / Keyframe prompt seed** — build the *Visual +
   On-screen text* as the rested frame. Use the exact on-screen strings quoted there.

**DO NOT** copy from `production/build/components/` — that folder uses a **superseded, hybrid**
token set (`--cta-*`, hazard-yellow, Space Grotesk) and will cause brand drift. Reimplement any
layout idea on the locked `--ct-*` tokens instead.

## Brand rules (from locked bible)
- Background is dark "engineering red-alert instrument panel."
- **Semantic color only:** red `--ct-break` = broke/failure; green `--ct-fixed` = fixed/passing;
  amber `--ct-warn` = VERIFY (reserved — NEVER decorative); cyan `--ct-accent` = "needs AI" /
  interactive / CTA. Do not use amber or red decoratively.
- Fonts: Archivo (display), Inter (UI), JetBrains Mono (mono/numbers) — Google Fonts `<link>`
  exactly as in the exemplars. System-font fallbacks already live in tokens.css.

## Required file skeleton (match exemplars)
```
<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8"><meta name="viewport" content="width=1920, initial-scale=1">
  <title>SNNN — <short label> · Crash Test Agents</title>
  <link rel="preconnect" ...><link href="...Archivo...Inter...JetBrains+Mono..." rel="stylesheet">
  <link rel="stylesheet" href="tokens.css">
  <style> /* shot-scoped styles only; consume --ct-* tokens */ </style>
</head><body>
  <div class="stage" role="img" aria-label="<one-line description of the frame>">
    <!-- Kill-Counter HUD: LAST child of .stage on EVERY shot (see below) -->
    <!-- shot content -->
  </div>
</body></html>
```

## Kill-Counter HUD — put on EVERY shot (drop as last child of `.stage`)
```
<div class="ct-killcounter" data-state="STATE" aria-label="Kill counter: NN of 25 breaks">
  <span class="kc-dot"></span>
  <span class="kc-label">Breaks</span>
  <span class="kc-tally"><span class="kc-n">NN</span><span class="kc-of">/ 25</span></span>
</div>
```
Set **NN** (zero-padded, e.g. `06`) and **STATE** by the shot's position. The 25 breaks map:

| Breaks reached | Section | Shots | data-state |
|---|---|---|---|
| 00 | Hook / Context / Build | S001–S012 | `armed` |
| 1→6 | Round 1 | S013–S022 | `ticking` |
| 7→11 | Round 2 | S023–S029 | `ticking` |
| 12→15 | Round 3 | S030–S033 | `ticking` |
| 16→20 | Round 4 | S034–S038 | `ticking` |
| 21→23 | Round 5 | S039–S043 | `ticking` |
| 24→25 | Final safety net | S044–S046 | `ticking` → `locked` (25 by S046) |
| survivor count (green) | Clean rerun | S047–S049 | `fixed` |
| 25 (locked) | Artifact / CTA | S050–S052 | `locked` |

For a shot inside a round, set **NN = the highest Break number tallied by that shot**. The exact
per-beat number is in the script `[COUNTER: Break NN / 25 ... Tally → N]` cues
(`production/scripts/crash-test-001-draft.md`) — when a shot spans a break beat, use the number it
ends on. If genuinely ambiguous, use the section's ending break number.

## AI-GEN gated shots — build the Tier-0 base/fallback ONLY
S017, S035, S043 carry an optional **⚠️AI-GEN b-roll overlay that is GATED** (paid, needs Ryan
spend-approval — do NOT generate). Build each one's **Tier-0 base/fallback layer** as described in
its screenplay block (S017 = paired loop animation alone; S035 = guardrails slate alone; S043 =
scoped-account + invoice UI alone). Add an HTML comment `<!-- AI-GEN b-roll overlay GATED: ... -->`
where the overlay would composite.

## Output rules
- Write each shot to `production/keyframes/sNNN.html` (lowercase, zero-padded: `s011.html`).
- **Do NOT run git.** Do not edit `tokens.css`, other shots, or any file outside your assigned list.
- Self-contained + reviewable in a browser at 1920×1080. Real, legible, brand-true content —
  no lorem ipsum; use the exact on-screen strings from the screenplay block.
- When done, reply with the list of files you wrote and the HUD NN/state you used for each.
