// More of Vadodara: Khanderao Market, Lehripura Gate, the Music College, the Baroda Museum; the old city's roofs on the near bank;
// a garba ground under its roof of bulbs; lotus on the water. Each place is built facing south at the origin, like the others.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, ring, facade, block, leafy, clump, shade, shadeMat, unmirrored, rng, at, R, DEG, WARM, LAMP, COOL, TEAL, ROSE } from './kit.js';
import { free, person, cart } from './shore.js';

const gold = () => lit(1.9, 1.35, 0.42), tiles = () => painted({ tint: 0xa5553a });
const pitched = (w, d, x, y, z, rise = 0.42) => [1, -1].map(s => plain(new THREE.BoxGeometry(w, 0.3, d / 2 / Math.cos(rise) + 0.5)).rotateX(s * rise).translate(x, y + Math.tan(rise) * d / 4, z + s * d / 4));   // a tiled roof, two slopes
const pyramid = (half, deep, h, x, y, z) => plain(new THREE.ConeGeometry(half * 1.42, h, 4)).rotateY(Math.PI / 4).scale(1, 1, deep / half).translate(x, y + h / 2, z);
const folk = n => Array.from({ length: n }, (_, i) => person(i + 31));

/* Khanderao Market: built in 1906 as the city's market, its gateway copied from the gates of Dabhoi. A great arch between two towers,
   a dome over it, and a long arcaded range to either side ending in a domed pavilion. */
