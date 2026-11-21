// The wash painter from Bokuka, in small. A wash is not one shape: it is a sixteen-sided polygon whose edges are pushed
// out at their midpoints by a normally distributed amount, twice, with the push shrinking to 0.55 each time; then about
// forty-four of those, each between 1.4 and 2.9 per cent opaque, laid on top of each other.
const { $, reduced } = S;

const random = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const gauss = (r) => {
  let u = 0, v = 0;
  while (!u) u = r();
  while (!v) v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

function polygon(x, y, radius, r, sides = 16) {
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * Math.PI * 2;
    const reach = radius * (0.7 + r() * 0.55);
    points.push([x + Math.cos(angle) * reach, y + Math.sin(angle) * reach]);
  }
  return points;
}

function deformPolygon(points, depth, spread, r) {
  for (let level = 0; level < depth; level++) {
    const next = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length];
      const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
      next.push(a, [(a[0] + b[0]) / 2 + gauss(r) * spread * length, (a[1] + b[1]) / 2 + gauss(r) * spread * length]);
    }
    points = next;
    spread *= 0.55;
  }
  return points;
}

function trace(ctx, points) {
  const n = points.length;
  ctx.beginPath();
  ctx.moveTo((points[n - 1][0] + points[0][0]) / 2, (points[n - 1][1] + points[0][1]) / 2);
  for (let i = 0; i < n; i++) {
    const p = points[i], q = points[(i + 1) % n];
    ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
  }
  ctx.closePath();
}

/** The layers of one wash, ready to be laid down one at a time. */
function wash({ x, y, radius, seed, layers = 44 }) {
  const r = random(seed);
  const silhouette = deformPolygon(polygon(x, y, radius, r), 2, 0.45, r);
  const out = [];
  for (let i = 0; i < layers; i++) out.push({ points: deformPolygon(silhouette, 2, 0.4, r), alpha: 0.014 + r() * 0.015 });
  return out;
}

function layLayer(ctx, layer, color, strength = 1) {
  ctx.globalAlpha = Math.min(1, layer.alpha * strength);
  ctx.fillStyle = color;
  trace(ctx, layer.points);
  ctx.fill();
}

/** Five curved petals and nine gold stamens. */
function blossom(ctx, x, y, size, seed, petal, gold) {
  const r = random(seed);
  const turn = r() * Math.PI * 2;
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate(turn + (i / 5) * Math.PI * 2 + (r() - 0.5) * 0.25);
    const len = size * (0.85 + r() * 0.3), wide = size * (0.5 + r() * 0.16);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(wide, -len * 0.25, wide, -len * 0.95, 0, -len);
    ctx.bezierCurveTo(-wide, -len * 0.95, -wide, -len * 0.25, 0, 0);
    ctx.globalAlpha = 0.5 + r() * 0.3;
    ctx.fillStyle = petal;
    ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = gold;
  ctx.globalAlpha = 0.95;
  for (let i = 0; i < 9; i++) {
    const angle = r() * Math.PI * 2, reach = size * (0.1 + r() * 0.26);
    ctx.beginPath();
    ctx.arc(Math.cos(angle) * reach, Math.sin(angle) * reach, Math.max(0.8, size * 0.055), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

S.ink = { random, gauss, wash, layLayer, blossom };

// The opening page is painted with it. -------------------------------------------------------------------------------
const canvas = $('[data-ink]');
if (canvas && canvas.getContext) {
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const HUES = {
    light: ['#e0857b', '#dcae4a', '#6474b4', '#86b2c6'],
    dark: ['#ff8272', '#f6bd3c', '#8493ff', '#58d0ea'],
  };
  // Where the first strokes land: clear of the sentence on a wide screen, behind it and fainter on a narrow one.
  const opening = [
    { x: 0.86, y: 0.31, radius: 0.165, hue: 0, seed: 11 },
    { x: 0.95, y: 0.67, radius: 0.13, hue: 2, seed: 29 },
    { x: 0.75, y: 0.74, radius: 0.115, hue: 1, seed: 47 },
    { x: 0.97, y: 0.09, radius: 0.08, hue: 3, seed: 83 },
  ];
  const strokes = opening.map((s) => ({ ...s, seed: s.seed + Math.floor(Math.random() * 1e6) }));
  let width = 0, height = 0, scale = 1, frame = 0, jobs = [];

  const palette = () => HUES[S.root.dataset.theme === 'dark' ? 'dark' : 'light'];
  const strength = () => (S.root.dataset.theme === 'dark' ? 0.95 : 0.8) * (width < 800 ? 0.55 : 1);

  function size() {
    scale = Math.min(devicePixelRatio || 1, 2);
    width = hero.clientWidth; height = hero.clientHeight;
    canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }
  const place = (s) => ({ x: s.x * width, y: s.y * height, radius: s.radius * Math.max(width * 0.75, Math.min(width, height)) * (width < 800 ? 1.25 : 1), seed: s.seed });

  function paint(animated) {
    cancelAnimationFrame(frame);
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = S.root.dataset.theme === 'dark' ? 'screen' : 'multiply';
    jobs = strokes.map((s, i) => ({ layers: wash(place(s)), color: palette()[s.hue], at: 0, wait: animated ? i * 14 : 0 }));
    if (!animated) { for (const job of jobs) for (const layer of job.layers) layLayer(ctx, layer, job.color, strength()); jobs = []; return; }
    run();
  }
  function run() {
    let busy = false;
    for (const job of jobs) {
      if (job.wait > 0) { job.wait--; busy = true; continue; }
      if (job.at < job.layers.length) { layLayer(ctx, job.layers[job.at++], job.color, strength()); busy = true; }
    }
    if (busy) frame = requestAnimationFrame(run);
  }

  size();
  paint(!reduced.matches);
  canvas.classList.add('on');
  const note = $('[data-ink-note]');
  if (note) note.hidden = false;

  let resizing;
  new ResizeObserver(() => {
    if (hero.clientWidth === width && hero.clientHeight === height) return;
    clearTimeout(resizing);
    resizing = setTimeout(() => { size(); paint(false); }, 150);
  }).observe(hero);
  document.addEventListener('themechange', () => paint(false));

  // Click the paper to add a stroke. Links, buttons and text selection keep working as they are.
  hero.addEventListener('click', (event) => {
    if (event.target.closest('a, button') || String(getSelection())) return;
    const box = hero.getBoundingClientRect();
    const stroke = { x: (event.clientX - box.left) / width, y: (event.clientY - box.top) / height, radius: 0.06 + Math.random() * 0.07, hue: Math.floor(Math.random() * 4), seed: Math.floor(Math.random() * 1e9) };
    strokes.push(stroke);
    if (strokes.length > 16) strokes.splice(4, 1);
    ctx.globalCompositeOperation = S.root.dataset.theme === 'dark' ? 'screen' : 'multiply';
    jobs.push({ layers: wash(place(stroke)), color: palette()[stroke.hue], at: 0, wait: 0 });
    cancelAnimationFrame(frame);
    reduced.matches ? paint(false) : run();
  });
}
