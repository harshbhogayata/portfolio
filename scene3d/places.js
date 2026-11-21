// The other places gathered on the banks. Each is built facing south at the origin; main.js sets it down and turns it.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, facade, leafy, clump, shade, shadeMat, sprays, crown, ribbed, rng, WARM, LAMP, COOL } from './kit.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Kirti Mandir: the Gaekwads' memorial. A tall curved spire crowned with the sun, the moon and the earth, an open pavilion on either side. */
export function kirtiMandir() {
  const tile = facade({ cols: 6, rows: 2, lit: 0.16, seed: 9, stone: [208, 196, 172], opening: 0.36, jali: 0.5 }), T = { u: 6 * 4.4, v: 2 * 8.5 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.3, key: 'kirti' }), D = painted({ tint: 0xd9d0bb }), G = lit(0.74, 0.43, 0.17), b = new Builder();
  b.put(S, wall(40, 17, 26, 0, 0, -13, T), wall(22, 5, 16, 0, 17, -12, T, 0.3)); b.put(D, box(42, 0.7, 28, 0, 8.3, -13), box(43, 0.8, 29, 0, 17, -13), box(24, 0.6, 18, 0, 22, -12), box(46, 1, 32, 0, 0, -13));
  for (let x = -20.6; x <= 20.6; x += 1.4) b.put(D, slab(0.2, 0.8, 0.2, x, 17.8, 1.1)); b.put(D, slab(42, 0.14, 0.22, 0, 18.6, 1.1));
  for (let i = 0; i < 6; i++) b.put(D, slab(12 - i * 0.5, 0.26, 1, 0, 0.9 - i * 0.2, 1 + i));                                  // the steps
  b.put(G, arch(6.4, 11, 0, 1, 0.08, 0.5)); b.put(D, slab(9, 0.6, 2.4, 0, 12.4, 1.2)); for (const sx of [-3.9, 3.9]) b.put(D, drum(0.45, 11.4, sx, 1, 1.9, 8));
  for (const sx of [-1, 1]) {                                                                                                // the two open pavilions on the roof
    const x = sx * 14.2; b.put(D, box(10.4, 1.4, 10.4, x, 17.8, -6));
    for (const [px, pz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 1], [0, -1], [1, 0], [-1, 0]]) b.put(D, slab(0.7, 5, 0.7, x + px * 4.2, 19.2, -6 + pz * 4.2));
    b.put(D, box(12.4, 0.7, 12.4, x, 24.2, -6), dome(4.6, 3.6, x, 24.9, -6, { seg: 12, swell: 0.02 })); b.put(gold(), ball(0.4, x, 29.9, -6, 8)); b.put(G, slab(5, 0.2, 5, x, 19.3, -6)); b.light(x, 21, -6, WARM, 0.6, 5);
    for (const cz of [-1, 1]) b.put(D, chhatri(1.6, 1.7, sx * 20, 17.8, -13 + cz * 11.5));
  }
  // the shikhara, in ribbed stone
  const pts = [], grey = painted({ tint: 0xc9c2b2 }); for (let i = 0; i <= 22; i++) { const t = i / 22, rr = Math.max(0.5, 9.2 * (1 - Math.pow(t, 1.9) * 0.93)); pts.push(new THREE.Vector2(rr, 20 * t)); if (i % 3 === 2 && i < 21) pts.push(new THREE.Vector2(rr * 1.06, 20 * t + 0.05), new THREE.Vector2(rr * 1.06, 20 * t + 0.4), new THREE.Vector2(rr * 0.99, 20 * t + 0.45)); }   // a band every few courses
  b.put(grey, ribbed(pts, 16, 0.085).translate(0, 22.6, -12), ribbed([[0.02, 0], [1.7, 0.1], [2.4, 0.6], [1.7, 1.1], [0.02, 1.2]].map(p => new THREE.Vector2(...p)), 12, 0.16).translate(0, 42.5, -12)); b.put(D, ball(1.0, 0, 44.5, -12));
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(D, dome(1.3, 2.2, Math.cos(a) * 8.2, 22.6, -12 + Math.sin(a) * 8.2, { seg: 8 })); }   // little spires round its foot
  b.put(gold(), plain(new THREE.TorusGeometry(1.0, 0.16, 6, 14, Math.PI)).rotateZ(Math.PI).translate(0, 47.2, -12), ball(0.75, 0, 48.3, -12), ball(0.5, 0, 46.2, -12, 8));
  for (let x = -16; x <= 16; x += 8) b.light(x, 0.6, 16, LAMP, 0.34, 15);
  b.light(0, 26, 9, LAMP, 0.6, 13).light(0, 38, 4, LAMP, 0.4, 9).light(-14, 19, 4, LAMP, 0.35, 7).light(14, 19, 4, LAMP, 0.35, 7);
  return b;
}

