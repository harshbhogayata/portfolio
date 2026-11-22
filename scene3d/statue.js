// Sarveshwar Mahadev, modelled in the round. The figure is built the way a sculptor builds in clay: masses laid one on another and
// smoothed together (the trunk, the limbs, the head and its hair), then what he wears and carries: the serpent, the beads, the
// trident with its drum. The clay is a field of distances held on a grid; its surface is drawn off as a mesh when the page loads.
// He faces south across the lake, gilded, lit by the lamps at his feet.
import * as THREE from 'three';

class Clay {
  constructor(lo, hi, cell, band = 0.7) { this.lo = lo; this.hi = hi; this.cell = cell; this.band = band;                    // band: how far from the surface the field is kept
    this.n = [0, 1, 2].map(i => Math.ceil((hi[i] - lo[i]) / cell) + 1); this.g = new Float32Array(this.n[0] * this.n[1] * this.n[2]).fill(band); }
  // Lay a shape into the field: d gives the distance to it from any point; k is how softly it runs into what is already there.
  lay(box, d, k = 0.3, carve = false) {
    const { lo, cell, n, g } = this, m = k + this.band, ix = (v, i) => Math.max(0, Math.min(n[i] - 1, v)); k = Math.max(k, 1e-3);
    const x0 = ix(Math.floor((box[0] - m - lo[0]) / cell), 0), x1 = ix(Math.ceil((box[3] + m - lo[0]) / cell), 0), y0 = ix(Math.floor((box[1] - m - lo[1]) / cell), 1), y1 = ix(Math.ceil((box[4] + m - lo[1]) / cell), 1), z0 = ix(Math.floor((box[2] - m - lo[2]) / cell), 2), z1 = ix(Math.ceil((box[5] + m - lo[2]) / cell), 2);
    if (box[3] + m < lo[0] || box[0] - m > this.hi[0] || box[4] + m < lo[1] || box[1] - m > this.hi[1] || box[5] + m < lo[2] || box[2] - m > this.hi[2]) return this;
    for (let z = z0; z <= z1; z++) { const pz = lo[2] + z * cell; for (let y = y0; y <= y1; y++) { const py = lo[1] + y * cell; let i = (z * n[1] + y) * n[0] + x0;
      for (let x = x0; x <= x1; x++, i++) { const v = d(lo[0] + x * cell, py, pz), a = g[i];
        if (carve) { const h = Math.max(k - Math.abs(a + v), 0) / k; g[i] = Math.max(a, -v) + h * h * k * 0.25; }
        else { const h = Math.max(k - Math.abs(a - v), 0) / k; g[i] = Math.min(a, v) - h * h * k * 0.25; } } } }
    return this;
  }
  // An egg: centre, three radii, and a turn about x, y and z if it is to lie askew.
  egg(c, r, k, turn = null, carve = false) {
    const m = turn ? Math.max(r[0], r[1], r[2]) : 0, R = turn ? new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(turn[0], turn[1], turn[2])).elements : null, small = Math.min(r[0], r[1], r[2]);
    return this.lay(turn ? [c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m] : [c[0] - r[0], c[1] - r[1], c[2] - r[2], c[0] + r[0], c[1] + r[1], c[2] + r[2]], (x, y, z) => {
      let px = x - c[0], py = y - c[1], pz = z - c[2]; if (R) { const a = px * R[0] + py * R[1] + pz * R[2], b = px * R[4] + py * R[5] + pz * R[6], e = px * R[8] + py * R[9] + pz * R[10]; px = a; py = b; pz = e; }
      const k0 = Math.hypot(px / r[0], py / r[1], pz / r[2]), k1 = Math.hypot(px / (r[0] * r[0]), py / (r[1] * r[1]), pz / (r[2] * r[2])); return k1 > 1e-6 ? k0 * (k0 - 1) / k1 : -small; }, k, carve);
  }
  // A limb from one point to another, thicker at one end than the other.
  limb(a, b, ra, rb, k, carve = false) {
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], l2 = dx * dx + dy * dy + dz * dz || 1e-9, r = Math.max(ra, rb);
    return this.lay([Math.min(a[0], b[0]) - r, Math.min(a[1], b[1]) - r, Math.min(a[2], b[2]) - r, Math.max(a[0], b[0]) + r, Math.max(a[1], b[1]) + r, Math.max(a[2], b[2]) + r], (x, y, z) => {
      const px = x - a[0], py = y - a[1], pz = z - a[2]; let t = (px * dx + py * dy + pz * dz) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t; return Math.hypot(px - dx * t, py - dy * t, pz - dz * t) - (ra + (rb - ra) * t); }, k, carve);
  }
  // A limb that curves: drawn smoothly through its points, with a thickness given at each.
  run(pts, radii, k, steps = 5) {
    const P = i => pts[Math.max(0, Math.min(pts.length - 1, i))], at = (i, t) => [0, 1, 2].map(c => { const p0 = P(i - 1)[c], p1 = P(i)[c], p2 = P(i + 1)[c], p3 = P(i + 2)[c]; return 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (3 * p1 - p0 - 3 * p2 + p3) * t * t * t); });
    const rad = (i, t) => { const a = Array.isArray(radii) ? radii[i] : radii, b = Array.isArray(radii) ? radii[Math.min(radii.length - 1, i + 1)] : radii; return a + (b - a) * t; };
    for (let i = 0; i < pts.length - 1; i++) for (let s = 0; s < steps; s++) this.limb(at(i, s / steps), at(i, (s + 1) / steps), rad(i, s / steps), rad(i, (s + 1) / steps), k);
    return this;
  }
  // A ring lying flat, or turned.
  ring(c, R, r, k, turn = null) {
    const M = turn ? new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(turn[0], turn[1], turn[2])).elements : null, m = R + r;
    return this.lay([c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m], (x, y, z) => { let px = x - c[0], py = y - c[1], pz = z - c[2]; if (M) { const a = px * M[0] + py * M[1] + pz * M[2], b = px * M[4] + py * M[5] + pz * M[6], e = px * M[8] + py * M[9] + pz * M[10]; px = a; py = b; pz = e; }
      return Math.hypot(Math.hypot(px, pz) - R, py) - r; }, k);
  }
  // The field's value anywhere, between the points of the grid.
  read(x, y, z) {
    const { lo, cell, n, g } = this, fx = Math.max(0, Math.min(n[0] - 1.001, (x - lo[0]) / cell)), fy = Math.max(0, Math.min(n[1] - 1.001, (y - lo[1]) / cell)), fz = Math.max(0, Math.min(n[2] - 1.001, (z - lo[2]) / cell));
    const ix = fx | 0, iy = fy | 0, iz = fz | 0, tx = fx - ix, ty = fy - iy, tz = fz - iz, i = (iz * n[1] + iy) * n[0] + ix, sx = 1, sy = n[0], sz = n[0] * n[1];
    const a = g[i] + (g[i + sx] - g[i]) * tx, b = g[i + sy] + (g[i + sy + sx] - g[i + sy]) * tx, c = g[i + sz] + (g[i + sz + sx] - g[i + sz]) * tx, d = g[i + sz + sy] + (g[i + sz + sy + sx] - g[i + sz + sy]) * tx;
    return (a + (b - a) * ty) + ((c + (d - c) * ty) - (a + (b - a) * ty)) * tz;
  }
  // Draw the surface off the field between two heights: a point in every cell the surface passes through, joined to its neighbours.
  skin(yFrom = -1e9, yTo = 1e9) {
    const { lo, cell, n, g } = this, [nx, ny, nz] = n, sx = 1, sy = nx, sz = nx * ny, id = new Int32Array(nx * ny * nz).fill(-1), P = [], I = [], far = cell * 2.6;
    const j0 = Math.max(0, Math.floor((yFrom - lo[1]) / cell)), j1 = Math.min(ny - 2, Math.ceil((yTo - lo[1]) / cell)), off = [0, sx, sy, sy + sx, sz, sz + sx, sz + sy, sz + sy + sx], cx = [0, 1, 0, 1, 0, 1, 0, 1], cy = [0, 0, 1, 1, 0, 0, 1, 1], cz = [0, 0, 0, 0, 1, 1, 1, 1];
    const ea = [0, 2, 4, 6, 0, 1, 4, 5, 0, 1, 2, 3], eb = [1, 3, 5, 7, 2, 3, 6, 7, 4, 5, 6, 7], v = new Float32Array(8);
    for (let z = 0; z < nz - 1; z++) for (let y = j0; y <= j1; y++) { let i = (z * ny + y) * nx; for (let x = 0; x < nx - 1; x++, i++) {
      const d0 = g[i]; if (d0 > far || d0 < -far) continue;
      let mask = 0; for (let c = 0; c < 8; c++) { v[c] = g[i + off[c]]; if (v[c] < 0) mask |= 1 << c; } if (mask === 0 || mask === 255) continue;
      let ax = 0, ay = 0, az = 0, k = 0; for (let e = 0; e < 12; e++) { const a = ea[e], b = eb[e]; if ((v[a] < 0) === (v[b] < 0)) continue; const t = v[a] / (v[a] - v[b]); ax += cx[a] + (cx[b] - cx[a]) * t; ay += cy[a] + (cy[b] - cy[a]) * t; az += cz[a] + (cz[b] - cz[a]) * t; k++; }
      id[i] = P.length / 3; P.push(lo[0] + (x + ax / k) * cell, lo[1] + (y + ay / k) * cell, lo[2] + (z + az / k) * cell); } }
    const quad = (a, b, c, d, flip) => { if (a < 0 || b < 0 || c < 0 || d < 0) return; if (flip) I.push(a, d, c, a, c, b); else I.push(a, b, c, a, c, d); };
    for (let z = 1; z < nz - 1; z++) for (let y = Math.max(1, j0); y <= j1; y++) { let i = (z * ny + y) * nx + 1; for (let x = 1; x < nx - 1; x++, i++) { const s = g[i] < 0;
      if ((g[i + sx] < 0) !== s) quad(id[i - sy - sz], id[i - sz], id[i], id[i - sy], !s);
      if ((g[i + sy] < 0) !== s) quad(id[i - sx - sz], id[i - sx], id[i], id[i - sz], !s);
      if ((g[i + sz] < 0) !== s) quad(id[i - sx - sy], id[i - sy], id[i], id[i - sx], !s); } }
    // which way each point of the surface faces, and how deep in a fold it lies
    const N = new Float32Array(P.length), A = new Float32Array(P.length / 3), h = cell, r1 = this.band * 0.3, r2 = this.band * 0.78;
    for (let i = 0; i < P.length; i += 3) { const x = P[i], y = P[i + 1], z = P[i + 2]; let gx = this.read(x + h, y, z) - this.read(x - h, y, z), gy = this.read(x, y + h, z) - this.read(x, y - h, z), gz = this.read(x, y, z + h) - this.read(x, y, z - h); const l = Math.hypot(gx, gy, gz) || 1; gx /= l; gy /= l; gz /= l;
      N[i] = gx; N[i + 1] = gy; N[i + 2] = gz; const o = 0.45 * Math.min(1, Math.max(0, this.read(x + gx * r1, y + gy * r1, z + gz * r1) / r1)) + 0.55 * Math.min(1, Math.max(0, this.read(x + gx * r2, y + gy * r2, z + gz * r2) / r2)); A[i / 3] = 0.3 + 0.7 * o; }
    return { P: new Float32Array(P), N, A, I };
  }
}

