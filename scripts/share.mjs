// Renders the pictures other sites show for a link (1200 × 630) and the home-screen icon, in the site's own design.
//   node scripts/share.mjs        needs Playwright with Chromium (npm i -D playwright, or a global install)
// Output: public/assets/share/<page>.jpg and public/apple-touch-icon.png. Run it again when a title or cover changes.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = createRequire(import.meta.url)('playwright');
const { site, projects } = await import(pathToFileURL(path.join(root, 'src/data.mjs')).href);

const b64 = (file) => fs.readFileSync(path.join(root, file)).toString('base64');
const font = (family, file, style = 'normal', weight = '100 900') =>
  `@font-face{font-family:"${family}";src:url(data:font/woff2;base64,${b64(`public/assets/fonts/${file}`)}) format("woff2");font-weight:${weight};font-style:${style}}`;
const fonts = font('Fraunces', 'fraunces.woff2') + font('Fraunces', 'fraunces-italic.woff2', 'italic') + font('Instrument Sans', 'instrument-sans.woff2', 'normal', '400 700') + font('Geist Mono', 'geist-mono.woff2');
const picture = (src) => `data:image/${path.extname(src).slice(1)};base64,${b64(`public${src}`)}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const base = `${fonts}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:"Instrument Sans",sans-serif;-webkit-font-smoothing:antialiased;position:relative}
.label{font:500 17px/1 "Geist Mono",monospace;letter-spacing:.08em;text-transform:uppercase}
.by{position:absolute;left:64px;bottom:56px;display:flex;align-items:center;gap:14px;font-weight:600;font-size:22px}
.mark{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;font:italic 400 20px/1 Fraunces,serif;letter-spacing:-.04em;padding-right:2px}`;

const home = `<!doctype html><meta charset="utf-8"><style>${base}
body{background:#f3f2ee;color:#131310}
canvas{position:absolute;inset:0;width:100%;height:100%}
.label{position:absolute;left:64px;top:60px;color:#6c6b63}
h1{position:absolute;left:60px;top:168px;font:300 112px/.98 Fraunces,serif;letter-spacing:-.045em;width:800px}
p{position:absolute;left:64px;top:402px;font:300 italic 40px/1.14 Fraunces,serif;letter-spacing:-.025em;color:#55544d;width:640px}
.mark{background:#131310;color:#f3f2ee}
</style><body><canvas data-ink></canvas>
<div class="label">Portfolio · ${esc(site.role)} · ${esc(site.place)}</div>
<h1>${esc(site.name)}</h1>
<p>builds full-stack products for web, mobile and TV.</p>
<div class="by"><span class="mark">HB</span>harshbhogayata.vercel.app</div>
<script>const S={$:(s)=>document.querySelector(s),reduced:{matches:true},root:document.documentElement};${fs.readFileSync(path.join(root, 'src/js/ink.js'), 'utf8')}</script>
</body>`;

const card = (p, n) => `<!doctype html><meta charset="utf-8"><style>${base}
body{background:${p.palette.bg};color:${p.palette.ink}}
.label{position:absolute;left:64px;top:60px;color:${p.palette.soft}}
h1{position:absolute;left:58px;top:${p.name.length > 12 ? 150 : 138}px;font:300 ${p.name.length > 12 ? 92 : 128}px/.92 Fraunces,serif;letter-spacing:-.05em;width:540px}
p{position:absolute;left:64px;top:${p.name.length > 12 ? 348 : 300}px;font-size:27px;line-height:1.34;width:470px;color:${p.palette.soft}}
.pic{position:absolute;left:600px;top:64px;width:760px;height:630px;border-radius:22px 0 0 0;overflow:hidden;box-shadow:0 0 0 1px ${p.palette.line},0 40px 80px -30px rgba(0,0,0,.55)}
.pic img{width:100%;height:100%;object-fit:cover;object-position:${p.slug === 'curator' ? '34% 30%' : p.slug === 'flood' ? '62% 40%' : 'left top'}}
.mark{background:${p.palette.ink};color:${p.palette.bg}}
</style><body>
<div class="label">${p.essay ? `Essay ${String(n).padStart(2, '0')} · Personal site` : `Case study ${String(n).padStart(2, '0')} · ${esc(p.type)}`}</div>
<h1>${esc(p.name)}</h1>
<p>${esc(p.dek)}</p>
<div class="pic"><img src="${picture(p.cover.src)}"></div>
<div class="by"><span class="mark">HB</span>${esc(site.name)}</div>
</body>`;

const icon = `<!doctype html><meta charset="utf-8"><style>*{margin:0}body{width:180px;height:180px;background:#131310;display:grid;place-items:center}</style>
<body><svg width="120" height="120" viewBox="0 0 37 43" fill="none" stroke="#f3f2ee" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v37M19 3v37M3 21h16M19 3h7a9 9 0 0 1 0 18h-7m0 0h7a9.5 9.5 0 0 1 0 19h-7"/></svg></body>`;

const out = path.join(root, 'public/assets/share');
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const shoot = async (html, file, wait = 0) => {
  await tab.setContent(html, { waitUntil: 'load' });
  await tab.evaluate(() => document.fonts.ready);
  if (wait) await tab.waitForTimeout(wait);
  await tab.screenshot({ path: file, type: file.endsWith('.png') ? 'png' : 'jpeg', ...(file.endsWith('.png') ? {} : { quality: 88 }) });
  console.log('Wrote', path.relative(root, file));
};
await shoot(home, path.join(out, 'home.jpg'), 300);
for (const [i, p] of projects.entries()) await shoot(card(p, i + 1), path.join(out, `${p.slug}.jpg`));
await tab.setViewportSize({ width: 180, height: 180 });
await shoot(icon, path.join(root, 'public/apple-touch-icon.png'));
await browser.close();