/* Mandvi Gate: the pavilion at the middle of the old city. Three arches a side, three storeys stepping in, a clock, a round tower at one corner. */
export function mandvi() {
  const tile = facade({ cols: 6, rows: 2, lit: 0.5, seed: 17, stone: [228, 206, 160], opening: 0.46, pointed: true, jali: 0.5 }), T = { u: 6 * 2.5, v: 2 * 5.6 }, S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'mandvi' });
  const D = painted({ tint: 0xeadfc4 }), G = lit(0.74, 0.43, 0.17), W = painted({ tint: 0x6b4a36 }), b = new Builder();
  b.put(S, wall(34, 10.5, 34, 0, 0, -17, { u: 34 / 3, v: 21 }, 0.02)); b.put(D, box(35.5, 1.6, 35.5, 0, 10.5, -17));
  for (const x of [-10.5, 0, 10.5]) { b.put(G, arch(7.6, 8.2, x, 0.3, 0.08, 0.55)); const side = arch(7.6, 8.2, 0, 0.3, 0, 0.55).rotateY(Math.PI / 2).translate(17.08, 0, -17 + x); b.put(G, side, side.clone().rotateY(Math.PI).translate(0, 0, -34)); }
  for (let x = -17; x <= 17; x += 1.7) b.put(D, slab(0.4, 0.5, 0.6, x, 9.9, 0.3));                                             // the brackets under the cornice
  let y = 12.1; for (const [w, h] of [[21, 6.2], [14, 5.6], [7, 4.8]]) {                                                      // three storeys, each smaller, each under a wide roof and behind a rail
    b.put(S, wall(w, h, w, 0, y, -17, { u: T.u, v: h * 2 }, 0.04));
    b.put(D, box(w + 4.4, 0.5, w + 4.4, 0, y + h, -17)); for (let px = -w / 2 - 1.6; px <= w / 2 + 1.6; px += 1.3) b.put(W, slab(0.1, 1, 0.1, px, y, -17 + w / 2 + 1.7)); b.put(W, slab(w + 3.4, 0.1, 0.1, 0, y + 1, -17 + w / 2 + 1.7)); y += h + 0.5;
  }
  b.put(D, slab(2.6, 2.6, 2.6, 0, y, -17), dome(1.7, 1.6, 0, y + 2.6, -17, { seg: 8, swell: 0 })); b.put(gold(), ball(0.3, 0, y + 5, -17, 8));
  b.put(globe(), plain(new THREE.CircleGeometry(1.25, 20)).translate(0, y - 2.9, -13.45)); b.put(W, slab(0.1, 0.9, 0.05, 0, y - 2.9, -13.4), slab(0.7, 0.1, 0.05, 0.3, y - 2.9, -13.4));   // the clock and its hands
  for (const sx of [-2.8, 2.8]) { b.put(W, rod([sx, y - 8, -15], [sx, y - 4.6, -15], 0.05)); b.put(lit(1.5, 0.3, 0.2), slab(1.3, 0.8, 0.04, sx + 0.7, y - 5.4, -15)); }          // the red flags
  b.put(D, drum(3.3, 13.4, 16.2, 0, -1, 14), drum(3.7, 0.6, 16.2, 13.4, -1, 14), chhatri(3.2, 2.4, 16.2, 14, -1));
  for (const x of [-12, 0, 12]) b.light(x, 0.6, 14, LAMP, 0.36, 14);
  b.light(0, 16, 9, LAMP, 0.5, 12).light(22, 3, -6, LAMP, 0.4, 12).light(-22, 3, -17, LAMP, 0.3, 12).light(0, 4, -4, WARM, 0.7, 9);
  return b;
}

