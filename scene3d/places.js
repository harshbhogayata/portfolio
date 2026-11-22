// The other places gathered on the banks. Each is built facing south at the origin; main.js sets it down and turns it.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, plain, facade, leafy, clump, shade, shadeMat, sprays, crown, ribbed, turned, pitched, hipped, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';

const gold = () => lit(1.9, 1.35, 0.42), globe = () => lit(1.8, 1.4, 0.8);

/* Kirti Mandir: the Gaekwads' memorial. The model keeps the real building's measure: a stone block with its carved door, a terrace with an
   open pavilion at either end, and between them the storey that carries the curved spire, crowned with the sun, the moon and the earth.
   Its front, its upper storey and the stone of its spire are the building's own, from a photograph. */
export function kirtiMandir() {
  const FRONT = fromPhoto('kirti_front'), UPPER = fromPhoto('kirti_upper'), SPIRE = fromPhoto('kirti_spire', 0), D = painted({ tint: 0xd6ccb4 }), G = lit(0.74, 0.43, 0.17), b = new Builder();
  b.put(FRONT, wall(33, 17, 24, 0, 0, -12, { u: 33, v: 17 })); b.put(D, box(35.4, 1, 26.4, 0, 0, -12), box(34.6, 0.7, 25.6, 0, 17, -12));
  for (let i = 0; i < 6; i++) b.put(D, slab(11 - i * 0.5, 0.26, 1, 0, 0.9 - i * 0.2, 1 + i));                                   // the steps
  for (const sx of [-1, 1]) {                                                                                                // the two balconies that stand out from the front, each under its own little roof
    const x = sx * 10.3; b.put(D, slab(4.4, 0.3, 1.4, x, 7.6, 0.7), slab(4.2, 0.9, 0.1, x, 7.9, 1.35), slab(4.8, 0.25, 1.7, x, 12.2, 0.85)); for (const px of [-1.95, 1.95]) b.put(D, slab(0.18, 4.3, 0.18, x + px, 7.9, 1.3));
    b.put(D, slab(3.6, 0.3, 1.1, x, 2.6, 0.55), slab(3.9, 0.22, 1.3, x, 6.2, 0.65)); for (const px of [-1.6, 1.6]) b.put(D, slab(0.16, 3.4, 0.16, x + px, 2.9, 1.0));
  }
  b.put(D, slab(8.4, 0.5, 1.6, 0, 11.6, 0.8)); for (const sx of [-3.7, 3.7]) b.put(D, drum(0.36, 10.6, sx, 1, 1.3, 8));         // the porch over the door, on two columns
  for (let x = -5.8; x <= 5.8; x += 0.72) b.put(D, slab(0.16, 0.9, 0.16, x, 17.7, 0.2)); b.put(D, slab(12.2, 0.16, 0.26, 0, 18.6, 0.2));   // the balustrade across the terrace
  b.put(UPPER, wall(13, 5.2, 13, 0, 17.7, -11.5, { u: 13, v: 5.2, same: true })); b.put(D, box(14.6, 0.6, 14.6, 0, 22.9, -11.5));
  for (const sx of [-1, 1]) {                                                                                                // the two open pavilions
    const x = sx * 11.3, z = -5.6; b.put(D, box(10.2, 0.7, 10.2, x, 17.7, z));
    for (const [px, pz] of [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]) b.put(D, drum(0.3, 4.3, x + px * 4.3, 18.4, z + pz * 4.3, 8), slab(0.9, 0.3, 0.9, x + px * 4.3, 22.4, z + pz * 4.3));
    b.put(D, box(12, 0.45, 12, x, 22.7, z), box(9.6, 0.5, 9.6, x, 23.15, z)); b.put(SPIRE, dome(4.3, 2.7, x, 23.6, z, { seg: 14, swell: 0.02, finial: 0.5, wrap: 2 })); b.put(gold(), ball(0.3, x, 27.9, z, 8));
    b.put(G, slab(8.2, 0.12, 8.2, x, 18.42, z)); b.light(x, 20.6, z, WARM, 0.7, 5.5);
  }
  // the spire: its real stone wrapped round a shape of the real curve, four faces to the round
  const pts = []; for (let i = 0; i <= 22; i++) { const t = i / 22; pts.push([Math.max(0.45, 6.5 * (1 - Math.pow(t, 1.75) * 0.82)), 13.4 * t]); }
  b.put(SPIRE, turned(pts, 20, 4).translate(0, 23.5, -11.5)); b.put(D, ribbed([[0.02, 0], [1.5, 0.1], [2.1, 0.55], [1.5, 1.0], [0.02, 1.1]].map(p => new THREE.Vector2(...p)), 12, 0.16).translate(0, 36.8, -11.5), ball(0.9, 0, 38.6, -11.5));
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; b.put(SPIRE, dome(1.5, 2.6, Math.cos(a) * 6.3, 23.5, -11.5 + Math.sin(a) * 6.3, { seg: 8, wrap: 1 })); }   // a small spire at each corner of its foot
  b.put(gold(), plain(new THREE.TorusGeometry(0.9, 0.15, 6, 14, Math.PI)).rotateZ(Math.PI).translate(0, 40.9, -11.5), ball(0.66, 0, 41.9, -11.5), ball(0.45, 0, 39.9, -11.5, 8));
  for (let x = -13; x <= 13; x += 6.5) b.light(x, 0.6, 14, LAMP, 0.36, 13);
  b.light(0, 25, 6, LAMP, 0.6, 12).light(0, 34, 2, LAMP, 0.42, 9).light(-11.3, 21, 4, LAMP, 0.3, 7).light(11.3, 21, 4, LAMP, 0.3, 7);
  b.put(shadeMat(), shade(22, 10, 0, 0, -6));
  return b;
}