export function khanderao() {
  const tile = facade({ cols: 8, rows: 2, lit: 0.36, seed: 31, stone: [222, 198, 152], opening: 0.56, pointed: true, jali: 0.4 }), T = { u: 8 * 3.4, v: 2 * 5.4 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'khanderao' }), D = painted({ tint: 0xe8dfca }), G = lit(0.74, 0.43, 0.17), b = new Builder(), r = rng(31);
  for (const sx of [-1, 1]) {
    b.put(S, wall(15, 10.8, 11, sx * 14.5, 0, -5.5, T, sx * 0.2));
    b.put(D, box(15.6, 0.5, 11.6, sx * 14.5, 5.3, -5.5), box(16, 0.6, 12, sx * 14.5, 10.8, -5.5));
    for (let x = 7.8; x <= 21.4; x += 1.36) b.put(D, slab(0.6, 0.75, 0.3, sx * x, 11.4, 0.3));                                  // battlements along the parapet
    const ex = sx * 22.6;                                                                                                    // the pavilion at the end of the range
    b.put(S, wall(7, 14.4, 12.6, ex, 0, -5.5, T, 0.5)); b.put(D, box(7.8, 0.6, 13.4, ex, 14.4, -5.5), drum(3.1, 1.2, ex, 15, -5.5, 8), dome(3.1, 3.6, ex, 16.2, -5.5, { seg: 14, swell: 0.08 }));
    for (const [cx, cz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, chhatri(1.3, 1.5, ex + cx * 2.9, 15, -5.5 + cz * 5.4));
    b.put(D, box(2.6, 3.2, 1.3, ex, 7.4, 1.2), slab(3.2, 0.25, 1.7, ex, 7.2, 1.3), dome(1.3, 1.1, ex, 10.6, 1.2, { seg: 8, finial: 0 }));   // a balcony on its face
  }
  // the gateway
  b.put(S, wall(14, 16.5, 14, 0, 0, -6, T, 0.1)); b.put(G, arch(6.2, 11.2, 0, 0, 1.06, 0.6)); b.put(D, box(15, 0.7, 15, 0, 16.5, -6), slab(8.4, 0.5, 0.5, 0, 12.2, 1.2));
  for (const sx of [-1, 1]) { b.put(D, drum(1.7, 20.5, sx * 6.2, 0, 1, 8), drum(2.2, 0.5, sx * 6.2, 12, 1, 8), drum(2.2, 0.5, sx * 6.2, 17, 1, 8), dome(1.9, 2.6, sx * 6.2, 20.5, 1, { seg: 10, swell: 0.1 })); b.put(G, slab(0.7, 1.6, 0.1, sx * 6.2, 13.4, 2.72), slab(0.7, 1.6, 0.1, sx * 6.2, 8.4, 2.72)); }
  b.put(D, drum(5.6, 3, 0, 17.2, -6, 12), drum(6.1, 0.5, 0, 20.2, -6, 12), dome(5.5, 6.8, 0, 20.7, -6, { seg: 20, swell: 0.1 })); b.put(gold(), ball(0.5, 0, 30, -6, 8));
  for (const [cx, cz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, chhatri(2.2, 2.4, cx * 5.6, 17.2, -6 + cz * 5.6));
  for (let i = 0; i < 4; i++) b.put(D, slab(10 - i * 0.6, 0.22, 0.8, 0, 0.66 - i * 0.22, 1.6 + i * 0.8));
  // the market spills out in front: carts, people, bulbs
  const people = folk(8); [-20.5, -12.5, 11, 16, 21.5].forEach((x, i) => b.stamp(cart(i + 1), x, 8.5 + (i % 2) * 1.6, 0, 1.1, 0));
  for (let i = 0; i < 26; i++) b.stamp(people[(r() * 8) | 0], (r() - 0.5) * 46, 4.5 + r() * 8, r() * 6.28, 1, 0);
  for (let x = -22; x <= 22; x += 8.8) b.light(x, 0.6, 9, LAMP, 0.36, 13); b.light(0, 6, 5, WARM, 0.9, 9).light(0, 23, 5, LAMP, 0.5, 11).light(-22.6, 12, 4, LAMP, 0.35, 8).light(22.6, 12, 4, LAMP, 0.35, 8);
  b.put(shadeMat(), shade(34, 13, 0, 0, -3));
  return b;
}

/* Lehripura Gate: the west gate of the old walled city, a few steps from the lake. Three pointed arches, the road through the middle one,
   a gallery of screened windows above, and a small pavilion with a curved roof on top. */
export function lehripura() {
  const tile = facade({ cols: 6, rows: 1, lit: 0.5, seed: 44, stone: [216, 180, 124], opening: 0.44, pointed: true, jali: 0.6 }), T = { u: 6 * 2.6, v: 5.2 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'lehripura' }), P = painted({ tint: 0xd8b47c }), D = painted({ tint: 0xead9b4 }), road = painted({ tint: 0x33343c }), iron = painted({ tint: 0x30323a }), b = new Builder(), r = rng(44);
  for (const x of [-10.6, -4.6, 4.6, 10.6]) { b.put(P, box(2.8, 11, 7, x, 0, -3.5)); b.put(D, slab(3.2, 0.4, 7.4, x, 0, -3.5), slab(3.1, 0.3, 7.3, x, 6.6, -3.5)); }
  b.put(P, box(6.4, 1.6, 7, 0, 9.4, -3.5)); for (const sx of [-1, 1]) b.put(P, box(3.2, 4, 7, sx * 7.6, 7, -3.5));
  const haunch = (x, y, s) => plain(new THREE.BoxGeometry(s, s, 6.9)).rotateZ(Math.PI / 4).translate(x, y, -3.5);            // the corners filled in, so each opening comes to a point
  b.put(P, haunch(-3.2, 9.4, 2.6), haunch(3.2, 9.4, 2.6)); for (const sx of [-1, 1]) b.put(P, haunch(sx * 6, 7, 1.5), haunch(sx * 9.2, 7, 1.5));
  b.put(S, wall(24, 5.2, 7, 0, 11, -3.5, T)); b.put(D, box(24.8, 0.5, 7.8, 0, 11, -3.5), box(24.8, 0.5, 7.8, 0, 16.2, -3.5));
  for (let x = -11.8; x <= 11.8; x += 1.31) b.put(D, slab(0.62, 0.8, 0.3, x, 16.7, 0.1), slab(0.62, 0.8, 0.3, x, 16.7, -7.1));  // battlements
  for (const sx of [-1, 1]) { b.put(D, box(2.5, 3, 1.2, sx * 7.6, 12, 0.6), slab(3, 0.25, 1.6, sx * 7.6, 11.8, 0.7), dome(1.25, 1.1, sx * 7.6, 15, 0.6, { seg: 8, finial: 0 })); b.put(lit(1.4, 0.9, 0.42), slab(1.5, 1.7, 0.08, sx * 7.6, 12.5, 1.22)); }   // balconies
  for (const x of [-2.6, 0, 2.6]) for (const z of [-5.3, -1.7]) b.put(D, slab(0.28, 3.2, 0.28, x, 16.7, z));                  // the pavilion on the roof
  b.put(D, slab(6.4, 0.3, 4.6, 0, 19.9, -3.5), plain(new THREE.CylinderGeometry(2.3, 2.3, 6.6, 10, 1, false, 0, Math.PI)).rotateZ(Math.PI / 2).translate(0, 20.1, -3.5)); b.put(gold(), ball(0.3, 0, 22.7, -3.5, 6), ball(0.24, -2.6, 22.5, -3.5, 6), ball(0.24, 2.6, 22.5, -3.5, 6));
  for (const sx of [-1, 1]) b.put(D, chhatri(1.9, 2, sx * 9.8, 16.7, -3.5));
  for (const sx of [-1, 1]) { b.put(iron, rod([sx * 4.4, 16.7, -0.4], [sx * 4.4, 22, -0.4], 0.05, 4)); b.put(lit(1.7, 0.7, 0.15), slab(1.9, 1.1, 0.05, sx * 4.4 + 0.98, 21.3, -0.4)); }
  // the road through it and on into the old city, with its lamps
  b.put(road, slab(6.2, 0.1, 70, 0, 0.02, -24)); for (let z = -12; z > -58; z -= 13) for (const sx of [-1, 1]) { b.put(iron, rod([sx * 3.6, 0, z], [sx * 3.6, 5, z], 0.07, 5)); b.put(lit(1.9, 1.5, 0.9), ball(0.24, sx * 3.6, 5.2, z, 6)); b.light(sx * 3.6, 5, z, LAMP, 0.8, 6, 3.4); }
  const people = folk(8); for (let i = 0; i < 12; i++) b.stamp(people[(r() * 8) | 0], (r() - 0.5) * 16, 2 + r() * 7, r() * 6.28, 1, 0);
  b.light(0, 8.2, -3.5, WARM, 1.1, 6.5, 3.2).light(-7.6, 5.6, -3.5, WARM, 0.7, 4.5, 2.4).light(7.6, 5.6, -3.5, WARM, 0.7, 4.5, 2.4).light(0, 18.4, -3.5, WARM, 0.7, 4.5, 2.2);
  for (let x = -9; x <= 9; x += 6) b.light(x, 0.6, 7.5, LAMP, 0.38, 12);
  b.put(shadeMat(), shade(17, 8, 0, 0, -3.5));
  return b;
}

