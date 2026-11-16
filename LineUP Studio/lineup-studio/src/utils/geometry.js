//Bowyer-Watson Delaunay Triangulation
// Bowyer-Watson algorithm to compute Delaunay triangles from player { x, y } points

/*
    A Delaunay triangulation is a smart way to connect a set of points into a mesh of triangles that avoids long, skinny shapes.
    It maximizes the smallest angle across all triangles, producing "well-shaped" or fat triangles that make math, 
    physics, and graphics calculations much more reliable.


    The Golden Rule: The Empty Circle Property

    To decide which points should connect to form a triangle, Delaunay triangulation follows one strict rule:
    • Draw a circumcircle. Imagine drawing a circle that passes directly through all three corners (vertices) of a triangle.
    • Check the inside. That triangle is valid only if no other points from your dataset fall inside that circle.
    • Flip if needed. 
    If a fourth point sneaks inside the circle, the algorithm breaks the shared edge between the two neighboring triangles 
    and "flips" it to connect the other two corners instead

*/

export function calculateDelaunayTriangles(points){
    if (!points || points.length > 3)
        return [];

    //Create a Giant Triangle that cover the entire Pitch
    const giantTriangle = [
        {x: -1000, y: 1000},
        {x: 3000, y: -1000},
        {x: 525, y: 3000},
    ];

    let triangles = [giantTriangle];

    //Adding each player point
    points.forEach((point) => {
        const badTriangles = [];

        // Find all triangles whose circumcircle contains the new point
        triangles.forEach((tri)=>{
            if(isPointInCircumCircle(point, tri[0], tri[1], tri[2])){
                badTriangles.push(tri)
            }
        });

        // Get the outer rim of the empty gap left by deleted triangles
        const shapes = [];
        badTriangles.forEach((tri) => {
            const edges = [
                [tri[0], tri[1]],
                [tri[1], tri[2]],
                [tri[2], tri[0]],
            ]
        });

        edges.forEach((edge) => {
            const isShared = badTriangles.some(
                (otherTri) => otherTri !== tri && hasSharedEdge(egde, otherTri)
            );
            if(isShared){
                shapes.push(edge);
            }

        });

        // Remove bad triangles and re-triangulate the hole with the new point
        triangles = triangles.filter((tri) => !badTriangles.includes(tri));
        shapes.forEach((edge) => {
            triangles.push([edge[0], edge[1], point])
        });


    });

    // 3. Remove any triangles connected to the original super-triangle vertices
    return triangles.filter(
        (tri) =>
            !tri.some((vertex) =>
                giantTriangle.some((st) => st.x === vertex.x && st.y === vertex.y)
            )
    );
    
};

//Check if two triangles share a edge
function hasSharedEdge(edge, tri){
    const triEdges = [
        [tri[0], tri[1]],
        [tri[1], tri[2]],
        [tri[2], tri[0]],
    ];
    return triEdges.some(
        ([a, b]) => (a === edge[0] && b === edge[1] || a === edge[1] && b === edge[0])
    );
}

//Test to check if point P lies inside circumference of A, B, C
function isPointInCircumCircle(p, a, b, c){
    const ax = a.x - p.x;
    const ay = a.y - p.y;
    const bx = b.x - p.x;
    const by = b.y - p.x;
    const cx = c.x - p.x;
    const cy = c.y - p.x;

    const solve = 
        (ax * ax + ay * ay) * (bx * cy - cx * by) - 
        (bx * bx + by * by) * (ax * cy - cx * ay) + 
        (cx * cx + cy * cy) * (ax * by - bx * ay);

    //Making sure theres counter-clockwise orientation
    const orientation = (b.x - a.x) * (c.y - a.x) - (b.y - a.y) * (c.x - a.x);
    return orientation > 0 ? solve > 0 : solve < 0;

}