/* Mandvi Gate: the pavilion at the middle of the old city, where its four streets meet. A square white block pierced by three pointed arches
   on each side, a round tower at one corner, and above it three storeys of screened galleries, each smaller than the last, under wide eaves,
   with the clock at the top. Its measure and its surfaces are taken from a photograph. */
export function mandvi() {
  const BASE = fromPhoto('mandvi_base', 0.9), T1 = fromPhoto('mandvi_t1', 0.8), T2 = fromPhoto('mandvi_t2', 0.8), T3 = fromPhoto('mandvi_t3', 0), TOWER = fromPhoto('mandvi_tower', 0.6);
  const D = painted({ tint: 0xeeebe2 }), W = painted({ tint: 0x7a5a48 }), iron = painted({ tint: 0x33353d }), b = new Builder(), cz = -13;
  b.put(BASE, wall(26, 12.5, 26, 0, 0, cz, { u: 26, v: 12.5, same: true })); b.put(D, box(27.2, 0.5, 27.2, 0, 9.3, cz), box(27.6, 0.7, 27.6, 0, 12.5, cz));
  for (let x = -13; x <= 13; x += 1.3) b.put(D, slab(0.5, 0.6, 0.4, x, 13.2, 0.1));                                             // the parapet's battlements
  b.put(TOWER, drum(2.3, 14, 13.4, 0, 0.4, 14, { u: 2 * Math.PI * 2.3, v: 14 })); b.put(D, drum(2.8, 0.5, 13.4, 11.2, 0.4, 14), drum(2.9, 0.5, 13.4, 14, 0.4, 14));   // the round tower at the corner, and the lantern on it
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(iron, rod([13.4 + Math.cos(a) * 1.9, 14.5, 0.4 + Math.sin(a) * 1.9], [13.4 + Math.cos(a) * 1.9, 17, 0.4 + Math.sin(a) * 1.9], 0.09, 5)); }
  b.put(D, drum(2.4, 0.3, 13.4, 17, 0.4, 12)); b.put(W, dome(2.1, 2, 13.4, 17.3, 0.4, { seg: 12, swell: 0.02, finial: 0.5 }));
  // the galleries: each a screened storey behind a rail, under a wide eave
  const storey = (mat, w, h, y, eave) => { b.put(mat, wall(w, h, w, 0, y, cz, { u: w, v: h, same: true })); b.put(D, box(w + eave, 0.28, w + eave, 0, y + h, cz), box(w + eave - 0.9, 0.22, w + eave - 0.9, 0, y + h + 0.28, cz));
    for (let px = -w / 2 - 1; px <= w / 2 + 1; px += 1.1) for (const s of [-1, 1]) b.put(iron, slab(0.07, 0.9, 0.07, px, y, cz + s * (w / 2 + 1)), slab(0.07, 0.9, 0.07, s * (w / 2 + 1), y, cz + px));
    for (const s of [-1, 1]) b.put(iron, slab(w + 2.1, 0.07, 0.07, 0, y + 0.9, cz + s * (w / 2 + 1)), slab(0.07, 0.07, w + 2.1, s * (w / 2 + 1), y + 0.9, cz)); };
  storey(T1, 13.4, 3.7, 12.9, 3.2); storey(T2, 8.1, 3.1, 17.1, 2.6); storey(T3, 4.8, 2.2, 20.7, 1.6);
  b.put(D, slab(2.9, 2, 2.9, 0, 23.4, cz), box(3.9, 0.25, 3.9, 0, 25.4, cz)); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, slab(0.2, 2, 0.2, sx * 1.3, 23.4, cz + sz * 1.3));
  b.put(D, dome(1.5, 1.3, 0, 25.65, cz, { seg: 10, swell: 0, finial: 0.7 })); b.put(gold(), ball(0.26, 0, 28, cz, 8));
  for (const sx of [-1.6, 1.6]) { b.put(iron, rod([sx, 23, cz + 2.5], [sx, 26.2, cz + 2.5], 0.04)); b.put(lit(1.5, 0.3, 0.2), slab(1.1, 0.7, 0.04, sx + 0.6, 25.5, cz + 2.5)); }   // the red flags
  for (const x of [-9, 0, 9]) b.light(x, 0.6, 12, LAMP, 0.36, 13); b.light(0, 5, 2, WARM, 0.8, 8).light(0, 15, 4, LAMP, 0.5, 9).light(0, 20, 0, LAMP, 0.4, 7).light(16, 4, 4, LAMP, 0.4, 9).light(-16, 4, -13, LAMP, 0.3, 10);
  b.put(shadeMat(), shade(19, 19, 0, 0, cz));
  return b;
}

