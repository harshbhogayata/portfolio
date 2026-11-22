// The Baroda Museum and Picture Gallery. Built facing south at the origin; main.js sets it down on its bank and turns it to the lake.
import * as THREE from 'three';
import { person } from './shore.js';
import { Builder, painted, lit, slab, dome, plain, shade, shadeMat, rng, WARM, LAMP } from './kit.js';
import { masonry, rooftiles, glazing, timber, fine, clad, pane, rect, band, eave, cornice, around, corbel, kalash, Parts, face, walls, spaced } from './mason.js';

const folk = n => Array.from({ length: n }, (_, i) => person(i + 31)), gold = () => lit(1.9, 1.35, 0.42);
const made = (P, of) => { P.g[of] = P.g.stone; delete P.g.stone; return P; };            // the same wall, in another material

/* The Baroda Museum and Picture Gallery in Sayaji Baug, 1894, by Mant and Chisholm: a long range in red brick. The ground floor has
   broad windows under shallow arches; a tiled lean-to on brackets runs above them, and over it the framed gallery breaks through the
   eaves in a row of dormers, each under its own little roof. In the middle a taller pavilion carries a shaped stone gable with a carved
   rose between two tall brick shafts, each topped with a tiny domed kiosk; at either end stands a three-storey pavilion, its middle
   storey in patterned tile, under a steep hipped roof. */