/* The figure. Heights are in metres from the soles of his feet; he faces +z; his right hand is at -x. */
function sculpt(c) {
  // the low base he stands on
  c.egg([0, -0.05, 0.5], [5.0, 0.42, 4.0], 0.1);
  // legs: feet, shins with their calves, knees, thighs
  for (const s of [-1, 1]) { const x = s * 1.3;
    c.egg([x * 1.02, 0.62, 1.15], [0.82, 0.52, 1.7], 0.2).egg([x * 1.02, 0.5, 2.3], [0.78, 0.3, 0.6], 0.2).limb([x, 1.2, 0.2], [x, 7.6, 0.25], 0.66, 0.98, 0.35).egg([x, 5.5, -0.2], [0.95, 2.0, 1.0], 0.5).egg([x, 8.0, 0.4], [0.98, 0.95, 0.95], 0.4).limb([x, 8.3, 0.25], [s * 1.55, 14.4, 0.1], 1.1, 1.6, 0.5);
    c.ring([x, 1.75, 0.2], 0.78, 0.13, 0.08).ring([x, 2.15, 0.2], 0.8, 0.1, 0.08); }                                    // anklets
  // the cloth from waist to shin: fuller toward the hem, hanging in folds
  const sax = t => 3.3 - 0.45 * t, saz = t => 2.3 - 0.32 * t, Y0 = 5.3, Y1 = 17.5;
  c.lay([-3.5, Y0, -2.5, 3.5, Y1, 2.6], (x, y, z) => { const t = Math.max(0, Math.min(1, (y - Y0) / (Y1 - Y0))), ax = sax(t), az = saz(t), q = Math.hypot(x / ax, (z - 0.12) / az), a = Math.atan2(z, x);
    let d = (q - 1) * Math.min(ax, az) * 0.92; d += (0.075 * Math.sin(a * 13 + Math.sin(y * 0.5) * 1.4) + 0.04 * Math.sin(a * 29 + y * 0.7)) * (1 - 0.72 * t); d -= 0.05 * Math.max(0, Math.sin(y * 4.2 + Math.sin(a * 5) * 1.2)) * Math.max(0, 0.6 - t);
    return Math.max(d, Y0 - y, y - Y1 - 0.3); }, 0.25);
  // the pleats that fall down the front of it, and the sash tied over it at the waist with its ends hanging at his left hip
  c.lay([-0.95, 5.0, 1.4, 0.95, 17.2, 3.0], (x, y, z) => { const t = Math.max(0, Math.min(1, (y - Y0) / (Y1 - Y0))), zc = saz(t) + 0.18, w = 0.72 + 0.14 * (1 - t), dx = Math.abs(x) - w, dy = Math.abs(y - 11.0) - 6.0, dz = Math.abs(z - zc) - 0.2 - 0.07 * Math.cos(x * 12);
    return Math.hypot(Math.max(dx, 0), Math.max(dy, 0), Math.max(dz, 0)) + Math.min(Math.max(dx, dy, dz), 0) - 0.14; }, 0.12);
  c.lay([-3.4, 16.4, -2.6, 3.4, 18.4, 2.7], (x, y, z) => { const ax = sax(1) + 0.02, az = saz(1) + 0.02, q = Math.hypot(x / ax, (z - 0.12) / az); return Math.hypot((q - 1) * az, (y - 17.35) * 0.62) - 0.34 - 0.04 * Math.sin(Math.atan2(z, x) * 22); }, 0.12);
  c.egg([2.6, 17.2, 1.3], [0.62, 0.55, 0.55], 0.15).run([[2.7, 16.9, 1.45], [3.0, 15.0, 1.55], [2.85, 12.6, 1.5], [3.1, 10.6, 1.4]], [0.42, 0.36, 0.34, 0.2], 0.12).run([[2.5, 16.9, 1.6], [2.3, 14.6, 1.95], [2.45, 12.8, 1.9]], [0.36, 0.3, 0.16], 0.12);
  // the ends of the cloth that sweep down behind him to the ground on either side
  c.run([[-2.7, 12.5, -1.2], [-3.5, 8.6, -1.5], [-4.2, 4.6, -1.3], [-4.6, 1.2, -0.8], [-4.2, 0.3, 0.1]], [0.5, 0.85, 1.0, 0.8, 0.35], 0.35);
  c.run([[2.6, 11.5, -1.3], [3.3, 7.6, -1.6], [3.9, 3.6, -1.3], [4.1, 0.8, -0.7], [3.7, 0.3, 0.1]], [0.45, 0.75, 0.9, 0.7, 0.3], 0.35);
  // the trunk: hips, belly, chest, the muscles of the breast, the shoulders, the neck
  c.egg([0, 16.2, 0], [2.75, 2.2, 1.9], 0.5).egg([0, 18.7, 0.1], [2.35, 2.5, 1.62], 0.6).egg([0, 21.8, 0.12], [3.02, 2.65, 1.9], 0.6).egg([-1.32, 22.2, 1.28], [1.42, 1.12, 0.74], 0.45).egg([1.32, 22.2, 1.28], [1.42, 1.12, 0.74], 0.45);
  c.egg([-3.55, 23.75, 0], [1.28, 1.25, 1.25], 0.5).egg([3.55, 23.75, 0], [1.28, 1.25, 1.25], 0.5).limb([0, 24.0, -0.15], [0, 26.3, 0.1], 1.35, 0.98, 0.6).egg([0, 17.75, 1.62], [0.2, 0.26, 0.2], 0.1, null, true);
  // his right arm: hanging to the elbow, the forearm raised, the hand open in blessing
  c.limb([-3.6, 23.6, 0], [-4.5, 19.2, 0.25], 1.05, 0.86, 0.4).limb([-4.5, 19.2, 0.25], [-4.75, 20.5, 2.25], 0.86, 0.6, 0.35).ring([-4.05, 21.5, 0.12], 1.02, 0.17, 0.08, [0, 0, -0.19]).ring([-4.72, 20.3, 1.95], 0.72, 0.13, 0.06, [1.0, 0, 0]);
  c.egg([-4.8, 21.35, 2.7], [0.78, 0.85, 0.3], 0.2, [-0.18, 0, 0]); for (let i = 0; i < 4; i++) c.limb([-5.36 + i * 0.37, 21.9, 2.78], [-5.4 + i * 0.38, 23.15 + [0, 0.25, 0.2, -0.1][i], 2.92], 0.19, 0.15, 0.07); c.limb([-4.2, 21.0, 2.75], [-3.72, 21.85, 2.95], 0.21, 0.16, 0.08);
  // his left arm: the forearm brought forward, the fist closed round the shaft of the trident
  c.limb([3.6, 23.6, 0], [4.45, 19.2, 0.5], 1.05, 0.86, 0.4).limb([4.45, 19.2, 0.5], [2.5, 18.85, 2.45], 0.86, 0.62, 0.35).ring([4.05, 21.5, 0.25], 1.02, 0.17, 0.08, [0, 0, 0.19]).ring([2.75, 18.9, 2.25], 0.74, 0.13, 0.06, [0.9, 0, 0.95]);
  c.egg([1.72, 18.85, 2.72], [0.78, 0.7, 0.72], 0.2); for (let i = 0; i < 4; i++) c.limb([1.15, 19.3 - i * 0.3, 3.05], [2.05, 19.3 - i * 0.3, 3.3], 0.19, 0.19, 0.06);
  // the head: skull and jaw, then the face
  c.egg([0, 27.75, 0.2], [1.32, 1.7, 1.5], 0.4).egg([0, 26.75, 0.72], [1.0, 0.92, 0.9], 0.4).egg([0, 26.3, 1.22], [0.42, 0.36, 0.36], 0.25);
  c.limb([0, 28.15, 1.5], [0, 27.3, 1.92], 0.15, 0.24, 0.16).egg([0, 27.2, 1.83], [0.34, 0.17, 0.2], 0.1);                                                       // the nose
  for (const s of [-1, 1]) { c.limb([s * 0.2, 28.2, 1.5], [s * 0.98, 28.22, 1.16], 0.17, 0.12, 0.14);                                                       // the brow
    c.egg([s * 0.55, 27.88, 1.3], [0.36, 0.2, 0.2], 0.16, null, true).egg([s * 0.55, 27.86, 1.3], [0.3, 0.13, 0.16], 0.05);                                    // the eye in its socket
    c.egg([s * 0.78, 27.2, 1.02], [0.52, 0.5, 0.42], 0.3);                                                                                                      // the cheek
    c.egg([s * 1.33, 27.55, 0.15], [0.16, 0.5, 0.3], 0.1).limb([s * 1.36, 27.1, 0.2], [s * 1.42, 26.4, 0.3], 0.14, 0.11, 0.06).ring([s * 1.45, 26.05, 0.3], 0.3, 0.1, 0.05, [0, 0, Math.PI / 2]); }   // the ear, its long lobe and its ring
  c.egg([0, 26.82, 1.56], [0.4, 0.1, 0.17], 0.07).egg([0, 26.62, 1.52], [0.33, 0.11, 0.16], 0.07).egg([0, 26.72, 1.7], [0.44, 0.03, 0.1], 0.03, null, true).egg([0, 28.62, 1.42], [0.08, 0.2, 0.08], 0.05);   // the lips, and the eye in his forehead
  // the hair: bound over the skull, piled in a knot on the crown, and falling in locks behind the shoulders
  c.lay([-1.7, 27.6, -1.9, 1.7, 30.2, 1.8], (x, y, z) => { const px = x / 1.5, py = (y - 28.55) / 1.45, pz = (z + 0.2) / 1.62, k0 = Math.hypot(px, py, pz), k1 = Math.hypot(px / 1.5, py / 1.45, pz / 1.62); let d = k1 > 1e-6 ? k0 * (k0 - 1) / k1 : -1;
    d += 0.035 * Math.sin(Math.atan2(z + 0.2, x) * 18 + y * 2); return Math.max(d, (28.3 - y) * 0.9 + (z - 0.9) * 0.75); }, 0.18);
  c.lay([-1.3, 29.2, -1.4, 1.3, 31.9, 1.3], (x, y, z) => { const a = Math.atan2(z + 0.1, x), w = 0.05 * Math.sin(a * 3 + y * 7.5); return Math.min(Math.hypot(Math.hypot(x, z + 0.1) / 1.08, (y - 29.95) / 0.95) - 1, Math.hypot(Math.hypot(x, z + 0.1) / 0.74, (y - 31.0) / 0.72) - 1) * 0.8 + w; }, 0.15);
  for (const s of [-1, 1]) { c.run([[s * 1.15, 28.3, -1.0], [s * 1.9, 26.4, -1.25], [s * 2.7, 24.6, -1.2], [s * 3.0, 22.9, -1.25]], [0.55, 0.5, 0.42, 0.26], 0.25); c.run([[s * 0.5, 28.0, -1.5], [s * 0.9, 25.6, -1.75], [s * 1.5, 23.6, -1.8], [s * 1.3, 21.9, -1.85]], [0.5, 0.48, 0.4, 0.24], 0.25); }
  // the crescent moon in his hair
  { const pts = []; for (let i = 0; i <= 6; i++) { const a = -0.4 + i / 6 * 2.5; pts.push([-1.3 - Math.cos(a) * 0.62, 30.1 + Math.sin(a) * 0.62 - 0.3, 0.72]); } c.run(pts, [0.04, 0.1, 0.13, 0.14, 0.13, 0.1, 0.04], 0.03, 3); }
  // the serpent: coiled about his neck, rising at his right shoulder with its hood spread beside his face
  c.run([[-1.3, 25.0, -1.0], [0.5, 25.25, -1.2], [1.85, 25.2, -0.1], [1.5, 24.75, 1.1], [0, 24.45, 1.5], [-1.6, 24.65, 1.3], [-3.0, 24.9, 0.85], [-3.8, 25.7, 0.55], [-3.5, 26.6, 0.62]], [0.14, 0.24, 0.3, 0.33, 0.34, 0.34, 0.34, 0.33, 0.3], 0.12);
  c.egg([-3.35, 27.25, 0.72], [0.86, 0.98, 0.26], 0.2, [0.12, 0.3, 0.22]).egg([-3.25, 27.9, 0.98], [0.3, 0.26, 0.4], 0.12);
  // strings of rudraksha: a short one at the throat, a long one to the breast, and the thread across his chest
  const beads = (pts, r) => { c.run(pts, r * 0.6, 0.05, 4); const P = i => pts[Math.max(0, Math.min(pts.length - 1, i))]; for (let i = 0; i < pts.length - 1; i++) for (let s = 0; s < 4; s++) { const t = s / 4; c.egg([0, 1, 2].map(k => { const p0 = P(i - 1)[k], p1 = P(i)[k], p2 = P(i + 1)[k], p3 = P(i + 2)[k]; return 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (3 * p1 - p0 - 3 * p2 + p3) * t * t * t); }), [r, r, r], 0.04); } };
  beads([[-1.25, 24.7, 1.05], [-0.95, 23.75, 1.75], [0, 23.2, 2.08], [0.95, 23.75, 1.75], [1.25, 24.7, 1.05]], 0.2);
  beads([[-1.7, 24.5, 0.85], [-1.75, 22.9, 1.95], [-1.0, 21.2, 2.22], [0, 20.5, 2.2], [1.0, 21.2, 2.22], [1.75, 22.9, 1.95], [1.7, 24.5, 0.85]], 0.22);
  c.run([[2.3, 24.6, 0.9], [0.9, 22.0, 2.12], [-0.9, 19.6, 1.92], [-2.0, 17.9, 1.5]], 0.11, 0.05);
  // the trident: its shaft from the ground to above his head, the foot of it, the collar, three blades; a pennant; the drum hung from it
  const TX = 1.72, TZ = 3.0;
  c.limb([TX, 0.2, TZ], [TX, 31.0, TZ], 0.24, 0.2, 0.04).egg([TX, 1.0, TZ], [0.6, 0.9, 0.6], 0.1).egg([TX, 2.2, TZ], [0.4, 0.3, 0.4], 0.08).egg([TX, 30.9, TZ], [0.5, 0.42, 0.4], 0.08).egg([TX, 30.2, TZ], [0.36, 0.2, 0.36], 0.06);
  c.egg([TX, 33.2, TZ], [0.4, 1.75, 0.15], 0.1).limb([TX, 31.2, TZ], [TX, 32.2, TZ], 0.2, 0.2, 0.08);
  for (const s of [-1, 1]) c.run([[TX, 31.1, TZ], [TX + s * 0.8, 31.3, TZ], [TX + s * 1.22, 32.0, TZ], [TX + s * 1.05, 33.1, TZ], [TX + s * 1.12, 34.0, TZ]], [0.2, 0.2, 0.2, 0.17, 0.04], 0.05);
  c.run([[TX, 29.4, TZ], [TX + 0.7, 29.0, TZ + 0.1], [TX + 1.4, 28.2, TZ + 0.25], [TX + 1.5, 27.0, TZ + 0.2]], [0.16, 0.26, 0.24, 0.1], 0.08);
  c.limb([TX, 15.6, TZ], [3.3, 14.9, TZ - 0.1], 0.07, 0.07, 0.03).limb([2.75, 14.75, TZ - 0.1], [3.35, 14.75, TZ - 0.1], 0.26, 0.74, 0.08).limb([3.95, 14.75, TZ - 0.1], [3.35, 14.75, TZ - 0.1], 0.74, 0.26, 0.08);
}