/* Nyay Mandir, the Temple of Justice: banded stone, a tall middle with a great arched door and a turret at either shoulder, a gabled
   pavilion to each side, and long two-storey wings under tiled roofs. Its measure and its surfaces are taken from a photograph. */
export function nyayMandir() {
  const CENTRE = fromPhoto('nyay_centre'), GABLE = fromPhoto('nyay_gable', 0), PAV = fromPhoto('nyay_pav'), WING = fromPhoto('nyay_wing'), TUR = fromPhoto('nyay_turret', 0);
  const D = painted({ tint: 0xe3d2ac }), roof = painted({ tint: 0x8b4f3c }), b = new Builder();
  b.put(D, box(96, 0.9, 26, 0, 0, -11));
  b.put(CENTRE, wall(27, 21.5, 24, 0, 0, -8, { u: 27, v: 21.5 })); b.put(D, box(28.2, 0.7, 25.2, 0, 21.5, -8));                 // the middle, standing forward
  b.put(GABLE, wall(10, 6.2, 5, 0, 22.2, 1.4, { u: 10, v: 6.2, same: true })); b.put(D, box(11, 0.4, 5.6, 0, 28.4, 1.4)); for (const sx of [-4.4, 0, 4.4]) b.put(D, dome(0.7, 1.3, sx, 28.8, 1.4, { seg: 8, finial: 0.6 }));
  b.put(D, slab(11.4, 0.5, 2.2, 0, 8.3, 5.1)); for (let x = -5.2; x <= 5.2; x += 0.8) b.put(D, slab(0.16, 0.9, 0.16, x, 8.8, 6.1));   // the balcony over the door
  for (const sx of [-1, 1]) {                                                                                                // the two turrets: an eight-sided shaft, an open lantern, a little dome
    const x = sx * 10.2, z = 2.2; b.put(TUR, drum(2.2, 9.5, x, 21.5, z, 8, { u: 2 * Math.PI * 2.2 / 2, v: 9.5 })); b.put(D, drum(2.9, 0.4, x, 26, z, 8), drum(2.8, 0.4, x, 31, z, 8));
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.put(D, drum(0.22, 2.8, x + Math.cos(a) * 1.9, 31.4, z + Math.sin(a) * 1.9, 6)); }
    b.put(D, drum(2.6, 0.4, x, 34.2, z, 8), dome(2.1, 2.4, x, 34.6, z, { seg: 12, swell: 0.05, finial: 0.6 })); b.put(gold(), ball(0.3, x, 38.7, z, 8)); b.light(x, 32.6, z, WARM, 0.6, 4.5, 2.2);
  }
  for (const sx of [-1, 1]) {                                                                                                // a gabled pavilion, then a long wing, on each side
    const px = sx * 20.2; b.put(PAV, wall(13.4, 15.4, 20, px, 0, -10, { u: 13.4, v: 15.4 })); b.put(D, box(14.4, 0.6, 21, px, 15.4, -10)); b.put(roof, hipped(7.2, 10.6, 4.6, px, 16, -10));
    b.put(D, slab(4.6, 3.4, 0.5, px, 16, 0.3), dome(0.9, 1.4, px, 19.4, 0.3, { seg: 8, finial: 0.6 }));
    const wx = sx * 37.2; b.put(WING, wall(20.6, 12, 16, wx, 0, -9, { u: 20.6, v: 12 }, sx < 0 ? 0 : 0.5)); b.put(D, box(21.6, 0.6, 17, wx, 12, -9)); b.put(roof, pitched(21.8, 17.4, wx, 12.6, -9, 0.5));
    for (let x = -9.4; x <= 9.4; x += 1.34) b.put(D, slab(0.3, 0.6, 0.3, wx + x, 12.6, -0.7));
    const ex = sx * 46.8; b.put(D, drum(1.2, 3, ex, 12.6, -1.4, 8), chhatri(2.4, 2.3, ex, 15.6, -1.4)); b.put(gold(), ball(0.24, ex, 20.3, -1.4, 6));
  }
  for (let i = 0; i < 5; i++) b.put(D, slab(13 - i * 0.6, 0.24, 1, 0, 0.8 - i * 0.2, 4.6 + i));
  for (let x = -40; x <= 40; x += 8) b.light(x, 0.6, 15, LAMP, 0.36, 14);
  b.light(0, 24, 10, LAMP, 0.55, 11).light(-20, 17, 8, LAMP, 0.3, 8).light(20, 17, 8, LAMP, 0.3, 8).light(0, 6, 8, WARM, 0.7, 7);
  b.put(shadeMat(), shade(56, 12, 0, 0, -6));
  return b;
}

