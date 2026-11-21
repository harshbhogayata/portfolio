// Builds the site into dist/. No dependencies: Node 20+ only.
//
//   node build.mjs                 build once
//   node build.mjs --serve         build, serve on http://localhost:4173 and rebuild when src/ or public/ change
//   node build.mjs --base=relative build with relative links and .html addresses (opens from disk, works on any host)
//
// Pages come from src/templates.mjs and src/data.mjs; case-study prose lives in src/articles/.
// Everything in public/ is copied as it is.
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const serve = args.includes('--serve');
const relative = args.includes('--base=relative');
const out = path.join(root, 'dist');
const read = (...p) => fs.readFileSync(path.join(root, ...p), 'utf8');

const CSS = ['tokens', 'base', 'nav', 'home', 'rooms', 'minis', 'sections', 'article', 'palette'];
const JS = ['core', 'ink', 'rooms', 'minis', 'article', 'palette'];

/** Width and height of a WebP, PNG or JPEG, read from its header, so every <img> can reserve its space. */
function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const kind = b.toString('ascii', 12, 16);
    if (kind === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (kind === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (kind === 'VP8L') { const n = b.readUInt32LE(21); return [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1]; }
  }
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.readUInt16BE(0) === 0xffd8) {
    for (let i = 2; i < b.length;) {
      const marker = b.readUInt16BE(i), len = b.readUInt16BE(i + 2);
      if (marker >= 0xffc0 && marker <= 0xffcf && ![0xffc4, 0xffc8, 0xffcc].includes(marker)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + len;
    }
  }
  return null;
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, entry.name), b = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(a, b); else fs.copyFileSync(a, b);
  }
}

async function build() {
  const started = Date.now();
  // Fresh copies of the modules on every rebuild.
  const bust = `?t=${Date.now()}`;
  const data = await import(pathToFileURL(path.join(root, 'src/data.mjs')).href + bust);
  const templates = await import(pathToFileURL(path.join(root, 'src/templates.mjs')).href + bust);

  fs.rmSync(out, { recursive: true, force: true });
  copyDir(path.join(root, 'public'), out);

  const css = CSS.map((n) => read('src/css', `${n}.css`)).join('\n');
  const js = JS.map((n) => `{\n${read('src/js', `${n}.js`)}\n}`).join('\n');
  const hash = (text) => createHash('sha1').update(text).digest('hex').slice(0, 8);
  fs.writeFileSync(path.join(out, 'assets/site.css'), css);
  fs.writeFileSync(path.join(out, 'assets/site.js'), `(() => {\n'use strict';\nconst S = {};\n${js}\n})();\n`);

  const sizes = new Map();
  const size = (src) => {
    const key = src.replace(/^\//, '');
    if (!sizes.has(key)) {
      const file = path.join(root, 'public', key);
      sizes.set(key, fs.existsSync(file) ? imageSize(file) : null);
    }
    return sizes.get(key);
  };

  /** Everything a template needs to write an address that works for this page and this kind of build. */
  const context = (pagePath) => {
    const depth = pagePath.split('/').length - 1;
    const up = relative ? (depth ? '../'.repeat(depth) : './') : '/';
    return {
      path: pagePath,
      relative,
      versions: { css: hash(css), js: hash(js) },
      asset: (p) => up + p.replace(/^\//, ''),
      href: (p) => {
        const [route, anchor = ''] = p.split('#');
        const tail = anchor ? `#${anchor}` : '';
        if (!relative) return (route || '/') + tail;
        const clean = route.replace(/^\//, '');
        return up + (clean ? `${clean}.html` : 'index.html') + tail;
      },
      size,
      article: (slug) => read('src/articles', `${slug}.html`),
    };
  };

  const pages = templates.pages(data);
  for (const page of pages) {
    const file = path.join(out, page.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page.render(context(page.path)));
  }

  const today = new Date().toISOString().slice(0, 10);
  const listed = pages.filter((p) => p.sitemap);
  fs.writeFileSync(path.join(out, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${listed
      .map((p) => `  <url><loc>${data.site.url}${p.url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);

  console.log(`Built ${pages.length} pages into dist/ in ${Date.now() - started} ms (css ${(css.length / 1024).toFixed(1)} kB, js ${(js.length / 1024).toFixed(1)} kB)`);
}

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

function server(port = 4173) {
  http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    // The same clean addresses the host serves: /work/curator is work/curator.html, / is index.html.
    const candidates = [url, `${url}.html`, path.join(url, 'index.html')].map((u) => path.join(out, u));
    const file = candidates.find((f) => f.startsWith(out) && fs.existsSync(f) && fs.statSync(f).isFile());
    if (!file) {
      res.writeHead(404, { 'content-type': TYPES['.html'] });
      return res.end(fs.existsSync(path.join(out, '404.html')) ? fs.readFileSync(path.join(out, '404.html')) : 'Not found');
    }
    const stat = fs.statSync(file);
    const type = TYPES[path.extname(file)] || 'application/octet-stream';
    const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
    if (range) {
      // Video needs byte ranges to seek.
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : stat.size - 1;
      res.writeHead(206, { 'content-type': type, 'content-range': `bytes ${start}-${end}/${stat.size}`, 'accept-ranges': 'bytes', 'content-length': end - start + 1 });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { 'content-type': type, 'content-length': stat.size, 'accept-ranges': 'bytes', 'cache-control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  }).listen(port, () => console.log(`Serving dist/ on http://localhost:${port}`));
}

await build();
if (serve) {
  server(Number(process.env.PORT) || 4173);
  let timer;
  const again = () => { clearTimeout(timer); timer = setTimeout(() => build().catch((e) => console.error(e)), 120); };
  for (const dir of ['src', 'public']) fs.watch(path.join(root, dir), { recursive: true }, again);
}
