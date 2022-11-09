"use strict";
exports.__esModule = true;
exports.bellmanFord = void 0;
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
function bellmanFord(graph, source) {
    var dist = new Map();
    var prev = new Map();
    var vertices = graph.getVertices();
    for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
        var vertex = vertices_1[_i];
        dist[vertex.getKey()] = Infinity;
        prev[vertex.getKey()] = undefined;
    }
    dist[source.getKey()] = 0;
    var edges = graph.getEdges();
    for (var i = 0, j = vertices.length - 1; i < j; i++) {
        for (var _a = 0, edges_1 = edges; _a < edges_1.length; _a++) {
            var edge = edges_1[_a];
            var u = edge.startVertex.getKey();
            var v = edge.endVertex.getKey();
            var weight = edge.weight;
            if (dist[u] + weight < dist[v]) {
                // a new s.p. has been found
                dist[v] = dist[u] + weight;
                prev[v] = u;
            }
        }
    }
    // check for negative weight cycles
    for (var _b = 0, edges_2 = edges; _b < edges_2.length; _b++) {
        var edge = edges_2[_b];
        var u = edge.startVertex.getKey();
        var v = edge.endVertex.getKey();
        var weight = edge.weight;
        if (dist[u] + weight < dist[v]) {
            throw new Error('Graph contains a negative-weight cycle');
        }
    }
    return {
        dist: dist,
        prev: prev
    };
}
exports.bellmanFord = bellmanFord;
