// The ordinary city behind the banks: blocks of flats with tanks and stair heads on their roofs, shop fronts lit at street level,
// and among them the things that make an Indian skyline: a temple spire, a minaret, a water tower, masts with a red light, hoardings.
import * as THREE from 'three';
import { Builder, painted, lit, wall, slab, drum, dome, ball, cone, rod, plain, block, unmirrored, rng, at, R, DEG, WARM, LAMP, COOL, RED, TEAL, ROSE } from './kit.js';
import { free } from './shore.js';

const south = deg => { const a = ((deg % 360) + 360) % 360; return a > 204 && a < 336; };

export function town() {
  const w = new Builder(), r = rng(5), T = { u: 8 * 3.3, v: 8 * 3.2 };
  const kinds = [[84, 90, 110], [104, 94, 84], [72, 84, 104], [112, 104, 96]].map((c, i) => { const t = block({ seed: 40 + i, lit: 0.13 + i * 0.04, wall: c }); return painted({ map: t.map, emissiveMap: t.emissiveMap, glow: 1.3, key: 'block' + i }); });
  const roof = unmirrored(painted({ tint: 0x4a4c58 })), tank = unmirrored(painted({ tint: 0x1c1d24 })), tin = unmirrored(painted({ tint: 0x6a6f7c })), iron = unmirrored(painted({ tint: 0x30323a }));
  const signs = [lit(1.9, 1.2, 0.5), lit(1.8, 0.35, 0.3), lit(0.4, 1.6, 1.4), lit(1.7, 0.5, 1.1), lit(1.5, 1.6, 1.8), lit(0.5, 1.5, 0.5)], signLight = [WARM, RED, TEAL, ROSE, COOL, TEAL];
  let built = 0;
  for (let i = 0; i < 620 && built < 430; i++) {
    const a = r() * 360, front = r() < 0.36, d = front ? R + 32 + r() * 10 : R + 44 + r() * r() * 420, p = at(a, d);
    if ((south(a) && d < R + 150) || !free(p.x, p.z, 12)) continue;                                                                                                              // on the south side the old city's low roofs come first, and the town stands beyond them
    const wd = 10 + r() * 22, dp = 9 + r() * 16, h = front ? 7 + r() * 9 : 6 + r() * r() * (d > R + 130 ? 52 : 24), k = (r() * 4) | 0, turn = Math.atan2(-Math.cos(a * DEG), Math.sin(a * DEG)) + (r() - 0.5) * 0.4, b = new Builder();
    b.put(kinds[k], wall(wd, h, dp, 0, 0, -dp / 2, T, r() * 3)); b.put(roof, slab(wd + 0.5, 0.5, dp + 0.5, 0, h, -dp / 2));
    if (r() < 0.7) { const tx = (r() - 0.5) * (wd - 4), tz = -dp / 2 + (r() - 0.5) * (dp - 4); b.put(tin, slab(2.2, 1.1, 2.2, tx, h + 0.5, tz)); b.put(tank, drum(0.9, 1.5, tx, h + 1.6, tz, 10)); }      // a water tank on its stand
    if (r() < 0.6) b.put(kinds[k], slab(3, 2.6, 3.4, (r() - 0.5) * (wd - 5), h + 0.5, -dp / 2 + (r() - 0.5) * (dp - 5)));                                                                           // the head of the stairs
    if (r() < 0.3) { const ax = (r() - 0.5) * (wd - 2); b.put(iron, rod([ax, h, -dp / 2], [ax, h + 4 + r() * 3, -dp / 2], 0.04, 3)); }                                                              // an aerial
    if (r() < 0.25) for (let j = 0; j < 3; j++) b.put(tin, slab(0.9, 0.6, 0.5, -wd / 2 + 2 + j * 3, 3 + j * 3.2, 0.25));                                                                           // air conditioners
    if (front || r() < 0.2) {                                                                                                                                                                      // shop fronts: a lit strip and a sign or two
      const c = (r() * 6) | 0; b.put(lit(0.62, 0.42, 0.2), slab(wd - 1.2, 2.3, 0.08, 0, 0.4, 0.05)); b.put(roof, slab(wd, 0.2, 1.6, 0, 3, 0.8));
      for (let j = 0; j < 1 + (r() * 3 | 0); j++) b.put(signs[(c + j) % 6], slab(2.4 + r() * 3, 0.9, 0.12, (r() - 0.5) * (wd - 5), 3.3 + r() * 1.2, 0.12));
      b.light(0, 2, 2.6, signLight[c], 0.7, 7).light(0, 2, 2.6, WARM, 0.5, 9);
    }
    w.stamp(b, p.x, p.z, turn, 1, 1.5); built++;
    if (r() < 0.2) w.light(p.x + (r() - 0.5) * 14, 4.5, p.z + (r() - 0.5) * 14, LAMP, 0.5, 9, 3.4);                                                                                                // a street lamp somewhere near
  }
  // the things that stand above the roofs
  const stone = painted({ tint: 0xcbb99a }), whitewash = painted({ tint: 0xdfe2e6 }), green = painted({ tint: 0x3f7a5c }), gold = lit(1.9, 1.35, 0.42), steel = painted({ tint: 0x8a909c });
  const spot = (deg, dist, make) => { const p = at(deg, dist); if (!free(p.x, p.z, 6)) return; w.stamp(make(), p.x, p.z, Math.atan2(-Math.cos(deg * DEG), Math.sin(deg * DEG)), 1, 1.5); };
  const shikhara = () => { const b = new Builder(), pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector2(Math.max(0.3, 3.4 * (1 - Math.pow(t, 1.7) * 0.93)), 11 * t)); }
    b.put(stone, slab(8, 5, 8, 0, 0, 0), plain(new THREE.LatheGeometry(pts, 10)).translate(0, 5, 0), slab(5, 4, 5, 0, 0, 5.5), cone(3.6, 3, 0, 4, 5.5, 4)); b.put(gold, ball(0.4, 0, 16.4, 0, 8)); b.put(lit(1.7, 0.6, 0.2), slab(1.2, 0.8, 0.04, 0.7, 17.6, 0)); b.put(steel, rod([0, 16.4, 0], [0, 18.4, 0], 0.04, 3));
    b.light(0, 3, 9, WARM, 0.7, 9).light(0, 9, 5, WARM, 0.5, 8, 3); return b; };
  const mosque = () => { const b = new Builder(); b.put(whitewash, slab(12, 6, 12, 0, 0, 0), drum(4.2, 1.2, 0, 6, 0, 12), dome(4.2, 4.6, 0, 7.2, 0, { seg: 16, swell: 0.06 }), drum(1, 19, 7.5, 0, 5, 8), drum(1.5, 0.5, 7.5, 13, 5, 8), drum(1.5, 0.5, 7.5, 17, 5, 8));
    b.put(green, cone(1.2, 3, 7.5, 19, 5, 8)); b.put(gold, ball(0.3, 7.5, 22.2, 5, 6), ball(0.34, 0, 12.6, 0, 6)); b.put(lit(0.5, 1.7, 0.8), slab(0.5, 1.2, 0.5, 7.5, 14, 5)); b.light(0, 3, 9, TEAL, 0.5, 9).light(7.5, 15, 5, TEAL, 0.6, 6, 3.2); return b; };
  const waterTower = () => { const b = new Builder(); for (const [x, z] of [[-2.6, -2.6], [2.6, -2.6], [-2.6, 2.6], [2.6, 2.6]]) b.put(whitewash, rod([x, 0, z], [x * 0.8, 17, z * 0.8], 0.32, 6)); for (const y of [6, 12]) b.put(whitewash, slab(5.4, 0.3, 0.3, 0, y, 2.4), slab(5.4, 0.3, 0.3, 0, y, -2.4), slab(0.3, 0.3, 5.4, 2.4, y, 0), slab(0.3, 0.3, 5.4, -2.4, y, 0));
    b.put(whitewash, drum(4.6, 5, 0, 17, 0, 14, null, 5.2), cone(5.4, 1.6, 0, 22, 0, 14)); b.light(0, 2, 6, LAMP, 0.4, 9); return b; };
  const mast = () => { const b = new Builder(); for (const [x, z] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) b.put(steel, rod([x, 0, z], [x * 0.2, 44, z * 0.2], 0.09, 4));
    for (let y = 4; y < 44; y += 5) { const s = 1.5 * (1 - y / 55); b.put(steel, rod([-s, y, -s], [s, y + 5, -s], 0.05, 3), rod([s, y, s], [-s, y + 5, s], 0.05, 3), rod([s, y, -s], [s, y + 5, s], 0.05, 3), rod([-s, y, s], [-s, y + 5, -s], 0.05, 3)); }
    for (const y of [30, 36, 40]) b.put(whitewash, slab(0.5, 2, 0.3, 0.9, y, 0), slab(0.5, 2, 0.3, -0.9, y, 0)); b.spark(0, 45, 0, RED, 5, 2).spark(0, 24, 0, RED, 3.4, 2); return b; };
  const hoarding = seed => () => { const b = new Builder(), q = rng(seed), c = (q() * 6) | 0; for (const x of [-4.5, 4.5]) b.put(steel, rod([x, 0, 0], [x, 13, 0], 0.16, 5)); b.put(steel, slab(11.4, 5.6, 0.3, 0, 8.4, -0.2));
    b.put(lit(0.5, 0.52, 0.6), slab(11, 5.2, 0.1, 0, 8.6, 0.05)); b.put(signs[c], slab(11, 1.6, 0.12, 0, 8.6, 0.08), slab(3, 3.4, 0.12, -3.2, 10.4, 0.08)); b.light(0, 11, 5, signLight[c], 0.8, 10).light(0, 9, 4, COOL, 0.5, 9); return b; };
  for (const [a, d] of [[20, 96], [74, 150], [112, 170], [146, 110], [176, 84], [60, 240], [128, 250], [-12, 130]]) spot(a, R + d, shikhara);
  for (const [a, d] of [[32, 128], [100, 220], [166, 150], [-24, 100]]) spot(a, R + d, mosque);
  for (const [a, d] of [[24, 200], [140, 200], [84, 280]]) spot(a, R + d, waterTower);
  for (const [a, d] of [[40, 170], [118, 130], [158, 230], [4, 210], [78, 330]]) spot(a, R + d, mast);
  return w;
}