/* The Music College on the bank of the lake, where the Faculty of Performing Arts teaches: two floors of verandahs under a tiled roof,
   a taller middle with a dome, a square bay at each end. */
export function musicCollege() {
  const tile = facade({ cols: 9, rows: 2, lit: 0.44, seed: 52, stone: [228, 208, 162], opening: 0.6, jali: 0.1 }), T = { u: 9 * 3.6, v: 2 * 4.8 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'music' }), D = painted({ tint: 0xefe4c8 }), roof = tiles(), lawn = painted({ tint: 0x2c5a3a }), iron = painted({ tint: 0x30323a }), b = new Builder(), r = rng(52);
  b.put(S, wall(34, 9.6, 12, 0, 0, -6, T)); b.put(D, box(34.8, 0.5, 12.8, 0, 9.6, -6)); b.put(roof, pitched(35.4, 13.6, 0, 10.1, -6));
  b.put(D, slab(34, 0.3, 1.9, 0, 4.6, 0.9), slab(34.6, 0.3, 2.2, 0, 9.3, 1));                                                 // the verandahs in front of both floors
  for (let x = -16.2; x <= 16.2; x += 3.6) for (const y of [0, 4.9]) b.put(D, drum(0.26, 4.5, x, y, 1.7, 8), slab(0.7, 0.3, 0.7, x, y + 4.3, 1.7));
  for (let x = -16; x <= 16; x += 0.9) b.put(D, slab(0.1, 0.8, 0.1, x, 4.9, 1.75)); b.put(D, slab(34, 0.1, 0.14, 0, 5.7, 1.75));
  b.put(S, wall(9, 14.4, 13.5, 0, 0, -6.2, T, 0.33)); b.put(D, box(9.8, 0.6, 14.3, 0, 14.4, -6.2), drum(3, 1.2, 0, 15, -6.2, 8), dome(2.9, 3.4, 0, 16.2, -6.2, { seg: 14, swell: 0.06 })); b.put(lit(0.74, 0.43, 0.17), arch(3.2, 5.6, 0, 0.3, 0.6));
  for (const [cx, cz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, chhatri(1.3, 1.4, cx * 3.8, 15, -6.2 + cz * 6));
  for (const sx of [-1, 1]) { b.put(S, wall(6.5, 11.4, 13.2, sx * 15.5, 0, -6, T, 0.6)); b.put(D, box(7.2, 0.5, 13.9, sx * 15.5, 11.4, -6)); b.put(roof, pyramid(3.9, 7.3, 3.4, sx * 15.5, 11.9, -6)); b.put(gold(), ball(0.24, sx * 15.5, 15.5, -6, 6)); }
  for (let i = 0; i < 5; i++) b.put(D, slab(7 - i * 0.4, 0.2, 0.7, 0, 0.8 - i * 0.2, 2.6 + i * 0.7));
  b.put(lawn, slab(38, 0.2, 9, 0, 0, 10)); for (const x of [-15, -5, 5, 15]) { b.put(iron, rod([x, 0, 12], [x, 4.2, 12], 0.07, 5)); b.put(lit(1.9, 1.5, 0.9), ball(0.26, x, 4.4, 12, 6)); b.light(x, 4.4, 12, LAMP, 0.75, 6, 3.4); }
  const people = folk(8); for (let i = 0; i < 9; i++) b.stamp(people[(r() * 8) | 0], (r() - 0.5) * 30, 4 + r() * 9, r() * 6.28, 1, 0.2);
  for (let x = -14.4; x <= 14.4; x += 7.2) b.light(x, 3.6, 0.9, WARM, 0.55, 4.6).light(x, 8.2, 0.9, WARM, 0.45, 4.2);
  b.light(0, 12, 5, LAMP, 0.5, 9).light(0, 0.6, 9, LAMP, 0.3, 12);
  b.put(shadeMat(), shade(24, 11, 0, 0, -4));
  return b;
}

