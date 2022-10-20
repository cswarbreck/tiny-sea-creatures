"use strict";
exports.__esModule = true;
exports.depthFirstSearch = void 0;
/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {GraphConfig} config
 */
function depthFirstSearch(graph, startVertex, config) {
    if (config === void 0) { config = null; }
    if (!graph) {
        return;
    }
    if (!graph.getVertex(startVertex)) {
        return;
    }
    config = initConfig(config);
    depthFirstSearchRecursive(graph, startVertex, config);
}
exports.depthFirstSearch = depthFirstSearch;
/**
 *
 *
 * @param {Graph} graph
 * @param {GraphVertex} currentVertex
 * @param {GraphConfig} config
 */
function depthFirstSearchRecursive(graph, currentVertex, config) {
    config.enterVertex(currentVertex);
    var neighbors = graph.getNeighbors(currentVertex);
    for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
        var neighbor = neighbors_1[_i];
        if (config.allowEnterVertex(neighbor)) {
            depthFirstSearch(graph, neighbor, config);
        }
    }
    config.leaveVertex(currentVertex);
}
/**
 * @param {GraphConfig} config
 * @return {GraphConfig}
 */
function initConfig(config) {
    config = config || {};
    config.enterVertex = config.enterVertex || (function (vertex) { });
    config.leaveVertex = config.leaveVertex || (function (vertex) { });
    config.allowEnterVertex = config.allowEnterVertex || isFirstEnter();
    return config;
}
/**
 * @param {GraphVertex} vertex
 * @return {boolean}
 */
function isFirstEnter() {
    var visited = {};
    return function (next) {
        if (!visited[next.getKey()]) {
            visited[next.getKey()] = true;
            return true;
        }
        return false;
    };
}
