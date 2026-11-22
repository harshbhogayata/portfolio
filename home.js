/* The page around the scene. The lake is Vadodara's: the boat calls at its places, and each has a line of its history.
   The work is the page's own: the list along the foot, each piece with its card. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id), root = document.documentElement;
  const rail = document.querySelector('.rail'), card = $('card'), canvas = $('scene3d'), ident = document.querySelector('.ident'), util = document.querySelector('.util'), lake = $('lake');
  const about = $('about'), aboutOpen = $('about-open'), phone = matchMedia('(max-width:699px)'), still = matchMedia('(prefers-reduced-motion: reduce)');

  // The places, in the order of the boat's round. deg is where the landing stage sits on the bank (90 is north).
  const PLACES = [
    { name: 'Sursagar', line: 'The lake', deg: -90, home: true, dek: 'The lake at the heart of the old city, walled in stone. Vadodara comes here in the evening.' },
    { name: 'Baroda Museum', line: '1894 · Sayaji Baug', deg: 162, dek: 'The Baroda Museum and Picture Gallery, founded by Maharaja Sayajirao Gaekwad III in the garden that bears his name.' },
    { name: 'MS University', board: 'MS University', line: '1881 · Baroda College', deg: 133, dek: 'The Maharaja Sayajirao University’s Faculty of Arts began as Baroda College. Its great dome is modelled on the Gol Gumbaz of Bijapur.' },
    { name: 'Kirti Mandir', line: '1936', deg: 110, dek: 'The Temple of Fame, built by Sayajirao Gaekwad III as the memorial of his family, the Gaekwads.' },
    { name: 'Garba', line: 'Navratri', deg: 96, shift: -5, dek: 'For nine nights each autumn the city dances in rings round a lamp. The garba of Gujarat is on UNESCO’s list of intangible heritage.' },
    { name: 'Sarveshwar Mahadev', line: '111 feet', island: true, dek: 'The statue of Shiva that stands in the middle of the lake, about 111 feet high and covered in gold.' },
    { name: 'Laxmi Vilas Palace', line: '1890', deg: 60, dek: 'Built for Maharaja Sayajirao Gaekwad III and still the home of the Gaekwad family.' },
    { name: 'Nyay Mandir', line: '1896', deg: 20, dek: 'The Temple of Justice, by Robert Chisholm: the city’s court for more than a century.' },
    { name: 'Mandvi Gate', line: 'The old city', deg: -8, dek: 'The pavilion at the centre of the walled city, where its four main streets meet.' },
  ];

  /* ----- the work: each link on the list shows its card ----- */
  const links = rail ? [...rail.querySelectorAll('a[data-name]')] : [];
  let open = null, closing = 0;
  function show(a) {
    clearTimeout(closing); if (open === a || phone.matches) return; open = a;
    $('card-name').textContent = a.dataset.name; $('card-meta').textContent = a.dataset.meta; $('card-dek').textContent = a.dataset.dek; $('card-go-label').textContent = a.dataset.go;
    card.classList.toggle('no-pic', !a.dataset.img); if (a.dataset.img) $('card-img').src = a.dataset.img;
    card.hidden = false;
    const r = a.getBoundingClientRect(), w = card.offsetWidth, pad = parseFloat(getComputedStyle(root).getPropertyValue('--pad')) || 20;
    card.style.left = Math.max(pad, Math.min(innerWidth - w - pad, r.left - 16)) + 'px'; card.style.bottom = innerHeight - rail.getBoundingClientRect().top + 16 + 'px';   // above the whole list, so it never sits on a label
    requestAnimationFrame(() => card.classList.add('is-on'));
    links.forEach(l => l.classList.toggle('is-open', l === a)); rail.classList.add('has-open');
  }
  function hide() { clearTimeout(closing); closing = setTimeout(() => { open = null; card.classList.remove('is-on'); rail.classList.remove('has-open'); links.forEach(l => l.classList.remove('is-open')); setTimeout(() => { if (!open) card.hidden = true; }, 240); }, 90); }
  for (const a of links) {
    a.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') show(a); }); a.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hide(); });
    a.addEventListener('focus', () => show(a)); a.addEventListener('blur', hide);
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open && !(about && about.open)) hide(); });

  if (about && aboutOpen && about.showModal) { aboutOpen.addEventListener('click', () => about.showModal()); about.addEventListener('click', e => { if (e.target === about) about.close(); }); }

  /* ----- the hour in Vadodara ----- */
  const clock = $('clock'); if (clock) { const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }), tick = () => { clock.textContent = 'Vadodara ' + fmt.format(new Date()) + ' IST'; }; tick(); setInterval(tick, 20000); }

  /* ----- sizes other parts hang on: where the words end, how tall the list is ----- */
  const measure = () => { root.style.setProperty('--rail-h', Math.round(innerHeight - rail.getBoundingClientRect().top) + 'px'); if (phone.matches) util.style.top = Math.round(ident.getBoundingClientRect().bottom + 12) + 'px'; else util.style.top = ''; };
  measure(); addEventListener('resize', measure); if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* ----- the lake: its plan, and the place the boat is at or bound for ----- */
  const plan = $('plan'), spot = lake.querySelector('.spot'), dots = []; let scene = null, at = PLACES.findIndex(p => p.home), bound = -1, boat = null, draw = () => {};
  const onPlan = p => p.island ? [0, 11] : [Math.cos(p.deg * Math.PI / 180) * 50, -Math.sin(p.deg * Math.PI / 180) * 50];   // north is up; the plan is 120 across for a lake 150 metres to its bank
  function drawPlan() {
    plan.innerHTML = '<svg viewBox="-60 -60 120 120" aria-hidden="true"><circle class="shore" r="50"/><rect class="isle" x="-4.5" y="-2.2" width="9" height="4.4" rx="1"/><path class="boat" d="M0 -4.6 L3 3.4 L0 2 L-3 3.4 Z"/></svg>';
    boat = plan.querySelector('.boat');
    PLACES.forEach((p, i) => { const [x, y] = onPlan(p), b = document.createElement('button'); b.type = 'button'; b.style.left = (50 + x / 1.2) + '%'; b.style.top = (50 + y / 1.2) + '%'; b.title = p.name; b.setAttribute('aria-label', 'Sail to ' + p.name); b.addEventListener('click', () => go(i)); plan.appendChild(b); dots.push(b); });
  }
  function say(i, sailing) {
    const p = PLACES[i]; spot.classList.add('is-changing');
    setTimeout(() => { $('spot-k').textContent = sailing ? 'Sailing to' : 'Stop ' + String(i + 1).padStart(2, '0') + ' of ' + String(PLACES.length).padStart(2, '0'); $('spot-name').textContent = p.name; $('spot-line').textContent = p.line; $('spot-dek').textContent = p.dek; spot.classList.remove('is-changing'); }, still.matches ? 0 : 200);
    dots.forEach((d, k) => { d.classList.toggle('is-here', !sailing && k === i); d.classList.toggle('is-next', sailing && k === i); });
  }
  const go = i => { if (scene) scene.sail(i); };
  const step = d => go(((bound >= 0 ? bound : at) + d + PLACES.length) % PLACES.length);
  $('spot-next').addEventListener('click', () => step(1)); $('spot-prev').addEventListener('click', () => step(-1));

  /* ----- the scene, where the browser can draw it ----- */
  const able = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
  if (canvas && able && window.Scene3D) {
    try {
      drawPlan();
      scene = window.Scene3D.start(canvas, PLACES.map(p => ({ name: p.board || p.name, line: p.line, deg: p.deg, island: p.island, home: p.home, shift: p.shift })), {
        arrive: i => { at = i; bound = -1; say(i, false); draw(); },
        toward: i => { bound = i; say(i, true); },
        leave: () => { if (bound < 0) { $('spot-k').textContent = 'On the water'; dots.forEach(d => d.classList.remove('is-here')); } },
        band: () => [(phone.matches ? util : ident).getBoundingClientRect().bottom + 4, (phone.matches ? lake : rail).getBoundingClientRect().top - 6],   // the open picture between the words above and what lies below
      });
      root.classList.add('scene-on'); say(at, false);
      $('hint').textContent = matchMedia('(pointer:coarse)').matches ? 'Tap the water to sail there' : 'Arrow keys steer · press the water to sail there';
      draw = () => { const w = scene.where(); boat.setAttribute('transform', 'translate(' + (w.x / 3).toFixed(2) + ' ' + (w.z / 3).toFixed(2) + ') rotate(' + (Math.atan2(Math.sin(w.heading), -Math.cos(w.heading)) * 180 / Math.PI).toFixed(1) + ')'); };
      const loop = () => { draw(); if (!still.matches && !document.hidden) requestAnimationFrame(loop); }; loop(); document.addEventListener('visibilitychange', () => { if (!document.hidden) loop(); });
      window.Lake = scene;
    } catch (e) { scene = null; root.classList.add('no-scene'); }
  } else root.classList.add('no-scene');
  requestAnimationFrame(() => root.classList.add('is-in'));
})();
