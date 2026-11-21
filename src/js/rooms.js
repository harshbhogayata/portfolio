// Project rooms: how they stack, and the views inside each one.
const { $, $$, clamp } = S;

const rooms = $$('[data-room]');
if (rooms.length) {
  // A room taller than the screen sticks by its bottom edge, so all of it is read before the next one covers it.
  const measure = () => {
    for (const room of rooms) room.style.setProperty('--stick', `${Math.min(0, innerHeight - room.offsetHeight)}px`);
    cover();
  };
  let queued = 0;
  const cover = () => {
    queued = 0;
    rooms.forEach((room, i) => {
      const next = rooms[i + 1];
      if (!next) return;
      const covered = clamp(1 - next.getBoundingClientRect().top / innerHeight, 0, 1);
      room.style.setProperty('--cover', covered.toFixed(3));
      room.classList.toggle('is-covered', covered > 0);
    });
  };
  addEventListener('scroll', () => { if (!queued) queued = requestAnimationFrame(cover); }, { passive: true });
  addEventListener('resize', measure);
  const watch = new ResizeObserver(measure);
  rooms.forEach((room) => watch.observe(room));
  measure();
}

// Views of a project: pick one and it takes the stage.
for (const stage of $$('[data-stage]')) {
  const items = $$('[data-stage-item]', stage);
  const tabs = $$('[data-stage-tab]', stage);
  tabs.forEach((tab, i) => tab.addEventListener('click', () => {
    tabs.forEach((t, n) => t.setAttribute('aria-pressed', String(n === i)));
    items.forEach((item, n) => {
      item.hidden = n !== i;
      const film = $('video', item);
      if (!film) return;
      if (n !== i) film.pause(); else if (S.autoplay) film.play().catch(() => {});
    });
  }));
}

// Stack table: point at a project and its tools stay lit.
const matrix = $('[data-matrix]');
if (matrix) {
  const light = (col) => {
    for (const cell of $$('.lit', matrix)) cell.classList.remove('lit');
    for (const row of $$('tr.dim', matrix)) row.classList.remove('dim');
    if (col == null) return matrix.removeAttribute('data-focus');
    matrix.setAttribute('data-focus', col);
    for (const cell of $$(`[data-col="${col}"]`, matrix)) cell.classList.add('lit');
    for (const row of $$('tbody tr:not(.matrix-group)', matrix)) row.classList.toggle('dim', !$(`td.on[data-col="${col}"]`, row));
  };
  for (const head of $$('thead th[data-col]', matrix)) {
    head.addEventListener('pointerenter', () => light(head.dataset.col));
    head.addEventListener('focusin', () => light(head.dataset.col));
    head.addEventListener('focusout', () => light(null));
  }
  for (const cell of $$('td[data-col]', matrix)) cell.addEventListener('pointerenter', () => light(cell.dataset.col));
  matrix.addEventListener('pointerleave', () => light(null));
}
