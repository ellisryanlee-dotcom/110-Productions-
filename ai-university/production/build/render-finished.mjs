#!/usr/bin/env node
// Deterministic, $0 FINISHED-CUT builder for EP1 "Crash Test #1".
// Layers narration (VO) + a subtle music bed onto the existing silent animatic,
// using ONLY free/built-in tools: macOS `say` (TTS) and ffmpeg (mux + synth bed).
// No paid APIs, no credits, no external assets, no network.
//
// Ryan directive (OPE-175): drop all paid tools — no VOICE/b-roll/VIDEO-GEN spend.
// Finish EP1 with free/owned tools only, zero cost, no spend-approval gate.
//
// Sources of truth:
//   - Video base:  production/animatic/crash-test-001-animatic.mp4 (1020.000s, silent)
//   - VO text + per-shot windows: `- **VO:**` and `- **Timecode:**` in each `### S0NN`
//     block of production/screenplay/crash-test-001-screenplay.md
//
// Pipeline per shot: say -> aiff -> (atempo-fit to its window if it overruns) ->
// place at its start offset. All 52 VO clips are mixed into one narration track,
// a gentle root+fifth+octave ambient pad is synthed for the full runtime, and both
// are muxed under the video. Output is capped to the video length.
//
// Usage:  node production/build/render-finished.mjs
// Re-run after any screenplay VO edit or animatic re-render to stay in sync.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const SCREENPLAY = join(ROOT, 'production/screenplay/crash-test-001-screenplay.md');
const VIDEO = join(ROOT, 'production/animatic/crash-test-001-animatic.mp4');
const OUT = join(ROOT, 'production/animatic/crash-test-001-finished.mp4');

// Locked BRANDING voice call: "neutral synthetic AI, mid-tone US male".
// Best free/built-in match among installed macOS voices is the modern compact
// US male "Reed"; a synthetic TTS timbre is also on-theme for Crash Test Agents.
const VOICE = 'Reed (English (US))';
const SAY_RATE = 178;         // words/min — measured, natural for narration
const AR = 44100;             // audio sample rate
const MUSIC_GAIN = 0.05;      // ambient bed level (sits well under VO)
const VO_GAIN = 1.0;

// --- parse screenplay: id -> {start, end, vo} -----------------------------
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
  return shots.filter(s => s.start != null && s.end != null);
}

const shots = parseShots();
const withVo = shots.filter(s => s.vo);
const total = Math.max(...shots.map(s => s.end));
console.log(`shots: ${shots.length}, with VO: ${withVo.length}, runtime: ${total}s`);
if (!existsSync(VIDEO)) { console.error('missing base video:', VIDEO); process.exit(1); }

const probeDur = (f) => {
  const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration',
    '-of', 'default=noprint_wrappers=1:nokey=1', f], { encoding: 'utf8' });
  return parseFloat(out.trim());
};

const work = mkdtempSync(join(tmpdir(), 'ep1-finished-'));

// --- 1) generate + window-fit each VO clip --------------------------------
const clips = [];
for (const s of withVo) {
  const aiff = join(work, `${s.id}.wav`);
  execFileSync('say', ['-v', VOICE, '-r', String(SAY_RATE), '-o', aiff,
    '--file-format=WAVE', '--data-format=LEI16@44100', s.vo]);
  let dur = probeDur(aiff);
  const win = s.end - s.start;
  // Leave a hair of headroom so VO ends inside its shot; speed up if it overruns.
  const budget = win - 0.15;
  let src = aiff;
  if (dur > budget && budget > 0) {
    const tempo = Math.min(2.0, dur / budget);
    const wav = join(work, `${s.id}-fit.wav`);
    execFileSync('ffmpeg', ['-y', '-i', aiff, '-filter:a', `atempo=${tempo.toFixed(4)}`,
      '-ar', String(AR), wav], { stdio: ['ignore', 'ignore', 'ignore'] });
    src = wav; dur = probeDur(wav);
  }
  clips.push({ id: s.id, start: s.start, src, dur, win, fit: src !== aiff });
}
const fitted = clips.filter(c => c.fit).length;
console.log(`generated ${clips.length} VO clips (${fitted} time-compressed to fit window)`);

// --- 2) mix all VO clips into one narration track at their offsets ---------
const voTrack = join(work, 'vo.wav');
{
  const inputs = [];
  const filters = [];
  clips.forEach((c, i) => {
    inputs.push('-i', c.src);
    const ms = Math.round(c.start * 1000);
    filters.push(`[${i}:a]adelay=${ms}|${ms},apad[a${i}]`);
  });
  const mixIns = clips.map((_, i) => `[a${i}]`).join('');
  const fc = `${filters.join(';')};${mixIns}amix=inputs=${clips.length}:normalize=0:duration=longest,` +
    `atrim=0:${total},aresample=${AR}[vo]`;
  execFileSync('ffmpeg', ['-y', ...inputs, '-filter_complex', fc, '-map', '[vo]',
    '-ar', String(AR), '-ac', '1', voTrack], { stdio: ['ignore', 'ignore', 'inherit'] });
}
console.log('mixed narration track ->', probeDur(voTrack).toFixed(2), 's');

// --- 3) synth a subtle ambient music bed (root A2 + fifth E3 + octave A3) --
const musicTrack = join(work, 'music.wav');
{
  const fc =
    `sine=frequency=110:sample_rate=${AR}[a];` +   // A2
    `sine=frequency=164.81:sample_rate=${AR}[b];` + // E3
    `sine=frequency=220:sample_rate=${AR}[c];` +    // A3
    `[a][b][c]amix=inputs=3:normalize=0[chord];` +
    `[chord]tremolo=f=0.12:d=0.6,lowpass=f=900,highpass=f=70,` +
    `volume=${MUSIC_GAIN},afade=t=in:st=0:d=3,afade=t=out:st=${total - 4}:d=4[m]`;
  execFileSync('ffmpeg', ['-y', '-f', 'lavfi', '-t', String(total), '-i',
    `sine=frequency=110:sample_rate=${AR}`, '-filter_complex', fc, '-map', '[m]',
    '-t', String(total), '-ar', String(AR), '-ac', '1', musicTrack],
    { stdio: ['ignore', 'ignore', 'inherit'] });
}
console.log('synthed music bed ->', probeDur(musicTrack).toFixed(2), 's');

// --- 4) mux video + VO + music into the finished cut ----------------------
execFileSync('ffmpeg', ['-y',
  '-i', VIDEO, '-i', voTrack, '-i', musicTrack,
  '-filter_complex',
  `[1:a]volume=${VO_GAIN}[vo];[2:a]volume=1.0[mus];[vo][mus]amix=inputs=2:normalize=0,` +
  `dynaudnorm=f=250:g=7,alimiter=limit=0.95[aout]`,
  '-map', '0:v', '-map', '[aout]',
  '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k',
  '-t', String(total), '-movflags', '+faststart', OUT],
  { stdio: ['ignore', 'ignore', 'inherit'] });

console.log('wrote', OUT);
