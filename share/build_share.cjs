// Render the 1200×630 share images (what LinkedIn, WhatsApp and X show for a link) in the site's own design:
// the title on paper at the left, the page's picture whole on the right, the wire with its lime node underneath.
// Run: node share/build_share.cjs   (uses the Chromium that tools/capture already depends on)
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '../tools/capture/node_modules/playwright-core'));

const root = path.join(__dirname, '..');
const CARDS = [
  { slug: 'home', label: 'Portfolio', title: 'Harsh Bhogayata', dek: 'Software engineer building full-stack products across web, mobile, TV and backend.', img: 'assets/work/portfolio-v3.webp', bg: '#eef1f8' },
  { slug: 'curator', label: 'Case study 01', title: 'Curator', dek: 'A news app that keeps every source attached to the story.', img: 'assets/work/curator-phones.webp', bg: '#ece6da' },
  { slug: 'morrow', label: 'Case study 02', title: 'Morrow', dek: 'Apple TV’s calm on an ordinary television, with one Play button for every copy.', img: 'assets/work/morrow-home.webp', bg: '#0b0d12' },
  { slug: 'bokuka', label: 'Case study 03', title: 'Bokuka', dek: 'Ink, blossoms and live music, generated in the browser as you watch.', img: 'assets/work/bokuka-home-1920x1200.webp', bg: '#efe6d6' },
  { slug: 'flood', label: 'Case study 04', title: 'Flood Archive', dek: 'A place-based record of a city’s flood history that works without a signal.', img: 'assets/flood-live-social-preview.webp', bg: '#121c22' },
  { slug: 'evolution', label: 'Case study 05', title: 'Portfolio Evolution', dek: 'Three portfolios, three ways of being understood.', img: 'assets/work/portfolio-evolution.webp', bg: '#e9eef8' },
];

const page = (card, font) => `<!doctype html><html><head><meta charset="utf-8"><style>${font}
  *{box-sizing:border-box}html,body{margin:0}
  body{width:1200px;height:630px;display:grid;grid-template-columns:430px 1fr;background:#f7f8fa;color:#16181d;font-family:Geist,Arial,sans-serif;-webkit-font-smoothing:antialiased}
  .copy{display:flex;flex-direction:column;padding:54px 40px 48px 60px;border-right:1px solid #cfd6e1}
  .mark{display:flex;align-items:center;gap:12px;color:#586783;font:500 15px/1 ui-monospace,Consolas,monospace;letter-spacing:.06em;text-transform:uppercase}
  .mark svg{width:24px;height:28px;fill:none;stroke:#1746f5;stroke-width:3}
  h1{margin:auto 0 0;font-size:${card.title.length > 14 ? 58 : 70}px;font-weight:680;letter-spacing:-.062em;line-height:.92}
  h1 span{color:#1746f5}
  p{margin:20px 0 0;color:#3d4452;font-size:22px;line-height:1.4;letter-spacing:-.02em}
  .wire{position:relative;height:1.5px;margin-top:34px;background:#5f76ff}
  .wire i{position:absolute;top:-7px;right:0;width:15px;height:15px;border-radius:50%;background:#b7e900;box-shadow:0 0 0 3px #f7f8fa,0 0 0 4.5px #5f76ff}
  .pic{display:grid;place-items:center;padding:34px;background:${card.bg};overflow:hidden}
  .pic img{max-width:100%;max-height:100%;object-fit:contain;display:block}
</style></head><body>
  <div class="copy">
    <div class="mark"><svg viewBox="0 0 37 43"><path d="M3 3v37M19 3v37M3 21h16M19 3h7a9 9 0 0 1 0 18h-7m0 0h7a9.5 9.5 0 0 1 0 19h-7"/></svg>${card.label}</div>
    <h1>${card.title}<span>.</span></h1>
    <p>${card.dek}</p>
    <div class="wire"><i></i></div>
  </div>
  <div class="pic"><img src="data:image/${card.img.split('.').pop()};base64,${fs.readFileSync(path.join(root, card.img)).toString('base64')}"></div>
</body></html>`;

(async () => {
  const font = fs.readFileSync(path.join(root, 'portfolio-font.css'), 'utf8');
  const outDir = path.join(root, 'assets/share');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: path.join(process.env.LOCALAPPDATA, 'ms-playwright/chromium-1228/chrome-win64/chrome.exe') });
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const card of CARDS) {
    await tab.setContent(page(card, font), { waitUntil: 'load' });
    await tab.evaluate(() => document.fonts.ready);
    await tab.screenshot({ path: path.join(outDir, `${card.slug}.jpg`), type: 'jpeg', quality: 86 });
    console.log('Built assets/share/' + card.slug + '.jpg');
  }
  await browser.close();
})();