/* Nyay Mandir: the old court, which in the real city does stand on Sursagar's bank. A long arcaded front, a dome over the middle, a tower at each end. */
export function nyayMandir() {
  const tile = facade({ cols: 8, rows: 2, lit: 0.26, seed: 15, stone: [196, 150, 112], opening: 0.46, pointed: true, jali: 0.1 }), T = { u: 8 * 3.4, v: 2 * 7 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'nyay' }), D = painted({ tint: 0xd8c2a0 }), roof = painted({ tint: 0x8b5a44 }), G = lit(0.74, 0.43, 0.17), b = new Builder();
  b.put(S, wall(72, 14, 24, 0, 0, -12, T), wall(18, 18.5, 28, 0, 0, -11, T, 0.2)); b.put(D, box(74, 0.6, 26, 0, 6.9, -12), box(75, 0.8, 27, 0, 14, -12), box(20, 0.8, 30, 0, 18.5, -11), box(76, 1, 30, 0, 0, -12));
  for (let x = -36; x <= 36; x += 1.5) if (Math.abs(x) > 10) b.put(D, slab(0.2, 0.8, 0.2, x, 14.8, 0.4));
  b.put(G, arch(7, 10.5, 0, 1, 3.08, 0.5), arch(2.4, 4.6, -5.6, 9.4, 3.08, 0.5), arch(2.4, 4.6, 5.6, 9.4, 3.08, 0.5));
  for (let i = 0; i < 5; i++) b.put(D, slab(13 - i * 0.6, 0.24, 1, 0, 0.8 - i * 0.2, 3.6 + i));
  b.put(S, drum(6.4, 4.4, 0, 19.3, -11, 12, T)); b.put(D, drum(7, 0.6, 0, 23.7, -11, 12), dome(6.4, 7.2, 0, 24.3, -11, { seg: 24, swell: 0.03 })); b.put(gold(), ball(0.5, 0, 33.8, -11, 8));
  for (const sx of [-1, 1]) {                                                                                                // a square tower with a pointed roof at each end, and a smaller dome halfway
    b.put(S, wall(9, 20, 9, sx * 33, 0, -3.5, T, 0.6)); b.put(D, box(10.2, 0.6, 10.2, sx * 33, 20, -3.5)); b.put(roof, cone(6.4, 6, sx * 33, 20.6, -3.5, 4)); b.put(gold(), ball(0.34, sx * 33, 27, -3.5, 8));
    b.put(S, drum(2.6, 2.4, sx * 17, 14.8, -8, 8, T)); b.put(D, dome(2.7, 3, sx * 17, 17.2, -8, { seg: 12 }));
  }
  for (let x = -32; x <= 32; x += 8) b.light(x, 0.6, 15, WARM, 0.34, 14);
  b.light(0, 22, 8, WARM, 0.55, 11).light(-33, 18, 8, WARM, 0.3, 8).light(33, 18, 8, WARM, 0.3, 8);
  return b;
}

