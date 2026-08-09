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

// 1) render frames with a bounded concurrency pool. Chrome writes the PNG then
//    hangs (fresh --user-data-dir never self-exits), so we spawn it, poll for the
//    finished screenshot, then kill the process — far faster than waiting on exit.
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function pngStable(p) { try { return statSync(p).size > 20000; } catch { return false; } }

// Chrome writes the screenshot but won't self-exit here, and its renderer/gpu
// helpers setsid() out of the process group AND don't carry the profile path, so
// neither a group-kill nor pkill-by-token reaps them — and they're byte-identical
// to a GUI Chrome's helpers, so a blanket pkill would nuke Ryan's browser too.
// Surgical fix: while our main Chrome is still alive, walk its descendant PID tree
// (pgrep -P) and SIGKILL exactly that set. Never touches any other Chrome.
function descendants(pid) {
  let kids = [];
  try { kids = execFileSync('pgrep', ['-P', String(pid)], { stdio: ['ignore', 'pipe', 'ignore'] })
    .toString().trim().split('\n').filter(Boolean).map(Number); } catch {}
  const out = [];
  for (const k of kids) out.push(k, ...descendants(k));
  return out;
}
function killTree(pid) {
  const pids = [...new Set([...descendants(pid), pid])];   // enumerate BEFORE killing
  for (const p of pids) { try { process.kill(p, 'SIGKILL'); } catch {} }
}
async function renderFrame(i) {
  const pad = String(i).padStart(5, '0');
  const png = join(work, 'f_' + pad + '.png');
  const prof = join(work, 'prof_' + pad);
  for (let attempt = 0; attempt < 2; attempt++) {
    const child = spawn(CHROME, [
      '--headless=new', '--no-sandbox', '--no-first-run', '--no-default-browser-check',
      '--disable-extensions', '--disable-background-networking', '--disable-gpu',
      '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1920,1080',
      '--virtual-time-budget=1200', '--user-data-dir=' + prof,
      '--screenshot=' + png, `file://${SCENE}?f=${i}`,
    ], { stdio: 'ignore', detached: true });
    let killed = false;
    const hardCap = setTimeout(() => { killed = true; killTree(child.pid); }, 15000);
    for (let waited = 0; waited < 15000; waited += 150) {
      if (pngStable(png)) { const a = statSync(png).size; await sleep(120); if (statSync(png).size === a) break; }
      if (child.exitCode !== null || killed) break;
      await sleep(150);
    }
    clearTimeout(hardCap);
    killTree(child.pid);        // main still alive here => full tree is reachable
    if (pngStable(png)) return png;
  }
  throw new Error('frame render failed: ' + i);
}

let done = 0;
async function run() {
  let next = 0;
  async function worker() {
    while (next < N) {
      const i = next++;
      await renderFrame(i);
      if (++done % 90 === 0) console.log(`  rendered ${done}/${N} frames`);
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
}
console.log(`rendering ${N} frames @ ${FPS}fps (conc ${CONC})…`);
await run();
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