/* The Arts Faculty of the university: brick and stone in bands, and one of the largest masonry domes in India over the middle. */
export function artsDome() {
  const PORTAL = fromPhoto('msu_portal'), S = fromPhoto('msu_wall'), T = { u: 10.4, v: 23.4 }, BAY = fromPhoto('msu_bay'), DRUM = fromPhoto('msu_drum', 0), DOME = fromPhoto('msu_dome', 0), brick = S;
  const D = painted({ tint: 0xe0cfae }), b = new Builder();
  b.put(PORTAL, wall(30, 19, 30, 0, 0, -15, { u: 30, v: 21 })); b.put(S, wall(24, 11, 20, -27, 0, -12, T, 0.3), wall(24, 11, 20, 27, 0, -12, T, 0.5));
  for (const sx of [-1, 1]) { b.put(BAY, wall(7.6, 15.5, 6, sx * 33, 0, -1, { u: 7.6, v: 22.4, same: true })); b.put(D, box(8.4, 0.5, 6.8, sx * 33, 15.5, -1)); b.put(DOME, dome(2.6, 3, sx * 33, 16, -1, { seg: 12, wrap: 2 })); }   // a bay with its balcony at the end of each wing
  b.put(D, box(31.4, 0.7, 31.4, 0, 19, -15), box(25.2, 0.6, 21.2, -27, 11, -12), box(25.2, 0.6, 21.2, 27, 11, -12), box(82, 1, 34, 0, 0, -14));
  for (const y of [5.4, 10.8]) b.put(D, box(30.8, 0.4, 30.8, 0, y, -15)); b.put(D, box(24.8, 0.4, 20.8, -27, 5.4, -12), box(24.8, 0.4, 20.8, 27, 5.4, -12));
  // the drum, banded, with its ring of windows; the dome; a small domed tower at each corner
  b.put(DRUM, drum(12, 8, 0, 19.7, -15, 16, { u: 2 * Math.PI * 12 / 8, v: 8 })); b.put(D, drum(12.3, 0.4, 0, 22.3, -15, 16), drum(13, 0.8, 0, 27.7, -15, 16)); b.put(DOME, dome(12, 13, 0, 28.5, -15, { seg: 32, swell: 0.02, finial: 0.2, wrap: 4 }));
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; b.put(DOME, dome(2.2, 2.6, Math.cos(a) * 13.6, 19.7, -15 + Math.sin(a) * 13.6, { seg: 10, wrap: 1 })); }   // the ring of small domes round the great one b.put(gold(), ball(0.7, 0, 44.6, -15, 8));
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const x = sx * 13.4, z = -15 + sz * 13.4; b.put(brick, drum(2.3, 25, x, 0, z, 8, T)); b.put(D, drum(2.8, 0.5, x, 25, z, 8), chhatri(3, 2.6, x, 25.5, z)); }
  for (const sx of [-1, 1]) { b.put(brick, drum(2, 15, sx * 38.5, 0, -3, 8, T)); b.put(DOME, dome(2.2, 2.6, sx * 38.5, 15, -3, { seg: 10, wrap: 1 })); for (let x = 16; x <= 38; x += 5.5) b.put(D, chhatri(1.4, 1.5, sx * x, 11.6, -3.2)); }
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