/* The Arts Faculty of the university: brick and stone in bands, and one of the largest masonry domes in India over the middle. */
export function artsDome() {
  const tile = facade({ cols: 8, rows: 3, lit: 0.24, seed: 21, stone: [178, 104, 78], shadow: [40, 24, 20], opening: 0.44, jali: 0.15 }), T = { u: 8 * 3.2, v: 3 * 5.4 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'arts' }), D = painted({ tint: 0xe0cfae }), brick = painted({ tint: 0xb46a50 }), G = lit(0.74, 0.43, 0.17), b = new Builder();
  b.put(S, wall(30, 19, 30, 0, 0, -15, T), wall(24, 11, 20, -27, 0, -12, T, 0.3), wall(24, 11, 20, 27, 0, -12, T, 0.5));
  b.put(D, box(31.4, 0.7, 31.4, 0, 19, -15), box(25.2, 0.6, 21.2, -27, 11, -12), box(25.2, 0.6, 21.2, 27, 11, -12), box(82, 1, 34, 0, 0, -14));
  for (const y of [5.4, 10.8]) b.put(D, box(30.8, 0.4, 30.8, 0, y, -15)); b.put(D, box(24.8, 0.4, 20.8, -27, 5.4, -12), box(24.8, 0.4, 20.8, 27, 5.4, -12));
  b.put(G, arch(6, 12, 0, 1, 0.08, 0.4));
  // the drum, banded, with its ring of windows; the dome; a small domed tower at each corner
  b.put(S, drum(12, 8, 0, 19.7, -15, 16, T)); for (const y of [22.3, 25]) b.put(D, drum(12.3, 0.4, 0, y, -15, 16)); b.put(D, drum(13, 0.8, 0, 27.7, -15, 16), dome(12, 13, 0, 28.5, -15, { seg: 32, swell: 0.02, finial: 0.2 })); b.put(gold(), ball(0.7, 0, 44.6, -15, 8));
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const x = sx * 13.4, z = -15 + sz * 13.4; b.put(brick, drum(2.3, 25, x, 0, z, 8)); b.put(D, drum(2.8, 0.5, x, 25, z, 8), chhatri(3, 2.6, x, 25.5, z)); }
  for (const sx of [-1, 1]) { b.put(brick, drum(2, 15, sx * 38.5, 0, -3, 8)); b.put(D, dome(2.2, 2.6, sx * 38.5, 15, -3, { seg: 10 })); for (let x = 16; x <= 38; x += 5.5) b.put(D, chhatri(1.4, 1.5, sx * x, 11.6, -3.2)); }
  for (let x = -36; x <= 36; x += 9) b.light(x, 0.6, 15, WARM, 0.36, 15);
  b.light(0, 24, 8, WARM, 0.6, 13).light(0, 36, 4, WARM, 0.5, 12).light(-13, 26, 2, WARM, 0.3, 7).light(13, 26, 2, WARM, 0.3, 7);
  return b;
}

/* The clock tower at Raopura, in brick, over a low arcaded market. */
export function clockTower() {
  const tile = facade({ cols: 6, rows: 1, lit: 0.5, seed: 31, stone: [170, 96, 74], shadow: [34, 22, 18], opening: 0.56 }), T = { u: 6 * 3, v: 6 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.5, key: 'clock' }), D = painted({ tint: 0xe2d2b4 }), brick = painted({ tint: 0xb06a52 }), roof = painted({ tint: 0x6f4a40 }), b = new Builder();
  b.put(S, wall(34, 6, 14, 0, 0, -7, T)); b.put(D, box(35, 0.5, 15, 0, 6, -7)); b.put(roof, slab(33, 1.6, 13, 0, 6.5, -7));
  let y = 0; for (const [w, h] of [[8, 16], [7.2, 8], [6.4, 6]]) { b.put(brick, box(w, h, w, 0, y, -7)); b.put(D, box(w + 1.4, 0.6, w + 1.4, 0, y + h, -7)); for (const s of [-1, 1]) b.put(D, slab(0.5, h, 0.5, s * (w / 2 - 0.1), y, -7 + w / 2 - 0.1)); y += h + 0.6; }
  for (const [nx, nz, turn] of [[0, 1, 0], [1, 0, Math.PI / 2], [-1, 0, -Math.PI / 2]]) {                                     // a lit clock on three sides
    const face = plain(new THREE.CircleGeometry(2.1, 24)).rotateY(turn).translate(nx * 3.25, 27.8, -7 + nz * 3.25); b.put(lit(1.7, 1.5, 1.1), face);
    b.put(roof, slab(0.14, 1.5, 0.14, nx * 3.3, 27.8, -7 + nz * 3.3), plain(new THREE.BoxGeometry(1.1, 0.14, 0.14)).rotateY(turn).translate(nx * 3.3 + (nz ? 0.45 : 0), 27.9, -7 + nz * 3.3 + (nx ? -nx * 0.45 : 0)));
  }
  b.put(roof, cone(5, 6.4, 0, y, -7, 4)); b.put(gold(), ball(0.4, 0, y + 6.7, -7, 8)); b.put(D, rod([0, y + 6.6, -7], [0, y + 9.4, -7], 0.06));
  for (const x of [-12, 0, 12]) b.light(x, 0.6, 9, LAMP, 0.34, 11);
  b.light(0, 14, 6, WARM, 0.5, 11).light(0, 26, 5, LAMP, 0.5, 8).light(0, 3, 1.5, LAMP, 0.6, 7, 2.2);
  return b;
}

