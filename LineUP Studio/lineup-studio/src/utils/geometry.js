export function calculateDelaunayTriangles(points) {
  if (!points || points.length < 3) return [];

  // 1. Giant super-triangle enclosing the entire 1050x680 pitch
  const p0 = { x: -2000, y: -2000 };
  const p1 = { x: 4000, y: -2000 };
  const p2 = { x: 525, y: 4000 };

  let triangles = [[p0, p1, p2]];

  // 2. Insert each player point one by one
  for (let i = 0; i < points.length; i++) {
    const pt = points[i];
    const badTriangles = [];

    for (let t = 0; t < triangles.length; t++) {
      const tri = triangles[t];
      if (inCircumcircle(pt, tri[0], tri[1], tri[2])) {
        badTriangles.push(tri);
      }
    }

    const polygon = [];
    for (let b = 0; b < badTriangles.length; b++) {
      const tri = badTriangles[b];
      const edges = [
        [tri[0], tri[1]],
        [tri[1], tri[2]],
        [tri[2], tri[0]],
      ];

      for (let e = 0; e < 3; e++) {
        const edge = edges[e];
        let shared = false;

        for (let other = 0; other < badTriangles.length; other++) {
          if (b === other) continue;
          const otherTri = badTriangles[other];
          const otherEdges = [
            [otherTri[0], otherTri[1]],
            [otherTri[1], otherTri[2]],
            [otherTri[2], otherTri[0]],
          ];

          for (let oe = 0; oe < 3; oe++) {
            if (
              (edge[0] === otherEdges[oe][0] && edge[1] === otherEdges[oe][1]) ||
              (edge[0] === otherEdges[oe][1] && edge[1] === otherEdges[oe][0])
            ) {
              shared = true;
              break;
            }
          }
          if (shared) break;
        }

        if (!shared) {
          polygon.push(edge);
        }
      }
    }

    // Remove bad triangles and fill the hole with new triangles
    triangles = triangles.filter((tri) => !badTriangles.includes(tri));
    for (let p = 0; p < polygon.length; p++) {
      triangles.push([polygon[p][0], polygon[p][1], pt]);
    }
  }

  // 3. Filter out any triangle connected to the initial super-triangle
  return triangles.filter(
    (tri) => !tri.includes(p0) && !tri.includes(p1) && !tri.includes(p2)
  );
}

export const computeDelaunayTriangles = calculateDelaunayTriangles;

function inCircumcircle(p, a, b, c) {
  const ax = a.x - p.x;
  const ay = a.y - p.y;
  const bx = b.x - p.x;
  const by = b.y - p.y;
  const cx = c.x - p.x;
  const cy = c.y - p.y;

  const det =
    (ax * ax + ay * ay) * (bx * cy - cx * by) -
    (bx * bx + by * by) * (ax * cy - cx * ay) +
    (cx * cx + cy * cy) * (ax * by - bx * ay);

  const orient = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
  return orient > 0 ? det > 0 : det < 0;
}