// Gold under lamps: each lamp set round his feet warms the faces turned to it; the night sky and the moon show in the polish.
function gilt() {
  return new THREE.ShaderMaterial({ uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {}]), fog: true,
    vertexShader: `attribute float ao; varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_vertex>
      void main() { vA = ao; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_fragment>
      vec3 lamp(vec3 at, float power, vec3 n, vec3 v) { vec3 l = at - vW; float d = length(l); l /= d; float nl = max(dot(n, l), 0.0), nh = max(dot(n, normalize(l + v)), 0.0);
        return vec3(1.0, 0.82, 0.56) * power * (0.5 * nl + 0.75 * pow(nh, 22.0) * step(0.0, dot(n, l))) / (1.0 + d * d / 1500.0); }
      void main() { vec3 n = normalize(vN), v = normalize(cameraPosition - vW), r = reflect(-v, n), gold = vec3(1.0, 0.66, 0.22);
        vec3 c = lamp(vec3(-13.0, 6.0, 15.0), 1.0, n, v) + lamp(vec3(13.0, 6.0, 15.0), 1.0, n, v) + lamp(vec3(0.0, 10.0, 26.0), 0.55, n, v) + lamp(vec3(-22.0, 7.0, -4.0), 0.6, n, v) + lamp(vec3(22.0, 7.0, -4.0), 0.6, n, v) + lamp(vec3(-10.0, 6.0, -15.0), 0.55, n, v) + lamp(vec3(10.0, 6.0, -15.0), 0.55, n, v);
        c += mix(vec3(0.16, 0.11, 0.06), vec3(0.035, 0.05, 0.1), n.y * 0.5 + 0.5);                                           // the glow off the deck below, the sky above
        c += vec3(0.1, 0.14, 0.24) * smoothstep(0.0, 0.7, r.y) * 0.5 + vec3(0.9, 0.9, 0.8) * pow(max(dot(r, normalize(vec3(0.08, 0.18, -1.0))), 0.0), 90.0);   // what the polish mirrors
        c += vec3(0.2, 0.28, 0.5) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * (0.25 + 0.3 * max(n.y, 0.0));                        // the edge the moon picks out
        gl_FragColor = vec4(gold * c * vA * 0.62, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }` });
}

