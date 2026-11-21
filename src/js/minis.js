// Four working models, one per project. Each is the project's core rule, small enough to hold in your hand.
// The rules are the real ones; the data they run on here is a sample and says so on the page.
const { $, $$, reduced, ink } = S;

const press = (buttons, chosen) => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === chosen)));

// Curator ------------------------------------------------------------------------------------------------------------
// A cluster of reports becomes a story only when enough distinct outlets carry it, and no outlet counts more than twice.
for (const el of $$('[data-mini="curator"]')) {
  const OUTLETS = { A: '#e7b56c', B: '#9cc4b0', C: '#dd9c8c', D: '#a8b6dc', E: '#d9c9a0', F: '#bda9d3', G: '#9bc8d8', H: '#c9d08a' };
  const HOURS = {
    quiet: [['Rate decision', 'Economy', 'ACDF'], ['Coastal storm warning', 'Weather', 'ABE'], ['Transfer rumour', 'Sport', 'BBBBG'], ['Council budget vote', 'Local', 'DH'], ['Handset launch', 'Technology', 'C']],
    busy: [['Election date set', 'Politics', 'ABCDEFG'], ['Rate decision', 'Economy', 'ABCDF'], ['Coastal storm warning', 'Weather', 'ABEGH'], ['Cup final', 'Sport', 'BCDG'], ['Transfer rumour', 'Sport', 'BBBBG'], ['Handset launch', 'Technology', 'CEH']],
  };
  const CAP = 2;
  const list = $('[data-clusters]', el), read = $('[data-read]', el), range = $('[data-min]', el), out = $('[data-min-out]', el);
  const hours = $$('[data-hour]', el);
  let hour = 'quiet';

  const render = () => {
    const min = Number(range.value);
    out.textContent = min;
    let drafts = 0, single = 0;
    list.innerHTML = HOURS[hour].map(([name, desk, reports]) => {
      const seen = {};
      const dots = [...reports].map((o) => {
        seen[o] = (seen[o] || 0) + 1;
        return seen[o] > CAP ? `<span class="dot dot--capped" title="Outlet ${o}: over the cap of two">${o}</span>` : `<span class="dot" style="--o:${OUTLETS[o]}" title="Outlet ${o}">${o}</span>`;
      }).join('');
      const outlets = Object.keys(seen).length;
      const pass = outlets >= min;
      if (pass) { drafts++; if (outlets === 1) single++; }
      return `<li class="cluster${pass ? ' pass' : ''}"><p class="cluster-name">${name}<small>${desk} · ${outlets} ${outlets === 1 ? 'outlet' : 'outlets'}</small></p><p class="cluster-dots">${dots}</p><span class="verdict">${pass ? 'Draft' : `Held, needs ${min}`}</span></li>`;
    }).join('');
    const total = HOURS[hour].length;
    const count = `${drafts} of ${total} clusters ${drafts === 1 ? 'becomes a draft' : 'become drafts'}.`;
    read.innerHTML =
      drafts === 0 ? `${count} <b>The pipeline stalls.</b> This is what happened on 24 June, and why the bar went back to three.`
      : single ? `${count} <b>One of them is a single outlet’s story, reposted.</b> That is the thing Curator exists not to be.`
      : min === 2 ? `${count} Two outlets can be one wire report, printed twice. <b>Not enough to stand on.</b>`
      : min === 3 ? `${count} <b>This is the shipped setting:</b> enough voices to write from, and it still works when the news is slow.`
      : hour === 'busy' ? `${count} A high bar holds on a busy hour. <b>News is not always busy.</b>`
      : `${count} <b>Stricter, and thinner.</b> Good stories start to wait for a fourth and fifth outlet.`;
  };
  hours.forEach((b) => b.addEventListener('click', () => { hour = b.dataset.hour; press(hours, b); render(); }));
  range.addEventListener('input', render);
  render();
}

