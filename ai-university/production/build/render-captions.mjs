// render-captions.mjs — generate an accessibility .srt for the finished EP1 cut.
//
// $0 / deterministic. Parses the SAME screenplay the VO render uses
// (production/screenplay/crash-test-001-screenplay.md) so captions stay
// verbatim to the spoken narration and aligned to each shot's timecode window.
// Re-run after any screenplay VO/timecode edit to stay in sync (mirrors
// render-finished.mjs). Output: production/distribution/crash-test-001.en.srt
//
// Per shot: VO text is split into readable cues (<= ~84 chars, <= ~6.5s each)
// distributed across the shot's [start,end] window proportionally by length.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SCREENPLAY = join(ROOT, 'production/screenplay/crash-test-001-screenplay.md');
const OUT = join(ROOT, 'production/distribution/crash-test-001.en.srt');

const MAX_CHARS = 84;     // ~2 lines of caption
const MAX_CUE_S = 6.5;    // don't hold a single cue too long

// --- parse screenplay: id -> {start, end, vo}  (identical logic to render-finished.mjs)
function parseShots() {
  const lines = readFileSync(SCREENPLAY, 'utf8').split('\n');
  const toSec = (mmss) => { const [m, s] = mmss.trim().split(':').map(Number); return m * 60 + s; };
  const shots = [];
  let cur = null;
  for (const ln of lines) {
    const h = ln.match(/^### (S0\d\d)/);
    if (h) { cur = { id: h[1], start: null, end: null, vo: null }; shots.push(cur); continue; }
    if (!cur) continue;
    const t = ln.match(/\*\*Timecode:\*\*\s*(\d+:\d\d)\s*[–\-]\s*(\d+:\d\d)/);
    if (t) { cur.start = toSec(t[1]); cur.end = toSec(t[2]); }
    const v = ln.match(/\*\*VO:\*\*\s*(.*)$/);
    if (v) {
      let text = v[1].trim().replace(/^["“]/, '').replace(/["”]\s*$/, '').trim();
      cur.vo = text.length ? text : null;
    }
  }
  return shots.filter(s => s.start != null && s.end != null && s.vo);
}

// Split one VO string into readable chunks under MAX_CHARS, preferring sentence
// boundaries, then clause boundaries, then word wrap.
function chunkVo(vo) {
  const sentences = vo.match(/[^.!?]+[.!?]*\s*/g) || [vo];
  const chunks = [];
  let buf = '';
  const push = () => { const t = buf.trim(); if (t) chunks.push(t); buf = ''; };
  for (let s of sentences) {
    s = s.trim();
    if (!s) continue;
    if (s.length <= MAX_CHARS) {
      if ((buf + ' ' + s).trim().length <= MAX_CHARS) buf = (buf + ' ' + s).trim();
      else { push(); buf = s; }
    } else {
      // sentence too long — word wrap it
      push();
      let line = '';
      for (const w of s.split(/\s+/)) {
        if ((line + ' ' + w).trim().length <= MAX_CHARS) line = (line + ' ' + w).trim();
        else { if (line) chunks.push(line); line = w; }
      }
      if (line) chunks.push(line);
    }
  }
  push();
  return chunks.length ? chunks : [vo];
}

const fmt = (sec) => {
  const ms = Math.round(sec * 1000);
  const h = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const mm = String(ms % 1000).padStart(3, '0');
  return `${h}:${m}:${s},${mm}`;
};

const shots = parseShots();
let idx = 0;
let prevEnd = 0;
const blocks = [];

for (const shot of shots) {
  const chunks = chunkVo(shot.vo);
  const start = Math.max(shot.start, prevEnd); // never overlap the previous cue
  const win = Math.max(0.001, shot.end - start);
  const totalChars = chunks.reduce((a, c) => a + c.length, 0) || 1;
  let cursor = start;
  chunks.forEach((c, i) => {
    // proportional share of the window, capped at MAX_CUE_S
    let dur = Math.min(MAX_CUE_S, (c.length / totalChars) * win);
    if (dur < 0.6) dur = Math.min(0.6, win / chunks.length);
    let cueStart = cursor;
    let cueEnd = Math.min(shot.end, cueStart + dur);
    if (i === chunks.length - 1) cueEnd = shot.end; // fill to shot end
    if (cueEnd <= cueStart) cueEnd = cueStart + 0.4;
    idx += 1;
    blocks.push(`${idx}\n${fmt(cueStart)} --> ${fmt(cueEnd)}\n${c}`);
    cursor = cueEnd;
  });
  prevEnd = shot.end;
}

writeFileSync(OUT, blocks.join('\n\n') + '\n', 'utf8');
console.log(`wrote ${idx} caption cues from ${shots.length} VO shots -> ${OUT}`);