/* EME Temple: an aluminium geodesic dome over a low hall, lit cool where everything else is warm. */
export function emeTemple() {
  const D = painted({ tint: 0xd5dae2 }), metal = painted({ tint: 0xb9c6d6 }), b = new Builder();
  b.put(D, box(30, 1.2, 30, 0, 0, -15), box(24, 5.4, 24, 0, 1.2, -15), box(26, 0.5, 26, 0, 6.6, -15));
  const g = new THREE.IcosahedronGeometry(10, 2), p = g.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0) p.setY(i, 0); g.computeVertexNormals(); plain(g);   // half a faceted sphere
  const flat = g.toNonIndexed(); flat.computeVertexNormals(); b.put(metal, flat.scale(1, 0.92, 1).translate(0, 7.1, -15)); b.put(gold(), ball(0.55, 0, 16.9, -15, 8), cone(0.3, 1.6, 0, 16.9, -15, 6));
  for (let i = 0; i < 4; i++) b.put(D, slab(8 - i * 0.4, 0.3, 1, 0, 0.9 - i * 0.3, 0.6 + i)); b.put(lit(0.9, 1.1, 1.4), arch(3.2, 4.4, 0, 1.2, -2.94));
  for (const [x, z] of [[-13, -2], [13, -2], [-13, -28], [13, -28]]) { b.put(D, drum(0.25, 4.6, x, 1.2, z, 6)); b.put(lit(1.2, 1.5, 1.9), ball(0.4, x, 6.2, z, 8)); b.light(x, 6.2, z, COOL, 0.9, 6, 2.6); }
  for (const x of [-9, 0, 9]) b.light(x, 0.8, 4, COOL, 0.5, 12);
  b.light(0, 12, 2, COOL, 0.8, 11).light(-12, 9, -15, COOL, 0.4, 9).light(12, 9, -15, COOL, 0.4, 9);
  return b;
}

/* Kala Ghoda, the black horse: Sayajirao on horseback, on a tall plinth, with a rail and lamps round it. */
export function kalaGhoda() {
  const stone = painted({ tint: 0xb7a78c }), bronze = painted({ tint: 0x33312e }), iron = painted({ tint: 0x33353d }), b = new Builder();
  b.put(stone, box(7, 0.6, 10, 0, 0, 0), slab(3.6, 5, 6.6, 0, 0.6, 0), slab(4.4, 0.5, 7.4, 0, 5.6, 0), slab(3.2, 0.5, 6, 0, 6.1, 0));
  const y = 6.6, part = g => b.put(bronze, g);
  part(plain(new THREE.SphereGeometry(1, 12, 10)).scale(0.95, 1.05, 2.3).translate(0, y + 3.2, 0));                          // the horse: body, neck, head, legs, tail
  part(rod([0, y + 3.7, 1.7], [0, y + 5.5, 2.8], 0.55, 8)); part(plain(new THREE.SphereGeometry(0.5, 8, 6)).scale(0.8, 0.85, 1.5).translate(0, y + 5.7, 3.4));
  for (const [x, z, lift] of [[-0.55, 1.5, 0.7], [0.55, 1.5, 0], [-0.55, -1.6, 0], [0.55, -1.6, 0]]) { part(rod([x, y + 2.6, z], [x, y + 1.3 + lift, z + (lift ? 0.7 : 0.1)], 0.24, 6)); part(rod([x, y + 1.3 + lift, z + (lift ? 0.7 : 0.1)], [x, y + lift * 1.2, z + (lift ? 0.3 : 0)], 0.19, 6)); }
  part(rod([0, y + 3.6, -2.1], [0, y + 1.9, -2.9], 0.2, 6));
  part(rod([0, y + 4, 0.1], [0, y + 5.9, 0], 0.5, 8)); part(ball(0.42, 0, y + 6.5, 0.05, 8)); part(plain(new THREE.SphereGeometry(0.5, 8, 6)).scale(1, 0.5, 1).translate(0, y + 6.85, 0));   // the rider, and his turban
  part(rod([-0.5, y + 5.5, 0.1], [-0.6, y + 4.4, 1.2], 0.15, 5)); part(rod([0.5, y + 5.5, 0.1], [0.6, y + 4.4, 1.2], 0.15, 5));
  for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, x = Math.cos(a) * 6.4, z = Math.sin(a) * 6.4; b.put(iron, slab(0.12, 1.1, 0.12, x, 0.6, z)); }
  b.put(iron, plain(new THREE.TorusGeometry(6.4, 0.05, 4, 32)).rotateX(Math.PI / 2).translate(0, 1.7, 0));
  for (const [x, z] of [[-4.6, 6], [4.6, 6], [-4.6, -6], [4.6, -6]]) { b.put(iron, slab(0.14, 3.4, 0.14, x, 0.6, z)); b.put(globe(), ball(0.3, x, 4.2, z, 8)); b.light(x, 4.2, z, LAMP, 0.7, 5, 2); }
  b.light(0, 2, 8, WARM, 0.7, 8).light(0, 2, -8, WARM, 0.4, 8);
  return b;
}