export function museum() {
  const BRICK = masonry('museum-brick', { stone: [142, 68, 52], course: 0.17, block: 0.5, rows: 16, cols: 8, joint: 1.1, vary: 0.18, grime: 0.18, bands: Object.assign([], { 0: [168, 150, 120] }) }), T = BRICK.userData.tile;
  const TILE = rooftiles('museum', [150, 80, 58]), TR = TILE.userData.tile, CHQ = masonry('museum-tilework', { stone: [182, 170, 138], course: 0.3, block: 0.6, rows: 8, cols: 8, joint: 0.86, vary: 0.06, grime: 0.1, bands: [null, [112, 134, 108], null, [168, 150, 120], null, [112, 134, 108], null, [150, 92, 70]] });
  const C = painted({ tint: 0xb9a688 }), mats = { stone: BRICK, tilework: CHQ, trim: C, fine: fine(0xb9a688), glass: glazing(), wood: timber('museum', [96, 60, 36]), dark: painted({ tint: 0x17120f }), roof: TILE, timber: painted({ tint: 0x4a3222 }), beam: fine(0x4a3222) };
  const b = new Builder(), r = rng(61), q = rng(62), P = new Parts(), Y0 = 0.9, G = 7, U = Y0 + G + 0.4, E = U + 4.9, CZ = -8, range = rect(33.2, 16, 0, CZ);
  const bay = { kind: 'segment', frame: 0.2, sill: true, y: 1.2, w: 2.3, h: 4.4 }, tall = { kind: 'flat', frame: 0.14, w: 1.1, h: 3.1, y: 0.9 }, arched = { kind: 'round', frame: 0.14, w: 1.25, h: 2.5, y: 0.6, chance: 0.55 }, BAYS = [8.2, 11.55, 14.9];
  P.add('trim', band([[0.4, 0], [0.4, 0.5], [0, Y0]], rect(49, 20, 0, CZ), 0, { cap: true }));

  // the long range: brick below, the framed gallery above, a tiled lean-to between them and the great roof over all
  P.take(walls(33.2, 16, G + 0.4, 0.6, T, { front: [-1, 1].flatMap(s => BAYS.map(x => ({ ...bay, x: s * x }))), back: [-1, 1].flatMap(s => BAYS.map(x => ({ ...bay, x: s * x }))) }, Y0, q).move(0, 0, 0));
  P.take(walls(33.2, 16, 4.9, 0.5, T, { front: [-1, 1].flatMap(s => [9.9, 13.2].map(x => ({ ...tall, x: s * x }))), back: [-1, 1].flatMap(s => [8.2, 9.9, 11.55, 13.2, 14.9].map(x => ({ ...tall, x: s * x }))) }, U, q));
  P.add('trim', cornice(range, Y0 + G - 0.1, 0.22, 0.4), band([[0, 0], [0.07, 0], [0.07, 0.16], [0, 0.16]], range, U + 2.6), around(range, 1.66, () => slab(0.16, 4.9, 0.09, 0, U, 0.03)));
  P.add('roof', band([[0, 1.0], [1.5, 0], [1.5, 0.12], [0, 1.16]], rect(30.2, 16, 0, CZ), U + 0.1, { tile: TR }), band([[0.9, -0.25], [-8, 7.3]], rect(46, 16, 0, CZ), E, { tile: TR }));
  P.add('timber', eave(range, E - 0.3, 0.9, 0.2, 0.12)); P.add('beam', around(range, 1.66, () => corbel(1.15, 0.85, 0.14, U + 0.95)), around(range, 1.66, () => corbel(0.75, 0.6, 0.12, E - 0.15)));
  // the dormers: each stands on the wall, rises through the eave and carries its own hipped roof back into the great one
  for (const s of [-1, 1]) for (const bx of BAYS) { const x = s * bx, y = U + 1.1, h = 5.3;
    P.take(face(2.6, h, 0.45, T, [{ kind: 'flat', frame: 0.16, x: 0, y: 0.7, w: 1.6, h: 3.8, sill: true, chance: 0.6 }], y, q).move(x, 0, 1.1));
    for (const k of [-1, 1]) { P.add('stone', clad(slab(0.45, h, 1.1, x + k * 1.075, y, 0.55), T)); P.add('trim', slab(0.18, h, 0.12, x + k * 1.21, y, 1.11)); }
    P.add('roof', band([[0.5, -0.25], [-1.3, 1.9]], rect(2.6, 5.2, x, -1.5), y + h, { tile: TR })); P.add('timber', band([[0, 0], [0.45, 0], [0.45, 0.12], [0, 0.12]], rect(2.6, 1.1, x, 0.55), y + h - 0.2)); P.add('fine', kalash(0.18, x, y + h + 1.8, -0.2)); }

  // the middle pavilion: the door under its arch between two windows, two framed storeys over it, a steep roof
  const mid = rect(13, 18.6, 0, -7.7), M1 = Y0 + G + 0.3, M2 = M1 + 4.7, ME = M2 + 3.7;
  P.take(walls(13, 18.6, G + 0.3, 0.7, T, { front: [{ x: 0, y: 0, w: 3.4, h: 5.5, kind: 'round', fill: 'door', frame: 0.4, proud: 0.14, depth: 0.6 }, { ...bay, x: -5.25, w: 1.7 }, { ...bay, x: 5.25, w: 1.7 }], back: spaced(3, 4, { ...bay, w: 1.9 }) }, Y0, q).move(0, 0, 1.6));
  P.take(walls(13, 18.6, 4.7, 0.5, T, { front: spaced(3, 5.3, { ...tall, w: 1.5, h: 3.3, y: 0.8, chance: 0.7 }), back: spaced(3, 3.9, { ...tall, w: 1.7, h: 3.3, y: 0.8 }) }, M1, q).move(0, 0, 1.6));
  P.take(walls(13, 18.6, 3.7, 0.5, T, { front: [-5.3, -1.1, 1.1, 5.3].map(x => ({ ...arched, x })), back: spaced(4, 3, arched) }, M2, q).move(0, 0, 1.6));
  P.add('trim', cornice(mid, M1 - 0.4, 0.24, 0.4), cornice(mid, M2 - 0.3, 0.18, 0.3), around(mid, 1.86, () => slab(0.16, 4.7, 0.09, 0, M1, 0.03)), around(mid, 1.86, () => slab(0.16, 3.7, 0.09, 0, M2, 0.03)));
  P.add('timber', eave(mid, ME - 0.3, 1, 0.22, 0.12)); P.add('beam', around(mid, 1.3, () => corbel(0.85, 0.65, 0.12, ME - 0.15))); P.add('roof', band([[1, -0.28], [-6.5, 6.3]], mid, ME, { tile: TR })); P.add('fine', kalash(0.3, 0, ME + 6.2, -4.9), kalash(0.3, 0, ME + 6.2, -10.5));
  for (let i = 0; i < 5; i++) P.add('trim', slab(7 - i * 0.3, Y0 - i * 0.18, 0.7, 0, 0, 1.95 + i * 0.7));
  // the shaped stone gable with its carved rose, between the two brick shafts with their kiosks
  { const s = new THREE.Shape(); s.moveTo(-2.45, 0); s.lineTo(2.45, 0); s.lineTo(2.45, 2.7); s.absarc(0, 2.7, 2.45, 0, Math.PI, false); s.lineTo(-2.45, 0);
    const e = new THREE.ExtrudeGeometry(s, { depth: 0.6, bevelEnabled: false, curveSegments: 14 }), gy = ME - 0.2;
    P.add('trim', plain(e).translate(0, gy, 1.3), plain(new THREE.TorusGeometry(1.35, 0.18, 5, 18)).translate(0, gy + 2.7, 1.98), slab(5.6, 0.3, 0.9, 0, gy - 0.05, 1.6), kalash(0.36, 0, gy + 5.1, 1.6));
    P.add('dark', pane('circle', 2.6, 2.6, 0, gy + 1.4, 1.96, { uv: 'plain', shade: 1 })); P.add('fine', plain(new THREE.TorusGeometry(0.5, 0.1, 4, 10)).translate(0, gy + 2.7, 2.0));
    for (let i = 0; i < 8; i++) P.add('fine', plain(new THREE.BoxGeometry(0.13, 0.74, 0.1)).translate(0, 0.9, 0).rotateZ(i * Math.PI / 4).translate(0, gy + 2.7, 1.99)); }
  for (const s of [-1, 1]) { const x = s * 3.3, z = 1.0, shaft = rect(1.7, 1.7, x, z), SH = 26.6;
    P.add('stone', band([[0, 0], [0, SH - Y0]], shaft, Y0, { tile: T })); for (const y of [M1 - 0.4, M2 - 0.3, ME - 0.2, 20.4, 23.6]) P.add('trim', cornice(shaft, y, 0.14, 0.28)); P.add('trim', cornice(shaft, SH, 0.32, 0.5), band([[0.32, 0], [0.32, 0.15]], shaft, SH + 0.5, { cap: true }));
    for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.add('fine', slab(0.2, 1.3, 0.2, x + a * 0.78, SH + 0.65, z + c * 0.78));
    P.add('trim', slab(2.3, 0.18, 2.3, x, SH + 1.95, z), dome(0.95, 1.0, x, SH + 2.13, z, { seg: 10, swell: 0.05, finial: 0 })); P.add('fine', kalash(0.22, x, SH + 3.1, z)); b.put(gold(), plain(new THREE.SphereGeometry(0.16, 6, 5)).translate(x, SH + 3.75, z)); }

  // a pavilion at either end: brick, then a storey in patterned tile, then arched windows in pairs under a wide eave and a hipped roof
  for (const sx of [-1, 1]) { const x = sx * 20.4, end = rect(7.6, 18, x, CZ), out = sx > 0 ? 'right' : 'left', E1 = Y0 + G + 0.3, E2 = E1 + 4.2, EE = E2 + 3.7;
    P.take(walls(7.6, 18, G + 0.3, 0.7, T, { front: [{ ...bay, x: 0, w: 2.7 }], back: [{ ...bay, x: 0, w: 2.7 }], [out]: spaced(4, 3.9, bay) }, Y0, q).move(x, 0, 1));
    P.take(made(walls(7.6, 18, 4.2, 0.5, CHQ.userData.tile, { front: spaced(2, 2.8, { ...tall, w: 1.3, h: 2.8, y: 0.8, chance: 0.6 }), back: spaced(2, 2.8, { ...tall, w: 1.3, h: 2.8, y: 0.8 }), [out]: spaced(4, 3.9, { ...tall, w: 1.3, h: 2.8, y: 0.8 }) }, E1, q), 'tilework').move(x, 0, 1));
    P.take(walls(7.6, 18, 3.7, 0.5, T, { front: spaced(2, 2.3, arched), back: spaced(2, 2.3, arched), [out]: spaced(8, 2, arched) }, E2, q).move(x, 0, 1));
    P.add('trim', cornice(end, E1 - 0.4, 0.24, 0.4), cornice(end, E2 - 0.3, 0.18, 0.3)); for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.add('trim', slab(0.34, EE - E1, 0.34, x + a * 3.72, E1, CZ + c * 8.92));
    P.add('timber', eave(end, EE - 0.3, 1.1, 0.24, 0.12)); P.add('beam', around(end, 1.25, () => corbel(0.95, 0.7, 0.12, EE - 0.15))); P.add('roof', band([[1.1, -0.3], [-3.8, 5]], end, EE, { tile: TR }));
    for (const z of [CZ - 5.2, CZ + 5.2]) { P.add('fine', kalash(0.3, x, EE + 4.9, z)); b.put(gold(), plain(new THREE.SphereGeometry(0.14, 6, 5)).translate(x, EE + 5.75, z)); } }

  P.into(b, mats);
  const people = folk(8); for (let i = 0; i < 10; i++) b.stamp(people[(r() * 8) | 0], (r() - 0.5) * 36, 6 + r() * 7, r() * 6.28, 1, 0);
  // its floodlights: a row before the front, a few at the ends and behind, and some higher for the roofs and the shafts
  for (let x = -21.6; x <= 21.6; x += 7.2) b.light(x, 0.6, 11, LAMP, 0.2, 13);
  for (const s of [-1, 1]) b.light(s * 36, 0.8, -4, LAMP, 0.14, 12).light(s * 36, 0.8, -13, LAMP, 0.12, 12).light(s * 12, 0.8, -28, LAMP, 0.1, 12).light(s * 20.4, 14, 9, LAMP, 0.14, 8);
  b.light(0, 20, 9, LAMP, 0.22, 10).light(0, 5, 5, WARM, 0.28, 6).light(0, 26, 6, LAMP, 0.16, 7).light(-11.5, 17, 9, LAMP, 0.16, 9).light(11.5, 17, 9, LAMP, 0.16, 9);
  b.put(shadeMat(), shade(30, 13, 0, 0, -7));
  return b;
}