/* The Baroda Museum and Picture Gallery in Sayaji Baug, 1894: red brick banded with cream, a wooden gallery along the upper floor,
   a domed middle, a tiled roof. */
export function museum() {
  const tile = facade({ cols: 10, rows: 2, lit: 0.3, seed: 61, stone: [186, 92, 64], shadow: [40, 22, 18], opening: 0.5, jali: 0.5 }), T = { u: 10 * 3.4, v: 2 * 6.2 };
  const S = painted({ map: tile.map, emissiveMap: tile.emissiveMap, glow: 1.4, key: 'museum' }), C = painted({ tint: 0xeadcbc }), wood = painted({ tint: 0x5a3a28 }), roof = tiles(), b = new Builder(), r = rng(61);
  b.put(S, wall(48, 12.4, 14, 0, 0, -7, T)); b.put(C, box(48.6, 0.45, 14.6, 0, 6.1, -7), box(49.2, 0.7, 15.2, 0, 12.4, -7), box(49, 0.8, 15, 0, 0, -7)); b.put(roof, pitched(49.8, 15.8, 0, 13.1, -7));
  b.put(wood, slab(48, 0.25, 1.5, 0, 6.3, 0.75), slab(48.4, 0.2, 1.9, 0, 11.3, 0.85), slab(48, 0.1, 0.12, 0, 7.4, 1.4));    // the gallery
  for (let x = -23.6; x <= 23.6; x += 3.37) b.put(wood, slab(0.2, 5, 0.2, x, 6.4, 1.35));
  b.put(S, wall(12, 18, 16, 0, 0, -7, T, 0.25)); b.put(C, box(12.8, 0.7, 16.8, 0, 18, -7), box(12.6, 0.45, 16.6, 0, 9, -7), drum(4.4, 2.2, 0, 18.7, -7, 10), dome(4.3, 5.2, 0, 20.9, -7, { seg: 16, swell: 0.07 })); b.put(lit(0.74, 0.43, 0.17), arch(4.4, 8, 0, 0.8, 1.06));
  for (const [cx, cz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(C, chhatri(1.8, 1.9, cx * 5, 18.7, -7 + cz * 7));
  for (const sx of [-1, 1]) { b.put(S, wall(8, 15, 15.4, sx * 22, 0, -7, T, 0.7)); b.put(C, box(8.8, 0.6, 16.2, sx * 22, 15, -7), box(8.6, 0.45, 16, sx * 22, 7.6, -7)); b.put(roof, pyramid(4.7, 8.5, 4, sx * 22, 15.6, -7)); b.put(C, chhatri(1.3, 1.3, sx * 22, 18.6, -7)); }
  for (let i = 0; i < 6; i++) b.put(C, slab(9 - i * 0.4, 0.22, 0.8, 0, 0.9 - i * 0.18, 1.4 + i * 0.8));
  const people = folk(8); for (let i = 0; i < 10; i++) b.stamp(people[(r() * 8) | 0], (r() - 0.5) * 36, 5 + r() * 8, r() * 6.28, 1, 0);
  for (let x = -20; x <= 20; x += 8) b.light(x, 0.6, 10, LAMP, 0.36, 14); b.light(0, 22, 6, LAMP, 0.5, 10).light(0, 5, 4, WARM, 0.8, 7).light(-22, 12, 5, LAMP, 0.3, 8).light(22, 12, 5, LAMP, 0.3, 8);
  for (let x = -20.2; x <= 20.2; x += 6.74) b.light(x, 9.6, 0.9, WARM, 0.4, 4.2);
  b.put(shadeMat(), shade(32, 13, 0, 0, -5));
  return b;
}

/* The old city on the near bank: low houses packed close, lanes between them, and life on the roofs: tanks, washing on a line,
   a cot put out for the night, a bulb over a stair door. Kept low, because the camera looks in over it. */
export function oldCity() {
  const w = new Builder(), r = rng(91), T = { u: 8 * 3.0, v: 8 * 2.9 };
  const walls = [[150, 126, 100], [128, 112, 104], [156, 140, 118], [112, 120, 132], [146, 110, 96]].map((c, i) => { const t = block({ seed: 70 + i, lit: 0.26, wall: c }); return painted({ map: t.map, emissiveMap: t.emissiveMap, glow: 1.4, key: 'pol' + i }); });
  const roofs = [painted({ tint: 0xa9a59c }), painted({ tint: 0xb6b0a4 }), painted({ tint: 0x9b978e })], lime = painted({ tint: 0xb9b2a4 }), tank = painted({ tint: 0x15161b }), tin = painted({ tint: 0x7d828c }), wood = painted({ tint: 0x5c4630 }), rope = painted({ tint: 0x9a927e }), leaf = leafy([52, 108, 66], 'b');
  const cloth = [0xc23a4a, 0x2f6fb0, 0xe0b23a, 0xe8e2d2, 0x2f8a6a, 0xd0602e, 0x8a4aa8].map(c => painted({ tint: c })), people = folk(8), bulb = lit(2, 1.5, 0.8);
  w.put(painted({ tint: 0x4a4640 }), ring(R + 28.2, R + 150, 1.53, 206, 128, 96));                                             // the lanes are paved
  const face = a => Math.atan2(-Math.cos(a * DEG), Math.sin(a * DEG));
  for (let d = R + 37; d < R + 136;) {
    const depth = 8 + r() * 4, cap = Math.min(12.5, 4.2 + (d - R - 37) * 0.1);
    for (let a = 207; a < 333;) {
      const wd = 6.5 + r() * 6.5, lane = r() < 0.2, mid = a + wd / (d * DEG) / 2, p = at(mid, d + depth / 2); a += (wd + (lane ? 2.6 : 0.3)) / (d * DEG);
      if (!free(p.x, p.z, 7) || (d > R + 100 && r() < 0.3)) continue;
      const h = cap * (0.62 + r() * 0.38), k = (r() * 5) | 0, b = new Builder(), roof = roofs[(r() * 3) | 0], rx = () => (r() - 0.5) * (wd - 2.4), rz = () => (r() - 0.5) * (depth - 2.4);
      b.put(walls[k], wall(wd, h, depth, 0, 0, 0, T, r() * 3)); b.put(roof, slab(wd, 0.18, depth, 0, h, 0));
      b.put(lime, slab(wd, 0.6, 0.22, 0, h, depth / 2 - 0.11), slab(wd, 0.6, 0.22, 0, h, -depth / 2 + 0.11), slab(0.22, 0.6, depth, wd / 2 - 0.11, h, 0), slab(0.22, 0.6, depth, -wd / 2 + 0.11, h, 0));   // the parapet
      if (r() < 0.62) { const x = rx(), z = rz(); b.put(tin, slab(1.5, 0.9, 1.5, x, h + 0.18, z)); b.put(tank, drum(0.62, 1.2, x, h + 1.08, z, 9)); }
      if (r() < 0.42) { const x = rx() * 0.6, z = -depth / 2 + 1.5; b.put(walls[k], slab(2.4, 2.3, 2.6, x, h + 0.18, z)); b.put(roof, slab(2.7, 0.14, 2.9, x, h + 2.48, z)); if (r() < 0.6) { b.put(bulb, ball(0.1, x, h + 2.1, z + 1.42, 5)); b.light(x, h + 2, z + 1.8, WARM, 0.75, 3.6, 1.7); } }   // the head of the stairs, a bulb over its door
      if (r() < 0.28) { const z = rz(); b.put(rope, rod([-wd / 2 + 0.4, h + 1.9, z], [wd / 2 - 0.4, h + 1.9, z], 0.02, 3), rod([-wd / 2 + 0.4, h + 0.2, z], [-wd / 2 + 0.4, h + 1.9, z], 0.04, 4), rod([wd / 2 - 0.4, h + 0.2, z], [wd / 2 - 0.4, h + 1.9, z], 0.04, 4));
        for (let x = -wd / 2 + 1; x < wd / 2 - 1; x += 0.9 + r() * 0.5) if (r() < 0.75) b.put(cloth[(r() * 7) | 0], slab(0.62, 0.95, 0.03, x, h + 0.92, z)); }                                                  // washing on a line
      if (r() < 0.2) { const x = rx(), z = rz(); b.put(wood, slab(1.9, 0.08, 0.9, x, h + 0.62, z)); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(wood, slab(0.07, 0.44, 0.07, x + sx * 0.88, h + 0.18, z + sz * 0.38)); }   // a cot
      if (r() < 0.3) for (let i = 0; i < 3; i++) { const x = rx(), z = depth / 2 - 0.6; b.put(wood, drum(0.2, 0.3, x, h + 0.18, z, 6)); b.put(leaf, clump(0.34, x, h + 0.72, z, i, 1)); }                      // pots along the front
      if (r() < 0.24) { const x = rx(), z = rz(); b.stamp(people[(r() * 8) | 0], x, z, r() * 6.28, 1, h + 0.18); if (r() < 0.5) b.stamp(people[(r() * 8) | 0], x + 0.7, z + 0.3, r() * 6.28, 1, h + 0.18); b.light(x, h + 2.2, z, WARM, 0.5, 3.4); }
      if (r() < 0.08) for (let i = 0; i <= 8; i++) b.spark(-wd / 2 + i * wd / 8, h + 0.82, depth / 2, [WARM, ROSE, TEAL, LAMP][i % 4], 1.1, 1);                                                             // a string of lights along the parapet
      if (r() < 0.16) { const x = rx(), z = rz(); b.put(tin, plain(new THREE.CylinderGeometry(0.42, 0.05, 0.22, 10)).rotateX(-0.7).translate(x, h + 1.05, z), rod([x, h + 0.18, z], [x, h + 0.95, z], 0.03, 4)); }   // a dish
      if (r() < 0.46) { b.put(bulb, ball(0.13, 0, 3.4, depth / 2 + 0.5, 5)); b.light(0, 3.4, depth / 2 + 1.1, WARM, 0.95, 6, 2.2); }                                                                        // a lamp in the lane
      w.stamp(b, p.x, p.z, face(mid), 1, 1.52);
    }
    d += depth + 2.8;
  }
  return w;
}

/* A garba ground: a mast with strings of bulbs fanned out from it, the goddess's lamp at the foot, and the dancers going round it in rings.
   The dancers come back separately, ring by ring, so that they can turn. */
export function garba() {
  const b = new Builder(), r = rng(123), sand = painted({ tint: 0x9c8a6c }), D = painted({ tint: 0xe9dfc6 }), iron = painted({ tint: 0x30323a }), wood = painted({ tint: 0x6b4c34 }), red = painted({ tint: 0xb23a32 }), RAD = 20, POLE = 15.5;
  b.put(painted({ tint: 0x6a5f4c }), ring(RAD + 1, RAD + 7.5, 0.05, 0, 360, 40)); b.put(painted({ tint: 0x857660 }), ring(RAD + 1, RAD + 4.6, 0.1, 0, 360, 40)); b.put(sand, drum(RAD + 3, 0.16, 0, 0, 0, 40)); b.put(shadeMat(), shade(RAD + 11, RAD + 11, 0, 0, 0)); b.put(lit(0.9, 0.3, 0.3), ring(3.2, 3.5, 0.2, 0, 360, 32)); b.put(lit(0.9, 0.75, 0.2), ring(4, 4.2, 0.2, 0, 360, 32)); b.put(lit(0.85, 0.85, 0.8), ring(2.5, 2.7, 0.2, 0, 360, 32));
  b.put(D, drum(2.2, 0.5, 0, 0.16, 0, 8)); for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, slab(0.16, 2.6, 0.16, x * 1.1, 0.66, z * 1.1)); b.put(red, slab(2.9, 0.14, 2.9, 0, 3.26, 0)); b.put(D, dome(1.2, 1.3, 0, 3.4, 0, { seg: 10 }));
  b.put(lit(2.4, 1.6, 0.6), ball(0.3, 0, 1.3, 0, 8)); b.light(0, 1.6, 0, WARM, 1.5, 6, 4);
  b.put(iron, rod([0.9, 0, 0.9], [0.9, POLE, 0.9], 0.14, 6)); b.put(lit(2.2, 1.8, 1.0), ball(0.4, 0.9, POLE + 0.3, 0.9, 8));
  const tints = [WARM, LAMP, ROSE, WARM, TEAL, LAMP];
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * 6.283, px = Math.cos(a) * (RAD + 1.6), pz = Math.sin(a) * (RAD + 1.6);
    b.put(iron, rod([px, 0, pz], [px, 6.2, pz], 0.08, 5)); b.put(lit(1.9, 1.5, 0.9), ball(0.2, px, 6.3, pz, 6)); b.light(px, 6, pz, LAMP, 0.6, 6.5);
    for (let k = 1; k < 19; k++) { const t = k / 19, sag = Math.sin(t * Math.PI) * 1.5; b.spark(0.9 + (px - 0.9) * t, POLE + (6.2 - POLE) * t - sag, 0.9 + (pz - 0.9) * t, tints[(i + k) % 6], 1.2, 1); }
    if (i % 3 === 0) b.light(px * 0.55, 8.5, pz * 0.55, WARM, 1.0, 9.5);
  }
  // the stage for the singers at the back, people watching round the edge, a stall or two
  b.put(wood, box(11, 1.1, 4.4, 0, 0.16, -(RAD + 6.2))); b.put(red, slab(11.4, 4.6, 0.2, 0, 1.26, -(RAD + 8.5))); b.put(lit(1.5, 1.0, 0.45), slab(9, 0.5, 0.1, 0, 5.2, -(RAD + 8.3)));
  for (const x of [-6.6, 6.6]) b.put(iron, slab(1.4, 2.6, 1.2, x, 0.16, -(RAD + 5.6)));
  const people = folk(8); for (let i = 0; i < 5; i++) b.stamp(people[i], -3 + i * 1.5, -(RAD + 6.2), 0, 1, 1.26);
  b.light(0, 4.6, -(RAD + 3.6), ROSE, 0.9, 7).light(-4, 4.6, -(RAD + 4), COOL, 0.6, 6).light(4, 4.6, -(RAD + 4), WARM, 0.8, 6);
  for (let i = 0; i < 52; i++) { const a = r() * 6.283; if (Math.abs(a - 4.712) < 0.42) continue; const d = RAD + 3.6 + r() * 3.2; b.stamp(people[(r() * 8) | 0], Math.cos(a) * d, Math.sin(a) * d, r() * 6.28, 1, 0.16); }
  for (const [a, k] of [[0.5, 2], [2.64, 4]]) b.stamp(cart(k), Math.cos(a) * (RAD + 8), Math.sin(a) * (RAD + 8), -a + Math.PI / 2, 1.1, 0);
  // the dancers: women in wide skirts, men in white, arms lifted to clap
  const bright = [0xe04060, 0xf0a828, 0x2cb596, 0x4068e0, 0xd048c0, 0xf06c40, 0x8a5ae0, 0xe8d040], skin = painted({ tint: 0x9a6a4c }), white = painted({ tint: 0xe8e2d6 }), dark = painted({ tint: 0x2a2c36 });
  const dancer = i => { const q = new Builder(), c = painted({ tint: bright[i % 8] }), c2 = painted({ tint: bright[(i + 3) % 8] }), up = i % 3;
    if (i % 4 !== 3) { q.put(c, cone(0.62, 1.0, 0, 0, 0, 9)); q.put(c2, drum(0.2, 0.5, 0, 0.92, 0, 7, null, 0.22), slab(0.5, 0.08, 0.5, 0, 0.3, 0)); }
    else { q.put(dark, slab(0.16, 0.85, 0.2, -0.11, 0, 0), slab(0.16, 0.85, 0.2, 0.11, 0, 0)); q.put(white, cone(0.42, 0.75, 0, 0.72, 0, 8)); q.put(c, ball(0.17, 0, 1.7, 0, 6)); }
    q.put(skin, ball(0.14, 0, 1.58, 0, 7), rod([-0.24, 1.36, 0], up ? [-0.42, 1.78, 0.2] : [-0.5, 1.1, 0.25], 0.055, 4), rod([0.24, 1.36, 0], up ? [0.42, 1.78, 0.2] : [0.5, 1.1, 0.25], 0.055, 4)); return q; };
  const kinds = Array.from({ length: 12 }, (_, i) => dancer(i));
  const rings = [[6.6, 22], [10, 34], [13.4, 46], [16.8, 58]].map(([rad, n], j) => { const q = new Builder(); for (let i = 0; i < n; i++) { const a = i / n * 6.283; q.stamp(kinds[(i * 5 + j * 3) % 12], Math.cos(a) * rad, Math.sin(a) * rad, -a, 0.95 + ((i * 7) % 5) * 0.03, 0); } return { rad, q }; });
  return { b, rings };
}