/* A banyan, the tree the city is named for: many trunks, roots hanging from the boughs, a stone seat round the foot, lanterns in the branches. */
export function banyan(seed = 4) {
  const bark = painted({ tint: 0x6a5846 }), leaf = leafy([30, 70, 46], 'in'), leaf2 = leaf, stone = painted({ tint: 0xa09684 }), b = new Builder(), r = rng(seed);
  b.put(stone, drum(8.5, 1.1, 0, 0, 0, 20), drum(9.3, 0.3, 0, 1.1, 0, 20));
  for (let i = 0; i < 7; i++) { const a = r() * 6.28, d = i ? 1.2 + r() * 3 : 0, x = Math.cos(a) * d, z = Math.sin(a) * d; b.put(bark, rod([x, 1.2, z], [x * 1.9 + (r() - 0.5) * 2, 11 + r() * 3, z * 1.9 + (r() - 0.5) * 2], i ? 0.5 + r() * 0.5 : 1.3, 7)); }
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28 + r(), d = 9 + r() * 9; b.put(bark, rod([Math.cos(a) * 2, 10, Math.sin(a) * 2], [Math.cos(a) * d, 11.5 + r() * 3, Math.sin(a) * d], 0.34, 5)); }      // boughs
  for (let i = 0; i < 9; i++) { const a = r() * 6.28, d = 3 + r() * 11; b.put(leaf, clump(4.6 + r() * 2, Math.cos(a) * d, 14.5 + r() * 3, Math.sin(a) * d, i, 0.6, 3.4)); }   // the dark inside the head
  b.put(sprays([44, 100, 62], 'a'), crown(0, 16.6, 0, 20, 6.4, 20, 130, seed, 4.6)); b.put(sprays([58, 116, 70], 'b'), crown(0, 17.6, 0, 15, 5.4, 15, 60, seed + 3, 4.2)); b.put(shadeMat(), shade(24, 24, 0, 0, 0));
  for (let i = 0; i < 46; i++) { const a = r() * 6.28, d = 5 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, top = 11 + r() * 2; b.put(bark, rod([x, top, z], [x + (r() - 0.5) * 0.6, d > 9.5 ? 0 : 1.3 + r() * 5, z + (r() - 0.5) * 0.6], 0.05 + r() * 0.07, 4)); }   // roots hanging down
  for (let i = 0; i < 16; i++) { const a = r() * 6.28, d = 3 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, y = 6.5 + r() * 3.5; b.put(bark, rod([x, y, z], [x, 11.5, z], 0.03, 3)); b.put(lit(2.0, 1.3, 0.5), ball(0.24, x, y, z, 6)); b.light(x, y, z, WARM, 0.5, 4.2, 1.9); }   // lanterns
  b.light(0, 2.4, 7, WARM, 0.5, 8).light(0, 2.4, -7, WARM, 0.4, 8);
  return b;
}

