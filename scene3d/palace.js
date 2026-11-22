// Laxmi Vilas Palace, built facing south at the origin, with its grounds running down to the road.
// Proportions are taken from the front of the real building: the tall tower left of centre, the great dome over the durbar hall,
// three domed pavilions on the left wing, three great bays on the right.
import * as THREE from 'three';
import { Builder, painted, lit, wall, box, slab, drum, dome, chhatri, arch, ball, cone, rod, fromPhoto, rng, WARM, LAMP, COOL } from './kit.js';
import { palm } from './shore.js';

export function palace() {
  // the walls wear the palace's own stone: each modelled part takes the stretch of the photograph that belongs to it
  const S = fromPhoto('palace_arcade'), T = { u: 19.8, v: 19 }, WING = fromPhoto('palace_wing'), TW = { u: 9.9, v: 16 }, PAV = fromPhoto('palace_pavilion'), TOWER = fromPhoto('palace_tower'), DURBAR = fromPhoto('palace_durbar'), TD = { u: 34, v: 24.7 },
    LINK = fromPhoto('palace_link'), TL = { u: 12, v: 17 }, BAYS = fromPhoto('palace_bays'), TB = { u: 33, v: 24 }, DOME = fromPhoto('palace_dome', 0);
  const D = painted({ tint: 0xdcc096 }), dark = painted({ tint: 0x9b8158 });
  const G = lit(0.74, 0.43, 0.17), gold = lit(1.9, 1.35, 0.42), b = new Builder(), r = rng(8);
  // one stretch of the building: its wall, a string course at each floor, a roof edge with a balustrade, pilasters, and balconies on the first floor
  const part = (x0, x1, h, d, zf, { cupolas = true, balconies = true, mat = S, tile = T, shift = 0, pilasters = true } = {}) => {
    const w = x1 - x0, x = (x0 + x1) / 2, z = zf - d / 2;
    b.put(mat, wall(w, h, d, x, 0, z, tile, shift));
    for (let y = 6; y < h - 1; y += 6) b.put(D, box(w + 0.8, 0.42, d + 0.8, x, y - 0.2, z));
    b.put(D, box(w + 1.1, 0.6, d + 1.1, x, h - 0.1, z), slab(w + 0.6, 0.14, 0.2, x, h + 1.25, zf + 0.2));
    for (let px = x0 + 0.4; px <= x1 - 0.2; px += 1.3) b.put(D, slab(0.2, 0.78, 0.2, px, h + 0.5, zf + 0.2));                 // the balustrade
    if (pilasters) for (let px = x0 + 0.15; px <= x1; px += 3.3) b.put(D, slab(0.36, h, 0.28, px, 0, zf + 0.14));             // pilasters, bay by bay
    if (cupolas) for (let cx = x0 + 2.6; cx < x1 - 1.5; cx += 5.6) b.put(D, chhatri(1.5, 1.6, cx, h + 0.5, zf - 1.5));
    if (balconies) for (let bx = x0 + 4.95; bx < x1 - 3; bx += 9.9) {                                                         // jharokhas: a little covered balcony standing out from the wall
      b.put(D, slab(2.9, 0.3, 1.5, bx, 6.3, zf + 0.75), slab(2.5, 0.9, 0.12, bx, 6.6, zf + 1.44), slab(3.1, 0.25, 1.7, bx, 9.7, zf + 0.85), dome(1.1, 0.9, bx, 9.95, zf + 0.8, { seg: 8, finial: 0.5 }));
      for (const sx of [-1.25, 1.25]) b.put(D, slab(0.16, 3.1, 0.16, bx + sx, 6.6, zf + 1.36)); b.put(dark, slab(0.5, 0.8, 1.1, bx - 1, 5.5, zf + 0.55), slab(0.5, 0.8, 1.1, bx + 1, 5.5, zf + 0.55));
    }
  };
  const tip = (x, y, z, s = 1) => b.put(gold, ball(0.32 * s, x, y, z, 8));                                                    // gilded finials catch the light
  const turret = (x, z, base, top, rad) => { b.put(S, drum(rad, top - base, x, base, z, 8, T)); b.put(D, drum(rad + 0.5, 0.5, x, top, z, 8)); b.put(DOME, dome(rad * 1.05, rad * 1.5, x, top + 0.5, z, { wrap: 3 })); tip(x, top + 0.5 + rad * 1.5 * 1.3, z); };

  b.put(D, box(158, 1.2, 46, 0, 0, -14));                                                                                    // the plinth
  for (let i = 0; i < 5; i++) b.put(D, slab(16 - i * 0.6, 0.24, 1.1, 12.5, 0.96 - i * 0.24, 6.2 + i * 1.1));                 // the steps to the great door
  part(-75, -67, 7, 6, 3, { cupolas: false, balconies: false, mat: WING, tile: TW });                                                             // the low gate at the left
  b.put(G, arch(3.4, 5.2, -71, 1.2, 3.06));
  part(-67, -26, 16, 24, 0, { mat: WING, tile: TW, balconies: false });                                                      // the left wing, with its three domed pavilions
  for (const [x, w, top, rad] of [[-58, 7, 20, 3.2], [-46, 10, 21.5, 4.8], [-33, 7, 19.5, 3.2]]) {
    const z = 1.5 - w / 2; b.put(PAV, wall(w, top, w, x, 0, z, { u: w, v: 22, same: true })); b.put(D, box(w + 1, 0.6, w + 1, x, top, z));
    b.put(S, drum(rad, rad * 0.8, x, top + 0.6, z, 8, T)); b.put(D, drum(rad + 0.4, 0.4, x, top + 0.6 + rad * 0.8, z, 8)); b.put(DOME, dome(rad * 1.06, rad * 1.55, x, top + 1 + rad * 0.8, z, { wrap: 4 })); tip(x, top + 1 + rad * 0.8 + rad * 1.55 * 1.3, z, rad / 3.2);
    for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) b.put(D, chhatri(1.3, 1.5, x + sx * (w / 2 - 0.8), top + 0.6, z + sz * (w / 2 - 0.8)));
  }
  part(-26, -4, 19, 22, 0, { balconies: false });
  // the tower: a square shaft that narrows at each balcony, an eight-sided belfry, a dome
  const tx = -19.5, tz = -2.5;
  for (const [w, y0, y1] of [[8.6, 0, 30], [7.6, 30.8, 38], [6.8, 38.7, 45]]) {
    b.put(TOWER, wall(w, y1 - y0, w, tx, y0, tz, { u: w, v: 32, y0: y0 - 19, same: true })); b.put(D, box(w + 2.6, 0.75, w + 2.6, tx, y1, tz));
    for (const s of [-1, 1]) { b.put(dark, slab(0.5, 0.9, 0.9, tx + s * (w / 2 + 0.7), y1 - 0.9, tz + w / 2 + 0.6), slab(0.9, 0.9, 0.5, tx + s * (w / 2 + 0.6), y1 - 0.9, tz + w / 2 + 0.7)); }   // brackets under the balcony
    for (let px = -w / 2 - 1.1; px <= w / 2 + 1.1; px += 1.1) b.put(D, slab(0.16, 0.8, 0.16, tx + px, y1 + 0.75, tz + w / 2 + 1.2));
  }
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { b.put(D, drum(0.8, 3.6, tx + sx * 4.1, 45.7, tz + sz * 4.1, 8), dome(0.9, 1.5, tx + sx * 4.1, 49.3, tz + sz * 4.1, { seg: 8 })); tip(tx + sx * 4.1, 51.4, tz + sz * 4.1, 0.6); }
  b.put(TOWER, drum(3.2, 5.3, tx, 45.7, tz, 8, { u: 2 * Math.PI * 3.2 / 4, v: 32, y0: 26.7 })); b.put(D, drum(4.3, 0.6, tx, 51, tz, 8)); b.put(DOME, dome(3.3, 4.6, tx, 51.6, tz, { wrap: 4 })); tip(tx, 57.7, tz, 1.2);
  b.put(D, rod([tx, 57.6, tz], [tx, 62.5, tz], 0.07)); b.put(lit(1.6, 0.5, 0.2), slab(2.6, 1.5, 0.05, tx + 1.35, 60.8, tz));    // the flag
  // the middle: the durbar block, its great dome on an eight-sided drum ringed with little pavilions, two turrets beside it
  part(-4, 30, 21, 34, 5, { balconies: false, cupolas: false, pilasters: false, mat: DURBAR, tile: TD });
  b.put(DURBAR, wall(19, 7, 20, 12.5, 21, -5, { u: 34, v: 24.7, y0: 21 }, 7 / 34)); b.put(D, box(20.2, 0.6, 21.2, 12.5, 28, -5));
  b.put(D, slab(11, 0.5, 2.2, 12.5, 12.2, 6.1)); for (let px = -5.2; px <= 5.2; px += 1.3) b.put(D, slab(0.18, 0.9, 0.18, 12.5 + px, 12.7, 7.1));   // the balcony over the door
  for (const sx of [-5.2, 5.2]) b.put(D, drum(0.6, 11, 12.5 + sx, 1.2, 6.4, 10));
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.put(D, chhatri(2.6, 3, 12.5 + sx * 8, 28.6, -5 + sz * 8.4));
  b.put(S, drum(6.8, 5.4, 12.5, 28.6, -5, 8, T)); b.put(D, drum(7.6, 0.7, 12.5, 34, -5, 8)); b.put(DOME, dome(6.9, 9.4, 12.5, 34.7, -5, { seg: 28, swell: 0.12, wrap: 6 })); tip(12.5, 47.2, -5, 1.6);
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; b.put(D, chhatri(1.5, 1.5, 12.5 + Math.cos(a) * 7.9, 34.7, -5 + Math.sin(a) * 7.9)); }
  turret(0.6, 3.6, 0, 22.5, 2.6); turret(24.6, 3.6, 0, 22.5, 2.6);
  part(30, 42, 16.5, 22, 0, { mat: LINK, tile: TL, balconies: false });
  part(42, 75, 19, 26, 2, { cupolas: false, balconies: false, pilasters: false, mat: BAYS, tile: TB });                                                             // the right wing: three great bays, a dome over each
  for (const [x, rad] of [[47.2, 2.5], [58.2, 3.3], [69.2, 2.5]]) {
    b.put(S, drum(rad, rad * 0.75, x, 19.5, -2, 8, T)); b.put(D, drum(rad + 0.4, 0.4, x, 19.5 + rad * 0.75, -2, 8)); b.put(DOME, dome(rad * 1.05, rad * 1.5, x, 19.9 + rad * 0.75, -2, { wrap: 4 })); tip(x, 19.9 + rad * 0.75 + rad * 1.5 * 1.32, -2, rad / 3);
  }
  for (const x of [42.8, 52.7, 63.7, 74.2]) b.put(D, chhatri(1.8, 2, x, 19.5, 0.4));
  turret(-67, 0.4, 0, 17.5, 1.6); turret(75, 2.4, 0, 20.5, 1.7);

  // the grounds: lawn, a walk lit by low lamps, a fountain, palms, hedges, and the gate on the road
  const lawn = painted({ tint: 0x2c5a3a }), path = painted({ tint: 0xb7a78c }), leaf = painted({ tint: 0x1f4a2c }), trunk = painted({ tint: 0x6f5a44 }), water = lit(0.35, 0.6, 0.9), iron = painted({ tint: 0x33353d });
  b.put(lawn, box(160, 0.3, 30, 0, 1.36, 24)); b.put(path, box(7, 0.34, 30, 12.5, 1.36, 24), box(150, 0.34, 3.4, 0, 1.36, 11.4));
  for (let z = 12; z <= 37; z += 5) for (const sx of [-4.3, 4.3]) { b.put(iron, slab(0.16, 0.9, 0.16, 12.5 + sx, 1.7, z)); b.put(lit(1.8, 1.4, 0.8), ball(0.16, 12.5 + sx, 2.7, z, 6)); b.light(12.5 + sx, 2.7, z, LAMP, 0.5, 3.2, 1.4); }
  for (const fx of [-32, 52]) {                                                                                             // two basins with a jet each
    b.put(path, drum(5.2, 0.7, fx, 1.6, 24, 16), drum(1.1, 1.3, fx, 2.3, 24, 10)); b.put(water, plain2(new THREE.CircleGeometry(4.7, 20)).rotateX(-Math.PI / 2).translate(fx, 2.32, 24));
    b.light(fx, 3.2, 24, COOL, 0.8, 5); for (let i = 0; i < 14; i++) b.spark(fx + (r() - 0.5) * 1.4, 3.6 + r() * 3.6, 24 + (r() - 0.5) * 1.4, COOL, 0.9, 1);
  }
  { const pm = [palm(4), palm(5), palm(6)]; let i = 0; for (let x = -70; x <= 70; x += 14) if (Math.abs(x - 12.5) > 8) { const z = 17 + (Math.abs(x) % 28 ? 0 : 3); b.stamp(pm[i++ % 3], x, z, i * 1.3, 1, 1.6); } }   // palms along the front
  for (let x = -76; x <= 76; x += 4) if (Math.abs(x - 12.5) > 5) b.put(leaf, slab(3.6, 1.3, 1.5, x, 1.6, 38.2));                // the hedge along the road
  for (const sx of [-5.2, 5.2]) { b.put(D, slab(1.8, 5.4, 1.8, 12.5 + sx, 1.5, 38.4), slab(2.3, 0.4, 2.3, 12.5 + sx, 6.9, 38.4), dome(0.9, 1.1, 12.5 + sx, 7.3, 38.4, { seg: 8 })); b.put(lit(1.8, 1.4, 0.8), ball(0.34, 12.5 + sx, 6.3, 39.5, 8)); b.light(12.5 + sx, 6.3, 39.8, LAMP, 0.8, 5, 2.4); }

  // its floodlights: a row in the grass before the front, and a few higher for the tower and the domes
  for (let x = -72; x <= 72; x += 9) b.light(x, 0.6, 20, LAMP, 0.3, 12);            // floodlights at the foot: bright below, falling away up the walls
  b.light(tx, 24, 14, LAMP, 0.40, 13).light(tx, 40, 11, LAMP, 0.36, 10).light(tx, 52, 9, LAMP, 0.29, 8).light(12.5, 30, 16, LAMP, 0.50, 13).light(12.5, 40, 12, LAMP, 0.32, 10).light(58, 20, 14, LAMP, 0.29, 9).light(-46, 21, 13, LAMP, 0.29, 9).light(-58, 20, 12, LAMP, 0.22, 8).light(-33, 20, 12, LAMP, 0.22, 8);
  return b;
}
const plain2 = g => { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.004, 0.004); return g; };
