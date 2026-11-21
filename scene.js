/* The scene: Vadodara's skyline seen from across the water, drawn as characters on one grid,
   under the sky over the city at this minute. Plain 2D canvas, no libraries.
   About ten frames a second, and only the cells that changed are redrawn. */
(() => {
  'use strict';
  const DATA = window.SCENE;
  const cv = document.getElementById('scene-canvas'), sv = document.getElementById('scene-shapes');
  const root = document.documentElement;
  if (!DATA || !cv || !sv) return;
  const g = cv.getContext('2d'), sg = sv.getContext('2d');
  const still = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- where and when ---------- */
  const RAD = Math.PI / 180, LAT = 22.3072, LON = 73.1812, IST = 330;   // Vadodara; IST is UTC+5:30
  const AZ0 = 205, AZ1 = 335, ALT_TOP = 52;                             // the view looks west: sunsets fall behind the city
  let scrub = null;                                                     // minutes of the IST day, or null for the live clock
  const asked = new URLSearchParams(location.search).get('t');
  if (asked && /^\d{1,2}:\d{2}$/.test(asked)) scrub = (+asked.split(':')[0] * 60 + +asked.split(':')[1]) % 1440;

  function moment() {
    const real = new Date();
    if (scrub === null) return real;
    const shifted = new Date(real.getTime() + IST * 60000);              // read the IST calendar day off the UTC fields
    return new Date(Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate(), 0, scrub) - IST * 60000);
  }
  const days = d => d.getTime() / 86400000 + 2440587.5 - 2451545;      // days since J2000
  function horizon(n, ra, dec) {                                        // right ascension and declination to altitude and azimuth here
    const lst = (((18.697374558 + 24.06570982441908 * n) % 24) * 15 + LON) * RAD, H = lst - ra, phi = LAT * RAD;
    const alt = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
    const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi)) + Math.PI;
    return { alt: alt / RAD, az: ((az / RAD) % 360 + 360) % 360 };
  }
  function sunLong(n) { const L = 280.460 + 0.9856474 * n, m = (357.528 + 0.9856003 * n) * RAD; return L + 1.915 * Math.sin(m) + 0.020 * Math.sin(2 * m); }
  function sunAt(d) {
    const n = days(d), lam = sunLong(n) * RAD, eps = (23.439 - 0.0000004 * n) * RAD;
    return horizon(n, Math.atan2(Math.cos(eps) * Math.sin(lam), Math.cos(lam)), Math.asin(Math.sin(eps) * Math.sin(lam)));
  }
  function moonAt(d) {                                                  // low-precision lunar position, good to about a degree
    const n = days(d), T = n / 36525, s = x => Math.sin(x * RAD);
    const lam = 218.32 + 481267.881 * T + 6.29 * s(135.0 + 477198.87 * T) - 1.27 * s(259.3 - 413335.36 * T) + 0.66 * s(235.7 + 890534.22 * T)
      + 0.21 * s(269.9 + 954397.74 * T) - 0.19 * s(357.5 + 35999.05 * T) - 0.11 * s(186.5 + 966404.03 * T);
    const bet = 5.13 * s(93.3 + 483202.02 * T) + 0.28 * s(228.2 + 960400.89 * T) - 0.28 * s(318.3 + 6003.15 * T) - 0.17 * s(217.6 - 407332.21 * T);
    const cb = Math.cos(bet * RAD), sb = s(bet), cl = Math.cos(lam * RAD), sl = s(lam);
    const pos = horizon(n, Math.atan2(0.9175 * cb * sl - 0.3978 * sb, cb * cl), Math.asin(0.3978 * cb * sl + 0.9175 * sb));
    pos.phase = (((lam - sunLong(n)) % 360) + 360) % 360 / 360;       // 0 new, 0.5 full
    return pos;
  }
  function riseSet(d) {                                                 // today's sunrise and sunset in IST minutes
    const shifted = new Date(d.getTime() + IST * 60000);
    const start = Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate()) - IST * 60000;
    let rise = null, set = null, before = sunAt(new Date(start)).alt;
    for (let m = 1; m <= 1440; m++) {
      const alt = sunAt(new Date(start + m * 60000)).alt;
      if (before < -0.833 && alt >= -0.833) rise = m;
      if (before >= -0.833 && alt < -0.833) set = m;
      before = alt;
    }
    return { rise, set };
  }

  /* ---------- colour through the day ---------- */
  const rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const css = c => 'rgb(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ')';
  const light = c => { const f = v => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
  const ratio = (a, b) => { const x = light(a), y = light(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  // Keyed by the sun's altitude in degrees. Night tones are the ones already used for Morrow and Flood Archive; day is the v3 paper and ink.
  const KEYS = [
    { a: -18, top: '#0b0d12', mid: '#121a2c', low: '#2a3855', w0: '#1b2538', w1: '#0b0d12', ink: '#7f8aa3', far: '#59647c', shape: '#06080c', back: '#101520', cloud: '#232a3a', gold: '#f2c55c', red: '#b9735a', lit: '#ffc96b', flood: '#e3b262', night: 1, stars: 1, lamps: .5, floods: 1 },
    { a: -9, top: '#0e1330', mid: '#1c2350', low: '#4d4070', w0: '#2f2e54', w1: '#0e1330', ink: '#7c84a8', far: '#5c6189', shape: '#0a0c18', back: '#161a33', cloud: '#30365f', gold: '#f2c55c', red: '#b9735a', lit: '#ffc96b', flood: '#e3b262', night: 1, stars: .7, lamps: .55, floods: 1 },
    { a: -4, top: '#1b2350', mid: '#6a4f7e', low: '#e0805c', w0: '#8f5c70', w1: '#1b2350', ink: '#75709a', far: '#57507a', shape: '#15152a', back: '#2b2648', cloud: '#a8607a', gold: '#e9b550', red: '#a8644e', lit: '#ffd27a', flood: '#dba95c', night: 1, stars: .12, lamps: .3, floods: .55 },
    { a: 0, top: '#34407a', mid: '#d98a8a', low: '#f7a85c', w0: '#e59a70', w1: '#34407a', ink: '#6d5674', far: '#7a5d74', shape: '#2a2038', back: '#4d3852', cloud: '#f0b08a', gold: '#d9a040', red: '#9c5040', lit: '#ffd98a', flood: '#d9a55a', night: .9, stars: 0, lamps: .08, floods: 0 },
    { a: 2.5, top: '#56639c', mid: '#eab49a', low: '#f9bd80', w0: '#eeb590', w1: '#6a76aa', ink: '#75607c', far: '#8d6f78', shape: '#40304a', back: '#7a5f74', cloud: '#f3bd9a', gold: '#c08a28', red: '#9c4c3a', lit: '#ffd98a', flood: '#d9a55a', night: .45, stars: 0, lamps: 0, floods: 0 },
    { a: 6, top: '#cfd9f0', mid: '#f3dcc6', low: '#f8c9a0', w0: '#f1ceb2', w1: '#cfd5ea', ink: '#3b2a30', far: '#a88a78', shape: '#8f737a', back: '#c4a79e', cloud: '#e9b594', gold: '#a06a10', red: '#9c4a34', lit: '#ffd98a', flood: '#d9a55a', night: 0, stars: 0, lamps: 0, floods: 0 },
    { a: 14, top: '#e9eef8', mid: '#f1f4f9', low: '#f7f8fa', w0: '#eef1f7', w1: '#dfe6f3', ink: '#2c3140', far: '#9aa1ad', shape: '#b9c2d4', back: '#d6dce8', cloud: '#c3cbdb', gold: '#9a6d14', red: '#9c4a34', lit: '#ffd98a', flood: '#d9a55a', night: 0, stars: 0, lamps: 0, floods: 0 },
  ].map(k => { for (const n of Object.keys(k)) if (typeof k[n] === 'string') k[n] = rgb(k[n]); return k; });
  const INK = rgb('#16181d'), CREAM = rgb('#faf3e0');
  // Push a background away from the text on it, as far as it takes for the text to read. Around sunrise and sunset the sky passes
  // through tones that suit neither dark nor light words; for those minutes the top of the sky is held a little darker or paler than it would be.
  const safe = (back, text, need) => { const to = light(text) > 0.5 ? [0, 0, 0] : [255, 255, 255]; let c = back; for (let k = 0.05; k <= 1.001 && ratio(text, c) < need; k += 0.05) c = mix(back, to, k); return c; };
  const soften = (text, back, need) => { let k = 0.36, c = mix(text, back, k); while (k > 0 && ratio(c, back) < need) { k -= 0.04; c = mix(text, back, Math.max(0, k)); } return c; };

  function paletteFor(alt) {
    let i = 0; while (i < KEYS.length - 2 && alt > KEYS[i + 1].a) i++;
    const a = KEYS[i], b = KEYS[i + 1], t = Math.min(1, Math.max(0, (alt - a.a) / (b.a - a.a))), P = {};
    for (const n of Object.keys(a)) P[n] = Array.isArray(a[n]) ? mix(a[n], b[n], t) : a[n] + (b[n] - a[n]) * t;
    P.head = mix(P.top, P.mid, 0.2);                                    // the sky behind the links, at its furthest from the top colour
    P.dark = light(P.head) < 0.19;                                      // which way the page's text has to go
    P.ui = P.dark ? CREAM : INK;
    P.top = safe(P.top, P.ui, 5.6); P.head = safe(P.head, P.ui, 5.6);
    P.contrast = Math.min(ratio(P.ui, P.top), ratio(P.ui, P.head));
    P.wui = light(P.w1) < 0.19 ? CREAM : INK; P.shade = safe(P.w1, P.wui, 7.5);
    return P;
  }

  /* ---------- small tools ---------- */
  const RAMP = ' .:-=+*#%@';
  const hash = (x, y, s) => { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
  function noise(x, y) {                                                // smooth value noise
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi, 7), b = hash(xi + 1, yi, 7), c = hash(xi, yi + 1, 7), d = hash(xi + 1, yi + 1, 7);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }

  /* ---------- the grid ---------- */
  // Two layers. Underneath, the true outlines of the city as flat shapes. On top, the characters: its texture, its lights, the sky and the water.
  const INKC = 1, FAR = 2, CLOUD = 3, GOLD = 4, RED = 5, LIT = 6, FLOOD = 7, STAR = 8, RINK = 9, SUN = 10, MOON = 11, RIPPLE = 12, RLIT = 13, RFLOOD = 14, RGOLD = 15;
  let cols = 0, rows = 0, cw = 6, ch = 12, dpr = 1, px = 6, H = 0;     // H: the row of the waterline; px: a cell's width in device pixels
  let C, F, pC, pF, free, own, quiet;                                  // this frame, the last frame, open cells, who stands in a cell, cells kept clear for words
  let places = [], city = [], P = null, fg = [], all = true, lift = 0, liftTo = 0;
  let sun = null, moon = null, info = {}, groups = [];

  function measure() {
    const w = innerWidth, h = innerHeight;
    dpr = Math.min(2, devicePixelRatio || 1);
    const want = w >= 1100 ? w / 240 : w >= 700 ? w / 170 : Math.max(4.4, w / 84);
    px = Math.max(2, Math.round(want * dpr));                           // whole device pixels, so cells never bleed into each other
    cw = px / dpr; ch = 2 * px / dpr;
    cols = Math.ceil(w / cw); rows = Math.ceil(h / ch);
    for (const c of [cv, sv]) { c.width = cols * px; c.height = rows * 2 * px; c.style.width = cols * cw + 'px'; c.style.height = rows * ch + 'px'; }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.font = '500 ' + (cw / 0.6) + 'px "Geist Mono", ui-monospace, Consolas, monospace'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const n = cols * rows;
    C = new Uint8Array(n); F = new Uint8Array(n); pC = new Uint8Array(n); pF = new Uint8Array(n); free = new Uint8Array(n); own = new Uint8Array(n); quiet = new Uint8Array(n);
    H = Math.round(rows * (w < 700 ? 0.60 : 0.70));
    root.style.setProperty('--cell-w', cw + 'px'); root.style.setProperty('--cell-h', ch + 'px'); root.style.setProperty('--horizon', H * ch + 'px');
    for (const el of document.querySelectorAll('[data-quiet]')) {      // keep cloud and stars from running through the small print
      const r = el.getBoundingClientRect(); if (!r.width) continue;
      for (let y = Math.max(0, Math.floor(r.top / ch) - 1); y <= Math.min(rows - 1, Math.floor(r.bottom / ch)); y++)
        for (let x = Math.max(0, Math.floor(r.left / cw) - 2); x <= Math.min(cols - 1, Math.floor(r.right / cw) + 1); x++) quiet[y * cols + x] = 1;
    }
    compose(); all = true;
  }

  /* ---------- what stands where ---------- */
  function compose() {
    const put = (slug, size, x, base) => { const d = DATA.places[slug], s = d && d.sizes[size]; if (s) places.push({ slug, d, s, x, base, top: base - s.mask.length, w: Math.max(...s.mask.map(l => l.length)), h: s.mask.length }); };
    places = [];
    if (cols >= 200) {
      put('kirti-mandir', 'compact', Math.round(cols * 0.05), H); put('mandvi', 'compact', Math.round(cols * 0.225), H);
      put('laxmi-vilas', 'compact', Math.round(cols * 0.40), H); put('sursagar', 'regular', Math.round(cols * 0.805), H + 5);
    } else if (cols >= 120) {
      put('kirti-mandir', 'compact', 3, H); put('laxmi-vilas', 'compact', Math.round(cols * 0.27), H); put('sursagar', 'regular', cols - 43, H + 5);
    } else {
      put('laxmi-vilas', 'compact', Math.round(cols * 0.5) - 44, H); put('sursagar', 'compact', cols - 25, H + 3);
    }
    // the ordinary city between and behind them: low blocks, now and then a taller one, a tank on a roof, a mast
    city = []; let x = -3, i = 0; const tall = cols < 120 ? 5 : 8;
    while (x < cols + 3) {
      const r = hash(i, 3, 11), w = 2 + Math.floor(hash(i, 5, 11) * 6), h = 1 + Math.floor(r * r * r * tall + hash(i, 4, 11) * 2.2);
      city.push({ x, w, h, seed: i, extra: hash(i, 9, 11) });
      x += w + (hash(i, 7, 11) < 0.22 ? 1 : 0); i++;
    }
  }

  /* ---------- the shapes underneath ---------- */
  const sheet = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, w); c.height = Math.max(1, h); return c; };
  function tinted(img, w, h, colour) {
    const c = sheet(w, h), k = c.getContext('2d');
    k.fillStyle = colour; k.fillRect(0, 0, w, h); k.globalCompositeOperation = 'destination-in'; k.drawImage(img, 0, 0, w, h);
    return c;
  }
  function mirrored(src, squash, strength) {                            // the same shapes upside down, pressed flat, fading with depth
    const h = Math.ceil(src.height / squash), c = sheet(src.width, h), k = c.getContext('2d');
    k.translate(0, h); k.scale(1, -1 / squash); k.drawImage(src, 0, 0); k.setTransform(1, 0, 0, 1, 0, 0);
    const fade = k.createLinearGradient(0, 0, 0, h); fade.addColorStop(0, 'rgba(0,0,0,' + strength + ')'); fade.addColorStop(0.75, 'rgba(0,0,0,0)');
    k.globalCompositeOperation = 'destination-in'; k.fillStyle = fade; k.fillRect(0, 0, c.width, h);
    return c;
  }
  function shapes() {
    const W = cols * px, rpx = 2 * px, far = sheet(W, H * rpx), k = far.getContext('2d'), near = [];
    k.fillStyle = css(P.back);
    for (const b of city) {
      k.fillRect(b.x * px, (H - b.h) * rpx, b.w * px, b.h * rpx);
      if (b.extra < 0.14 && b.h > 1) k.fillRect((b.x + (b.w >> 1)) * px + px * 0.3, (H - b.h - 3) * rpx, Math.max(1, px * 0.3), 3 * rpx);          // a mast
      else if (b.extra > 0.8 && b.w > 3) k.fillRect((b.x + 1) * px, (H - b.h) * rpx - rpx * 0.5, px * 1.6, rpx * 0.5);                             // a water tank
    }
    for (const p of places) {
      if (!p.s.img) continue;
      const t = tinted(p.s.img, p.w * px, p.h * rpx, css(P.shape));
      if (p.base === H) k.drawImage(t, p.x * px, p.top * rpx); else near.push({ p, img: t, ref: mirrored(t, 1.6, P.night > 0.5 ? 0.5 : 0.34) });
    }
    k.fillStyle = css(mix(P.back, P.shape, 0.5)); k.fillRect(0, H * rpx - Math.max(1, rpx * 0.22), W, Math.max(1, rpx * 0.22));                     // the embankment
    groups = [{ img: far, ref: mirrored(far, 1.6, P.night > 0.5 ? 0.5 : 0.34), x: 0, top: 0, base: H }].concat(near.map(n => ({ img: n.img, ref: n.ref, x: n.p.x * px, top: n.p.top * rpx, base: n.p.base })));
  }
  function wash(t) {                                                    // lay the shapes down; the reflections go on in strips so they can sway
    const rpx = 2 * px; sg.clearRect(0, 0, sv.width, sv.height);
    const up = Math.round(lift * 2);                                    // rows of the skyline under water when the river is up
    for (const q of groups) {
      const far = q.base === H, base = far ? H - up : q.base;
      if (far) { sg.drawImage(q.img, q.x, q.top); if (up) { sg.fillStyle = css(P.w0); sg.fillRect(0, base * rpx, sv.width, up * rpx + rpx * 0.5); } }
      for (let y = 0; y * rpx < q.ref.height && base + y < rows; y++) {
        const sway = still.matches ? 0 : Math.round(Math.sin(t * 1.1 + y * 0.9) * Math.min(2, 0.35 + y * 0.18)) * px;
        sg.drawImage(q.ref, 0, (y + (far ? up * 1.6 : 0)) * rpx, q.ref.width, rpx, q.x + sway, (base + y) * rpx + (far && !up ? rpx * 0.5 : 0), q.ref.width, rpx);
      }
      if (!far) sg.drawImage(q.img, q.x, q.top);
    }
  }

  /* ---------- the characters on top ---------- */
  function frame(t) {
    C.fill(32); F.fill(0); free.fill(1); own.fill(0);
    const nightly = P.night > 0.5, slow = Math.floor(t / 2.4), up = Math.round(lift * 2), Hw = H - up;   // Hw: where the water starts just now
    const set = (x, y, c, f, who) => { if (x < 0 || y < 0 || x >= cols || y >= rows) return; const i = y * cols + x; C[i] = c; F[i] = f; free[i] = 0; own[i] = who; };

    // the ordinary city: a little texture by day, scattered lit windows by night
    for (const b of city) for (let dy = 0; dy < b.h; dy++) for (let dx = 0; dx < b.w; dx++) {
      const x = b.x + dx, y = H - 1 - dy, win = (dx + b.seed) % 2 === 0 && (dy + b.seed) % 2 === 0;
      if (y >= Hw) continue;
      if (nightly) set(x, y, hash(x, y, 31 + Math.floor((slow + hash(x, y, 5) * 50) / 50)) < P.lamps * (win ? 0.5 : 0.07) ? (hash(x, y, 8) < 0.3 ? 46 : 58) : 32, LIT, 1);
      else set(x, y, win && b.h > 1 ? 58 /* : */ : 32, FAR, 1);
    }
    // the places
    places.forEach((p, n) => {
      const art = nightly && p.d.meta.night !== 'day' && p.s.night.length ? p.s.night : p.s.art;
      for (let r = 0; r < p.h; r++) {
        const m = p.s.mask[r], line = art[r] || '';
        for (let k = 0; k < m.length; k++) {
          const cls = m[k]; if (cls === ' ') continue;
          const x = p.x + k, y = p.top + r; let c = line.charCodeAt(k) || 32, f = INKC;
          if (p.base === H && y >= Hw) continue;                       // under the risen river
          if (cls === 'g') f = GOLD; else if (cls === 'r') f = RED;
          else if (nightly) { f = FLOOD; if (cls === 'w' && hash(x, y, 17 + Math.floor((slow + hash(x, y, 3) * 70) / 70)) < P.lamps * 0.7) { c = 58; f = LIT; } }
          set(x, y, c, f, n + 2);
        }
      }
    });

    // the sky: sun, moon, stars, cloud
    const disc = (o, r, col, lit) => { if (!o) return; for (let dy = -Math.ceil(r); dy <= Math.ceil(r); dy++) for (let dx = -Math.ceil(2 * r); dx <= Math.ceil(2 * r); dx++) {
      const x = Math.round(o.x) + dx, y = Math.round(o.y) + dy; if (x < 0 || y < 0 || x >= cols || y >= H) continue;
      const d = Math.hypot(dx / 2, dy) / r; if (d > 1) continue; const i = y * cols + x; if (!free[i] || quiet[i]) continue;   // it passes behind the city and behind the words
      if (lit && !lit(dx / 2 / r, dy / r)) continue;
      C[i] = RAMP.charCodeAt(d < 0.55 ? 9 : d < 0.85 ? 7 : 5); F[i] = col; } };
    disc(sun, cols < 120 ? 2 : 3, SUN);
    if (moon) { const k = Math.cos(moon.phase * 2 * Math.PI), wax = moon.phase < 0.5;   // the terminator is half an ellipse across the disc
      disc(moon, cols < 120 ? 2 : 2.6, MOON, (u, v) => { const e = k * Math.sqrt(Math.max(0, 1 - v * v)); return wax ? u >= e : u <= -e; }); }
    const drift = t * 0.1;
    for (let y = 0; y < H; y++) for (let x = 0; x < cols; x++) {
      const i = y * cols + x; if (!free[i] || C[i] !== 32 || quiet[i]) continue;
      if (P.stars > 0.02) { const s = hash(x, y, 99); if (s < 0.010 * P.stars * (1 - y / H * 0.65)) { const tw = hash(x, y, Math.floor(t * 1.2 + s * 900)); C[i] = tw < 0.14 ? 32 : s < 0.0016 ? 42 /* * */ : s < 0.0045 ? 43 /* + */ : 46; F[i] = STAR; continue; } }
      // cloud is stippled, not filled: the thicker it is, the more of its cells carry a mark
      const n = noise((x + drift) * 0.034, y * 0.13) * 0.6 + noise((x + drift * 1.6) * 0.09, y * 0.31 + 9) * 0.4, edge = 0.57 + (y / H) * 0.08;
      if (n > edge) { const thick = Math.min(1, (n - edge) * 7); if (hash(x, y, 77) < 0.12 + thick * 0.6) { C[i] = thick > 0.72 && hash(x, y, 78) < 0.5 ? 45 : thick > 0.4 ? 58 : 46; F[i] = CLOUD; } }
    }

    // the water: what stands above it, again, upside down and broken by ripples
    const wt = Math.floor(t * 4);
    const reflect = (base, who) => {
      for (let y = base + 1; y < rows; y++) {
        const depth = y - base - 1, src = base - 1 - Math.floor(depth * 1.6), keep = Math.max(0.1, 0.8 - depth * 0.06);
        if (src < 0) break;
        const sway = still.matches ? 0 : Math.round(Math.sin(t * 1.1 + depth * 0.9) * Math.min(2, 0.35 + depth * 0.18));
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x; if (!free[i]) continue;
          const sx = x - sway, j = src * cols + sx; if (sx < 0 || sx >= cols || free[j] || C[j] === 32) continue;
          if (who ? own[j] !== who : own[j] > 1 && places[own[j] - 2].base !== H) continue;
          if (hash(x, y, wt + depth * 7) > keep) { if (who) { C[i] = 32; } continue; }
          const c = C[j], f = F[j];
          C[i] = c === 58 || c === 46 ? c : RAMP.charCodeAt(Math.max(1, RAMP.indexOf(String.fromCharCode(c)) - 2));
          F[i] = f === LIT ? RLIT : f === FLOOD ? RFLOOD : f === GOLD || f === RED ? RGOLD : RINK;
        }
      }
    };
    reflect(Hw, 0);
    places.forEach((p, n) => { if (p.base !== H) reflect(p.base - 1, n + 2); });
    for (let y = Hw; y < rows; y++) for (let x = 0; x < cols; x++) {
      const i = y * cols + x;
      if (free[i] && C[i] === 32 && hash(x, y, wt >> 1) < 0.028 + (y - Hw) * 0.0015) { C[i] = hash(x, y, 4) < 0.5 ? 45 : 46; F[i] = RIPPLE; }
    }
    if (shapesDue || up !== lastUp || !still.matches && wt !== lastWash) { lastUp = up; if (shapesDue) { shapes(); shapesDue = false; } wash(t); lastWash = wt; }
    draw();
  }
  let shapesDue = true, lastWash = -1, lastUp = 0;

  function draw() {
    const n = cols * rows;
    for (let i = 0; i < n; i++) {
      if (!all && C[i] === pC[i] && F[i] === pF[i]) continue;
      const x = (i % cols) * cw, y = ((i / cols) | 0) * ch;
      g.clearRect(x, y, cw, ch);
      if (C[i] !== 32) { g.fillStyle = fg[F[i]]; g.fillText(String.fromCharCode(C[i]), x + cw / 2, y + ch / 2 + ch * 0.04); }
      pC[i] = C[i]; pF[i] = F[i];
    }
    all = false;
  }

  /* ---------- the clock drives the colours ---------- */
  const two = n => String(n).padStart(2, '0'), clock = m => m === null ? '' : two(Math.floor(m / 60) % 24) + ':' + two(m % 60);
  function tell() {
    const d = moment(), s = sunAt(d), m = moonAt(d), rs = riseSet(d);
    P = paletteFor(s.alt);
    const wet = (c, k) => mix(c, P.w0, k), glowing = mix(P.ink, P.flood, P.floods);
    fg[INKC] = css(P.ink); fg[FAR] = css(P.far); fg[CLOUD] = css(P.cloud); fg[GOLD] = css(P.gold); fg[RED] = css(P.red);
    fg[LIT] = css(P.lit); fg[FLOOD] = css(glowing); fg[STAR] = css(mix(P.top, CREAM, 0.85));
    fg[RINK] = css(wet(P.ink, 0.5)); fg[RLIT] = css(wet(P.lit, 0.25)); fg[RFLOOD] = css(wet(glowing, 0.4)); fg[RGOLD] = css(wet(P.gold, 0.35));
    fg[RIPPLE] = css(mix(P.w0, P.dark ? CREAM : rgb('#2445f1'), P.dark ? 0.2 : 0.4));
    fg[SUN] = css(mix(rgb('#f08a2c'), rgb('#e8b53a'), Math.min(1, Math.max(0, s.alt / 12)))); fg[MOON] = css(mix(P.top, CREAM, 0.92));
    const seen = o => o.alt > -1.5 && o.alt < ALT_TOP && o.az > AZ0 && o.az < AZ1 ? { x: (o.az - AZ0) / (AZ1 - AZ0) * cols, y: H - 1 - o.alt / ALT_TOP * (H - 1), phase: o.phase } : null;
    sun = seen(s); moon = m.alt > 2 && s.alt < 4 ? seen(m) : null;

    const shifted = new Date(d.getTime() + IST * 60000), mins = shifted.getUTCHours() * 60 + shifted.getUTCMinutes(), pm = mins > 720;
    const part = s.alt > 6 ? 'day' : s.alt > -0.833 ? (pm ? 'golden hour' : 'sunrise') : s.alt > -6 ? (pm ? 'dusk' : 'dawn') : 'night';
    const ph = m.phase, moonName = ph < 0.03 || ph > 0.97 ? 'new moon' : ph < 0.22 ? 'waxing crescent' : ph < 0.28 ? 'first quarter' : ph < 0.47 ? 'waxing gibbous' : ph < 0.53 ? 'full moon' : ph < 0.72 ? 'waning gibbous' : ph < 0.78 ? 'last quarter' : 'waning crescent';
    info = { time: clock(mins), minutes: mins, part, sunrise: clock(rs.rise), sunset: clock(rs.set), moon: moonName, live: scrub === null, dark: P.dark, altitude: s.alt, contrast: P.contrast };

    const hz = H / rows * 100, st = root.style;
    const glow = sun ? 'radial-gradient(circle at ' + (sun.x * cw).toFixed(0) + 'px ' + (sun.y * ch).toFixed(0) + 'px, rgba(255,206,140,' + (s.alt < 8 ? 0.6 : 0.3) + ') 0, rgba(255,206,140,0) ' + Math.round(innerWidth * 0.24) + 'px), ' : '';
    // the top colour is held down past the name and links, so they stand on one tone; the warmth gathers lower, towards the city
    st.setProperty('--sky', glow + 'linear-gradient(to bottom, ' + css(P.top) + ' 0, ' + css(P.head) + ' ' + (hz * 0.42).toFixed(2) + '%, ' + css(P.mid) + ' ' + (hz * 0.78).toFixed(2) + '%, ' + css(P.low) + ' ' + hz.toFixed(2) + '%, ' + css(P.w0) + ' ' + hz.toFixed(2) + '%, ' + css(P.w1) + ' 100%)');
    const under = ratio(P.ui, P.top) < ratio(P.ui, P.head) ? P.top : P.head;
    st.setProperty('--ui', css(P.ui)); st.setProperty('--ui-soft', css(soften(P.ui, under, 4.6))); st.setProperty('--ui-line', css(mix(P.ui, P.top, 0.72)));
    st.setProperty('--accent', P.dark ? '#deed58' : '#2445f1'); st.setProperty('--sky-ink', css(P.head));
    st.setProperty('--water', css(P.shade)); st.setProperty('--water-ui', css(P.wui)); st.setProperty('--water-soft', css(soften(P.wui, P.shade, 4.6)));
    st.setProperty('--water-accent', P.wui === CREAM ? '#deed58' : '#2445f1');
    st.setProperty('--card', css(P.dark ? mix(P.top, [0, 0, 0], 0.35) : [255, 255, 255])); st.setProperty('--card-ui', css(P.dark ? CREAM : INK));
    root.classList.toggle('is-dark', P.dark);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = css(P.top);
    all = true; shapesDue = true;
    for (const fn of listeners) fn(info);
  }

  /* ---------- running ---------- */
  // A timer sets the pace and the browser picks the moment to paint, so the page wakes ten times a second, not sixty.
  const listeners = []; let told = 0, raf = 0, timer = 0, slowTicks = 0, gap = 100;
  const halt = () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  function loop(now) {
    timer = setTimeout(() => { raf = requestAnimationFrame(loop); }, gap - 8);
    if (scrub === null && now - told > 30000) { told = now; tell(); }
    lift += (liftTo - lift) * 0.16; if (Math.abs(liftTo - lift) < 0.02) lift = liftTo;
    const began = performance.now(); frame(now / 1000);
    if (performance.now() - began > 14) { if (++slowTicks > 20) gap = 180; } else slowTicks = Math.max(0, slowTicks - 1);   // ease off on a slow machine
  }
  function start() { halt(); told = performance.now(); tell(); if (still.matches) frame(0); else raf = requestAnimationFrame(loop); }
  let resizing = 0;
  addEventListener('resize', () => { clearTimeout(resizing); resizing = setTimeout(() => { measure(); start(); }, 120); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) halt(); else start(); });
  still.addEventListener('change', start);
  setInterval(() => { if (still.matches && !document.hidden) { tell(); frame(0); } }, 60000);

  window.Scene = {
    on(fn) { listeners.push(fn); if (info.time) fn(info); },
    time(minutes) { scrub = minutes === null ? null : ((minutes % 1440) + 1440) % 1440; tell(); if (still.matches) frame(0); },
    river(up) { liftTo = up ? 1 : 0; if (still.matches) { lift = liftTo; frame(0); } },
    info: () => info,
    sky: () => ({ sun, moon }),
  };

  // the outlines arrive as small pictures; wait for them and the font, then begin
  const waits = [document.fonts && document.fonts.load ? document.fonts.load('500 12px "Geist Mono"').catch(() => {}) : 0];
  for (const d of Object.values(DATA.places)) for (const s of Object.values(d.sizes)) if (s.shape) {
    s.img = new Image(); s.img.src = s.shape; waits.push(s.img.decode ? s.img.decode().catch(() => {}) : new Promise(r => { s.img.onload = s.img.onerror = r; }));
  }
  Promise.all(waits).then(() => { measure(); start(); root.classList.add('scene-on'); });
})();
