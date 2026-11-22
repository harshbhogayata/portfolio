// Laxmi Vilas Palace, built facing south at the origin, with its grounds running down to the road.
// The model follows the front of the real building from end to end: the gate at the left; the long left wing with its three domed
// pavilions; the tall tower, drawn in stage by stage to its belfry; the durbar block under the great ribbed dome, with the porch before
// its door; a link of arcades; and the right wing with its three great arched bays, a half dome over each. All of it is built:
// arcades that can be looked into, windows set back in their reveals, balconies on corbels, eaves, parapets, the ends and the back.
import * as THREE from 'three';
import { Builder, painted, lit, box, slab, drum, dome, ball, rod, plain, ribbed, rng, WARM, LAMP, COOL } from './kit.js';
import { masonry, glazing, timber, fine, clad, shadeBy, pane, surround, rect, ngon, band, eave, cornice, row, around, corbel, column, balustrade, railing, kalash, petals, turnedSolid, jharokha, Parts, face, walls, spaced } from './mason.js';
import { palm } from './shore.js';

export function palace() {
  // golden Songadh sandstone, its dressings a shade paler, ochre along the parapets, red stone for the inlaid discs, the domes weathered grey
  const STONE = masonry('palace', { stone: [186, 156, 114], course: 0.5, block: 1.25, joint: 0.72, vary: 0.12 }), T = STONE.userData.tile, D = painted({ tint: 0xb99c70 });
  const mats = { stone: STONE, trim: D, fine: fine(0xb99c70), glass: glazing(), wood: timber('palace', [112, 66, 38]), dark: painted({ tint: 0x17120d }), ochre: painted({ tint: 0xbf9a4a }), ochref: fine(0xbf9a4a), dome: painted({ tint: 0xa3917a }), roof: painted({ tint: 0x6e6252 }), red: fine(0x9c5a40) };
  const gold = lit(1.9, 1.35, 0.42), b = new Builder(), P = new Parts(), q = rng(8), r = rng(8);
  // floor levels: the plinth, then the three storeys of the ranges; the durbar block and the right wing have taller ones of their own
  const P0 = 2.7, S1 = 5.4, S2 = 5.2, S3 = 5.2, Y1 = P0 + S1, Y2 = Y1 + S2, Y3 = Y2 + S3;
  // the openings the building is made of
  const cusp = { kind: 'cusped', lobes: 7, sharp: 0.38, cusp: 0.07 }, N = (n, w, spec) => spaced(n, w / n, spec);
  const wGround = { ...cusp, w: 1.6, h: 3.4, y: 0.9, frame: 0.22, outer: 'flat', hood: true, chance: 0.5 }, wFirst = { kind: 'round', w: 1.25, h: 2.9, y: 1.0, frame: 0.18, sill: true, hood: true, chance: 0.55 }, wTop = { kind: 'pointed', w: 1.1, h: 2.5, y: 1.1, frame: 0.16, chance: 0.45 }, wBack = { kind: 'flat', w: 1.3, h: 2.6, y: 1.0, chance: 0.3 };
  const arch1 = { ...cusp, w: 1.55, h: 4.4, y: 0.2, fill: 'open' }, arch3 = { ...cusp, w: 1.6, h: 3.5, y: 0.95, fill: 'open', rail: 0.85 };

  /* ----- the parts it is put together from ----- */
  // a stretch of wall one storey high between x0 and x1, its openings measured from its middle; an opening may have a small eave over it, a hood
  const hooded = (F, ops, y) => { for (const o of ops) if (o.hood) { const f = o.frame || 0; F.add('fine', eave(rect(o.w + f * 2 + 0.4, 0.3, o.x, -0.15), y + o.y + o.h + (o.kind === 'round' || o.outer === 'flat' ? f : 0) + 0.04, 0.42, 0.2, 0.07)); } return F; };
  const run = (x0, x1, z, y, h, ops, turn = 0, t = 0.6) => P.take(hooded(face(x1 - x0, h, t, T, ops, y, q), ops, y).move((x0 + x1) / 2, 0, z, turn));
  const footing = plan => P.add('stone', band([[0.6, 1.2], [0.6, P0 - 0.75], [0.3, P0 - 0.45], [0.3, P0 - 0.1], [0, P0]], plan, 0, { cap: true, tile: T }));
  // the back, the ends, the roof and the plinth of a block: storeys gives each floor's height above the plinth; L and R say how many windows
  // to a floor each end has, or give its openings outright
  const shell = (x0, x1, zf, d, top, storeys, { L = 0, R = 0, n = Math.max(1, Math.round((x1 - x0) / 4.4)) } = {}) => {
    const w = x1 - x0, grid = (k, len, specs) => k ? storeys.flatMap((y, i) => N(k, len, { ...specs[i], y: y + specs[i].y })) : [];
    run(x0, x1, zf - d, P0, top - P0, grid(n, w, [wBack, wBack, wBack]), Math.PI);
    const end = k => Array.isArray(k) ? k : grid(k, d, [wGround, wFirst, wTop]);
    P.take(face(d, top - P0, 0.6, T, end(R), P0, q).move(x1, 0, zf - d / 2, Math.PI / 2)); P.take(face(d, top - P0, 0.6, T, end(L), P0, q).move(x0, 0, zf - d / 2, -Math.PI / 2));
    P.add('roof', slab(w, 0.25, d, (x0 + x1) / 2, top - 0.25, zf - d / 2)); footing(rect(w, d, (x0 + x1) / 2, zf - d / 2));
  };
  // an arcade that stands free and is seen from both sides: the wall is built facing each way, half its thickness to each face
  const arcade2 = (w, h, t, ops, y, x, z, turn) => { P.take(face(w, h, t / 2, T, ops, y, q).move(x, 0, z, turn)); P.take(face(w, h, t / 2, T, ops.map(o => ({ ...o, x: -o.x, rail: 0, frame: 0 })), y, q).move(x - Math.sin(turn) * t, 0, z - Math.cos(turn) * t, turn + Math.PI)); };
  // the verandah behind an arcade: its back wall in shade, a lit door to each bay, the floor, the ceiling, and the lamps that hang in it
  const loggia = (x0, x1, zf, y, h, n, deep = 2.6) => { const w = x1 - x0, xc = (x0 + x1) / 2, k = Math.max(1, Math.round(w / 6));
    P.add('stone', shadeBy(clad(new THREE.PlaneGeometry(w, h).translate(xc, y + h / 2, zf - deep), T), 0.62)); P.add('trim', slab(w, 0.16, deep, xc, y - 0.14, zf - deep / 2), shadeBy(slab(w, 0.14, deep, xc, y + h - 0.14, zf - deep / 2), 0.7));
    N(n, w, {}).forEach((o, i) => P.add('glass', pane('round', 1.15, 3.0, xc + o.x, y + 0.05, zf - deep + 0.04, { on: q() < 0.75 ? 1 : 0, style: i % 4 })));
    for (let i = 0; i < k; i++) b.light(x0 + (i + 0.5) * w / k, y + h - 0.9, zf - deep / 2, WARM, 0.3, 3.4); };
  // a sloping eave on its brackets along a front, and a string course
  const brow = (x0, x1, z, y, out = 1.0) => { P.add('trim', eave(rect(x1 - x0, 0.4, (x0 + x1) / 2, z - 0.2), y, out, 0.34, 0.11)); P.add('fine', row([x0, z], [x1, z], 1.1, () => corbel(out * 0.76, 0.6, 0.16, y + 0.3), { inset: 0.3 })); };
  const course = (x0, x1, z, y, out = 0.24, h = 0.3) => P.add('trim', slab(x1 - x0 + out * 2, h, out * 2, (x0 + x1) / 2, y - h / 2, z));
  // parapets: the ochre one cut into pointed merlons, kangura; and the balustrade
  const kangura = (plan, y) => { P.add('ochre', band([[0, 0], [0, 0.75], [-0.3, 0.75], [-0.3, 0]], plan, y)); P.add('ochref', around(plan, 0.85, () => plain(new THREE.ConeGeometry(0.34, 0.62, 4)).scale(1, 1, 0.45).translate(0, y + 1.06, -0.15), { inset: 0.45 })); };
  const balus = (plan, y) => P.add('fine', railing(plan, y, { h: 0.9, step: 0.42 }));
  // small domes: a cupola turned smooth with its spike; a kiosk on four posts, chhatri; a larger one on round columns with a gilt tip
  const cupola = (rr, h, x, y, z, seg = 8) => turnedSolid([[rr, 0], [rr * 1.08, h * 0.2], [rr * 0.98, h * 0.45], [rr * 0.7, h * 0.68], [rr * 0.3, h * 0.86], [rr * 0.09, h * 0.96], [rr * 0.04, h * 1.3]], { seg }).translate(x, y, z);
  const kiosk = (s, h, x, y, z) => { for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.add('fine', slab(s * 0.13, h, s * 0.13, x + a * s * 0.4, y, z + c * s * 0.4));
    P.add('fine', slab(s, s * 0.1, s, x, y + h, z), eave(rect(s, s, x, z), y + h + s * 0.1, s * 0.26, s * 0.13, s * 0.05), cupola(s * 0.46, s * 0.6, x, y + h + s * 0.23, z)); };
  const chhatri = (s, h, x, y, z) => { for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.add('fine', drum(s * 0.075, h, x + a * s * 0.4, y, z + c * s * 0.4, 6), slab(s * 0.2, s * 0.07, s * 0.2, x + a * s * 0.4, y + h - s * 0.07, z + c * s * 0.4));
    P.add('trim', slab(s, s * 0.09, s, x, y + h, z), eave(rect(s, s, x, z), y + h + s * 0.09, s * 0.3, s * 0.13, s * 0.045), cupola(s * 0.47, s * 0.62, x, y + h + s * 0.22, z, 12)); b.put(gold, ball(s * 0.075, x, y + h + s * 0.22 + s * 0.62 * 1.3, z, 6)); };
  // a ribbed dome, swelling a little above its neck, on a ring of lotus petals, with the pot-and-bud finial in gilt; gives back the height of its tip
  const onion = (R, h, x, y, z, ribs = 16, swell = 0.1, deep = 0.07) => { const pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector2(Math.max(0.001, R * Math.sqrt(1 - Math.pow(t, 1.75)) * (0.93 + swell * 2.6 * Math.sin(Math.PI * Math.min(1, t * 1.5)) * (1 - t))), h * t)); } return ribbed(pts, ribs, deep).translate(x, y, z); };
  const domed = (R, h, x, y, z, ribs = 16, k = R * 0.3) => { const y1 = y + R * 0.3;
    P.add('trim', turnedSolid([[R, 0], [R * 1.1, R * 0.12], [R * 1.1, R * 0.2], [R * 0.98, R * 0.3]], { seg: ribs * 2 }).translate(x, y, z)); P.add('fine', petals(R * 0.98, Math.min(ribs, 24), R * 0.24, x, y + R * 0.26, z));
    P.add('dome', onion(R, h, x, y1, z, ribs, 0.1, ribs > 20 ? 0.045 : 0.06), turnedSolid([[R * 0.2, 0], [R * 0.27, R * 0.05], [R * 0.1, R * 0.14]], { seg: 10 }).translate(x, y1 + h * 0.985, z)); b.put(gold, kalash(k, x, y1 + h + R * 0.1, z)); return y1 + h + R * 0.1 + k * 2.6; };
  // eight walls round a point, each with its openings: the drum under a dome; and a plain eight-sided shaft
  const octa = (cx, cz, ap, y, h, ops = null, t = 0.5) => { const side = 2 * ap * Math.tan(Math.PI / 8); for (let k = 0; k < 8; k++) { const th = k * Math.PI / 4; P.take(face(side, h, t, T, ops ? ops(k, side) : [], y, q).move(cx + Math.sin(th) * ap, 0, cz + Math.cos(th) * ap, th)); } };
  const shaft8 = (x, z, R, y, h) => P.add('stone', band([[0, 0], [0, h]], ngon(R, 8, x, z), y, { tile: T }));
  // a turret: an eight-sided shaft banded with mouldings, an open lantern of eight posts, a cupola
  const turret = (x, z, R, y0, y1) => { shaft8(x, z, R, y0, y1 - y0); for (const y of [y0 + (y1 - y0) * 0.36, y0 + (y1 - y0) * 0.7, y1 - 0.2]) P.add('trim', cornice(ngon(R, 8, x, z), y, 0.26, 0.36));
    for (let k = 0; k < 8; k++) { const a = (k + 0.5) * Math.PI / 4; P.add('fine', slab(0.17, 1.9, 0.17, x + Math.cos(a) * R * 0.84, y1 + 0.16, z + Math.sin(a) * R * 0.84)); }
    P.add('dark', drum(R * 0.5, 1.9, x, y1 + 0.16, z, 6)); P.add('trim', eave(ngon(R * 0.96, 8, x, z), y1 + 2.06, 0.45, 0.2, 0.08), cupola(R * 0.98, R * 1.2, x, y1 + 2.3, z, 10)); b.put(gold, ball(0.2, x, y1 + 2.3 + R * 1.56, z, 6)); };
  // half a dome, ribbed, as it stands behind a gable
  const halfDome = (R, x, y, z, ribs = 9) => { const pts = []; for (let i = 0; i <= 7; i++) { const a = i / 7 * Math.PI / 2; pts.push(new THREE.Vector2(Math.max(0.01, Math.cos(a) * R), Math.sin(a) * R)); }
    const g = new THREE.LatheGeometry(pts, ribs * 2, Math.PI / 2, Math.PI), p = g.attributes.position; for (let i = 0; i < p.count; i++) if (((i / 8) | 0) % 2) { p.setX(i, p.getX(i) * 0.94); p.setZ(i, p.getZ(i) * 0.94); }
    const flat = g.toNonIndexed(); flat.computeVertexNormals(); return plain(flat).translate(x, y, z); };
  // a great arched gable standing proud of the wall: a cusped window in it, arch within arch of moulding, a row of inlaid discs, and behind it
  // half a dome whose rim shows over the arch, set with spikes
  const gable = (x, z, y, w, hole, depth = 0.8) => { const bw = (w - hole.w) / 2, h = hole.h + bw, R = w / 2, spring = y + h - R, o = cusp;
    P.add('stone', clad(surround('cusped', hole.w, hole.h, x, y, z - depth, { ...o, band: bw, proud: depth, outer: 'round' }), T));
    P.add('trim', surround('round', w, h, x, y, z, { band: 0.5, proud: 0.34 }), surround('cusped', hole.w, hole.h, x, y, z, { ...o, band: 0.32, proud: 0.2 }));
    P.add('fine', surround('round', w - 1.7, h - 0.85, x, y, z, { band: 0.26, proud: 0.14 }), balustrade([x - hole.w / 2, z - 0.2], [x + hole.w / 2, z - 0.2], y, { h: 0.9 }));
    for (let i = 0; i < 7; i++) { const a = (0.14 + i * 0.12) * Math.PI; P.add('red', plain(new THREE.CylinderGeometry(0.3, 0.3, 0.12, 8)).rotateX(Math.PI / 2).translate(x + Math.cos(a) * (R - 0.45), spring + Math.sin(a) * (R - 0.45), z + 0.06)); }
    P.add('glass', pane('cusped', hole.w, hole.h, x, y, z - depth + 0.12, { ...o, on: 1, style: 2 }));
    P.add('dome', halfDome(R + 0.75, x, spring, z - depth + 0.02)); P.add('trim', slab(w + 1.7, 0.3, R + 1.0, x, spring - 0.3, z - depth - (R + 1.0) / 2 + 0.1));
    for (let i = 1; i < 12; i++) { const a = i / 12 * Math.PI; P.add('fine', plain(new THREE.ConeGeometry(0.12, 1.1, 4)).translate(x + Math.cos(a) * (R + 0.8), spring + Math.sin(a) * (R + 0.8) + 0.5, z - depth - 0.2)); }
    b.put(gold, kalash(0.36, x, spring + R + 0.75, z - depth - 0.3)); return spring; };

  /* ----- the gate at the left: an arched way through, a turret at either hand, a low dome over it ----- */
  { const gx = -71, gz = 3, way = [{ ...cusp, x: 0, y: 0.1, w: 4.4, h: 6.2, fill: 'open' }], plan = rect(8, 6, gx, gz - 3);
    arcade2(8, 7.8, 0.8, way, 1.2, gx, gz, 0); arcade2(8, 7.8, 0.8, way, 1.2, gx, gz - 6, Math.PI);
    for (const s of [-1, 1]) P.add('stone', clad(slab(0.8, 7.8, 6, gx + s * 3.6, 1.2, gz - 3), T)); P.add('trim', shadeBy(slab(8, 0.4, 6, gx, 9, gz - 3), 0.8), cornice(plan, 8.9, 0.35, 0.5), drum(2.6, 0.6, gx, 9.4, gz - 3, 12)); kangura(plan, 9.4);
    domed(2.3, 2.9, gx, 10, gz - 3, 12, 0.5); for (const s of [-1, 1]) turret(gx + s * 4.3, gz + 0.3, 0.75, 1.2, 9.6); P.add('roof', slab(4.6, 0.08, 14, gx, 1.2, gz - 3)); b.light(gx, 6, gz - 3, WARM, 0.4, 5); }

  /* ----- the left wing: two storeys, and three pavilions standing forward of it, each a storey higher under its dome ----- */
  shell(-67, -29.5, 0, 24, Y2, [0, S1], { L: 5 });
  for (const [x0, x1, n] of [[-67, -61.7, 2], [-54.3, -51, 1], [-41, -36.7, 1]]) { run(x0, x1, 0, P0, S1, N(n, x1 - x0, wGround)); run(x0, x1, 0, Y1, S2, N(n, x1 - x0, { ...wFirst, rail: 0.8 })); }
  course(-67, -29.5, 0, Y1); { const plan = rect(37.5, 24, -48.25, -12); P.add('trim', cornice(plan, Y2 - 0.5, 0.36, 0.5)); P.add('fine', row([-67, 0], [-29.5, 0], 1.1, () => corbel(0.42, 0.5, 0.16, Y2 - 0.5), { inset: 0.3 })); kangura(plan, Y2); }
  for (const x of [-64.3, -52.6, -38.9]) kiosk(1.5, 2.0, x, Y2, -1.4);
  const pavilion = (x, w, zf, top, R, big) => { const zc = zf - w / 2, plan = rect(w, w, x, zc), up = N(big ? 3 : 2, w - 1.6, { kind: 'pointed', w: 1.15, h: 2.7, y: Y2 + 1.9 - P0, frame: 0.15, rail: 0.8, chance: 0.75 });
    P.take(walls(w, w, top - P0, 0.6, T, { left: up, right: up, back: up, front: [big ? { ...cusp, x: 0, y: 0.05, w: 2.6, h: 4.3, fill: 'door', frame: 0.3, outer: 'flat' } : { ...wGround, x: 0, w: 2.0, h: 3.7 },
      { ...cusp, x: 0, y: S1 + 1.1, w: big ? 3.0 : 2.2, h: 3.5, frame: 0.45, outer: 'flat', proud: 0.14, rail: 0.85, chance: 0.95 }, ...up] }, P0, q).move(x, 0, zf)); footing(plan);
    for (const y of [Y1, Y2]) P.add('trim', cornice(plan, y - 0.2, 0.22, 0.34)); P.add('trim', cornice(plan, top - 0.6, 0.4, 0.55), eave(plan, top - 0.1, 1.1, 0.4, 0.12)); P.add('fine', around(plan, 1.15, () => corbel(0.82, 0.6, 0.16, top + 0.22), { inset: 0.4 }));
    P.add('roof', slab(w, 0.3, w, x, top + 0.15, zc)); balus(rect(w - 0.3, w - 0.3, x, zc), top + 0.45);
    for (const a of [-1, 1]) for (const c of [-1, 1]) kiosk(big ? 1.7 : 1.35, big ? 1.9 : 1.6, x + a * (w / 2 - 0.95), top + 0.45, zc + c * (w / 2 - 0.95));
    const ap = R * 0.92, dh = R * 0.78; octa(x, zc, ap, top + 0.45, dh, (k, side) => [{ kind: 'pointed', x: 0, y: 0.35, w: side * 0.42, h: dh * 0.6, chance: 0.6, depth: 0.4 }]);
    P.add('trim', cornice(ngon(ap / Math.cos(Math.PI / 8), 8, x, zc), top + 0.45 + dh, 0.3, 0.4)); return domed(R, R * (big ? 1.3 : 1.42), x, top + 0.85 + dh, zc, big ? 20 : 16, R * (big ? 0.3 : 0.34)); };
  pavilion(-58, 7.4, 1.6, 19.8, 3.2, false); pavilion(-46, 10, 2.2, 20.4, 4.5, true); pavilion(-33, 7.4, 1.6, 19.8, 3.2, false);
  P.take(jharokha(4.2, 4.1, 1.2, -46, Y1 + 0.95, { roof: 'dome' }).move(0, 0, 2.2)); for (let i = 0; i < 3; i++) P.add('trim', slab(4.6 - i * 0.4, P0 - 1.2 - i * 0.5, 0.5, -46, 1.2, 2.8 + (i + 0.5) * 0.5));   // the balcony over the great pavilion's door, and the steps up to it

  /* ----- between the wing and the durbar block: three storeys, a range of arcades one over another, and the tower rising through ----- */
  shell(-29.5, -4.5, 0, 22, Y3, [0, S1, S1 + S2], { L: N(4, 19, { ...wTop, y: S1 + S2 + 1.1 }) });
  { const x0 = -29.3, x1 = -23.8, w = x1 - x0; run(x0, x1, 0, P0, S1, N(2, w, wGround)); run(x0, x1, 0, Y1, S2, N(2, w, { ...wFirst, rail: 0.8 })); run(x0, x1, 0, Y2, S3, N(2, w, wTop)); course(x0, x1, 0, Y1); course(x0, x1, 0, Y2); brow(x0, x1, 0, Y3 - 0.45); }
  // a range of arcades: a verandah below, windows in carved frames, an open gallery above under a deep eave
  const arcades = (x0, x1, zf, n) => { const w = x1 - x0;
    run(x0, x1, zf, P0, S1, N(n, w, arch1)); run(x0, x1, zf, Y1, S2, N(n, w, { ...wFirst, w: 1.15, frame: 0.3, outer: 'flat', sill: false })); run(x0, x1, zf, Y2, S3, N(n, w, arch3)); loggia(x0, x1, zf, P0, S1, n); loggia(x0, x1, zf, Y2, S3, n);
    for (let i = 0; i <= n; i++) { const x = x0 + i * w / n; P.add('trim', slab(0.36, Y3 - P0, 0.24, x, P0, zf + 0.1)); P.add('fine', column(0.15, 3.2, x, P0, zf + 0.36, { sides: 6 }), column(0.14, 2.7, x, Y2 + 0.95, zf + 0.34, { sides: 6 }), slab(0.5, 0.95, 0.3, x, Y2, zf + 0.3)); }
    for (let i = 0; i < 2; i++) P.add('trim', slab(w - 0.6, (P0 - 1.2) * (2 - i) / 3, 0.5, (x0 + x1) / 2, 1.2, zf + 0.85 + i * 0.5)); course(x0, x1, zf, Y1); brow(x0, x1, zf, Y2 - 0.42, 0.8); brow(x0, x1, zf, Y3 - 0.45, 1.1); };
  arcades(-15.2, -4.5, 0, 5); kangura(rect(25, 22, -17, -11), Y3); for (const x of [-27.5, -11.5, -6.5]) kiosk(1.5, 2.0, x, Y3, -1.4);

  /* ----- the tower: a square shaft drawn in at each gallery, an open belfry of eight columns, a dome ----- */
  const tx = -19.5, tz = -2.5, slit = { kind: 'round', x: 0, w: 1.0, h: 2.3, frame: 0.16, sill: true, chance: 0.5 };
  const stage = (w, y0, y1, ops, front = ops) => { P.take(walls(w, w, y1 - y0, 0.7, T, { front, back: ops, left: ops, right: ops }, y0, q).move(tx, 0, tz + w / 2)); for (const a of [-1, 1]) for (const c of [-1, 1]) P.add('trim', slab(0.7, y1 - y0, 0.7, tx + a * (w / 2 - 0.12), y0, tz + c * (w / 2 - 0.12))); };
  const gallery = (w, y) => { const plan = rect(w, w, tx, tz); P.add('trim', cornice(plan, y - 0.95, 0.4, 0.55), slab(w + 2.3, 0.3, w + 2.3, tx, y, tz)); P.add('fine', around(plan, 0.95, () => corbel(1.0, 0.8, 0.2, y), { inset: 0.3 }), railing(rect(w + 2.0, w + 2.0, tx, tz), y + 0.3, { h: 0.95, step: 0.4 })); };
  const each4 = (w, make) => { for (let k = 0; k < 4; k++) P.take(make().move(tx + Math.sin(k * Math.PI / 2) * w / 2, 0, tz + Math.cos(k * Math.PI / 2) * w / 2, k * Math.PI / 2)); };
  stage(8.6, 1.2, 28, [{ ...slit, y: 19.6 }, { ...slit, y: 23.2 }], [{ ...cusp, x: 0, y: P0 - 1.15, w: 2.4, h: 4.4, fill: 'door', frame: 0.3, outer: 'flat' }, { ...wFirst, x: 0, y: Y1 - 0.2, w: 1.6, h: 3.2, rail: 0.8 }, { ...wFirst, x: 0, y: Y2 - 0.2, w: 1.6, h: 3.2, rail: 0.8 }, { ...slit, y: 19.6 }, { ...slit, y: 23.2 }]);
  footing(rect(8.6, 8.6, tx, tz)); for (let i = 0; i < 3; i++) P.add('trim', slab(4 - i * 0.4, P0 - 1.2 - i * 0.5, 0.5, tx, 1.2, tz + 4.9 + (i + 0.5) * 0.5)); for (const y of [Y1, Y2, Y3 + 0.9, 23.2]) P.add('trim', cornice(rect(8.6, 8.6, tx, tz), y - 0.15, 0.2, 0.3)); gallery(8.6, 28);
  stage(7.8, 28.3, 36, [{ kind: 'round', x: 0, y: 1.9, w: 2.5, h: 4.0, frame: 0.3, on: 1, style: 0 }]);      // an arched opening on each face, with a balcony before it
  each4(7.8, () => new Parts().add('trim', slab(3.7, 0.22, 1.0, 0, 30.0, 0.5)).add('fine', balustrade([-1.8, 0.92], [1.8, 0.92], 30.2, { h: 0.9 }), [-1.3, 0, 1.3].map(x => corbel(0.85, 0.7, 0.2, 30.0).translate(x, 0, 0)))); gallery(7.8, 36);
  stage(7.2, 36.3, 41, [{ kind: 'flat', x: 0, y: 0.8, w: 1.7, h: 2.4, on: 1, style: 1 }]); each4(7.2, () => jharokha(2.6, 2.5, 0.9, 0, 37.0, { roof: 'slope', drop: 0.8 })); gallery(7.2, 41);
  stage(6.6, 41.3, 45.4, N(3, 5.4, { kind: 'pointed', w: 0.85, h: 2.2, y: 0.9, frame: 0.14, chance: 0.6 })); gallery(6.6, 45.4);
  for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const x = tx + a * 3.7, z = tz + c * 3.7; shaft8(x, z, 0.75, 45.7, 3.2); P.add('trim', cornice(ngon(0.75, 8, x, z), 48.7, 0.25, 0.3), cupola(0.85, 1.3, x, 49.0, z, 10)); b.put(gold, ball(0.17, x, 50.75, z, 6)); }
  { const ring = ngon(3.05, 8, tx, tz); for (const [x, z] of ngon(2.72, 8, tx, tz)) P.add('trim', column(0.3, 4.3, x, 45.7, z, { sides: 6 }));
    P.add('trim', band([[0, 0], [0, 0.9], [-0.55, 0.9], [-0.55, 0]], ring, 50), slab(5.2, 0.12, 5.2, tx, 50.0, tz), eave(ring, 50.9, 0.9, 0.3, 0.1), band([[0, 0], [0, 0.35]], ring, 51.2, { cap: true }));
    const tip = domed(2.9, 4.1, tx, 51.55, tz, 16, 0.78); P.add('fine', rod([tx, tip - 0.2, tz], [tx, tip + 4, tz], 0.07)); b.put(lit(1.6, 0.5, 0.2), slab(2.6, 1.5, 0.05, tx + 1.35, tip + 2.3, tz)); }

  /* ----- the durbar block: three tall storeys, an arched gable over each side bay, and in the middle the porch, the great windows and the dome ----- */
  const DX0 = -4.5, DX1 = 29.5, DZ = 5, H1 = 6.2, E1 = P0 + H1, E2 = E1 + H1, E3 = E2 + H1, cx = 12.5, CZ = 6.6, CT = 28.6, cz = CZ - 10.5;
  shell(DX0, DX1, DZ, 34, E3, [0, H1, H1 * 2], { n: 8, L: [0, H1, H1 * 2].map(y => ({ ...wFirst, x: 14.5, y: y + 1.4, w: 1.2 })), R: [0, H1, H1 * 2].map(y => ({ ...wFirst, x: -14.5, y: y + 1.4, w: 1.2 })) });
  for (const [x0, x1] of [[DX0, 6], [19, DX1]]) { const xm = (x0 + x1) / 2;
    run(x0, x1, DZ, P0, H1, [{ ...cusp, x: 0, y: 0.7, w: 3.0, h: 4.6, frame: 0.4, outer: 'flat', proud: 0.14, chance: 0.9 }, ...[-3, 3].map(x => ({ ...wGround, x, w: 1.1, h: 2.8, y: 1.4, frame: 0.16 }))]);
    run(x0, x1, DZ, E1, H1, [{ kind: 'flat', x: 0, y: 1.3, w: 2.0, h: 3.2, on: 1, style: 1 }, ...[-3.1, 3.1].map(x => ({ ...wFirst, x, w: 1.0, h: 2.6, y: 1.5 }))]); P.take(jharokha(3.6, 4.0, 1.25, xm, E1 + 1.2, { roof: 'dome' }).move(0, 0, DZ));
    run(x0, x1, DZ, E2, H1, N(3, 6.6, { ...cusp, w: 1.3, h: 3.4, y: 1.2, frame: 0.2, rail: 0.85, chance: 0.85 })); course(x0, x1, DZ, E1); course(x0, x1, DZ, E2); brow(x0, x1, DZ, E3 - 0.45, 1.1); for (const d of [-4.6, -1.9, 1.9, 4.6]) P.add('trim', slab(0.4, E3 - P0 - 0.5, 0.26, xm + d, P0, DZ + 0.12));
    const sp = gable(xm, DZ - 0.1, E3 + 0.5, 8.0, { w: 2.6, h: 3.6 }); P.add('stone', band([[0, 0], [0, sp - E3 - 0.5]], rect(8, 4.2, xm, DZ - 3), E3 + 0.5, { tile: T, cap: true })); }
  balus(rect(34, 34, cx, DZ - 17), E3); for (const x of [DX0 - 0.3, DX1 + 0.3]) turret(x, DZ + 0.3, 1.25, 1.2, 23.4);
  { const w = 13, d = 21, y3 = E3 - P0, plan = rect(w, d, cx, cz), side = N(3, 15, { kind: 'pointed', w: 1.3, h: 3.2, y: y3 + 1.6, frame: 0.2, chance: 0.75 });
    P.take(walls(w, d, CT - P0, 0.7, T, { left: side, right: side, back: side, front: [
      { ...cusp, x: 0, y: 0.05, w: 3.2, h: 4.5, fill: 'door' }, ...[-4.3, 4.3].map(x => ({ ...wGround, x, w: 1.2, h: 3.0, y: 1.0, on: 1 })),
      ...N(3, 9.9, { ...cusp, w: 2.1, h: 4.3, y: H1 + 1.1, frame: 0.3, on: 1 }), ...N(3, 9.9, { ...cusp, w: 1.5, h: 3.2, y: H1 * 2 + 1.5, frame: 0.22, chance: 0.9 }),
      { ...cusp, lobes: 9, x: 0, y: y3 + 0.7, w: 4.4, h: 5.0, frame: 0.5, proud: 0.2, on: 1, style: 2 }, ...[-4.6, 4.6].map(x => ({ kind: 'pointed', x, y: y3 + 1.9, w: 1.0, h: 2.6, frame: 0.15, chance: 0.8 }))] }, P0, q).move(cx, 0, CZ));
    for (const y of [E1, E2, E3]) P.add('trim', cornice(plan, y - 0.2, 0.24, 0.36)); P.add('trim', cornice(plan, CT - 0.65, 0.45, 0.6), eave(plan, CT - 0.05, 1.2, 0.4, 0.12)); P.add('fine', around(plan, 1.2, () => corbel(0.9, 0.65, 0.18, CT + 0.28), { inset: 0.4 }));
    P.add('roof', slab(w, 0.3, d, cx, CT + 0.1, cz)); balus(rect(w - 0.3, d - 0.3, cx, cz), CT + 0.4);
    // the balcony on corbels before the upper windows
    P.add('trim', slab(11.4, 0.24, 1.1, cx, E2 + 1.26, CZ + 0.55)); P.add('fine', row([cx - 5.4, CZ], [cx + 5.4, CZ], 1.2, () => corbel(0.9, 0.7, 0.18, E2 + 1.26)), balustrade([cx - 5.6, CZ + 1.02], [cx + 5.6, CZ + 1.02], E2 + 1.5, { h: 0.9 }));
    for (const s of [-1, 1]) { shaft8(cx + s * 6.5, CZ, 0.6, P0, CT - P0 + 0.4); for (const z of [CZ - 1.3, cz - 9.2]) chhatri(2.5, 2.7, cx + s * 5.2, CT + 0.4, z); }
    // the eight-sided drum with a window in each side, a pinnacle at each corner, and the great dome
    octa(cx, cz, 5.5, CT + 0.4, 4.4, (k, s) => [{ ...cusp, x: 0, y: 0.7, w: s * 0.42, h: 3.0, frame: 0.2, on: k % 2 ? undefined : 1, chance: 0.5, depth: 0.45 }], 0.6);
    for (const [x, z] of ngon(6.2, 8, cx, cz)) P.add('fine', slab(0.42, 4.9, 0.42, x, CT + 0.4, z), cupola(0.42, 0.7, x, CT + 5.3, z, 6));
    P.add('trim', cornice(ngon(5.95, 8, cx, cz), CT + 4.8, 0.5, 0.6)); domed(6.2, 8.0, cx, CT + 5.4, cz, 32, 1.2);
    // the porch before the door: three arches to the front and one to either side, a balustrade round its roof
    const pz = CZ + 5.6, ph = 5.4, porch = rect(12, 5.6, cx, pz - 2.8);
    arcade2(12, ph, 0.7, N(3, 10.2, { ...cusp, w: 2.5, h: 4.3, y: 0.12, fill: 'open' }), P0, cx, pz, 0);
    for (const s of [-1, 1]) arcade2(5.6, ph, 0.7, [{ ...cusp, x: 0, y: 0.12, w: 2.8, h: 4.3, fill: 'open' }], P0, cx + s * 6, pz - 2.8, s * Math.PI / 2);
    footing(porch); P.add('trim', shadeBy(slab(12, 0.3, 5.6, cx, P0 + ph, pz - 2.8), 0.8), cornice(porch, P0 + ph - 0.3, 0.4, 0.6)); balus(porch, P0 + ph + 0.3);
    for (const s of [-1, 1]) { kiosk(1.2, 1.4, cx + s * 5.3, P0 + ph + 0.3, pz - 0.7); for (const x of [1.7, 5.2]) P.add('fine', column(0.17, 3.2, cx + s * x, P0, pz + 0.24, { sides: 6 })); }
    for (let i = 0; i < 4; i++) P.add('trim', slab(9.6 - i * 0.4, P0 - (i + 1) * 0.25 - 1.2, 0.45, cx, 1.2, pz + 0.6 + (i + 0.5) * 0.45)); b.light(cx, 6.4, pz - 2.8, WARM, 0.45, 5); }

  /* ----- the link: arcades again ----- */
  shell(DX1, 42, 0, 22, Y3, [0, S1, S1 + S2]); arcades(DX1, 42, 0, 5); kangura(rect(12.5, 22, 35.75, -11), Y3); kiosk(1.5, 2.0, 35.75, Y3, -1.4);

  /* ----- the right wing: three great bays, each a door, a balcony of three arches, and an arched gable under half a dome; turrets between ----- */
  const GZ = 2, G1 = P0 + 5.6, G2 = G1 + 5.6, G3 = G2 + 5.0, bays = [47.6, 58.5, 69.4];
  shell(42, 75, GZ, 26, G3, [0, 5.6, 11.2], { R: 5, n: 8 });
  run(42, 75, GZ, P0, 5.6, bays.flatMap(x => [{ ...cusp, x: x - 58.5, y: 0.5, w: 2.6, h: 4.3, frame: 0.35, outer: 'flat', chance: 0.9 }, ...[-2.9, 2.9].map(d => ({ kind: 'flat', x: x - 58.5 + d, y: 1.3, w: 0.9, h: 2.5, frame: 0.14 }))]));
  run(42, 75, GZ, G1, 5.6, bays.flatMap(x => N(3, 4.5, { ...cusp, w: 1.05, h: 3.1, y: 1.3, on: 1 }).map(o => ({ ...o, x: o.x + x - 58.5 })))); run(42, 75, GZ, G2, 5.0, []);
  course(42, 75, GZ, G1); course(42, 75, GZ, G2); { const plan = rect(33, 26, 58.5, GZ - 13); P.add('trim', cornice(plan, G3 - 0.5, 0.36, 0.5)); balus(plan, G3); }
  bays.forEach((x, i) => { P.take(jharokha(5.6, 4.2, 1.5, x, G1 + 1.1, { roof: 'crest', drop: 1.1 }).move(0, 0, GZ)); for (const d of [-0.95, 0.95]) P.add('trim', column(0.13, 3.3, x + d, G1 + 2.02, GZ + 1.3, { sides: 6 }));
    gable(x, GZ + 0.9, G2 + (i === 1 ? 1.2 : 0.4), 8.2, { w: 3.0, h: i === 1 ? 5.6 : 4.4 }); });
  for (const x of [42.7, 53.05, 63.95, 74.3]) turret(x, GZ + 0.5, 1.25, 1.2, 21.8); turret(74.3, GZ - 25.5, 1.25, 1.2, 21.8);
  P.add('fine', row([42, GZ], [75, GZ], 1.1, () => corbel(0.42, 0.5, 0.16, G3 - 0.5), { inset: 0.3 })); for (const x of bays) for (const d of [-3.9, 3.9]) P.add('trim', slab(0.4, G2 - P0, 0.26, x + d, P0, GZ + 0.12));

  P.into(b, mats);

  // the grounds: lawn, a walk lit by low lamps, a fountain, palms, hedges, and the gate on the road
  const lawn = painted({ tint: 0x2c5a3a }), path = painted({ tint: 0xb7a78c }), leaf = painted({ tint: 0x1f4a2c }), trunk = painted({ tint: 0x6f5a44 }), water = lit(0.35, 0.6, 0.9), iron = painted({ tint: 0x33353d });
  b.put(lawn, box(160, 0.3, 30, 0, 1.36, 24)); b.put(path, box(7, 0.34, 30, 12.5, 1.36, 24), box(150, 0.34, 3.4, 0, 1.36, 11.4));
  for (let z = 17; z <= 37; z += 5) for (const sx of [-4.3, 4.3]) { b.put(iron, slab(0.16, 0.9, 0.16, 12.5 + sx, 1.7, z)); b.put(lit(1.8, 1.4, 0.8), ball(0.16, 12.5 + sx, 2.7, z, 6)); b.light(12.5 + sx, 2.7, z, LAMP, 0.5, 3.2, 1.4); }
  for (const fx of [-32, 52]) {                                                                                             // two basins with a jet each
    b.put(path, drum(5.2, 0.7, fx, 1.6, 24, 16), drum(1.1, 1.3, fx, 2.3, 24, 10)); b.put(water, plain2(new THREE.CircleGeometry(4.7, 20)).rotateX(-Math.PI / 2).translate(fx, 2.32, 24));
    b.light(fx, 3.2, 24, COOL, 0.8, 5); for (let i = 0; i < 14; i++) b.spark(fx + (r() - 0.5) * 1.4, 3.6 + r() * 3.6, 24 + (r() - 0.5) * 1.4, COOL, 0.9, 1);
  }
  { const pm = [palm(4), palm(5), palm(6)]; let i = 0; for (let x = -70; x <= 70; x += 14) if (Math.abs(x - 12.5) > 8) { const z = 17 + (Math.abs(x) % 28 ? 0 : 3); b.stamp(pm[i++ % 3], x, z, i * 1.3, 1, 1.6); } }   // palms along the front
  for (let x = -76; x <= 76; x += 4) if (Math.abs(x - 12.5) > 5) b.put(leaf, slab(3.6, 1.3, 1.5, x, 1.6, 38.2));                // the hedge along the road
  for (const sx of [-5.2, 5.2]) { b.put(D, slab(1.8, 5.4, 1.8, 12.5 + sx, 1.5, 38.4), slab(2.3, 0.4, 2.3, 12.5 + sx, 6.9, 38.4), dome(0.9, 1.1, 12.5 + sx, 7.3, 38.4, { seg: 8 })); b.put(lit(1.8, 1.4, 0.8), ball(0.34, 12.5 + sx, 6.3, 39.5, 8)); b.light(12.5 + sx, 6.3, 39.8, LAMP, 0.8, 5, 2.4); }


  // its floodlights: a row in the grass before the front, others set higher for the tower and the domes, a few round the ends and behind
  for (let x = -72; x <= 72; x += 8) b.light(x, 2.2, 17, LAMP, 0.22, 13);
  b.light(tx, 26, 14, LAMP, 0.26, 12).light(tx, 40, 11, LAMP, 0.24, 10).light(tx, 52, 9, LAMP, 0.2, 8).light(tx - 13, 36, tz, LAMP, 0.14, 11).light(tx + 13, 36, tz, LAMP, 0.14, 11).light(tx, 38, tz - 13, LAMP, 0.12, 11);
  b.light(12.5, 30, 18, LAMP, 0.3, 13).light(12.5, 42, 12, LAMP, 0.22, 11).light(-4, 40, -4, LAMP, 0.14, 11).light(29, 40, -4, LAMP, 0.14, 11).light(12.5, 40, -22, LAMP, 0.12, 11);
  b.light(-46, 24, 13, LAMP, 0.2, 9).light(-58, 23, 12, LAMP, 0.16, 8).light(-33, 23, 12, LAMP, 0.16, 8).light(58.5, 22, 15, LAMP, 0.2, 10).light(47.6, 21, 14, LAMP, 0.14, 8).light(69.4, 21, 14, LAMP, 0.14, 8);
  for (const z of [-4, -16]) b.light(86, 2.2, z, LAMP, 0.16, 12).light(-80, 2.2, z - 4, LAMP, 0.14, 12); for (let x = -64; x <= 64; x += 16) b.light(x, 2.2, -44, LAMP, 0.1, 13);
  return b;
}
const plain2 = g => { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.004, 0.004); return g; };
