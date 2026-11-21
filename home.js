/* The page around the scene. Each link on the rail is a landing stage on the lake: the boat sails to the one you choose,
   and wherever it comes in, by itself or by your hand, that part's card opens. */
(() => {
  'use strict';
  const rail = document.querySelector('.rail'), card = document.getElementById('card'), canvas = document.getElementById('scene3d'), hint = document.getElementById('hint');
  const links = rail ? [...rail.querySelectorAll('a[data-name]')] : [];
  const about = document.getElementById('about'), aboutOpen = document.getElementById('about-open'), mail = document.getElementById('mail');
  const go = document.getElementById('card-go'), ident = document.querySelector('.ident'), place = document.getElementById('place');
  // every stop has something on the page it belongs to, and the words for its card
  const stops = links.map(a => ({ el: a, name: a.dataset.name, group: a.closest('.group').querySelector('h2').textContent, meta: a.dataset.meta, dek: a.dataset.dek, go: a.dataset.go, img: a.dataset.img, href: a.href, target: a.target }));
  if (aboutOpen) stops.push({ el: aboutOpen, name: 'About', group: 'Harsh Bhogayata', meta: 'Software engineer and founder', dek: 'Full Stack Developer at Quantaura Design Tech, and founder of The Curator Group. Based in Vadodara.', go: 'Read more', act: () => about.showModal() });
  if (mail) stops.push({ el: mail, name: 'Contact', group: 'Harsh Bhogayata', meta: 'Email', dek: 'Bring a useful problem. I answer at work.harsh.bhogayata@gmail.com.', go: 'Email me', href: mail.href });
  let shown = null, docked = null, peek = null, hiding = 0, scene = null;
  const phone = matchMedia('(max-width:699px)');

  function show(s) {
    clearTimeout(hiding);
    if (shown === s) return;
    shown = s;
    document.getElementById('card-name').textContent = s.name; document.getElementById('card-meta').textContent = s.meta; document.getElementById('card-dek').textContent = s.dek;
    document.getElementById('card-go-label').textContent = phone.matches ? 'Open' : s.go; go.href = s.href || '#'; go.target = s.target || ''; go.rel = s.target ? 'noopener noreferrer' : ''; go.onclick = s.act ? e => { e.preventDefault(); s.act(); } : null;
    const img = document.getElementById('card-img'); card.classList.toggle('no-pic', !s.img); if (s.img) img.src = s.img;
    card.hidden = false;
    const r = s.el.getBoundingClientRect(), w = card.offsetWidth, pad = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pad')) || 20, onRail = rail.contains(s.el);
    card.style.left = Math.max(pad, Math.min(innerWidth - w - pad, r.left - 14)) + 'px';
    if (phone.matches && place) { card.style.bottom = 'auto'; card.style.top = place.getBoundingClientRect().top + 'px'; }   // on a phone it takes the place of the lake's own label, and the boat stays in sight
    else if (onRail) { card.style.top = 'auto'; card.style.bottom = innerHeight - rail.getBoundingClientRect().top + 14 + 'px'; }   // above the whole rail, so it never sits on a label
    else { card.style.bottom = 'auto'; card.style.top = r.bottom + 14 + 'px'; }
    requestAnimationFrame(() => card.classList.add('is-on'));
    links.forEach(l => l.classList.toggle('is-open', l === s.el)); rail.classList.toggle('has-open', onRail);
  }
  function hide(now) {
    clearTimeout(hiding);
    hiding = setTimeout(() => {
      shown = null; card.classList.remove('is-on'); rail.classList.remove('has-open'); links.forEach(l => l.classList.remove('is-open'));
      setTimeout(() => { if (!shown) card.hidden = true; }, 220);
    }, now ? 0 : 90);
  }
  // what the card shows: the link under the pointer or the keyboard, or else wherever the boat is moored
  const settle = () => { const s = peek || docked; if (s) show(s); else hide(); };
  const choose = s => { peek = s; settle(); if (scene) scene.sail(stops.indexOf(s)); };

  for (const s of stops) {
    const a = s.el, onRail = rail.contains(a);
    if (!onRail) continue;
    a.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') choose(s); });
    a.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { peek = null; settle(); } });
    a.addEventListener('focus', () => choose(s));
    a.addEventListener('blur', () => { peek = null; settle(); });
    // touch: the first tap sends the boat and opens the card, the second follows the link
    a.addEventListener('pointerdown', e => { a.byTouch = e.pointerType !== 'mouse'; a.wasOpen = shown === s; });
    a.addEventListener('click', e => { if (a.byTouch && !a.wasOpen) { e.preventDefault(); choose(s); } a.byTouch = false; });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && shown && !(about && about.open)) { peek = null; docked = null; hide(true); } });

  // About
  if (about && aboutOpen && about.showModal) {
    aboutOpen.addEventListener('click', () => about.showModal());
    about.addEventListener('click', e => { if (e.target === about) about.close(); });
  }

  // the scene, where the browser can draw it
  const able = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
  if (canvas && able && window.Scene3D) {
    try {
      scene = window.Scene3D.start(canvas, stops.map(s => ({ name: s.name, group: s.group })), {
        arrive: i => { docked = stops[i]; settle(); },
        leave: () => { docked = null; settle(); },
        band: () => [ident.getBoundingClientRect().bottom + 4, rail.getBoundingClientRect().top - 6],   // the open picture between the words and the rail
      });
      document.documentElement.classList.add('scene-on');
      const touch = matchMedia('(pointer:coarse)').matches;
      if (hint) hint.textContent = touch ? 'Tap the water to sail there' : 'Arrow keys steer · press the water to sail there';
      canvas.addEventListener('pointerdown', () => { if (peek) { peek = null; settle(); } });
      window.Lake = scene;
    } catch (e) { scene = null; }
  }
})();
