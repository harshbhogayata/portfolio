// Render the home page's share image (1200×630, what LinkedIn, WhatsApp and X show for the link):
// the lake at night with the name, and none of the links.
// Run after python assemble-site.py:   node share/build_home_share.cjs
// Uses the Chromium that tools/capture already depends on; set CHROMIUM to point at another one.
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
let playwright;
try { playwright = require(path.join(__dirname, '../tools/capture/node_modules/playwright-core')); } catch (e) { playwright = require('playwright'); }

const root = path.join(__dirname, '..');
const local = process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'ms-playwright/chromium-1228/chrome-win64/chrome.exe');
const executablePath = [process.env.CHROMIUM, local].find(p => p && fs.existsSync(p));

(async () => {
  const browser = await playwright.chromium.launch({ ...(executablePath ? { executablePath } : {}), args: ['--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', ...(process.env.CHROMIUM_ARGS || '').split(' ').filter(Boolean)] });   // the scene needs WebGL, with or without a graphics card
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await tab.goto(pathToFileURL(path.join(root, 'index.html')).href);
  await tab.waitForFunction(() => document.documentElement.classList.contains('scene-on'), null, { timeout: 90000 });
  await tab.addStyleTag({ content: '.links,.place,.rail,.shade,.card{display:none!important}.ident{left:60px;top:54px}.name{font-size:96px}.role{font-size:14px;margin-top:20px}' });
  await tab.waitForTimeout(3000);
  await tab.screenshot({ path: path.join(root, 'assets/share/home.jpg'), type: 'jpeg', quality: 88 });
  await browser.close();
  console.log('Built assets/share/home.jpg');
})();
