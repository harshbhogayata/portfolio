// Reading a case study: how far along you are, which section you are in, and recordings that stay silent until asked.
const { $, $$ } = S;

const article = $('[data-case]');
if (article) {
  const bar = $('[data-progress]');
  const body = $('.prose', article);
  let queued = 0;
  const measure = () => {
    queued = 0;
    const box = body.getBoundingClientRect();
    const read = (innerHeight * 0.5 - box.top) / box.height;
    bar.style.setProperty('--p', Math.min(1, Math.max(0, read)).toFixed(4));
  };
  addEventListener('scroll', () => { if (!queued) queued = requestAnimationFrame(measure); }, { passive: true });
  measure();

  const toc = $('[data-toc]');
  if (toc) {
    const links = new Map($$('a[href^="#s"]', toc).map((a) => [a.getAttribute('href').slice(1), a]));
    const heads = $$('h2[id]', body);
    const mark = () => {
      const line = innerHeight * 0.35;
      const current = heads.filter((h) => h.getBoundingClientRect().top < line).pop();
      for (const [id, a] of links) current?.id === id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
    };
    addEventListener('scroll', mark, { passive: true });
    mark();
  }
}

for (const player of $$('.art-player')) {
  const film = $('video', player), track = $('.art-player-track', player), time = $('.art-player-time', player), toggle = $('.art-player-toggle', player);
  const clock = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const sync = () => {
    const total = film.duration || 0;
    player.style.setProperty('--played', total ? (film.currentTime / total).toFixed(4) : 0);
    time.textContent = `${clock(film.currentTime)} / ${clock(total)}`;
  };
  const flip = () => { if (film.paused) { film.muted = false; film.play(); } else film.pause(); };
  film.addEventListener('play', () => { player.classList.add('is-playing', 'is-started'); toggle.setAttribute('aria-label', 'Pause'); });
  film.addEventListener('pause', () => { player.classList.remove('is-playing'); toggle.setAttribute('aria-label', 'Play'); });
  film.addEventListener('ended', () => { player.classList.remove('is-started'); film.currentTime = 0; sync(); });
  film.addEventListener('timeupdate', sync);
  film.addEventListener('loadedmetadata', sync);
  $('.art-player-big', player).addEventListener('click', flip);
  film.addEventListener('click', flip);
  toggle.addEventListener('click', flip);
  track.addEventListener('click', (event) => {
    const box = track.getBoundingClientRect();
    if (film.duration) film.currentTime = film.duration * Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
  });
}
