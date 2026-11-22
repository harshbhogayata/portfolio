// Sarveshwar Mahadev, modelled in the round from photographs of the statue: its measure taken off them, every part of it built.
// The figure is made the way a sculptor works in clay: masses laid one on another and smoothed together, then what he wears and
// carries. The clay is a field of distances held on a grid; its surface is drawn off as a mesh when the page loads, away from the
// page's own thread. He faces south across the lake, gilded as he has been since 2023, and lit by the lamps at his feet.
import * as THREE from 'three';

// Everything the casting needs is inside this one function, so that it can be handed to a worker as text.
export function foundry() {
  const sin = Math.sin, cos = Math.cos, hyp = Math.hypot, mix = (a, b, t) => a + (b - a) * t, sat = t => t < 0 ? 0 : t > 1 ? 1 : t, ss = (a, b, x) => { const t = sat((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  // Three directions square to one another, from a first direction and a second that leans the right way: how a part is turned.
  const basis = (u, v) => { let l = hyp(u[0], u[1], u[2]); u = [u[0] / l, u[1] / l, u[2] / l]; const d = u[0] * v[0] + u[1] * v[1] + u[2] * v[2]; v = [v[0] - u[0] * d, v[1] - u[1] * d, v[2] - u[2] * d]; l = hyp(v[0], v[1], v[2]); v = [v[0] / l, v[1] / l, v[2] / l];
    return [u[0], u[1], u[2], v[0], v[1], v[2], u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; };
  const about = a => { const l = hyp(a[0], a[1], a[2]); a = [a[0] / l, a[1] / l, a[2] / l]; const t = Math.abs(a[0]) > 0.9 ? [0, 0, 1] : [1, 0, 0], d = t[0] * a[0] + t[1] * a[1] + t[2] * a[2]; let u = [t[0] - a[0] * d, t[1] - a[1] * d, t[2] - a[2] * d]; const m = hyp(u[0], u[1], u[2]); u = [u[0] / m, u[1] / m, u[2] / m];
    return [u[0], u[1], u[2], a[0], a[1], a[2], u[1] * a[2] - u[2] * a[1], u[2] * a[0] - u[0] * a[2], u[0] * a[1] - u[1] * a[0]]; };   // turned so that its second direction is a
  const spline = (pts, i, t) => { const P = j => pts[Math.max(0, Math.min(pts.length - 1, j))]; return [0, 1, 2].map(c => { const p0 = P(i - 1)[c], p1 = P(i)[c], p2 = P(i + 1)[c], p3 = P(i + 2)[c]; return 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (3 * p1 - p0 - 3 * p2 + p3) * t * t * t); }); };

  class Clay {
    constructor(lo, hi, cell, band) { this.lo = lo; this.hi = hi; this.cell = cell; this.band = band;                     // band: how far from the surface the field is kept
      this.n = [0, 1, 2].map(i => Math.ceil((hi[i] - lo[i]) / cell) + 1); this.g = new Float32Array(this.n[0] * this.n[1] * this.n[2]).fill(band); }
    // Lay a shape into the field: d gives the distance to it from any point; k is how softly it runs into what is already there.
    lay(box, d, k = 0.3, carve = false) {
      const { lo, hi, cell, n, g } = this, m = k + this.band, ix = (v, i) => Math.max(0, Math.min(n[i] - 1, v)); k = Math.max(k, 1e-3);
      if (box[3] + m < lo[0] || box[0] - m > hi[0] || box[4] + m < lo[1] || box[1] - m > hi[1] || box[5] + m < lo[2] || box[2] - m > hi[2]) return this;
      const x0 = ix(Math.floor((box[0] - m - lo[0]) / cell), 0), x1 = ix(Math.ceil((box[3] + m - lo[0]) / cell), 0), y0 = ix(Math.floor((box[1] - m - lo[1]) / cell), 1), y1 = ix(Math.ceil((box[4] + m - lo[1]) / cell), 1), z0 = ix(Math.floor((box[2] - m - lo[2]) / cell), 2), z1 = ix(Math.ceil((box[5] + m - lo[2]) / cell), 2);
      for (let z = z0; z <= z1; z++) { const pz = lo[2] + z * cell; for (let y = y0; y <= y1; y++) { const py = lo[1] + y * cell; let i = (z * n[1] + y) * n[0] + x0;
        for (let x = x0; x <= x1; x++, i++) { const v = d(lo[0] + x * cell, py, pz), a = g[i];
          if (carve) { const h = Math.max(k - Math.abs(a + v), 0) / k; g[i] = Math.max(a, -v) + h * h * k * 0.25; }
          else { const h = Math.max(k - Math.abs(a - v), 0) / k; g[i] = Math.min(a, v) - h * h * k * 0.25; } } } }
      return this;
    }
    // An egg: centre and three radii; B turns it; tex roughens its surface.
    egg(c, r, k, B = null, carve = false, tex = null) {
      const m = B ? Math.max(r[0], r[1], r[2]) : 0, small = Math.min(r[0], r[1], r[2]);
      return this.lay(B ? [c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m] : [c[0] - r[0], c[1] - r[1], c[2] - r[2], c[0] + r[0], c[1] + r[1], c[2] + r[2]], (x, y, z) => {
        let px = x - c[0], py = y - c[1], pz = z - c[2]; if (B) { const a = px * B[0] + py * B[1] + pz * B[2], b = px * B[3] + py * B[4] + pz * B[5], e = px * B[6] + py * B[7] + pz * B[8]; px = a; py = b; pz = e; }
        const k0 = hyp(px / r[0], py / r[1], pz / r[2]), k1 = hyp(px / (r[0] * r[0]), py / (r[1] * r[1]), pz / (r[2] * r[2])); return (k1 > 1e-6 ? k0 * (k0 - 1) / k1 : -small) + (tex ? tex(x, y, z) : 0); }, k, carve);
    }
    // A limb from one point to another, thicker at one end than the other. flat = [nx, ny, nz, s] beats it thin along n, as a blade or a ribbon.
    limb(a, b, ra, rb, k, flat = null, tex = null, carve = false) {
      const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], l2 = dx * dx + dy * dy + dz * dz || 1e-9, r = Math.max(ra, rb);
      return this.lay([Math.min(a[0], b[0]) - r, Math.min(a[1], b[1]) - r, Math.min(a[2], b[2]) - r, Math.max(a[0], b[0]) + r, Math.max(a[1], b[1]) + r, Math.max(a[2], b[2]) + r], (x, y, z) => {
        const px = x - a[0], py = y - a[1], pz = z - a[2]; let t = (px * dx + py * dy + pz * dz) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t; let qx = px - dx * t, qy = py - dy * t, qz = pz - dz * t;
        if (flat) { const qn = (qx * flat[0] + qy * flat[1] + qz * flat[2]) * (flat[3] - 1); qx += flat[0] * qn; qy += flat[1] * qn; qz += flat[2] * qn; }
        return hyp(qx, qy, qz) - (ra + (rb - ra) * t) + (tex ? tex(x, y, z) : 0); }, k, carve);
    }
    // A limb that curves: drawn smoothly through its points, with a thickness given at each.
    run(pts, radii, k, steps = 5, flat = null, tex = null) {
      const rad = (i, t) => { const a = radii.length ? radii[i] : radii, b = radii.length ? radii[Math.min(radii.length - 1, i + 1)] : radii; return a + (b - a) * t; };
      for (let i = 0; i < pts.length - 1; i++) for (let s = 0; s < steps; s++) this.limb(spline(pts, i, s / steps), spline(pts, i, (s + 1) / steps), rad(i, s / steps), rad(i, (s + 1) / steps), k, flat, tex);
      return this;
    }
    // A ring. Unturned it lies level; B's second direction is the way its hole looks.
    ring(c, R, r, k, B = null, carve = false) {
      const m = R + r;
      return this.lay([c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m], (x, y, z) => { let px = x - c[0], py = y - c[1], pz = z - c[2]; if (B) { const a = px * B[0] + py * B[1] + pz * B[2], b = px * B[3] + py * B[4] + pz * B[5], e = px * B[6] + py * B[7] + pz * B[8]; px = a; py = b; pz = e; }
        return hyp(hyp(px, pz) - R, py) - r; }, k, carve);
    }
    // A drum or a disc: a round of radius R and half-height h, its edges eased. B's second direction is its axis.
    drum(c, R, h, round, k, B = null, tex = null) {
      const m = hyp(R, h);
      return this.lay([c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m], (x, y, z) => { let px = x - c[0], py = y - c[1], pz = z - c[2]; if (B) { const a = px * B[0] + py * B[1] + pz * B[2], b = px * B[3] + py * B[4] + pz * B[5], e = px * B[6] + py * B[7] + pz * B[8]; px = a; py = b; pz = e; }
        const dr = hyp(px, pz) - R + round, dh = Math.abs(py) - h + round; return hyp(Math.max(dr, 0), Math.max(dh, 0)) + Math.min(Math.max(dr, dh), 0) - round + (tex ? tex(px, py, pz) : 0); }, k);
    }
    // A block with eased edges.
    block(c, half, round, k, B = null) {
      const m = hyp(half[0], half[1], half[2]);
      return this.lay([c[0] - m, c[1] - m, c[2] - m, c[0] + m, c[1] + m, c[2] + m], (x, y, z) => { let px = x - c[0], py = y - c[1], pz = z - c[2]; if (B) { const a = px * B[0] + py * B[1] + pz * B[2], b = px * B[3] + py * B[4] + pz * B[5], e = px * B[6] + py * B[7] + pz * B[8]; px = a; py = b; pz = e; }
        const qx = Math.abs(px) - half[0] + round, qy = Math.abs(py) - half[1] + round, qz = Math.abs(pz) - half[2] + round; return hyp(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qy, qz), 0) - round; }, k);
    }
    // The field's value anywhere, between the points of the grid.
    read(x, y, z) {
      const { lo, cell, n, g } = this, fx = Math.max(0, Math.min(n[0] - 1.001, (x - lo[0]) / cell)), fy = Math.max(0, Math.min(n[1] - 1.001, (y - lo[1]) / cell)), fz = Math.max(0, Math.min(n[2] - 1.001, (z - lo[2]) / cell));
      const ix = fx | 0, iy = fy | 0, iz = fz | 0, tx = fx - ix, ty = fy - iy, tz = fz - iz, i = (iz * n[1] + iy) * n[0] + ix, sy = n[0], sz = n[0] * n[1];
      const a = g[i] + (g[i + 1] - g[i]) * tx, b = g[i + sy] + (g[i + sy + 1] - g[i + sy]) * tx, c = g[i + sz] + (g[i + sz + 1] - g[i + sz]) * tx, d = g[i + sz + sy] + (g[i + sz + sy + 1] - g[i + sz + sy]) * tx;
      return (a + (b - a) * ty) + ((c + (d - c) * ty) - (a + (b - a) * ty)) * tz;
    }
    // Where the surface lies at x, y, coming at it from the front: what is raised on the face is set on the face as it has come out.
    front(x, y, from = 3.4) { const st = this.cell * 0.5; let z = from, a = this.read(x, y, z); for (let i = 0; i < 400; i++) { const b = this.read(x, y, z - st); if (b < 0) return z - st * a / (a - b); a = b; z -= st; if (z < from - 3) break; } return from - 1.5; }
    // Draw the surface off the field between two heights: a point in every cell the surface passes through, joined to its neighbours.
    skin(yFrom, yTo, only = null, omit = null) {
      const { lo, cell, n, g } = this, [nx, ny, nz] = n, sx = 1, sy = nx, sz = nx * ny, id = new Int32Array(nx * ny * nz).fill(-1), P = [], I = [], far = cell * 3.2;
      const j0 = Math.max(0, Math.floor((yFrom - lo[1]) / cell)), j1 = Math.min(ny - 2, Math.ceil((yTo - lo[1]) / cell)), off = [0, sx, sy, sy + sx, sz, sz + sx, sz + sy, sz + sy + sx], cx = [0, 1, 0, 1, 0, 1, 0, 1], cy = [0, 0, 1, 1, 0, 0, 1, 1], cz = [0, 0, 0, 0, 1, 1, 1, 1];
      const ea = [0, 2, 4, 6, 0, 1, 4, 5, 0, 1, 2, 3], eb = [1, 3, 5, 7, 2, 3, 6, 7, 4, 5, 6, 7], v = new Float32Array(8);
      for (let z = 0; z < nz - 1; z++) for (let y = j0; y <= j1; y++) { let i = (z * ny + y) * nx; for (let x = 0; x < nx - 1; x++, i++) {
        const d0 = g[i]; if (d0 > far || d0 < -far) continue;
        if (only || omit) { const X = lo[0] + (x + 0.5) * cell, Y = lo[1] + (y + 0.5) * cell, Z = lo[2] + (z + 0.5) * cell, inside = b => X > b[0] && Y > b[1] && Z > b[2] && X < b[3] && Y < b[4] && Z < b[5]; if ((only && !inside(only)) || (omit && inside(omit))) continue; }
        let mask = 0; for (let c = 0; c < 8; c++) { v[c] = g[i + off[c]]; if (v[c] < 0) mask |= 1 << c; } if (mask === 0 || mask === 255) continue;
        let ax = 0, ay = 0, az = 0, k = 0; for (let e = 0; e < 12; e++) { const a = ea[e], b = eb[e]; if ((v[a] < 0) === (v[b] < 0)) continue; const t = v[a] / (v[a] - v[b]); ax += cx[a] + (cx[b] - cx[a]) * t; ay += cy[a] + (cy[b] - cy[a]) * t; az += cz[a] + (cz[b] - cz[a]) * t; k++; }
        id[i] = P.length / 3; P.push(lo[0] + (x + ax / k) * cell, lo[1] + (y + ay / k) * cell, lo[2] + (z + az / k) * cell); } }
      const quad = (a, b, c, d, flip) => { if (a < 0 || b < 0 || c < 0 || d < 0) return; if (flip) I.push(a, d, c, a, c, b); else I.push(a, b, c, a, c, d); };
      for (let z = 1; z < nz - 1; z++) for (let y = Math.max(1, j0); y <= j1; y++) { let i = (z * ny + y) * nx + 1; for (let x = 1; x < nx - 1; x++, i++) { const s = g[i] < 0;
        if ((g[i + sx] < 0) !== s) quad(id[i - sy - sz], id[i - sz], id[i], id[i - sy], !s);
        if ((g[i + sy] < 0) !== s) quad(id[i - sx - sz], id[i - sx], id[i], id[i - sz], !s);
        if ((g[i + sz] < 0) !== s) quad(id[i - sx - sy], id[i - sy], id[i], id[i - sx], !s); } }
      // which way each point of the surface faces, and how deep in a fold it lies
      const N = new Float32Array(P.length), A = new Float32Array(P.length / 3), h = cell, r1 = this.band * 0.3, r2 = this.band * 0.8;
      for (let i = 0; i < P.length; i += 3) { const x = P[i], y = P[i + 1], z = P[i + 2]; let gx = this.read(x + h, y, z) - this.read(x - h, y, z), gy = this.read(x, y + h, z) - this.read(x, y - h, z), gz = this.read(x, y, z + h) - this.read(x, y, z - h); const l = hyp(gx, gy, gz) || 1; gx /= l; gy /= l; gz /= l;
        N[i] = gx; N[i + 1] = gy; N[i + 2] = gz; A[i / 3] = 0.25 + 0.75 * (0.45 * sat(this.read(x + gx * r1, y + gy * r1, z + gz * r1) / r1) + 0.55 * sat(this.read(x + gx * r2, y + gy * r2, z + gz * r2) / r2)); }
      return { P: new Float32Array(P), N, A, I: new Uint32Array(I) };
    }
  }

  /* The figure. Heights are in metres from the soles of his feet, which stand at 0; he faces +z; his right hand is at -x.
     He is 31 metres to the top of his hair, a little under eight heads, as the statue is. */
  function sculpt(c) {
    const hide = (x, y, z) => 0.075 * sin(11.5 * x + 1.6 * sin(4 * y)) * sin(11.5 * y + 1.6 * sin(4 * z)) * sin(11.5 * z + 1.6 * sin(4 * x));    // the beaten surface of the tiger skin
    const scales = (x, y, z) => 0.034 * sin(23 * x + 2 * sin(6 * y)) * sin(23 * y + 2 * sin(6 * z)) * sin(23 * z + 2 * sin(6 * x));          // a serpent's scales
    // a serpent wound round a limb from a to b: so many turns between two places along it, standing off it by so much
    const coil = (a, b, t0, t1, turns, off, ra, rb) => { const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], B = about(d), out = [], n = Math.ceil(turns * 8);
      for (let i = 0; i <= n; i++) { const t = mix(t0, t1, i / n), th = i / n * turns * 6.2832, R = mix(ra, rb, t) + off, cu = cos(th) * R, cw = sin(th) * R; out.push([a[0] + d[0] * t + B[0] * cu + B[6] * cw, a[1] + d[1] * t + B[1] * cu + B[7] * cw, a[2] + d[2] * t + B[2] * cu + B[8] * cw]); } return out; };
    const UP = [0, 1, 0], FRONT = [0, 0, 1];

    /* ----- what stands behind his legs and bears him up: a fluted mass, rising at his right hand in a great fan with a lesser tongue beside it ----- */
    for (let i = 0; i < 7; i++) { const x = -0.6 + i * 0.66, top = 6.0 + 0.8 * sin(i * 1.9); c.run([[x * 0.9 + 0.4, 0.3, -1.3], [x, 2.6, -1.9], [x * 1.05, top - 1.2, -2.2], [x * 1.1, top, -2.05]], [0.75, 0.62, 0.5, 0.26], 0.22, 4); }
    for (let i = 0; i < 9; i++) { const a = i / 9 * 3.3 - 0.4; c.run([[1.2 + cos(a) * 2.5, 0.5, -1.4 - sin(a) * 1.4], [1.2 + cos(a) * 3.2, 0.22, -1.4 - sin(a) * 1.9]], [0.55, 0.2], 0.25, 2); }          // its foot spreads like roots
    const tab = (T, y) => { for (let i = 0; i < T.length - 1; i++) if (y <= T[i + 1][0]) return mix(T[i][1], T[i + 1][1], sat((y - T[i][0]) / (T[i + 1][0] - T[i][0]))); return T[T.length - 1][1]; };
    const fanOut = [[0.3, -2.9], [1.5, -3.4], [3.0, -4.0], [4.4, -4.9], [5.9, -5.5], [7.4, -5.7], [8.9, -5.6], [9.6, -5.25]], fanIn = [[0.3, -2.0], [1.5, -2.7], [3.0, -3.25], [5.0, -3.8], [7.5, -3.95], [9.6, -4.0]];
    for (let j = 0; j < 6; j++) { const u = j / 5, top = 9.5 - 0.22 * Math.abs(sin(j * 2.1)) - (j === 0 ? 0.1 : 0), pts = [], rr = [];
      for (const y of [0.35, 1.5, 3.0, 4.4, 5.9, 7.4, 8.6, top]) { pts.push([mix(tab(fanIn, y), tab(fanOut, y), u), y, 0.0 + 0.045 * y + 0.12 * sin(j * 2.6)]); rr.push(y > 9 ? 0.2 : 0.3 + 0.012 * y); }
      c.run(pts, rr, 0.13, 4, [0, 0, 1, 1.5]); }
    c.run([[-5.3, 9.5, 0.42], [-5.72, 9.95, 0.7], [-5.95, 9.6, 1.05]], [0.22, 0.2, 0.06], 0.1, 4);                                                                                                  // the tip of the fan curls forward
    c.run([[-2.2, 0.4, 0.05], [-2.55, 2.6, 0.1], [-2.85, 5.0, 0.2], [-2.78, 7.0, 0.32], [-2.68, 7.95, 0.4]], [0.38, 0.36, 0.34, 0.3, 0.14], 0.13, 5, [0, 0, 1, 1.5]);                              // the tongue beside it
    c.egg([1.1, 2.7, -1.35], [2.7, 3.2, 1.0], 0.5);                                                                                                                                         // the body of the mass, behind his calves
    c.drum([-2.5, 1.12, 0.95], 1.05, 0.34, 0.14, 0.2, basis([1, 0, 0.35], [0.35, 0, -1]));                                                                                                          // the scrolled boss at its foot
    for (let i = 0; i < 3; i++) c.ring([-2.5, 1.12, 0.95], 0.92 - i * 0.3, 0.07, 0.03, about([-0.33, 0, 0.94]));

    /* ----- the tiger skin, from waist to shin: an outer fold falling aslant across the front, the under fold hanging lower, all of it beaten ----- */
    const DX = 0.27, Y0 = 5.6, Y1 = 16.5, flap = [[-4, 7.8], [-3.16, 8.0], [0.67, 9.9], [1.65, 11.1], [2.6, 12.8], [3.1, 15.3], [3.6, 17]];
    const flapY = x => { for (let i = 0; i < flap.length - 1; i++) if (x <= flap[i + 1][0]) return mix(flap[i][1], flap[i + 1][1], sat((x - flap[i][0]) / (flap[i + 1][0] - flap[i][0]))); return 17; };
    const hem = x => 5.95 - 0.1 * x + 0.17 * sin(x * 2.7 + 0.6) + 0.1 * sin(x * 6.1);
    const skirt = (x, y, z, grow = 0) => { const X = x - DX * (1 - 0.5 * ss(0.7, 1, sat((y - Y0) / (Y1 - Y0)))), t = sat((y - Y0) / (Y1 - Y0)), ax = 3.42 * (1 - 0.15 * ss(0.68, 1, t)) + grow, az = 2.3 * (1 - 0.13 * ss(0.68, 1, t)) + grow; return [hyp(X / ax, (z - 0.1) / az), az, t, X]; };
    c.lay([DX - 3.8, 5.0, -2.7, DX + 3.8, 16.9, 2.8], (x, y, z) => { const [q, az, t, X] = skirt(x, y, z), a = Math.atan2(z, X), fy = flapY(X) + 0.1 * sin(X * 3.3), lip = ss(-0.5, 0.5, z) * ss(fy - 0.08, fy + 0.1, y);
      let d = (q - 1 - 0.085 * lip) * az * 0.94 + 0.06 * sin(a * 9 + 1.5 * sin(y * 0.55)) * (1 - 0.65 * t) * (1 - 0.5 * lip) + hide(x, y, z) + 0.05 * ss(0.14, 0, Math.abs(y - fy - 0.02)) * ss(-0.5, 0.5, z);
      return Math.max(d, hem(X) + (lip > 0.5 ? 0 : 0) - y, y - Y1 - 0.25); }, 0.2);
    c.lay([DX - 3.4, 4.8, -2.4, DX + 3.4, 7.6, 2.5], (x, y, z) => { const [q, az, , X] = skirt(x, y, z, -0.3); return Math.max((q - 1) * az, y - hem(X) - 1.5); }, 0.25, true);                         // it is hollow at the hem
    // legs: his right nearer the middle, his left out under the edge of the skin; shins, calves, and feet with their toes
    for (const [ax, kx, fx, inner] of [[0.1, -0.3, 0.2, 1], [2.5, 2.4, 2.55, -1]]) {
      c.limb([ax, 1.3, 0.1], [kx, 6.7, 0.3], 0.78, 1.02, 0.4).egg([mix(ax, kx, 0.55), 4.3, -0.28], [0.98, 1.95, 1.02], 0.5).egg([kx, 6.9, 0.45], [1.03, 1.0, 1.0], 0.4);
      c.egg([fx, 0.56, -0.4], [0.82, 0.6, 0.95], 0.3).egg([fx, 0.62, 0.85], [0.94, 0.64, 1.55], 0.35).egg([fx, 0.42, 1.9], [1.02, 0.42, 0.78], 0.3).egg([ax + inner * 0.72, 1.35, 0.05], [0.26, 0.3, 0.3], 0.2).egg([ax - inner * 0.74, 1.2, -0.1], [0.24, 0.28, 0.3], 0.2);
      [[0.7, 0.31, 2.62], [0.24, 0.25, 2.66], [-0.14, 0.23, 2.56], [-0.48, 0.21, 2.4], [-0.78, 0.19, 2.18]].forEach(([o, r, z]) => c.egg([fx + inner * o, 0.3, z], [r, r * 0.85, r * 1.55], 0.1)); }

    /* ----- the trunk: hips under the skin, the belly, the ribs and breast, shoulders, neck ----- */
    c.egg([0.25, 15.6, 0.1], [3.15, 2.4, 2.1], 0.5).egg([0.08, 18.3, 0.2], [2.52, 2.3, 1.62], 0.7).egg([0, 21.15, 0.05], [2.74, 2.95, 1.76], 0.7);
    for (const s of [-1, 1]) c.egg([s * 1.28, 21.35, 1.26], [1.34, 1.02, 0.62], 0.5).egg([s * 1.52, 20.98, 1.83], [0.13, 0.13, 0.1], 0.08).egg([s * 3.0, 22.3, 0], [1.06, 1.06, 1.08], 0.55).limb([s * 0.9, 23.9, -0.1], [s * 2.65, 23.0, -0.05], 0.75, 0.6, 0.6);
    c.limb([0, 23.4, -0.05], [0, 25.5, 0.15], 1.2, 1.04, 0.6).egg([0.08, 17.82, 1.76], [0.2, 0.26, 0.22], 0.12, null, true).limb([0, 22.6, 1.72], [0, 19.4, 1.8], 0.12, 0.1, 0.25, null, null, true);
    // the cloth wound three times about his waist, and the twisted cord tied over it
    const girdle = (yy, r, tilt, twist) => c.lay([-3.3, yy - 1, -2.4, 3.4, yy + 1, 2.5], (x, y, z) => { const X = x - 0.15, q = hyp(X / 2.9, (z - 0.1) / 1.98); return hyp((q - 1) * 1.98, y - yy - tilt * X) - r - (twist ? 0.035 * sin(Math.atan2(z, X) * 34 + (y - yy) * 16) : 0.02 * sin(Math.atan2(z, X) * 7 + yy)); }, 0.1);
    girdle(16.3, 0.33, 0.0); girdle(16.82, 0.3, 0.02); girdle(17.26, 0.26, 0.035); girdle(17.52, 0.17, -0.07, true);
    c.egg([-2.2, 17.5, 1.5], [0.34, 0.3, 0.3], 0.1).run([[-2.25, 17.4, 1.6], [-2.45, 16.5, 1.85], [-2.35, 15.6, 2.0]], [0.16, 0.14, 0.2], 0.06, 4);

    /* ----- his right arm: hanging to the elbow, the forearm thrust forward, the hand raised open in blessing ----- */
    const RE = [-3.88, 17.45, -0.1], RW = [-3.18, 18.7, 3.25], LE = [3.88, 17.45, 0], LW = [3.72, 18.45, 2.6];
    c.limb([-3.08, 22.2, 0], RE, 0.96, 0.8, 0.45).egg(RE, [0.82, 0.84, 0.84], 0.3).limb(RE, RW, 0.78, 0.54, 0.35);
    c.block([-2.95, 19.72, 3.62], [0.92, 0.9, 0.24], 0.22, 0.22).egg([-2.6, 19.35, 3.78], [0.5, 0.6, 0.22], 0.2).egg([-3.3, 19.5, 3.78], [0.4, 0.62, 0.18], 0.2);
    [[-3.64, 1.0, 0.185], [-3.18, 1.28, 0.2], [-2.72, 1.38, 0.205], [-2.26, 1.2, 0.2]].forEach(([x, l, r]) => c.limb([x, 20.4, 3.66], [x * 1.004, 20.4 + l * 0.55, 3.72], r, r * 0.96, 0.08).limb([x * 1.004, 20.4 + l * 0.55, 3.72], [x * 1.006, 20.4 + l, 3.7], r * 0.96, r * 0.82, 0.05));
    c.run([[-2.15, 19.2, 3.55], [-1.74, 19.95, 3.72], [-1.7, 20.75, 3.76]], [0.27, 0.23, 0.18], 0.1, 4);
    const fore = (E, W, t) => [mix(E[0], W[0], t), mix(E[1], W[1], t), mix(E[2], W[2], t)];
    c.ring(fore(RE, RW, 0.9), 0.7, 0.15, 0.05, about([RW[0] - RE[0], RW[1] - RE[1], RW[2] - RE[2]]));                                               // the heavy ring at his wrist
    // the small serpent wound about his forearm, its neck lifted and its head turned out to his right
    c.run([...coil(RE, RW, 0.3, 0.72, 2.25, 0.14, 0.78, 0.54), [-4.35, 19.2, 2.05], [-4.6, 20.1, 2.1], [-4.95, 20.75, 2.15]], [0.13, 0.17, 0.19, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.21, 0.23, 0.2], 0.06, 3, null, scales);
    c.egg([-5.02, 20.6, 2.12], [0.2, 0.46, 0.38], 0.12, basis([1, 0.5, 0], [-0.5, 1, 0])).egg([-5.32, 20.98, 2.18], [0.42, 0.19, 0.26], 0.1, basis([1, 0.15, 0.1], UP));

    /* ----- his left arm: the forearm brought forward, the hand closed round the shaft of the trident ----- */
    const shaft = y => [3.95 - 0.6 * y / 30.5, y, 3.3];
    c.limb([3.08, 22.2, 0], LE, 0.96, 0.8, 0.45).egg(LE, [0.82, 0.84, 0.84], 0.3).limb(LE, LW, 0.78, 0.56, 0.35);
    c.egg([3.6, 18.75, 3.18], [0.86, 0.92, 0.72], 0.25); for (let i = 0; i < 4; i++) c.limb([4.22, 19.42 - i * 0.42, 3.55], [3.2, 19.38 - i * 0.42, 3.95], 0.21, 0.2, 0.07).limb([3.2, 19.38 - i * 0.42, 3.95], [2.95, 19.36 - i * 0.42, 3.4], 0.2, 0.17, 0.07);
    c.run([[2.95, 19.2, 3.0], [3.05, 19.75, 3.5], [3.4, 20.05, 3.75]], [0.26, 0.23, 0.18], 0.1, 4).ring(fore(LE, LW, 0.86), 0.74, 0.15, 0.05, about([LW[0] - LE[0], LW[1] - LE[1], LW[2] - LE[2]]));
    c.run([...coil(LE, LW, 0.25, 0.7, 2.25, 0.14, 0.78, 0.56), [4.5, 19.0, 1.5], [4.75, 19.95, 1.6], [5.05, 20.65, 1.7]], [0.13, 0.17, 0.19, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.21, 0.23, 0.2], 0.06, 3, null, scales);
    c.egg([5.12, 20.5, 1.68], [0.2, 0.46, 0.38], 0.12, basis([1, -0.5, 0], [0.5, 1, 0])).egg([5.42, 20.9, 1.74], [0.42, 0.19, 0.26], 0.1, basis([1, -0.15, 0.1], UP));

    /* ----- the head. Its measure is the statue's own: eyes a little above the middle, arched brows close over them, the nose a quarter of
       the face, a small full mouth turned up at its corners, cheeks round with the smile, the whole an egg narrowing to a round chin ----- */
    c.egg([0, 27.55, 0.0], [1.6, 1.75, 1.85], 0.4).egg([0, 26.85, 0.6], [1.47, 1.5, 1.36], 0.5).egg([0, 28.1, 0.95], [1.3, 0.9, 0.93], 0.5);                         // the skull, the mask of the face, the fullness of the brow
    c.egg([0, 25.95, 0.98], [1.22, 0.8, 0.97], 0.5).egg([0, 25.48, 1.72], [0.4, 0.32, 0.3], 0.3);                                                                     // the jaw, and the chin on it
    for (const s of [-1, 1]) {
      c.egg([s * 0.9, 26.9, 1.1], [0.56, 0.52, 0.56], 0.45).egg([s * 0.72, 26.4, 1.64], [0.44, 0.36, 0.3], 0.4);                                                      // the cheekbone, and the cheek lifted by his smile
      c.run([[s * 0.24, 27.5, 1.84], [s * 0.76, 27.62, 1.8], [s * 1.26, 27.42, 1.46]], [0.15, 0.17, 0.12], 0.3, 4);                                                    // the bone of the brow
      c.run([[0.17, 27.48], [0.46, 27.6], [0.8, 27.64], [1.08, 27.56], [1.3, 27.4]].map(([x, y]) => [s * x, y, c.front(s * x, y) + 0.01]), [0.06, 0.085, 0.09, 0.075, 0.035], 0.03, 4);   // the eyebrow, a raised arc on it
      // the eye: a hollow under the brow, the ball of the eye in it, its lids meeting at the corners, the fold over the upper one, and the iris cut in
      c.egg([s * 0.69, 27.2, 2.16], [0.56, 0.32, 0.36], 0.26, null, true).egg([s * 0.69, 27.18, 1.64], [0.4, 0.27, 0.22], 0.04);
      c.run([[s * 0.3, 27.14, 1.84], [s * 0.47, 27.29, 1.91], [s * 0.7, 27.335, 1.91], [s * 0.93, 27.27, 1.81], [s * 1.08, 27.14, 1.64]], [0.03, 0.06, 0.068, 0.06, 0.03], 0.04, 4);
      c.run([[s * 0.34, 27.33, 1.83], [s * 0.7, 27.47, 1.86], [s * 1.05, 27.33, 1.66]], [0.04, 0.055, 0.04], 0.1, 4);
      c.run([[s * 0.3, 27.14, 1.84], [s * 0.5, 27.03, 1.84], [s * 0.72, 27.0, 1.83], [s * 0.93, 27.05, 1.76], [s * 1.08, 27.14, 1.64]], [0.03, 0.035, 0.038, 0.035, 0.03], 0.04, 4);
      c.ring([s * 0.68, 27.17, 1.852], 0.135, 0.03, 0.02, about([s * 0.05, -0.05, 1]), true).egg([s * 0.68, 27.17, 1.875], [0.055, 0.055, 0.035], 0.015, null, true);
      c.egg([s * 0.28, 26.5, 2.11], [0.17, 0.14, 0.2], 0.13).egg([s * 0.17, 26.41, 2.22], [0.085, 0.04, 0.09], 0.04, null, true);                                       // the wing of the nose, and the nostril under it
      c.egg([s * 1.64, 26.95, 0.28], [0.2, 0.62, 0.42], 0.1).egg([s * 1.76, 27.0, 0.42], [0.1, 0.36, 0.2], 0.06, null, true).limb([s * 1.66, 26.35, 0.35], [s * 1.72, 25.92, 0.55], 0.16, 0.13, 0.06).ring([s * 1.8, 25.44, 0.75], 0.46, 0.1, 0.04, about([0.45 * s, 0, 1]));   // the ear, its long lobe, and the ring in it
    }
    c.limb([0, 27.45, 1.9], [0, 26.76, 2.28], 0.13, 0.16, 0.22).egg([0, 26.62, 2.32], [0.22, 0.19, 0.19], 0.15).limb([0, 26.45, 2.28], [0, 26.38, 2.08], 0.065, 0.065, 0.05);   // the nose: bridge, tip, and the pillar between the nostrils
    c.limb([0, 26.33, 2.12], [0, 26.2, 2.15], 0.04, 0.045, 0.06, null, null, true);                                                                              // the groove above the lip
    // the lips, laid on the face along the curve of his smile: the upper with its bow, the lower fuller, meeting at corners that lift into the cheeks
    const smile = x => 26.03 + 0.52 * x * x, lip = (dy, lift) => [-0.57, -0.43, -0.28, -0.14, 0, 0.14, 0.28, 0.43, 0.57].map(x => { const y = smile(x) + dy(x); return [x, y, c.front(x, y) + lift]; }), bow = x => 1 - Math.pow(Math.abs(x) / 0.57, 2);
    c.run(lip(x => 0.078 * bow(x) - (x === 0 ? 0.014 : 0), 0.03), [0.02, 0.05, 0.072, 0.086, 0.068, 0.086, 0.072, 0.05, 0.02], 0.03, 3);
    c.run(lip(x => -0.1 * bow(x), 0.03), [0.02, 0.062, 0.092, 0.108, 0.112, 0.108, 0.092, 0.062, 0.02], 0.03, 3);
    c.egg([0, 25.72, 2.14], [0.28, 0.08, 0.12], 0.14, null, true);                                                      // the lower lip, fuller, and the hollow under it
    [[27.94, 0.4], [28.1, 0.5], [28.26, 0.4]].forEach(([y, w]) => c.run([[-w, y - 0.05], [-w * 0.5, y + 0.02], [0, y - 0.01], [w * 0.5, y + 0.02], [w, y - 0.05]].map(([x, yy]) => [x, yy, c.front(x, yy) + 0.015]), 0.062, 0.025, 4));   // the three lines of ash on his brow
    c.egg([0, 28.1, c.front(0, 28.1) + 0.03], [0.1, 0.2, 0.07], 0.03);                                                                                                 // and the eye between them

    /* ----- the hair: drawn back over the skull, wound in a tall knot, falling in locks to his shoulders and down his back ----- */
    c.lay([-2.1, 26.4, -2.4, 2.1, 29.9, 2.4], (x, y, z) => { const px = x / 1.82, py = (y - 27.62) / 1.84, pz = z / 2.2, k0 = hyp(px, py, pz), k1 = hyp(px / 1.82, py / 1.84, pz / 2.2); let d = k1 > 1e-6 ? k0 * (k0 - 1) / k1 : -1;
      d += 0.05 * sin(Math.atan2(x, z + 0.3) * 30 + 2.6 * sin((y - 27) * 1.4)) * ss(26.6, 27.4, y);
      const side = Math.max(0, Math.abs(x) - 1.3); return Math.max(d, (27.89 - y) * 0.82 + (z - 1.1) * 0.58 + 0.12 * x * x - 1.7 * side * side); }, 0.1);
    c.lay([-1.5, 28.7, -1.6, 1.6, 31.6, 1.5], (x, y, z) => { const t = sat((y - 29.0) / 2.0), X = x - 0.22 * t, Z = z + 0.12 + 0.25 * t, R = mix(1.08, 0.5, t * t * 0.6 + t * 0.4), a = Math.atan2(Z, X);
      const body = Math.max(hyp(X, Z) - R - 0.1 * sin(a * 2 - y * 5.4), y - 31.0, 28.8 - y); return Math.min(body, hyp(x - 0.2, y - 31.05, z + 0.35) - 0.3) * 0.85; }, 0.18);
    const wavy = (pts, w, ph) => pts.map((p, i) => [p[0] + w * sin(i * 1.9 + ph), p[1], p[2] + w * 0.5 * cos(i * 1.6 + ph)]);
    for (const s of [-1, 1]) for (let j = 0; j < 3; j++) {                                                                                                              // the locks that come from behind each ear, forward over the shoulder
      c.run(wavy([[s * (1.78 + j * 0.08), 27.4, -0.75 - j * 0.3], [s * (2.05 + j * 0.16), 26.2, -0.6 - j * 0.3], [s * (2.08 + j * 0.26), 25.2, -0.25 - j * 0.3], [s * (2.25 + j * 0.34), 24.3, 0.3 - j * 0.3], [s * (2.75 + j * 0.36), 23.75, 0.4 - j * 0.3], [s * (3.25 + j * 0.3), 23.45, 0.2 - j * 0.3]], 0.1, j * 2 + s), [0.3, 0.31, 0.29, 0.25, 0.19, 0.07], 0.1, 4); }
    for (let i = 0; i < 11; i++) { const u = (i - 5) / 5, len = 19.2 + 1.5 * Math.abs(sin(i * 2.3)) + 1.3 * Math.abs(u);                                             // and the long fall of it down his back
      c.run(wavy([[u * 1.35, 28.3, -1.72], [u * 1.9, 26.6, -2.02], [u * 2.4, 24.8, -1.98], [u * 2.65, 23.0, -1.92 - 0.12 * (i % 2)], [u * 2.7, 21.2, -1.88 - 0.12 * (i % 2)], [u * 2.6, len, -1.74]], 0.13, i * 1.7), [0.42, 0.46, 0.44, 0.4, 0.33, 0.1], 0.12, 5); }
    // the crescent moon set in his hair, at the right of the knot
    { const pts = [], rr = []; for (let i = 0; i <= 8; i++) { const a = (218 + i / 8 * 178) * Math.PI / 180, w = sin(i / 8 * Math.PI); pts.push([-1.55 + cos(a) * 0.86, 29.72 + sin(a) * 0.86, 0.95 - 0.25 * w]); rr.push(0.03 + 0.15 * w); } c.run(pts, rr, 0.03, 4, [0, 0, 1, 1.6]); }

    /* ----- the cobra: its hood spread beside his face, its body lying heavy round his neck, its tail curled on his left breast ----- */
    const HB = basis([1, 0, -0.2], [0.05, 1, 0.1]);
    c.egg([-3.05, 26.45, 1.45], [0.98, 1.2, 0.18], 0.1, HB, false, (x, y, z) => 0.035 * sin(y * 13 + 0.5) * ss(0.25, 0.5, Math.abs(x + 3.05)));
    c.limb([-3.05, 25.2, 1.5], [-3.05, 27.3, 1.66], 0.36, 0.3, 0.1, null, (x, y, z) => 0.04 * sin(y * 13 + 0.5));
    c.egg([-3.05, 27.62, 1.98], [0.32, 0.22, 0.46], 0.14, basis([1, 0, 0], [0, 1, 0.3])).egg([-3.05, 27.42, 1.76], [0.38, 0.32, 0.36], 0.16);
    for (const s of [-1, 1]) c.ring([-3.05 + s * 0.55, 26.75, 1.58], 0.2, 0.045, 0.03, about([0.2, 0, 1])).egg([-3.05 + s * 0.2, 27.68, 2.22], [0.07, 0.06, 0.07], 0.02);
    c.run([[-3.05, 25.35, 1.5], [-3.2, 24.8, 1.3], [-3.42, 24.4, 0.85], [-3.15, 24.2, 0.3], [-2.5, 24.3, -0.05], [-1.85, 24.55, -0.75], [0, 24.75, -1.3], [1.9, 24.5, -0.7], [2.42, 24.1, 0.35], [2.2, 23.3, 1.25], [1.5, 22.2, 1.72], [0.45, 21.45, 1.98], [-0.75, 21.75, 1.92], [-1.65, 22.7, 1.62], [-2.05, 23.6, 1.15], [-2.3, 24.2, 0.5]],
      [0.34, 0.36, 0.4, 0.42, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.43, 0.42, 0.4], 0.14, 6, null, scales);
    c.run([[2.25, 23.5, 1.2], [2.6, 22.5, 1.5], [2.62, 21.5, 1.62], [2.25, 20.75, 1.78], [1.72, 20.6, 1.86], [1.5, 21.05, 1.9], [1.8, 21.35, 1.9], [2.02, 21.1, 1.92]], [0.4, 0.36, 0.3, 0.25, 0.2, 0.16, 0.12, 0.07], 0.08, 6, null, scales);

    /* ----- rudraksha: a string at the throat with its pendant, another within the serpent's loop, a long one to the navel; and the thread ----- */
    const beads = (pts, r, each = 4) => { c.run(pts, r * 0.5, 0.05, each); for (let i = 0; i < pts.length - 1; i++) for (let s = 0; s < each; s++) c.egg(spline(pts, i, s / each), [r, r, r], 0.03); c.egg(pts[pts.length - 1], [r, r, r], 0.03); };
    beads([[-1.2, 24.55, 0.95], [-0.85, 24.0, 1.4], [0, 23.75, 1.62], [0.85, 24.0, 1.4], [1.2, 24.55, 0.95]], 0.17);
    c.egg([0, 23.42, 1.7], [0.22, 0.3, 0.14], 0.05);
    beads([[-1.5, 23.7, 1.45], [-1.0, 22.95, 1.82], [0, 22.55, 1.98], [1.0, 22.95, 1.82], [1.5, 23.7, 1.45]], 0.19);
    c.egg([0, 22.2, 2.02], [0.26, 0.34, 0.15], 0.05);
    beads([[-0.6, 21.5, 1.95], [-0.62, 20.4, 1.92], [-0.5, 19.3, 1.9], [-0.1, 18.55, 1.92], [0.38, 18.3, 1.94], [0.85, 18.6, 1.9], [1.0, 19.4, 1.86], [0.9, 20.5, 1.88], [0.75, 21.4, 1.95]], 0.21, 4);
    c.egg([0.38, 17.92, 1.98], [0.24, 0.34, 0.2], 0.06).run([[0.3, 21.0, 1.84], [-0.5, 19.3, 1.74], [-1.5, 18.1, 1.5], [-2.25, 17.75, 1.1]], 0.085, 0.04, 5);

    /* ----- the trident: foot, shaft, collar, the three blades; the cloth tied below them and blown back to his shoulder; the drum at his hip ----- */
    const [fx0, , fz0] = shaft(0), [tx, , tz] = shaft(30.5);
    c.limb([fx0, 0.3, fz0], [tx, 31.0, tz], 0.19, 0.17, 0.04).egg([fx0, 0.92, fz0], [0.78, 0.86, 0.78], 0.12).egg([fx0, 0.15, fz0], [0.55, 0.2, 0.55], 0.1);
    for (const [y, r] of [[1.95, 0.44], [2.3, 0.3], [2.62, 0.4], [2.95, 0.26], [29.25, 0.3], [29.6, 0.24], [29.92, 0.32], [30.2, 0.22]]) { const p = shaft(y); c.egg(p, [r, 0.15, r], 0.06); }
    c.run([[tx - 1.2, 30.75, tz], [tx - 0.6, 30.45, tz], [tx, 30.38, tz], [tx + 0.6, 30.45, tz], [tx + 1.2, 30.75, tz]], [0.2, 0.2, 0.22, 0.2, 0.2], 0.06, 4, [0, 0, 1, 1.5]);
    for (const s of [-1, 1]) { c.run([[tx + s * 1.2, 30.75, tz], [tx + s * 1.42, 31.5, tz], [tx + s * 1.2, 32.25, tz], [tx + s * 0.92, 32.8, tz], [tx + s * 1.05, 33.3, tz]], [0.2, 0.24, 0.22, 0.16, 0.03], 0.05, 5, [0, 0, 1, 1.6]);
      c.run([[tx + s * 0.12, 30.6, tz + 0.1], [tx + s * 0.5, 30.95, tz + 0.14], [tx + s * 0.55, 31.3, tz + 0.1]], [0.1, 0.13, 0.03], 0.04, 3); }                                  // the small leaves at the root of the middle blade
    c.limb([tx, 30.4, tz], [tx, 31.2, tz], 0.2, 0.16, 0.05).lay([tx - 0.6, 31.0, tz - 0.4, tx + 0.6, 34.9, tz + 0.4], (x, y, z) => { const t = sat((y - 31.1) / 3.7), w = 0.07 + 0.42 * Math.pow(sin(Math.PI * Math.pow(t, 0.42)), 1.0) * (1 - 0.25 * t);
      return Math.max((Math.abs(x - tx) / w + Math.abs(z - tz) / (w * 0.42) - 1) * w * 0.38, 31.1 - y, y - 34.8); }, 0.04);                                                       // the middle blade: four-sided, with a ridge down it
    c.egg([tx + 0.3, 29.0, tz - 0.1], [0.34, 0.3, 0.3], 0.1).run([[tx + 0.35, 28.9, tz - 0.15], [tx + 1.0, 27.9, tz - 0.9], [tx + 1.25, 26.3, tz - 1.9], [tx + 0.85, 24.9, tz - 2.7], [tx + 0.25, 24.1, tz - 3.15]], [0.24, 0.52, 0.6, 0.46, 0.2], 0.12, 6, [0.75, 0, 0.66, 2.0], (x, y, z) => 0.03 * sin(y * 5 + x * 3));
    const DB = basis([0.66, 0, -0.75], [0.75, 0, 0.66]), dc = [4.72, 14.6, 2.85];
    c.drum(dc, 0.94, 0.62, 0.08, 0.06, DB, (px, py, pz) => -0.1 * (1 - Math.abs(py) / 0.62) - (hyp(px, pz) > 0.8 ? 0.05 : 0)).ring(dc, 0.5, 0.06, 0.03, DB);
    c.run([[shaft(15.6)[0], 15.6, 3.3], [4.3, 15.5, 3.1], [dc[0], 15.5, dc[2]]], 0.07, 0.03, 3).run([[shaft(14.2)[0], 14.2, 3.3], [4.2, 14.3, 3.1]], 0.07, 0.03, 2);
  }
  return function cast(z) { const c = new Clay(z.lo, z.hi, z.cell, z.band); sculpt(c); return c.skin(z.from, z.to, z.only || null, z.omit || null); };
}

