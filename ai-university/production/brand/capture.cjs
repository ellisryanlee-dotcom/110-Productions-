// Render brand cards to PNG + record terminal scenes to WEBM (1920x1080).
const { chromium } = require('/tmp/claude-0/-home-user-110-Productions-/3130a70d-0c77-5dac-8ac7-706f6784760f/scratchpad/node_modules/playwright');
const path = require('path');

const BRAND = 'file://' + path.resolve(__dirname, 'brand.html');
const TERM  = 'file://' + path.resolve(__dirname, 'terminal.html');
const OUT   = path.resolve(__dirname, '../episodes/ep-001/assets');
const CARDS = ['title','closed_open','gap_chart','gate_card','logs_card','triage','end_slate'];
const SCENES = ['ollama','ctx','settings'];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium', headless: true,
    args: ['--no-sandbox', '--force-device-scale-factor=1'],
  });
  // stills
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const c of CARDS) {
    await page.goto(`${BRAND}#${c}`);
    await page.reload();
    await page.waitForTimeout(350);
    await page.screenshot({ path: `${OUT}/brand_${c}.png` });
    console.log('png', c);
  }
  await page.close();
  // terminal recordings
  for (const s of SCENES) {
    const ctx = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      recordVideo: { dir: OUT, size: { width: 1920, height: 1080 } },
    });
    const p = await ctx.newPage();
    await p.goto(`${TERM}#${s}`);
    await p.reload();
    await p.waitForFunction(() => document.title === 'DONE', { timeout: 90000 });
    const v = p.video();
    await ctx.close();
    const f = await v.path();
    require('fs').renameSync(f, `${OUT}/terminal_${s}.webm`);
    console.log('webm', s);
  }
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
