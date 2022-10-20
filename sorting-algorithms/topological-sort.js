"use strict";
exports.__esModule = true;
exports.topological = void 0;
var depthFirstSearch_1 = require("../data-structures/depthFirstSearch");
/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphConfig} config
 * @return {GraphVertex[]}
 */
function topological(graph, config) {
    if (config === void 0) { config = null; }
    if (!graph) {
        return;
    }
    // A set of unvisited vertices
    var unvisited = {};
    graph.getVertices().forEach(function (vertex) {
        unvisited[vertex.getKey()] = vertex;
    });
    // A set of visited vertices
    var visited = {};
    // An array, which behaves like a stack (to hold the order)
    var stack = [];
    config = config || {};
    // Visit only unvisited vertices
    config.allowEnterVertex =
        config.allowEnterVertex ||
            (function (vertex) {
                return !visited[vertex.getKey()];
            });
    config.enterVertex =
        config.enterVertex ||
            (function (vertex) {
                // Remove a vertex from the unvisited set
                delete unvisited[vertex.getKey()];
                // Mark a vertex as visited
                visited[vertex.getKey()] = vertex;
            });
    /* Push the vertex onto the stack,
     * when all of the vertex neighbors have been visited */
    config.leaveVertex =
        config.leaveVertex ||
            (function (vertex) {
                // TODO: Replace with an actual stack implementation
                stack.push(vertex);
            });
    while (Object.keys(unvisited).length) {
        var startVertexKey = Object.keys(unvisited)[0];
        var startVertex = unvisited[startVertexKey];
        (0, depthFirstSearch_1.depthFirstSearch)(graph, startVertex, config);
    }
    return stack.reverse();
}
exports.topological = topological;