// Gold under lamps: each lamp set round his feet warms the faces turned to it; the night sky and the moon show in the polish.
export function gilt() {
  return new THREE.ShaderMaterial({ uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { clay: { value: 0 } }]), fog: true,
    vertexShader: `attribute float ao; varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_vertex>
      void main() { vA = ao; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `uniform float clay; varying vec3 vN; varying vec3 vW; varying float vA;
      #include <fog_pars_fragment>
      vec3 lamp(vec3 at, float power, vec3 n, vec3 v) { vec3 l = at - vW; float d = length(l); l /= d; float nl = max(dot(n, l), 0.0), nh = max(dot(n, normalize(l + v)), 0.0);
        return vec3(1.0, 0.86, 0.6) * power * (0.3 * nl + (0.42 * pow(nh, 9.0) + 1.5 * pow(nh, 70.0)) * step(0.0, dot(n, l))) / (1.0 + d * d / 2600.0); }
      void main() { vec3 n = normalize(vN), v = normalize(cameraPosition - vW), r = reflect(-v, n), gold = vec3(1.0, 0.59, 0.13);
        float occ = vA * vA * (3.0 - 2.0 * vA);
        if (clay > 0.5) { float l = 0.25 + 0.75 * max(0.0, dot(n, normalize(vec3(0.35, 0.5, 0.8)))); gl_FragColor = vec4(vec3(0.78, 0.76, 0.72) * l * (0.35 + 0.65 * occ), 1.0); }
        else {
        vec3 c = lamp(vec3(-13.0, 6.0, 16.0), 0.9, n, v) + lamp(vec3(13.0, 6.0, 16.0), 0.9, n, v) + lamp(vec3(0.0, 9.0, 30.0), 0.5, n, v) + lamp(vec3(-30.0, 52.0, 62.0), 0.95, n, v) + lamp(vec3(34.0, 46.0, 58.0), 0.6, n, v) + lamp(vec3(-24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(24.0, 7.0, -3.0), 0.55, n, v) + lamp(vec3(-10.0, 6.0, -16.0), 0.5, n, v) + lamp(vec3(10.0, 6.0, -16.0), 0.5, n, v);
        c += mix(vec3(0.2, 0.13, 0.06), vec3(0.03, 0.045, 0.09), n.y * 0.5 + 0.5);                                                                 // the glow off the deck below, the sky above
        c += vec3(0.07, 0.1, 0.19) * smoothstep(-0.1, 0.8, r.y) + vec3(0.42, 0.26, 0.1) * smoothstep(0.25, -0.6, r.y) * 0.8 + vec3(1.0, 0.98, 0.9) * pow(max(dot(r, normalize(vec3(0.08, 0.18, -1.0))), 0.0), 120.0);   // what the polish mirrors: sky, the lit water, the moon
        c += vec3(0.2, 0.28, 0.5) * pow(1.0 - max(dot(n, v), 0.0), 3.0) * (0.2 + 0.3 * max(n.y, 0.0));                                              // the edge the moon picks out
        gl_FragColor = vec4(gold * c * (0.06 + 0.94 * occ * occ) * 0.56, 1.0); }
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }` });
}

// The three castings he is made in, each finer than the one below it, and the plainer one that the lake mirrors.
const FACE = [-1.82, 24.98, 0.62, 1.82, 28.8, 9];                                      // the part of the head that is cast finest
export const ZONES = (k = 1) => [
  { lo: [-6.8, -0.4, -4.8], hi: [6.4, 16.7, 4.6], cell: 0.15 * k, band: 0.6, from: -9, to: 16.42 },
  { lo: [-6.4, 16.2, -3.6], hi: [6.3, 25.1, 4.8], cell: 0.105 * k, band: 0.45, from: 16.3, to: 24.92 },
  { lo: [-4.8, 24.6, -3.3], hi: [5.6, 35.2, 4.2], cell: 0.08 * k, band: 0.36, from: 24.8, to: 99, omit: [FACE[0] + 0.09, FACE[1] + 0.09, FACE[2] + 0.09, FACE[3] - 0.09, FACE[4] - 0.09, 9] },
  { lo: [-2.4, 24.5, 0.1], hi: [2.4, 29.3, 3.2], cell: 0.04 * k, band: 0.3, from: -9, to: 99, only: FACE }];
export const PLAIN = { lo: [-6.6, -0.4, -4.8], hi: [6.4, 35.4, 4.8], cell: 0.32, band: 0.7, from: -9, to: 99 };
const mesh = (s, mat) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(s.P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(s.N, 3)); g.setAttribute('ao', new THREE.BufferAttribute(s.A, 1)); g.setIndex(new THREE.BufferAttribute(s.I, 1)); return new THREE.Mesh(g, mat); };
// Cast one zone on another thread; if the browser will not have that, here, a little later.
function castOff(zone) {
  return new Promise(done => {
    const here = () => setTimeout(() => done(foundry()(zone)), 0);
    try { const w = new Worker(URL.createObjectURL(new Blob(['const cast = (' + foundry.toString() + ')(); onmessage = e => { const r = cast(e.data); postMessage(r, [r.P.buffer, r.N.buffer, r.A.buffer, r.I.buffer]); };'], { type: 'text/javascript' })));
      w.onmessage = e => { done(e.data); w.terminate(); }; w.onerror = () => { w.terminate(); here(); }; w.postMessage(zone); } catch (e) { here(); }
  });
}
// Make him and stand him in the group, his soles at foot. A phone gets a slightly plainer cast.
export async function statue(group, foot = 16.7, detail = 1) {
  const mat = gilt(), stand = (s, mirrored) => { const m = mesh(s, mat); m.position.y = foot; m.visible = !mirrored; group.add(m); return m; };
  const plain = [stand(await castOff(PLAIN), true)], fine = (await Promise.all(ZONES(detail).map(castOff))).map(s => stand(s, false));
  return { fine, plain, mat };
}
