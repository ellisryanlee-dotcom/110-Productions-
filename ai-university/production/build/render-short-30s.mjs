#!/usr/bin/env node
// $0 animated 30s short builder for EP1 "Crash Test #1" (OPE-175).
// Renders production/build/short-30s/agent-breaking.html at 900 deterministic
// frames (30fps x 30s) via system Google Chrome headless, assembles them into a
// 1080p H.264 clip, then muxes back the EXISTING short's audio (the 0:00–0:30
// VO + music bed) verbatim — Ryan's "keep the good information, replace the
// visuals" note. No paid tools, no image/video generation, no network.
//
// Usage:  node production/build/render-short-30s.mjs
// Output: production/animatic/crash-test-001-short-30s.mp4  (superseded in place;
//         previous version recoverable via git).

import { execFileSync, spawn } from 'node:child_process';
import { mkdtempSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const SCENE = join(ROOT, 'production/build/short-30s/agent-breaking.html');
const OUT = join(ROOT, 'production/animatic/crash-test-001-short-30s.mp4');
const AUDIO_SRC = OUT; // reuse the current short's audio track (VO + music, 0:00–0:30)
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FPS = 30, DUR = 30, N = FPS * DUR;      // 900 frames
const CONC = 6;

if (!existsSync(SCENE)) { console.error('scene missing:', SCENE); process.exit(1); }
if (!existsSync(AUDIO_SRC)) { console.error('audio source missing:', AUDIO_SRC); process.exit(1); }

const work = mkdtempSync(join(tmpdir(), 'ep1-short-'));

// 0) grab the existing audio BEFORE we overwrite the output file
const audio = join(work, 'audio.m4a');
execFileSync('ffmpeg', ['-y', '-i', AUDIO_SRC, '-vn', '-c:a', 'aac', '-b:a', '192k', audio],
  { stdio: ['ignore', 'ignore', 'inherit'] });

// 1) render frames. Chrome writes the PNG but won't self-exit here, and its
//    renderer/gpu/crashpad helpers setsid()/re-parent away from the launched
//    process, so per-process tree/group/token kills all leak helpers that pile up
//    and eventually thrash the box. Robust + safe fix: snapshot every Google Chrome
//    PID that exists BEFORE we start (Ryan's browser, if any), render in barrier
//    batches, and between batches SIGKILL every Google Chrome PID that isn't in the
//    snapshot. Complete (catches all our helpers regardless of parentage) and safe
//    (a pre-existing browser's PIDs are never in the kill set).
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function pngStable(p) { try { return statSync(p).size > 20000; } catch { return false; } }
const pngPath = (i) => join(work, 'f_' + String(i).padStart(5, '0') + '.png');

function listChrome() {
  try {
    return execFileSync('pgrep', ['-f', 'Google Chrome'], { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim().split('\n').filter(Boolean).map(Number);
  } catch { return []; }
}
const SNAP = new Set(listChrome());
function sweepMine() { for (const p of listChrome()) if (!SNAP.has(p)) { try { process.kill(p, 'SIGKILL'); } catch {} } }

function launchFrame(i) {
  const png = pngPath(i);
  const child = spawn(CHROME, [
    '--headless=new', '--no-sandbox', '--no-first-run', '--no-default-browser-check',
    '--disable-extensions', '--disable-background-networking', '--disable-gpu',
    '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1920,1080',
    '--virtual-time-budget=1200', '--user-data-dir=' + join(work, 'prof_' + String(i).padStart(5, '0')),
    '--screenshot=' + png, `file://${SCENE}?f=${i}`,
  ], { stdio: 'ignore', detached: true });
  return new Promise(async (res) => {
    for (let waited = 0; waited < 15000; waited += 150) {
      if (pngStable(png)) { const a = statSync(png).size; await sleep(120); if (statSync(png).size === a) break; }
      if (child.exitCode !== null) break;
      await sleep(150);
    }
    res(pngStable(png));
  });
}

// barrier batches: launch CONC frames, await all screenshots, then reap the batch
async function renderRange(indices) {
  let done = 0;
  for (let s = 0; s < indices.length; s += CONC) {
    const chunk = indices.slice(s, s + CONC);
    await Promise.all(chunk.map(launchFrame));
    sweepMine();
    done += chunk.length;
    if (done % 90 === 0 || s + CONC >= indices.length) console.log(`  rendered ${done}/${indices.length}`);
  }
}

console.log(`rendering ${N} frames @ ${FPS}fps (batch ${CONC}); pre-existing Chrome PIDs: ${SNAP.size}`);
await renderRange(Array.from({ length: N }, (_, i) => i));
const missingFrames = () => Array.from({ length: N }, (_, i) => i).filter((i) => !pngStable(pngPath(i)));
for (let pass = 0; pass < 4; pass++) {
  const missing = missingFrames();
  if (!missing.length) break;
  console.log(`retry pass ${pass + 1}: ${missing.length} missing frame(s)`);
  await renderRange(missing);
}
sweepMine();
const missing = missingFrames();
if (missing.length) { console.error(`still missing ${missing.length} frames: ${missing.slice(0, 10).join(',')}… — aborting`); process.exit(2); }
console.log('frames complete');

// 2) frames -> silent H.264, then mux the reused audio
const silent = join(work, 'silent.mp4');
execFileSync('ffmpeg', [
  '-y', '-framerate', String(FPS), '-i', join(work, 'f_%05d.png'),
  '-t', String(DUR), '-vf', 'format=yuv420p',
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-movflags', '+faststart', silent,
], { stdio: ['ignore', 'ignore', 'inherit'] });

execFileSync('ffmpeg', [
  '-y', '-i', silent, '-i', audio,
  '-map', '0:v:0', '-map', '1:a:0',
  '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest',
  '-movflags', '+faststart', OUT,
], { stdio: ['ignore', 'ignore', 'inherit'] });

console.log('wrote', OUT);
