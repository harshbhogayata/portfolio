/* The page around the scene: the cards on the rail, the clock that explains the sky, the About panel. */
(() => {
  'use strict';
  const rail = document.querySelector('.rail'), card = document.getElementById('card');
  const links = rail ? [...rail.querySelectorAll('a[data-name]')] : [];
  const fine = matchMedia('(hover:hover) and (pointer:fine)');
  let open = null, hiding = 0;

  function show(a) {
    clearTimeout(hiding);
    if (open === a) return;
    open = a; const d = a.dataset;
    document.getElementById('card-name').textContent = d.name;
    document.getElementById('card-meta').textContent = d.meta;
    document.getElementById('card-dek').textContent = d.dek;
    const go = document.getElementById('card-go'); go.href = a.href; go.target = a.target; go.rel = a.rel;
    document.getElementById('card-go-label').textContent = d.go;
    const img = document.getElementById('card-img'); card.classList.toggle('no-pic', !d.img); if (d.img) img.src = d.img;
    card.hidden = false;
    const r = a.getBoundingClientRect(), w = card.offsetWidth, pad = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pad')) || 20;
    card.style.left = Math.max(pad, Math.min(innerWidth - w - pad, r.left - 14)) + 'px';
    card.style.bottom = innerHeight - rail.getBoundingClientRect().top + 14 + 'px';   // above the whole rail, so it never sits on a label
    requestAnimationFrame(() => card.classList.add('is-on'));
    links.forEach(l => l.classList.toggle('is-open', l === a)); rail.classList.add('has-open');
    if (window.Scene) window.Scene.river(d.river === '1');           // the one link that is about this river lifts it
  }
  function hide(now) {
    clearTimeout(hiding);
    hiding = setTimeout(() => {
      open = null; card.classList.remove('is-on'); rail.classList.remove('has-open'); links.forEach(l => l.classList.remove('is-open'));
      setTimeout(() => { if (!open) card.hidden = true; }, 220);
      if (window.Scene) window.Scene.river(false);
    }, now ? 0 : 90);
  }
  for (const a of links) {
    a.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') show(a); });
    a.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hide(); });
    a.addEventListener('focus', () => show(a));
    a.addEventListener('blur', () => hide());
    // touch: the first tap opens the card, the second follows the link. Whether it was open is read before focus opens it.
    a.addEventListener('pointerdown', e => { a.byTouch = e.pointerType !== 'mouse'; a.wasOpen = open === a; });
    a.addEventListener('click', e => { if (a.byTouch && !a.wasOpen) { e.preventDefault(); show(a); } a.byTouch = false; });
  }
  document.addEventListener('pointerdown', e => { if (open && !card.contains(e.target) && !e.target.closest('.rail a')) hide(true); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) { hide(true); } });

  // the clock
  const time = document.getElementById('clock-time'), skyLine = document.getElementById('clock-sky'), clock = document.getElementById('clock');
  const dial = document.getElementById('dial'), range = document.getElementById('dial-range'), back = document.getElementById('dial-now');
  if (window.Scene) window.Scene.on(i => {
    time.textContent = i.time + ' IST';
    skyLine.textContent = i.part + ' · ' + (i.minutes < 720 && i.altitude < 6 ? 'sunrise ' + i.sunrise : 'sunset ' + i.sunset) + (i.live ? '' : ' · preview');
    if (dial.hidden) range.value = i.minutes;
  });
  if (clock && dial) {
    clock.addEventListener('click', () => { dial.hidden = !dial.hidden; if (!dial.hidden) range.focus(); });
    range.addEventListener('input', () => window.Scene && window.Scene.time(+range.value));
    back.addEventListener('click', () => { if (window.Scene) window.Scene.time(null); dial.hidden = true; clock.focus(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dial.hidden) { dial.hidden = true; clock.focus(); } });
  }

  // About
  const about = document.getElementById('about'), aboutOpen = document.getElementById('about-open');
  if (about && aboutOpen && about.showModal) {
    aboutOpen.addEventListener('click', () => about.showModal());
    about.addEventListener('click', e => { if (e.target === about) about.close(); });
  }
})();
