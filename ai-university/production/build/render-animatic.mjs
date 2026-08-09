#!/usr/bin/env node
// Deterministic, $0 silent-animatic builder for EP1 "Crash Test #1".
// Renders every production/keyframes/s0NN.html to a 1920x1080 PNG via system
// Google Chrome headless, then assembles them into an H.264 MP4 with ffmpeg,
// each still held for its exact per-shot screenplay duration (hard cuts, silent).
// Output is CFR 30fps and totals exactly sum(durations) = 1020.000s (17:00).
//
// Per-shot duration source of truth: the `- **Timecode:** M:SS–M:SS` line in each
// `### S0NN` block of production/screenplay/crash-test-001-screenplay.md.
//
// Usage:  node production/build/render-animatic.mjs
// No paid APIs, no image/video generation. Re-run after any keyframe edit
// (e.g. HUD/caption fixes) to keep the animatic in sync with the keyframes.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const KF = join(ROOT, 'production/keyframes');
const SCREENPLAY = join(ROOT, 'production/screenplay/crash-test-001-screenplay.md');
const OUT = join(ROOT, 'production/animatic/crash-test-001-animatic.mp4');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FPS = 30;

// --- per-shot timecodes ----------------------------------------------------
function parseTimecodes() {
  const lines = readFileSync(SCREENPLAY, 'utf8').split('\n');
  const dur = {};
  let cur = null;
  const toSec = (mmss) => { const [m, s] = mmss.trim().split(':').map(Number); return m * 60 + s; };
  for (const ln of lines) {
    const h = ln.match(/^### (S0\d\d)/);
    if (h) { cur = h[1]; continue; }
    const t = ln.match(/\*\*Timecode:\*\*\s*(\d+:\d\d)\s*[–\-]\s*(\d+:\d\d)/);
    if (t && cur) { const d = toSec(t[2]) - toSec(t[1]); if (d > 0) dur[cur] = d; cur = null; }
  }
  return dur;
}

const shots = readdirSync(KF).filter(f => /^s0\d\d\.html$/.test(f)).sort();
const dur = parseTimecodes();
const missing = shots.map(f => f.slice(0, 4).toUpperCase()).filter(id => !dur[id]);
if (missing.length) { console.error('Missing/invalid timecodes for:', missing.join(', ')); process.exit(1); }

// --- render keyframes to PNG ----------------------------------------------
const work = mkdtempSync(join(tmpdir(), 'ep1-animatic-'));
for (const f of shots) {
  const id = f.slice(0, 4);
  execFileSync(CHROME, [
    '--headless=new', '--no-sandbox', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1920,1080',
    '--virtual-time-budget=9000', '--default-background-color=00000000',
    `--screenshot=${join(work, id + '.png')}`, `file://${join(KF, f)}`,
  ], { stdio: 'ignore' });
}
console.log(`rendered ${shots.length} keyframes`);

// --- concat list + assemble ------------------------------------------------
// Every entry carries a `duration`; the demuxer ignores the LAST entry's duration,
// so the final frame is appended once more to make S052's duration count. That
// terminal frame would otherwise be held for a large default and inflate the total,
// so the whole timeline is capped back to exactly sum(durations) with `-t`, and CFR
// is forced with the fps filter — yielding exactly 1020.000s (a plain `-r` here
// over-counts frames and drifts to ~1050s).
let concat = '';
let total = 0;
for (const f of shots) {
  const id = f.slice(0, 4).toUpperCase();
  total += dur[id];
  concat += `file '${join(work, id + '.png')}'\nduration ${dur[id]}\n`;
}
concat += `file '${join(work, shots[shots.length - 1].slice(0, 4).toUpperCase() + '.png')}'\n`;
const listPath = join(work, 'concat.txt');
writeFileSync(listPath, concat);
console.log(`total runtime: ${total}s (${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')})`);

execFileSync('ffmpeg', [
  '-y', '-f', 'concat', '-safe', '0', '-i', listPath,
  '-t', String(total),
  '-vf', `fps=${FPS},format=yuv420p`,
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
  '-movflags', '+faststart', OUT,
], { stdio: ['ignore', 'ignore', 'inherit'] });
console.log('wrote', OUT);
