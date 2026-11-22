// Nyay Mandir. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { Builder, painted, lit, slab, drum, ball, plain, shade, shadeMat, rng, WARM, LAMP } from './kit.js';
import { masonry, rooftiles, glazing, lattice, fine, clad, outline, pane, surround, rect, ngon, band, eave, cornice, row, around, corbel, column, balustrade, railing, kalash, turnedSolid, Parts, face, walls, spaced } from './mason.js';

const V2 = (x, y) => new THREE.Vector2(x, y);
// A small dome for a turret or a kiosk, and a kiosk of four posts under one: there are many of them, so they are kept light.
const cap = (r, h, x, y, z, seg = 10) => turnedSolid([[r * 0.93, 0], [r * 1.02, h * 0.14], [r * 0.98, h * 0.34], [r * 0.82, h * 0.58], [r * 0.56, h * 0.8], [r * 0.24, h * 0.95], [0.001, h]], { seg }).translate(x, y, z);
const bud = (r, x, y, z) => plain(new THREE.OctahedronGeometry(r)).scale(1, 1.5, 1).translate(x, y, z);
const kiosk4 = (s, h, x, y, z) => [...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, c]) => slab(s * 0.1, h, s * 0.1, x + a * s * 0.42, y, z + c * s * 0.42)), slab(s * 1.28, s * 0.12, s * 1.28, x, y + h, z), cap(s * 0.56, s * 0.72, x, y + h + s * 0.12, z, 8), bud(s * 0.1, x, y + h + s * 0.96, z)];
// A gable with a shaped outline: shoulders that sweep up in a scroll to a round head, and a pointed niche through it. It faces +z with its foot at y = 0.
function shapedGable(w, h1, rise, r, t, tile, nw, nh) {
  const s = new THREE.Shape(), cx = w / 2 - 0.2, k = r + 0.12, hc = h1 + rise;
  s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(w / 2, h1); s.lineTo(cx, h1); s.absellipse(cx, hc, cx - k, rise, -Math.PI / 2, -Math.PI, true); s.lineTo(r, hc); s.absarc(0, hc, r, 0, Math.PI, false);
  s.lineTo(-k, hc); s.absellipse(-cx, hc, cx - k, rise, 0, -Math.PI / 2, true); s.lineTo(-w / 2, h1);
  if (nw) s.holes.push(new THREE.Path(outline('pointed', nw, nh, { sharp: 0.4 }).map(p => V2(p[0], p[1] + 0.35))));
  return clad(new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: false, curveSegments: 10 }).translate(0, 0, -t), tile);
}
// A balcony against a wall at z = 0: a floor on brackets and a panelled parapet under a coping.
function balcony(w, out, x, y) {
  return new Parts().add('trim', slab(w, 0.24, out, x, y - 0.24, out / 2), slab(w, 0.95, 0.1, x, y, out - 0.05), slab(0.1, 0.95, out, x - w / 2 + 0.05, y, out / 2), slab(0.1, 0.95, out, x + w / 2 - 0.05, y, out / 2), slab(w + 0.16, 0.1, out + 0.08, x, y + 0.95, out / 2 + 0.04))
    .add('fine', row([x - w / 2 + 0.25, 0], [x + w / 2 - 0.25, 0], 0.95, () => corbel(out * 0.92, 0.85, 0.2, y - 0.24)), row([x - w / 2 + 0.5, out], [x + w / 2 - 0.5, out], 0.9, () => slab(0.5, 0.5, 0.04, 0, y + 0.22, 0), { ends: false })).add('bufffine', row([x - w / 2 + 0.5, out + 0.02], [x + w / 2 - 0.5, out + 0.02], 0.9, () => slab(0.34, 0.34, 0.04, 0, y + 0.3, 0), { ends: false }));
}

/* Nyay Mandir, the Temple of Justice, by Robert Chisholm: yellow brick banded with thin courses of red. The middle stands tall and forward,
   a great arch sunk deep into it with a balcony inside over twin doors; above, a clock in a round window, and a shaped gable with pinnacles
   between two eight-sided turrets whose open lanterns carry small domes. A pavilion stands to either side, and beyond each a long wing of
   round-headed windows dressed in white, under a tiled roof with dormers and a domed kiosk at each end. */
