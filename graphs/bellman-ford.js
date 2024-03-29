/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphVertex} source
 * @return {{
 *   dist: Map<string, number>,
 *   prev: Map<string, string>
 * }}
 */
export function bellmanFord(graph, source) {
    const dist = new Map();
    const prev = new Map();
    const vertices = graph.getVertices();
    for (const vertex of vertices) {
        dist[vertex.getKey()] = Infinity;
        prev[vertex.getKey()] = undefined;
    }
    dist[source.getKey()] = 0;
    const edges = graph.getEdges();
    for (let i = 0, j = vertices.length - 1; i < j; i++) {
        for (const edge of edges) {
            const u = edge.startVertex.getKey();
            const v = edge.endVertex.getKey();
            const weight = edge.weight;
            if (dist[u] + weight < dist[v]) {
                // a new s.p. has been found
                dist[v] = dist[u] + weight;
                prev[v] = u;
            }
        }
    }
    // check for negative weight cycles
    for (const edge of edges) {
        const u = edge.startVertex.getKey();
        const v = edge.endVertex.getKey();
        const weight = edge.weight;
        if (dist[u] + weight < dist[v]) {
            throw new Error('Graph contains a negative-weight cycle');
        }
    }
    return {
        dist,
        prev,
    };
}