/* Sayaji Baug: the city's garden. A bandstand, the floral clock, and the track of the children's train that runs round it. */
export function sayajiBaug() {
  const lawn = painted({ tint: 0x2c5a3a }), path = painted({ tint: 0xb7a78c }), D = painted({ tint: 0xe2d8c2 }), iron = painted({ tint: 0x30323a }), sleeper = painted({ tint: 0x4a3a2c }), flower = [lit(1.6, 0.5, 0.6), lit(1.7, 1.3, 0.3), lit(1.0, 0.5, 1.5)], b = new Builder();
  b.put(lawn, drum(34, 0.3, 0, 0, 0, 40)); b.put(path, drum(27.2, 0.36, 0, 0, 0, 40)); b.put(lawn, drum(24.8, 0.42, 0, 0, 0, 40));
  for (let i = 0; i < 72; i++) { const a = i / 72 * 6.283; b.put(sleeper, plain(new THREE.BoxGeometry(2, 0.12, 0.34)).rotateY(-a).translate(Math.cos(a) * 26, 0.42, Math.sin(a) * 26)); }
  for (const rr of [25.4, 26.6]) b.put(iron, plain(new THREE.TorusGeometry(rr, 0.06, 4, 96)).rotateX(Math.PI / 2).translate(0, 0.52, 0));
  // the bandstand: eight posts, a rail, a domed roof
  b.put(D, drum(6.4, 1.1, 0, 0.4, 0, 8), drum(7.4, 0.4, 0, 6.2, 0, 8), dome(6.6, 3.4, 0, 6.6, 0, { seg: 16, swell: 0.02 })); b.put(lit(1.9, 1.35, 0.42), ball(0.34, 0, 11.4, 0, 8));
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; b.put(D, drum(0.24, 4.7, Math.cos(a) * 5.6, 1.5, Math.sin(a) * 5.6, 8)); b.put(lit(1.8, 1.4, 0.8), ball(0.22, Math.cos(a) * 5.6, 5.6, Math.sin(a) * 5.6, 6)); }
  b.light(0, 5, 0, WARM, 1.1, 8, 3).light(0, 3, 9, WARM, 0.5, 8);
  // the floral clock: a bank of flowers with a dial laid out on it
  b.put(lawn, plain(new THREE.CylinderGeometry(6, 6, 0.5, 28)).rotateX(0.5).translate(0, 1.5, 15.5)); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; b.put(flower[i % 3], ball(0.34, Math.sin(a) * 4.8, 1.75 + Math.cos(a) * 2.3, 15.9 - Math.cos(a) * 4.2 + 4.1, 6)); }
  b.put(D, plain(new THREE.BoxGeometry(0.2, 0.1, 3.4)).rotateX(0.5).translate(0, 2.4, 14.4), plain(new THREE.BoxGeometry(2.4, 0.1, 0.2)).rotateX(0.5).translate(1.2, 1.8, 15.6)); b.light(0, 5, 20, LAMP, 0.9, 8, 3);
  for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283, x = Math.cos(a) * 31, z = Math.sin(a) * 31; b.put(iron, rod([x, 0.3, z], [x, 4.6, z], 0.07, 4)); b.put(lit(1.8, 1.4, 0.8), ball(0.26, x, 4.8, z, 6)); b.light(x, 4.8, z, LAMP, 0.7, 5.5, 3.2); }
  return b;
}
// The train itself: an engine and three open coaches, strung with bulbs.
export function toyTrain() {
  const g = new THREE.Group(), cars = [];
  [[0xc0392b, 1], [0x2e7d5b, 0], [0xd9a021, 0], [0x2f5fa8, 0]].forEach(([colour, engine], i) => {
    const c = new THREE.Group(), body = new THREE.MeshBasicMaterial({ color: new THREE.Color(colour).multiplyScalar(0.7) }), roof = new THREE.MeshBasicMaterial({ color: 0xe8dcc0 }), black = new THREE.MeshBasicMaterial({ color: 0x15161a });
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, engine ? 1.5 : 0.9, 3.2), body); base.position.y = engine ? 1.25 : 0.95; c.add(base);
    if (engine) { const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.8, 10).rotateX(Math.PI / 2), body); boiler.position.set(0, 1.5, 1.9); c.add(boiler); const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.9, 8), black); stack.position.set(0, 2.5, 2.3); c.add(stack);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.6, 1.8) })); lamp.position.set(0, 1.6, 2.9); c.add(lamp); }
    else { const top = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.12, 3.3), roof); top.position.y = 2.6; c.add(top); for (const [x, z] of [[-0.75, -1.5], [0.75, -1.5], [-0.75, 1.5], [0.75, 1.5]]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.3, 0.08), roof); p.position.set(x, 2, z); c.add(p); }
      const glow = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.7, 0.8) })); glow.position.y = 2.5; c.add(glow); }
    for (const z of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 1.8, 10).rotateZ(Math.PI / 2), black); w.position.set(0, 0.5, z); c.add(w); }
    g.add(c); cars.push(c);
  });
  return { g, cars };
}
