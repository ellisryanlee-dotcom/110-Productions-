#!/usr/bin/env node
// $0 assembly of the "Knowledge Library" 30s cut for AI University from EXISTING
// Higgsfield generations (Ryan: "look at assets in higgs to finish task... a bunch
// of stuff was made then stopped, piece it together"). NO new generation, no credit
// spend — these six clips (made 2026-08-09 02:47–02:51) were already rendered on the
// connected Higgsfield workspace; this script only downloads + assembles them.
//
// Narrative arc (6 x ~5s = ~30s): establish the library of glowing knowledge
// cartridges -> she selects one -> hero beat at the desk -> insert into the console
// -> the knowledge lattice dissolves (the fragility beat) -> she powers down, exits.
// Reuses the existing EP1 30s VO+music bed from crash-test-001-short-30s.mp4 verbatim.
//
// Usage:  node production/build/render-higgs-library-30s.mjs
// Output: production/animatic/ai-university-higgs-library-30s.mp4

import { execFileSync } from 'node:child_process';
import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const OUT = join(ROOT, 'production/animatic/ai-university-higgs-library-30s.mp4');
const AUDIO_SRC = join(ROOT, 'production/animatic/crash-test-001-short-30s.mp4');
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_37fUD9dU1JkMPzD8ShF8ur2RLka';

// ordered narrative sequence of already-rendered Higgsfield generations
const CLIPS = [
  'hf_20260809_024712_da9baec1-ce93-42cd-b995-e3c8bb15ba2e.mp4', // 1 library aisle establish
  'hf_20260809_024712_c0013243-b856-4e53-b67c-762248e43bad.mp4', // 2 pull cartridge from shelf
  'hf_20260809_025114_31065c35-e0e0-44e3-b7a2-0bdc4926fc7e.mp4', // 3 hero at the desk (seedance_2_5)
  'hf_20260809_024712_a4839c70-b594-4242-910a-61eba2d7a39c.mp4', // 4 insert into console slot
  'hf_20260809_024712_a6ba6bff-3637-49f2-89c7-63b11e365f1b.mp4', // 5 lattice dissolves (fragility)
  'hf_20260809_024724_de93ee7c-9553-4893-a723-ef8a6144e096.mp4', // 6 power down, exit
];

const work = mkdtempSync(join(tmpdir(), 'higgs-lib-'));
const locals = CLIPS.map((fn, i) => {
  const p = join(work, `c${i}.mp4`);
  execFileSync('curl', ['-sfL', '-o', p, `${CDN}/${fn}`]);
  if (!existsSync(p)) throw new Error(`download failed: ${fn}`);
  return p;
});

// Normalize each clip to 1920x1080 / 30fps (letterbox-safe), concat video, then lay
// the existing 30s VO+music bed under it. -shortest ends on the audio (~29.98s).
const args = ['-y'];
for (const p of locals) args.push('-i', p);
args.push('-i', AUDIO_SRC);
const n = locals.length;
let fc = '';
for (let i = 0; i < n; i++) {
  fc += `[${i}:v]scale=1920:1080:force_original_aspect_ratio=decrease,`
      + `pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1,fps=30[v${i}];`;
}
for (let i = 0; i < n; i++) fc += `[v${i}]`;
fc += `concat=n=${n}:v=1:a=0[vout]`;
args.push('-filter_complex', fc,
  '-map', '[vout]', '-map', `${n}:a`,
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', OUT);
execFileSync('ffmpeg', args, { stdio: ['ignore', 'ignore', 'inherit'] });
console.log('wrote', OUT);