export function nyayMandir() {
  const red = [156, 84, 60], bands = Array(32).fill(null); for (const r of [4, 12, 13, 20, 27]) bands[r] = red;
  const BRICK = masonry('nyay', { stone: [184, 154, 98], course: 0.15, block: 0.5, rows: 32, cols: 8, joint: 0.86, vary: 0.1, bands, grime: 0.14 }), T = BRICK.userData.tile;
  const STONE = masonry('nyay-stone', { stone: [174, 158, 124], course: 0.45, block: 1.0, joint: 0.78 }), TS = STONE.userData.tile, ROOF = rooftiles('nyay', [150, 80, 58]), TR = ROOF.userData.tile;
  const mats = { stone: BRICK, ashlar: STONE, roof: ROOF, trim: painted({ tint: 0xc2bdac }), fine: fine(0xc2bdac), buff: painted({ tint: 0xb2a27e }), bufffine: fine(0xb2a27e), glass: glazing(), dark: painted({ tint: 0x18130f }),
    gate: lattice('nyay-gate', [52, 44, 36], 0.34, true), glow: lit(1.0, 0.6, 0.24), dial: lit(1.5, 1.42, 1.15), hands: fine(0x1a1612), gold: lit(1.9, 1.35, 0.42), lamp: lit(1.8, 1.4, 0.8) };
  const b = new Builder(), q = rng(96), P = new Parts(), P0 = 0.9, CF = 4, CT = 22.5, CH = CT - P0, plinth = [[0.35, 0], [0.35, 0.55], [0.1, P0], [0, P0]];
  const win = { kind: 'round', fill: 'glass', frame: 0.26, sill: true }, plainWin = { kind: 'flat', fill: 'glass', seg: 8, chance: 0.3, sill: true };
  for (const [w, d, x, z] of [[27, 24, 0, -8], [13.4, 20, -20.2, -10], [13.4, 20, 20.2, -10], [20.6, 16, -37.2, -9], [20.6, 16, 37.2, -9]]) P.add('ashlar', band(plinth, rect(w, d, x, z), 0, { cap: true, tile: TS }));
  for (let i = 0; i < 5; i++) P.add('buff', slab(12.4 - i * 0.4, P0 - i * 0.18, 0.5, 0, 0, CF + 0.6 + i * 0.5));                                          // the steps to the great arch

  /* ----- the middle ----- */
  // its front: a thick wall with the great arch sunk into it, and above the arch three lights under a balcony, the clock, and a window to either side
  const arch = { x: 0, y: 0, w: 9.8, h: 11.9, kind: 'pointed', sharp: 0.14, seg: 20, fill: 'open' };
  P.take(face(14, CH, 3.2, T, [arch, ...spaced(3, 1.45, { y: 14.1, w: 1.12, h: 2.6, kind: 'flat', fill: 'glass', on: 1, style: 0 }), { x: 0, y: 18.5, w: 2.7, h: 2.7, kind: 'circle', fill: 'dial', depth: 0.3, frame: 0.32, proud: 0.14 },
    ...[-5.65, 5.65].map(x => ({ ...win, x, y: 17.5, w: 1.5, h: 2.9 }))], P0, q).move(0, 0, CF));
  P.add('trim', surround('pointed', arch.w, arch.h, 0, P0 + 0.02, CF, { band: 0.9, proud: 0.14, sharp: 0.14, seg: 20 }), slab(4.6, 0.3, 0.36, 0, P0 + 16.8, CF + 0.14), slab(4.6, 0.22, 0.3, 0, P0 + 13.88, CF + 0.12));
  for (const x of [-2.12, -0.72, 0.72, 2.12]) P.add('fine', column(0.13, 2.7, x, P0 + 14.1, CF + 0.16, { sides: 6 }));
  P.take(balcony(6.6, 1.3, 0, P0 + 17.5).move(0, 0, CF));
  for (const s of [-1, 1]) P.add('trim', drum(0.48, 2.5, s * 2.75, P0 + 19.0, CF + 0.12, 8), turnedSolid([[0.001, 0], [0.26, 0.12], [0.56, 0.5], [0.5, 0.95]], { seg: 8 }).translate(s * 2.75, P0 + 18.05, CF + 0.12), cap(0.5, 0.6, s * 2.75, P0 + 21.5, CF + 0.12, 8));
  P.add('hands', slab(0.1, 1.0, 0.04, 0, P0 + 19.85, CF - 0.27), plain(new THREE.BoxGeometry(0.7, 0.1, 0.04)).translate(0.32, P0 + 19.85, CF - 0.25));
  // within the arch: twin doors behind iron gates, a balcony on brackets over them, and three lit windows
  P.take(face(10.8, 12.6, 0.6, T, [...[-2.1, 2.1].map(x => ({ x, y: 0, w: 3.0, h: 4.5, kind: 'round', fill: 'glow', frame: 0.42 })), ...spaced(3, 3.0, { y: 6.7, w: 1.9, h: 3.2, kind: 'round', fill: 'glass', on: 1, style: 1, frame: 0.22 })], P0, q).move(0, 0, CF - 3.2));
  for (const x of [-2.1, 2.1]) P.add('gate', pane('round', 3.0, 4.5, x, P0 + 0.02, CF - 3.42, { uv: 1.3, shade: 0.9 }));
  P.take(balcony(9.7, 1.5, 0, P0 + 5.6).move(0, 0, CF - 3.2));
  // the wall to either side of it, the block's flanks and its back
  for (const s of [-1, 1]) P.take(face(6.5, CH, 0.9, T, [{ x: 0, y: 0.6, w: 1.3, h: 2.3, kind: 'flat', fill: 'glass', frame: 0.2, sill: true }, { x: 0, y: 6.2, w: 1.6, h: 2.9, kind: 'pointed', sharp: 0.25, fill: 'glass', frame: 0.3, outer: 'flat', sill: true }], P0, q).move(s * 10.25, 0, CF));
  P.take(face(24, CH, 0.9, T, spaced(4, 4, { ...win, y: 17, w: 1.4, h: 2.7 }, 4), P0, q).move(13.5, 0, -8, Math.PI / 2)).take(face(24, CH, 0.9, T, spaced(4, 4, { ...win, y: 17, w: 1.4, h: 2.7 }, -4), P0, q).move(-13.5, 0, -8, -Math.PI / 2));
  P.take(face(27, CH, 0.9, T, [2, 9.5, 16.6].flatMap(y => spaced(6, 4.2, { ...plainWin, y, w: 1.4, h: 2.8 })), P0, q).move(0, 0, -20, Math.PI));
  // the two shoulders: from half way up the corners stand forward on a table of corbels, each with three slits, a louvre and a balconied window
  const TW = 7.4, ty = P0 + 12.6, tz = CF + 0.45 - TW / 2, tower = [...spaced(3, 0.95, { y: 0.9, w: 0.36, h: 2.0, kind: 'round', fill: 'dark', frame: 0.15, seg: 6 }), { x: 0, y: 3.7, w: 3.8, h: 1.2, kind: 'flat', fill: 'glass', on: 0, style: 3, frame: 0.14 }, { ...win, x: 0, y: 5.75, w: 1.5, h: 2.8, sill: false }];
  for (const s of [-1, 1]) { const x = s * 10.25, plan = rect(TW, TW, x, tz);
    P.take(walls(TW, TW, CT - ty, 0.5, T, { front: tower, [s > 0 ? 'right' : 'left']: tower }, ty, q).move(x, 0, CF + 0.45)); P.add('buff', slab(TW, 0.22, TW, x, ty - 0.22, tz), cornice(plan, ty - 0.1, 0.12, 0.3));
    P.add('bufffine', around(plan, 0.82, () => corbel(0.5, 0.95, 0.3, ty - 0.2), { inset: 0.3 }));
    P.take(balcony(3.6, 0.95, 0, ty + 5.6).move(x, 0, CF + 0.45)).take(balcony(3.6, 0.95, 0, ty + 5.6).move(x + s * TW / 2, 0, tz, s * Math.PI / 2)); }
  // the cornice that binds middle and shoulders, its dentils, the roof and the balustrade round it
  const crown = [[-13.95, 4.45], [-6.55, 4.45], [-6.55, 4], [6.55, 4], [6.55, 4.45], [13.95, 4.45], [13.95, -2.95], [13.5, -2.95], [13.5, -20], [-13.5, -20], [-13.5, -2.95], [-13.95, -2.95]];
  P.add('buff', cornice(crown, CT, 0.7, 0.9), slab(27, 0.3, 24, 0, CT + 0.6, -8), slab(TW, 0.3, TW, -10.25, CT + 0.6, tz), slab(TW, 0.3, TW, 10.25, CT + 0.6, tz));
  P.add('bufffine', around(crown, 0.9, () => slab(0.34, 0.3, 0.26, 0, CT - 0.34, 0.12), { inset: 0.25 })); P.add('fine', railing(crown, CT + 0.9, { h: 1.0, step: 0.46, r: 0.09 }));
  // the gable over the middle: a niche under a round head, scrolled shoulders, four pinnacles
  const gy = CT + 0.9; P.add('ashlar', shapedGable(10, 3.5, 1.1, 2.25, 1.2, TS, 2.5, 3.2).translate(0, gy, CF - 0.2)); P.add('dark', pane('pointed', 2.5, 3.2, 0, gy + 0.35, CF - 0.95, { uv: 'plain', sharp: 0.4, shade: 0.5 }));
  P.add('trim', surround('pointed', 2.5, 3.2, 0, gy + 0.35, CF - 0.2, { band: 0.24, proud: 0.1, sharp: 0.4 }), kalash(0.46, 0, gy + 6.85, CF - 0.8));
  for (const [x, h] of [[-4.7, 4.5], [4.7, 4.5], [-2.6, 6.4], [2.6, 6.4]]) P.add('ashlar', clad(slab(0.8, h, 0.8, x, gy, CF - 0.6), TS)).add('buff', slab(1.0, 0.18, 1.0, x, gy + h, CF - 0.6), kalash(0.5, x, gy + h + 0.18, CF - 0.6));
  // the turrets: an eight-sided shaft of banded brick with a ring of small blind arches, a balcony corbelled out, an open lantern of eight columns, an eave and a dome
  for (const s of [-1, 1]) { const x = s * 10.25, shaft = ngon(2.0, 8, x, tz), y1 = gy + 6.4, y2 = y1 + 0.25 + 3.0;
    P.add('stone', band([[0, 0], [0, 6.4]], shaft, gy, { tile: T, cap: true })); P.add('trim', band([[0, 0], [0.12, 0], [0.12, 0.26], [0, 0.26]], shaft, gy + 3.5), band([[0.25, 0], [0.25, 0.4], [0, 0.6]], shaft, gy));
    P.add('fine', around(shaft, 0.765, () => surround('pointed', 0.86, 1.65, 0, gy + 4.15, 0, { band: 0.12, proud: 0.07, sharp: 0.4, seg: 8 }), { ends: false }), around(shaft, 0.765, () => surround('round', 0.5, 1.9, 0, gy + 1.0, 0, { band: 0.1, proud: 0.05, seg: 6 }), { ends: false }));
    P.add('trim', band([[0, -0.95], [0.3, -0.55], [0.9, 0], [0.9, 0.25], [0, 0.25]], shaft, y1, { cap: true }), band([[0, 0], [0, 0.5], [-0.3, 0.5]], ngon(1.95, 8, x, tz), y2, { cap: true }), eave(ngon(1.95, 8, x, tz), y2 + 0.45, 1.0, 0.36, 0.1));
    P.add('fine', railing(ngon(2.78, 8, x, tz), y1 + 0.25, { h: 0.95, step: 0.42, r: 0.08 }), around(shaft, 0.52, () => corbel(0.55, 0.6, 0.14, y1 - 0.02), { ends: false }));
    for (let i = 0; i < 8; i++) { const a = (i + 0.5) / 8 * Math.PI * 2; P.add('trim', column(0.17, 3.0, x + Math.cos(a) * 1.62, y1 + 0.25, tz + Math.sin(a) * 1.62, { sides: 6 })); }
    P.add('buff', cap(1.95, 2.3, x, y2 + 0.95, tz, 14)); P.add('gold', kalash(0.5, x, y2 + 3.15, tz)); P.add('lamp', ball(0.3, x, y1 + 2.1, tz, 8)); b.light(x, y1 + 2.1, tz, WARM, 0.36, 4.5, 2.2);
    for (const cx of [-1, 1]) for (const cz of [-1, 1]) { const px = x + cx * 3.05, pz = tz + cz * 3.05; P.add('ashlar', clad(slab(1.25, 1.5, 1.25, px, gy, pz), TS)).add('bufffine', kiosk4(1.3, 1.5, px, gy + 1.5, pz)); } }

  /* ----- a pavilion to either side: an ornate window below, three above, a small gable on the parapet, a hipped roof of tiles ----- */
  const pFront = [{ x: 0, y: 0.4, w: 3.4, h: 5.7, kind: 'pointed', sharp: 0.35, fill: 'glass', on: 1, style: 1, frame: 0.5, outer: 'flat', sill: true }, ...[-4.6, 4.6].map(x => ({ x, y: 1.4, w: 1.2, h: 2.4, kind: 'flat', fill: 'glass', frame: 0.18, sill: true })),
    ...spaced(3, 4.3, { y: 8.2, w: 1.6, h: 3.1, kind: 'pointed', sharp: 0.25, fill: 'glass', frame: 0.3, outer: 'flat', sill: true })], pUp = spaced(3, 5.2, { ...win, y: 8.2, w: 1.5, h: 3.0 }, 2);
  for (const s of [-1, 1]) { const x = s * 20.2, plan = rect(13.4, 20, x, -10), top = 15.4;
    P.take(walls(13.4, 20, top - P0, 0.8, T, { front: pFront, back: [1.6, 8.2].flatMap(y => spaced(3, 4, { ...plainWin, y, w: 1.4, h: 2.8 })), [s > 0 ? 'right' : 'left']: s > 0 ? pUp : pUp.map(o => ({ ...o, x: -o.x })) }, P0, q).move(x, 0, 0));
    P.add('trim', cornice(plan, P0 + 6.9, 0.14, 0.3)); P.add('buff', cornice(plan, top, 0.5, 0.7), cornice(plan, top + 1.6, 0.12, 0.2), slab(13.4, 0.2, 20, x, top + 0.7, -10)); P.add('bufffine', around(plan, 0.9, () => slab(0.34, 0.26, 0.24, 0, top - 0.3, 0.12), { inset: 0.25 }));
    P.add('stone', band([[0, 0], [0, 0.9], [-0.35, 0.9], [-0.35, 0]], plan, top + 0.7, { tile: T })); P.add('roof', band([[0, 0], [-6.3, 4.5]], rect(12.6, 19.2, x, -10), top + 0.9, { tile: TR }));
    P.add('ashlar', shapedGable(5.2, 1.5, 0.6, 1.25, 0.8, TS, 1.2, 1.7).translate(x, top + 1.6, -0.02)); P.add('dark', pane('pointed', 1.2, 1.7, x, top + 1.95, -0.6, { uv: 'plain', sharp: 0.4, shade: 0.5 })); P.add('buff', kalash(0.34, x, top + 4.95, -0.42));
    for (const cx of [-1, 1]) for (const cz of [-0.4, -19.6]) P.add('ashlar', clad(slab(0.8, 2.3, 0.8, x + cx * 6.3, top + 0.7, cz), TS)).add('buff', kalash(0.42, x + cx * 6.3, top + 3.0, cz));
    for (const dz of [-6.9, -13.1]) P.add('buff', kalash(0.4, x, top + 5.3, dz)); }

  /* ----- the wings: six bays, a round-headed window below and a pair of lights under a white arch above, a balustrade, tiles and dormers ----- */
  const bays = [-8.25, -4.95, -1.65, 1.65, 4.95, 8.25], wFront = [...bays.map(x => ({ ...win, x, y: 1.0, w: 1.7, h: 3.7, frame: 0.36, chance: 0.5 })), ...bays.flatMap(x => [x - 0.52, x + 0.52]).map(x => ({ x, y: 6.9, w: 0.74, h: 2.6, kind: 'round', fill: 'glass', seg: 8, chance: 0.5 }))];
  const wEnd = [...spaced(4, 3.5, { ...win, y: 1.0, w: 1.6, h: 3.6, frame: 0.32 }), ...spaced(4, 3.5, { ...win, y: 6.9, w: 1.3, h: 2.9 })], WT = 12.9;
  for (const s of [-1, 1]) { const x = s * 37.2, plan = rect(20.6, 16, x, -9);
    P.take(walls(20.6, 16, WT - P0, 0.7, T, { front: wFront, back: [1.4, 6.9].flatMap(y => spaced(6, 3.3, { ...plainWin, y, w: 1.3, h: 2.8 })), [s > 0 ? 'right' : 'left']: wEnd }, P0, q).move(x, 0, -1));
    for (const bx of bays) P.add('trim', surround('round', 2.2, 3.5, x + bx, P0 + 6.62, -1, { band: 0.3, proud: 0.1 }), slab(0.18, 2.5, 0.16, x + bx, P0 + 6.9, -0.94));
    for (let i = 0; i <= 6; i++) P.add('trim', slab(0.42, WT - P0 - 5.7, 0.14, x - 9.9 + i * 3.3, P0 + 5.7, -0.93));
    P.add('trim', cornice(plan, P0 + 5.5, 0.14, 0.28)); P.add('buff', cornice(plan, WT, 0.45, 0.6), slab(20.6, 0.2, 16, x, WT + 0.5, -9)); P.add('bufffine', around(plan, 0.9, () => slab(0.32, 0.24, 0.22, 0, WT - 0.28, 0.1), { inset: 0.25 }));
    P.add('fine', railing(plan, WT + 0.6, { h: 0.9, step: 0.46, r: 0.08 }), row([x - 10.3, -1], [x + 10.3, -1], 3.3, () => [slab(0.42, 1.25, 0.42, 0, WT + 0.6, -0.05), bud(0.2, 0, WT + 2.1, -0.05)], { inset: 0.4 }), row([x + s * 10.3, s > 0 ? -1 : -17], [x + s * 10.3, s > 0 ? -17 : -1], 3.6, () => [slab(0.42, 1.25, 0.42, 0, WT + 0.6, -0.05), bud(0.2, 0, WT + 2.1, -0.05)], { inset: 0.4 }));
    P.add('roof', band([[0, 0], [-7.3, 4.3]], rect(19.4, 14.8, x, -9), WT + 0.7, { tile: TR })); for (const dx of [-2.3, 2.3]) P.add('buff', kalash(0.38, x + dx, WT + 4.9, -9));
    for (const dx of [-5.6, 0, 5.6]) { const dp = rect(1.9, 2.8, x + dx, -4.6);                                                                                 // dormers, each under its own small roof
      P.add('stone', band([[0, 0], [0, 2.1]], dp, WT + 1.5, { tile: T })); P.add('roof', band([[0.14, 0], [-0.95, 0.85]], dp, WT + 3.6, { tile: TR })); P.add('trim', surround('round', 0.9, 1.3, x + dx, WT + 2.0, -3.2, { band: 0.16, proud: 0.06, seg: 8 }));
      P.add('glass', pane('round', 0.9, 1.3, x + dx, WT + 2.0, -3.18, { on: q() < 0.6, style: 0, seg: 8 })); }
    for (const kx of [s * 28.4, s * 46]) { const kz = -2.5, kp = rect(3, 3, kx, kz), ky = WT + 0.6, kt = ky + 3.5, nw = { x: 0, y: 0.8, w: 0.9, h: 1.9, kind: 'round', fill: 'dark', frame: 0.13, seg: 8 };            // a square turret at either end, with an open kiosk on it
      P.take(walls(3, 3, 3.5, 0.4, T, { front: [nw], back: [nw], left: [nw], right: [nw] }, ky).move(kx, 0, kz + 1.5)); P.add('buff', cornice(kp, kt, 0.3, 0.4), slab(3, 0.12, 3, kx, kt + 0.28, kz), band([[0, 0], [0, 0.4], [-0.3, 0.4]], rect(2.7, 2.7, kx, kz), kt + 2.8, { cap: true }), eave(rect(2.7, 2.7, kx, kz), kt + 3.1, 0.95, 0.34, 0.1));
      for (const cx of [-1, 1]) for (const cz of [-1, 1]) P.add('bufffine', column(0.18, 2.4, kx + cx * 1.1, kt + 0.4, kz + cz * 1.1, { sides: 6 }));
      P.add('buff', cap(1.45, 1.6, kx, kt + 3.5, kz, 10)); P.add('gold', kalash(0.36, kx, kt + 5.05, kz)); } }
  P.into(b, mats);

  // floodlights in a row before the front, a few for the flanks and the back, and lamps set higher for the gable and the turrets
  for (let x = -40; x <= 40; x += 8) b.light(x, 0.6, 16, LAMP, 0.2, 14);
  for (const s of [-1, 1]) b.light(s * 60, 0.8, -4, LAMP, 0.14, 13).light(s * 60, 0.8, -14, LAMP, 0.12, 13).light(s * 30, 0.8, -32, LAMP, 0.1, 13).light(s * 20, 19, 10, LAMP, 0.14, 9).light(s * 10.25, 28, 12, LAMP, 0.3, 10).light(s * 11.5, 35, 9, LAMP, 0.4, 9).light(s * 10.25, 24.6, 6.5, LAMP, 0.42, 8).light(s * 18, 31, 1, LAMP, 0.34, 9).light(s * 10.25, 30, -8, LAMP, 0.2, 9);
  b.light(0, 0.8, -34, LAMP, 0.1, 13).light(0, 24, 13, LAMP, 0.28, 11).light(0, 30, 11, LAMP, 0.36, 9).light(0, 4.5, 3.4, WARM, 0.34, 5.5).light(0, 8.5, 2.6, WARM, 0.2, 5).light(0, 30, -18, LAMP, 0.12, 12);
  b.put(shadeMat(), shade(56, 14, 0, 0, -8));
  return b;
}