// Morrow -------------------------------------------------------------------------------------------------------------
// One Play button, many copies. Gates remove what cannot play; ordered keys decide between the rest.
for (const el of $$('[data-mini="morrow"]')) {
  const COPIES = [
    { id: 1, where: 'Home', lang: 'Hindi', cut: 'Theatrical', codec: 'HEVC', pic: '1080p', picRank: 2, sound: '5.1', soundRank: 2 },
    { id: 2, where: 'Cloud', lang: 'English', cut: 'Theatrical', codec: 'HEVC', pic: '4K HDR', picRank: 4, sound: 'Atmos', soundRank: 3 },
    { id: 3, where: 'Home', lang: 'Hindi', cut: 'Extended cut', codec: 'H.264', pic: '1080p', picRank: 2, sound: 'Stereo', soundRank: 1 },
    { id: 4, where: 'Cloud', lang: 'Hindi', cut: 'Theatrical', codec: 'AV1', pic: '4K', picRank: 3, sound: '5.1', soundRank: 2 },
    { id: 5, where: 'Cloud', lang: 'Hindi', cut: 'Theatrical', codec: 'HEVC', pic: '720p', picRank: 1, sound: 'Stereo', soundRank: 1 },
    { id: 6, where: 'Cloud', lang: 'English', cut: 'Theatrical', codec: 'HEVC', pic: '1080p', picRank: 2, sound: '5.1', soundRank: 2, forbidden: true },
  ];
  const DECODES = { tv: ['HEVC', 'H.264'], laptop: ['HEVC', 'H.264', 'AV1'] };
  const KEYS = ['the right language', 'the theatrical cut', 'no conversion', 'home before cloud', 'picture', 'sound'];
  const SHORT = ['language', 'cut', 'conversion', 'home', 'picture', 'sound'];
  const state = { lang: 'Hindi', device: 'tv', home: 'on', rank: 'keys' };
  const list = $('[data-copies]', el), read = $('[data-read]', el);
  const rows = new Map();

  const direct = (c) => DECODES[state.device].includes(c.codec);
  const gate = (c) => (c.forbidden ? 'Forbidden in this region' : c.where === 'Home' && state.home === 'off' ? 'Offline' : null);
  const keys = (c) => [c.lang === state.lang ? 1 : 0, c.cut === 'Theatrical' ? 1 : 0, direct(c) ? 1 : 0, c.where === 'Home' ? 1 : 0, c.picRank, c.soundRank];
  const points = (c) => (c.lang === state.lang ? 25 : 0) + (c.cut === 'Theatrical' ? 10 : 0) + (direct(c) ? 10 : 0) + (c.where === 'Home' ? 5 : 0) + [0, 5, 15, 30, 45][c.picRank] + [0, 5, 10, 15][c.soundRank];
  const byKeys = (a, b) => { const ka = keys(a), kb = keys(b); for (let i = 0; i < ka.length; i++) if (ka[i] !== kb[i]) return kb[i] - ka[i]; return a.id - b.id; };
  const firstGap = (a, b) => { const ka = keys(a), kb = keys(b); return ka.findIndex((k, i) => k !== kb[i]); };
  const attrs = (c) => [c.where, c.lang, c.cut, direct(c) ? 'Direct play' : 'Needs converting', c.pic, c.sound];
  // Which attribute chip speaks for which key.
  const CHIP_OF_KEY = [1, 2, 3, 0, 4, 5];

  for (const c of COPIES) {
    const li = document.createElement('li');
    li.className = 'copy';
    li.innerHTML = '<span class="copy-rank"></span><span class="copy-attrs"></span><span class="copy-say"></span>';
    rows.set(c.id, li);
    list.append(li);
  }

  const render = () => {
    const playable = COPIES.filter((c) => !gate(c));
    const gated = COPIES.filter((c) => gate(c));
    const keyed = [...playable].sort(byKeys);
    const ranked = state.rank === 'keys' ? keyed : [...playable].sort((a, b) => points(b) - points(a) || a.id - b.id);
    const order = [...ranked, ...gated];
    const winner = ranked[0], right = keyed[0];
    const decided = ranked[1] ? firstGap(winner, ranked[1]) : -1;
    const speaksRight = playable.some((c) => c.lang === state.lang);
    const wrong = state.rank === 'points' && speaksRight && winner.lang !== state.lang;

    const before = new Map([...rows].map(([id, li]) => [id, li.getBoundingClientRect().top]));
    order.forEach((c, i) => {
      const li = rows.get(c.id);
      const why = gate(c);
      const place = ranked.indexOf(c);
      li.className = `copy${why ? ' gated' : ''}${place === 0 ? (wrong ? ' wrong' : ' win') : ''}`;
      li.children[0].textContent = why ? '–' : place + 1;
      li.children[1].innerHTML = attrs(c).map((a, n) => `<span${place === 0 && state.rank === 'keys' && decided >= 0 && CHIP_OF_KEY[decided] === n ? ' class="key"' : ''}>${a}</span>`).join('');
      li.children[2].textContent = why ? why
        : place === 0 ? 'Plays'
        : state.rank === 'points' ? `${points(c)} points`
        : `Behind on ${SHORT[firstGap(ranked[place - 1], c)]}`;
      if (place === 0 && state.rank === 'points') li.children[2].textContent = `Plays · ${points(c)} points`;
      list.append(li);
    });
    if (!reduced.matches) {
      for (const [id, li] of rows) {
        const moved = before.get(id) - li.getBoundingClientRect().top;
        if (moved) li.animate([{ transform: `translateY(${moved}px)` }, { transform: 'none' }], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    }

    const what = `${winner.lang}, ${winner.pic}, from ${winner.where === 'Home' ? 'home' : 'the cloud'}`;
    read.innerHTML = wrong ? `Points play the ${winner.pic} copy, in ${winner.lang}. <b>A sharper picture just outvoted the right language.</b>`
      : state.rank === 'points' ? (winner === right ? `Points happen to agree with the keys this time: ${what}. <b>They do not always.</b>` : `Points play ${what}; the keys would have played ${right.pic} from ${right.where === 'Home' ? 'home' : 'the cloud'}. <b>Adding up lets a later key outvote an earlier one.</b>`)
      : !speaksRight ? `No ${state.lang} copy exists, so language cannot decide and the next keys do. Morrow plays ${what}, <b>won on ${KEYS[decided]}.</b>`
      : `Morrow plays ${what}. <b>It won on ${KEYS[decided]}</b>${decided < 4 ? '; picture never got a vote.' : '.'}`;
  };

  for (const [name, attr] of [['lang', 'data-lang'], ['device', 'data-device'], ['home', 'data-home'], ['rank', 'data-rank']]) {
    const buttons = $$(`[${attr}]`, el);
    buttons.forEach((b) => b.addEventListener('click', () => { state[name] = b.getAttribute(attr); press(buttons, b); render(); }));
  }
  render();
}

// Bokuka -------------------------------------------------------------------------------------------------------------
// The wash painter, on a sheet you can paint.
for (const el of $$('[data-mini="bokuka"]')) {
  const MOODS = {
    sakura: { paper: '#f3ebdd', fibre: '#b8a88e', washes: ['#e58f89', '#f0b3aa', '#e6cf96', '#b9cdb4'], petal: '#dc5a58', gold: '#c69a3c', inkc: '#2b2420' },
    vermilion: { paper: '#f2e6d0', fibre: '#b39a78', washes: ['#d8512f', '#e08b3c', '#caa22a', '#8f3d2c'], petal: '#c4361f', gold: '#d6a92e', inkc: '#2a1d17' },
    indigo: { paper: '#e9e6de', fibre: '#9a978c', washes: ['#3e466a', '#6f80a6', '#9db8ce', '#b9b189'], petal: '#48547a', gold: '#d9b34c', inkc: '#1d2030' },
    gold: { paper: '#f4ead0', fibre: '#bfa66a', washes: ['#d2a52b', '#e5c563', '#b6862c', '#efdda3'], petal: '#c4912a', gold: '#8a6414', inkc: '#33260f' },
    rain: { paper: '#e5e8e2', fibre: '#9ba49c', washes: ['#7c9a94', '#a7bdb6', '#5d7480', '#c4cec5'], petal: '#62807f', gold: '#c5b170', inkc: '#1f2a2c' },
  };
  const canvas = $('[data-paper]', el), ctx = canvas.getContext('2d');
  const box = canvas.parentElement, hint = $('[data-hint]', el);
  const layersIn = $('[data-layers]', el), layersOut = $('[data-layers-out]', el);
  const moods = $$('[data-mood]', el);
  let mood = 'sakura', width = 0, height = 0, scale = 1, ops = [], jobs = [], frame = 0, started = false;

  const seed = () => Math.floor(Math.random() * 1e9);
  const size = () => {
    scale = Math.min(devicePixelRatio || 1, 2);
    width = box.clientWidth; height = box.clientHeight;
    canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  };
  const paper = () => {
    const m = MOODS[mood];
    box.style.background = m.paper;
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = m.paper; ctx.fillRect(0, 0, width, height);
    // Fibres in the sheet: short faint hairs, scattered.
    const r = ink.random(7);
    ctx.strokeStyle = m.fibre; ctx.lineWidth = 0.6;
    for (let i = 0; i < 420; i++) {
      const x = r() * width, y = r() * height, a = r() * Math.PI, len = 6 + r() * 22;
      ctx.globalAlpha = 0.07 + r() * 0.12;
      ctx.beginPath(); ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + Math.cos(a) * len * 0.5 + (r() - 0.5) * 8, y + Math.sin(a) * len * 0.5 + (r() - 0.5) * 8, x + Math.cos(a) * len, y + Math.sin(a) * len);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };
  const washOf = (op) => ink.wash({ x: op.x * width, y: op.y * height, radius: op.radius * width, seed: op.seed, layers: Number(layersIn.value) });
  const draw = (op) => {
    const m = MOODS[mood];
    if (op.kind === 'wash') { ctx.globalCompositeOperation = 'multiply'; for (const layer of washOf(op)) ink.layLayer(ctx, layer, m.washes[op.hue]); }
    if (op.kind === 'blossom') { ctx.globalCompositeOperation = 'source-over'; ink.blossom(ctx, op.x * width, op.y * height, op.size * width, op.seed, m.petal, m.gold); }
    if (op.kind === 'stem') { ctx.globalCompositeOperation = 'source-over'; stem(op.points.map(([x, y]) => [x * width, y * height])); }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  };
  const stem = (points) => {
    if (points.length < 2) return;
    ctx.strokeStyle = MOODS[mood].inkc; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (let i = 1; i < points.length; i++) {
      const t = i / points.length;
      ctx.globalAlpha = 0.78; ctx.lineWidth = Math.max(0.8, width * 0.0045 * (1 - t * 0.7));
      ctx.beginPath(); ctx.moveTo(points[i - 1][0], points[i - 1][1]); ctx.lineTo(points[i][0], points[i][1]); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };
  const repaint = () => { cancelAnimationFrame(frame); jobs = []; paper(); ops.forEach(draw); };
  // New washes bleed in a few layers a frame; everything else lands at once.
  const run = () => {
    const m = MOODS[mood];
    let busy = false;
    for (const job of jobs) {
      if (job.wait > 0) { job.wait--; busy = true; continue; }
      if (job.layers) {
        ctx.globalCompositeOperation = 'multiply';
        for (let n = 0; n < 2 && job.at < job.layers.length; n++) ink.layLayer(ctx, job.layers[job.at++], m.washes[job.op.hue]);
        if (job.at < job.layers.length) busy = true;
      } else if (!job.done) { draw(job.op); job.done = true; }
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    if (busy) frame = requestAnimationFrame(run); else jobs = [];
  };
  const add = (op, wait = 0) => {
    ops.push(op);
    if (reduced.matches) return draw(op);
    jobs.push(op.kind === 'wash' ? { op, layers: washOf(op), at: 0, wait } : { op, wait });
    cancelAnimationFrame(frame); frame = requestAnimationFrame(run);
  };
  const compose = () => {
    ops = [];
    paper();
    const spots = [[0.24, 0.42, 0.2, 0], [0.62, 0.34, 0.17, 1], [0.8, 0.7, 0.15, 2], [0.44, 0.76, 0.12, 3]];
    spots.forEach(([x, y, radius, hue], i) => add({ kind: 'wash', x, y, radius, hue, seed: seed() }, i * 10));
    [[0.2, 0.36], [0.31, 0.5], [0.6, 0.3], [0.68, 0.42], [0.82, 0.66], [0.42, 0.74]].forEach(([x, y], i) => add({ kind: 'blossom', x, y, size: 0.022 + Math.random() * 0.016, seed: seed() }, 44 + i * 5));
  };

  let path = null, moved = 0;
  const at = (event) => { const b = canvas.getBoundingClientRect(); return [(event.clientX - b.left) / b.width, (event.clientY - b.top) / b.height]; };
  box.addEventListener('pointerdown', (event) => { path = [at(event)]; moved = 0; box.setPointerCapture(event.pointerId); hint.classList.add('off'); });
  box.addEventListener('pointermove', (event) => {
    if (!path) return;
    const p = at(event), q = path[path.length - 1];
    const step = Math.hypot((p[0] - q[0]) * width, (p[1] - q[1]) * height);
    if (step < 4) return;
    moved += step; path.push(p);
    ctx.globalCompositeOperation = 'source-over';
    stem(path.slice(-2).map(([x, y]) => [x * width, y * height]));
  });
  const lift = () => {
    if (!path) return;
    const points = path; path = null;
    if (moved < 12) {
      // A tap: a wash, with a blossom or two on it.
      const [x, y] = points[0];
      add({ kind: 'wash', x, y, radius: 0.09 + Math.random() * 0.08, hue: Math.floor(Math.random() * 4), seed: seed() });
      add({ kind: 'blossom', x: x + (Math.random() - 0.5) * 0.05, y: y + (Math.random() - 0.5) * 0.05, size: 0.02 + Math.random() * 0.018, seed: seed() }, 22);
    } else {
      // A drag: a stem, which blooms along its length.
      ops.push({ kind: 'stem', points });
      const blooms = Math.min(6, 2 + Math.floor(moved / 140));
      for (let i = 0; i < blooms; i++) {
        const [x, y] = points[Math.min(points.length - 1, Math.floor(((i + 1) / blooms) * (points.length - 1)))];
        add({ kind: 'blossom', x: x + (Math.random() - 0.5) * 0.03, y: y + (Math.random() - 0.5) * 0.03, size: 0.018 + Math.random() * 0.02, seed: seed() }, i * 6);
      }
    }
  };
  box.addEventListener('pointerup', lift);
  box.addEventListener('pointercancel', () => { path = null; });

  moods.forEach((b) => b.addEventListener('click', () => { mood = b.dataset.mood; press(moods, b); repaint(); }));
  layersIn.addEventListener('input', () => { layersOut.textContent = layersIn.value; repaint(); });
  $('[data-clear]', el).addEventListener('click', () => { cancelAnimationFrame(frame); jobs = []; ops = []; paper(); hint.classList.remove('off'); });

  // Start painting when the sheet comes into view; keep it sharp when the sheet changes size.
  new IntersectionObserver((entries, self) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    self.disconnect(); started = true; size(); compose();
  }, { threshold: 0.25 }).observe(box);
  let resizing;
  new ResizeObserver(() => {
    if (!started || box.clientWidth === width) return;
    clearTimeout(resizing); resizing = setTimeout(() => { size(); repaint(); }, 150);
  }).observe(box);
}

// Flood Archive ------------------------------------------------------------------------------------------------------
// The record for a place, year beside year, with the report it came from.
for (const el of $$('[data-mini="flood"]')) {
  const { places } = JSON.parse($('[data-flood]', el).textContent);
  const buttons = $$('[data-place]', el);
  const name = $('[data-place-name]', el), source = $('[data-source]', el), outlet = $('[data-outlet]', el);
  const cells = $$('[data-record]', el);
  buttons.forEach((button) => button.addEventListener('click', () => {
    const place = places.find((p) => p.id === button.dataset.place);
    press(buttons, button);
    name.textContent = `${place.name}, ${place.area}`;
    source.href = place.source;
    outlet.textContent = place.outlet;
    cells.forEach((cell, i) => {
      cell.textContent = place.records[i];
      cell.classList.remove('swap'); void cell.offsetWidth; cell.classList.add('swap');
      cell.style.animationDelay = `${i * 70}ms`;
    });
  }));
}