/* Lotus near the banks: pads lying on the water, a few flowers standing over them. */
export function lotus() {
  const b = new Builder(), r = rng(57), pads = [0x2f6a44, 0x3a7a4c, 0x285a3c].map(c => unmirrored(painted({ tint: c }))), pink = lit(0.95, 0.45, 0.62), pale = lit(1.0, 0.8, 0.86);
  for (const deg of [90, 66, 41, 17, 114, 144, 174, 200, 235, 305, -62]) {
    const c = at(deg + (r() - 0.5) * 3, R - 6 - r() * 7);
    for (let i = 0; i < 20; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 6.5, s = 0.42 + r() * 0.55; b.put(pads[i % 3], plain(new THREE.CircleGeometry(s, 9, 0.4, 5.9)).rotateX(-Math.PI / 2).rotateY(r() * 6.28).translate(c.x + Math.cos(a) * d, 0.05, c.z + Math.sin(a) * d * 0.7)); }
    for (let i = 0; i < 4; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 5, x = c.x + Math.cos(a) * d, z = c.z + Math.sin(a) * d * 0.7; b.put(pads[1], rod([x, 0, z], [x, 0.42, z], 0.025, 3)); b.put(i % 2 ? pink : pale, plain(new THREE.ConeGeometry(0.24, 0.42, 6)).rotateX(Math.PI).translate(x, 0.6, z), cone(0.13, 0.34, x, 0.46, z, 5)); }
  }
  return b;
}