export { Clay, sculpt };
const rest = () => new Promise(done => setTimeout(done, 0));
// Make him and stand him in the group, his soles at foot. The head, the hair and what stands above the shoulders are drawn finer than the body.
// A plainer cast of him is made as well: that is the one the lake mirrors, so the fine one is drawn only once.
export async function statue(group, foot = 16.7) {
  const mat = gilt(), cast = async (lo, hi, cell, band, y0, y1, mirrored) => { await rest(); const clay = new Clay(lo, hi, cell, band); sculpt(clay); await rest();
    const s = clay.skin(y0, y1), g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(s.P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(s.N, 3)); g.setAttribute('ao', new THREE.BufferAttribute(s.A, 1)); g.setIndex(s.I);
    const m = new THREE.Mesh(g, mat); m.position.y = foot; m.userData.mirrored = mirrored; group.add(m); return m; };
  const fine = [await cast([-7, -0.8, -4.1], [6.6, 26.2, 5.1], 0.18, 0.7, -9, 25.8, false), await cast([-4.9, 25.2, -2.7], [3.9, 35.5, 3.9], 0.085, 0.45, 25.62, 99, false)];
  const plain = [await cast([-7, -0.8, -4.1], [6.6, 35.6, 5.1], 0.34, 0.7, -9, 99, true)]; plain[0].visible = false;
  return { fine, plain };
}
