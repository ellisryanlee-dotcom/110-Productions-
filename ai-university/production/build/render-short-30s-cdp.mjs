#!/usr/bin/env node
// $0 animated 30s short renderer via a SINGLE persistent headless Chrome driven
// over the DevTools Protocol (CDP) — orders of magnitude faster than launching a
// fresh Chrome per frame. Renders production/build/short-30s/agent-breaking.html
// at 900 deterministic frames (30fps x 30s), assembles a 1080p H.264 clip, then
// muxes back the EXISTING short's audio (0:00–0:30 VO + music) verbatim.
// No paid tools, no image/video generation, no network. Node 22+ (global fetch/WebSocket).
//
// Usage:  node production/build/render-short-30s-cdp.mjs
// Output: production/animatic/crash-test-001-short-30s.mp4 (superseded in place)

import { execFileSync, spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const SCENE = join(ROOT, 'production/build/short-30s/agent-breaking.html');
const OUT = join(ROOT, 'production/animatic/crash-test-001-short-30s.mp4');
const AUDIO_SRC = OUT;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FPS = 30, DUR = 30, N = FPS * DUR;
const PORT = 9455;

if (!existsSync(SCENE)) { console.error('scene missing:', SCENE); process.exit(1); }
if (!existsSync(AUDIO_SRC)) { console.error('audio source missing:', AUDIO_SRC); process.exit(1); }

const work = mkdtempSync(join(tmpdir(), 'ep1-cdp-'));
const frames = join(work, 'frames'); mkdirSync(frames);

// 0) grab existing audio before we overwrite the output
const audio = join(work, 'audio.m4a');
execFileSync('ffmpeg', ['-y', '-i', AUDIO_SRC, '-vn', '-c:a', 'aac', '-b:a', '192k', audio],
  { stdio: ['ignore', 'ignore', 'inherit'] });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// 1) launch one headless Chrome with remote debugging
const prof = join(work, 'prof');
const chrome = spawn(CHROME, [
  '--headless=new', '--no-sandbox', '--hide-scrollbars', '--disable-gpu',
  '--force-device-scale-factor=1', '--window-size=1920,1080',
  '--remote-debugging-port=' + PORT, '--user-data-dir=' + prof,
  'about:blank',
], { stdio: 'ignore' });

async function cdpTarget() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json`);
      const list = await r.json();
      const page = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('Chrome CDP endpoint never came up');
}

function cdp(ws) {
  let id = 0;
  const pending = new Map();
  const waiters = [];
  ws.addEventListener('message', ev => {
    const msg = JSON.parse(ev.data);
    if (msg.id != null && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) {
      for (let i = waiters.length - 1; i >= 0; i--) {
        if (waiters[i].method === msg.method) { waiters[i].resolve(msg.params); waiters.splice(i, 1); }
      }
    }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const mid = ++id; pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  const once = (method) => new Promise(resolve => waiters.push({ method, resolve }));
  return { send, once };
}

const wsUrl = await cdpTarget();
const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.addEventListener('open', res); ws.addEventListener('error', rej); });
const { send, once } = cdp(ws);
await send('Page.enable');

console.log(`rendering ${N} frames via CDP…`);
const t0 = Date.now();
for (let i = 0; i < N; i++) {
  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url: `file://${SCENE}?f=${i}` });
  await loaded;
  // scene is synchronous DOM build at parse time; one extra tick to settle layout
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1920, height: 1080, scale: 1 }, fromSurface: true, captureBeyondViewport: false });
  writeFileSync(join(frames, 'f_' + String(i).padStart(5, '0') + '.png'), Buffer.from(shot.data, 'base64'));
  if ((i + 1) % 90 === 0) {
    const rate = (i + 1) / ((Date.now() - t0) / 1000);
    console.log(`  ${i + 1}/${N} frames (${rate.toFixed(1)} fps render)`);
  }
}
console.log('frames complete in', ((Date.now() - t0) / 1000).toFixed(1), 's');

ws.close();
chrome.kill('SIGKILL');
await sleep(500);

// 2) frames -> silent H.264, then mux reused audio
const silent = join(work, 'silent.mp4');
execFileSync('ffmpeg', [
  '-y', '-framerate', String(FPS), '-i', join(frames, 'f_%05d.png'),
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
process.exit(0);
