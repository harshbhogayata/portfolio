// The other places gathered on the banks. Each is built facing south at the origin; main.js sets it down and turns it.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, facade, rng, WARM, LAMP, COOL } from './kit.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Kirti Mandir: the Gaekwads' memorial. A tall curved spire crowned with the sun, the moon and the earth, an open pavilion on either side. */
export function kirtiMandir() {
  const tile = facade({ cols: 6, rows: 2, lit: 0.16, seed: 9, stone: [208, 196, 172], opening: 0.36, jali: 0.5 }), T = { u: 6 * 4.4, v: 2 * 8.5 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.3, key: 'kirti' }), D = painted({ tint: 0xd9d0bb }), G = lit(1.25, 0.8, 0.36), b = new Builder();
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
  const pts = []; for (let i = 0; i <= 22; i++) { const t = i / 22; pts.push(new THREE.Vector2(Math.max(0.5, 9.2 * (1 - Math.pow(t, 1.9) * 0.93)), 20 * t)); }
  b.put(D, plain(new THREE.LatheGeometry(pts, 16)).translate(0, 22.6, -12), drum(1.9, 1.1, 0, 42.6, -12, 12), ball(1.1, 0, 44.7, -12));
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(D, dome(1.3, 2.2, Math.cos(a) * 8.2, 22.6, -12 + Math.sin(a) * 8.2, { seg: 8 })); }   // little spires round its foot
  b.put(gold(), plain(new THREE.TorusGeometry(1.0, 0.16, 6, 14, Math.PI)).rotateZ(Math.PI).translate(0, 47.2, -12), ball(0.75, 0, 48.3, -12), ball(0.5, 0, 46.2, -12, 8));
  for (let x = -16; x <= 16; x += 8) b.light(x, 0.6, 16, LAMP, 0.34, 15);
  b.light(0, 26, 9, LAMP, 0.6, 13).light(0, 38, 4, LAMP, 0.4, 9).light(-14, 19, 4, LAMP, 0.35, 7).light(14, 19, 4, LAMP, 0.35, 7);
  return b;
}

/* Mandvi Gate: the pavilion at the middle of the old city. Three arches a side, three storeys stepping in, a clock, a round tower at one corner. */
export function mandvi() {
  const D = painted({ tint: 0xe6e0d2 }), G = lit(1.25, 0.8, 0.36), W = painted({ tint: 0x6b4a36 }), b = new Builder();
  b.put(D, box(34, 10.5, 34, 0, 0, -17), box(35.5, 1.6, 35.5, 0, 10.5, -17));
  for (const x of [-10.5, 0, 10.5]) { b.put(G, arch(7.6, 8.2, x, 0.3, 0.08, 0.55)); const side = arch(7.6, 8.2, 0, 0.3, 0, 0.55).rotateY(Math.PI / 2).translate(17.08, 0, -17 + x); b.put(G, side, side.clone().rotateY(Math.PI).translate(0, 0, -34)); }
  for (let x = -17; x <= 17; x += 1.7) b.put(D, slab(0.4, 0.5, 0.6, x, 9.9, 0.3));                                             // the brackets under the cornice
  let y = 12.1; for (const [w, h] of [[21, 6.2], [14, 5.6], [7, 4.8]]) {                                                      // three storeys, each smaller, each under a wide roof and behind a rail
    b.put(D, box(w, h, w, 0, y, -17)); b.put(W, slab(w - 1.4, h * 0.34, w + 0.1, 0, y + h * 0.56, -17), slab(w + 0.1, h * 0.34, w - 1.4, 0, y + h * 0.56, -17));
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
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'nyay' }), D = painted({ tint: 0xd8c2a0 }), roof = painted({ tint: 0x8b5a44 }), G = lit(1.25, 0.8, 0.36), b = new Builder();
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
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'arts' }), D = painted({ tint: 0xe0cfae }), brick = painted({ tint: 0xb46a50 }), G = lit(1.25, 0.8, 0.36), b = new Builder();
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
  const bark = painted({ tint: 0x6a5846 }), leaf = painted({ tint: 0x1d4630 }), leaf2 = painted({ tint: 0x2a5a3a }), stone = painted({ tint: 0xa09684 }), b = new Builder(), r = rng(seed);
  b.put(stone, drum(8.5, 1.1, 0, 0, 0, 20), drum(9.3, 0.3, 0, 1.1, 0, 20));
  for (let i = 0; i < 7; i++) { const a = r() * 6.28, d = i ? 1.2 + r() * 3 : 0, x = Math.cos(a) * d, z = Math.sin(a) * d; b.put(bark, rod([x, 1.2, z], [x * 1.9 + (r() - 0.5) * 2, 11 + r() * 3, z * 1.9 + (r() - 0.5) * 2], i ? 0.5 + r() * 0.5 : 1.3, 7)); }
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28 + r(), d = 9 + r() * 9; b.put(bark, rod([Math.cos(a) * 2, 10, Math.sin(a) * 2], [Math.cos(a) * d, 11.5 + r() * 3, Math.sin(a) * d], 0.34, 5)); }      // boughs
  for (let i = 0; i < 26; i++) { const a = r() * 6.28, d = 4 + r() * 15, s = 3.6 + r() * 3.4; b.put(r() < 0.5 ? leaf : leaf2, plain(new THREE.IcosahedronGeometry(s, 1)).scale(1.15, 0.7, 1.15).translate(Math.cos(a) * d, 13.5 + r() * 5, Math.sin(a) * d)); }
  for (let i = 0; i < 46; i++) { const a = r() * 6.28, d = 5 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, top = 11 + r() * 2; b.put(bark, rod([x, top, z], [x + (r() - 0.5) * 0.6, d > 9.5 ? 0 : 1.3 + r() * 5, z + (r() - 0.5) * 0.6], 0.05 + r() * 0.07, 4)); }   // roots hanging down
  for (let i = 0; i < 16; i++) { const a = r() * 6.28, d = 3 + r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, y = 6.5 + r() * 3.5; b.put(bark, rod([x, y, z], [x, 11.5, z], 0.03, 3)); b.put(lit(2.0, 1.3, 0.5), ball(0.24, x, y, z, 6)); b.light(x, y, z, WARM, 0.5, 4.2, 1.9); }   // lanterns
  b.light(0, 2.4, 7, WARM, 0.5, 8).light(0, 2.4, -7, WARM, 0.4, 8);
  return b;
}
