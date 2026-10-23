// Render resume.html to a one-page A4 PDF with the portfolio's own Geist font inlined.
// Run: node resume/build_resume.cjs   (uses the Chromium that tools/capture already depends on)
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '../tools/capture/node_modules/playwright-core'));

(async () => {
  const font = fs.readFileSync(path.join(__dirname, '../portfolio-font.css'), 'utf8');
  const html = fs.readFileSync(path.join(__dirname, 'resume.html'), 'utf8').replace('<!-- FONT -->', `<style>${font}</style>`);
  const browser = await chromium.launch({ executablePath: path.join(process.env.LOCALAPPDATA, 'ms-playwright/chromium-1228/chrome-win64/chrome.exe') });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => document.body.scrollHeight);
  const out = path.join(__dirname, 'Harsh-Bhogayata-Resume.pdf');
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.screenshot({ path: path.join(__dirname, 'resume-preview.png'), fullPage: true });
  console.log(`Built ${out} (content ${height}px of 1123px per A4 page)`);
  await browser.close();
})();
