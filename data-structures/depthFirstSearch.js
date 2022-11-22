/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {GraphConfig} config
 */
export function depthFirstSearch(graph, startVertex, config = null) {
    if (!graph) {
        return;
    }
    if (!graph.getVertex(startVertex)) {
        return;
    }
    config = initConfig(config);
    depthFirstSearchRecursive(graph, startVertex, config);
}
/**
 *
 *
 * @param {Graph} graph
 * @param {GraphVertex} currentVertex
 * @param {GraphConfig} config
 */
function depthFirstSearchRecursive(graph, currentVertex, config) {
    config.enterVertex(currentVertex);
    const neighbors = graph.getNeighbors(currentVertex);
    for (const neighbor of neighbors) {
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
    config.enterVertex = config.enterVertex || ((vertex) => { });
    config.leaveVertex = config.leaveVertex || ((vertex) => { });
    config.allowEnterVertex = config.allowEnterVertex || isFirstEnter();
    return config;
}
/**
 * @param {GraphVertex} vertex
 * @return {boolean}
 */
function isFirstEnter() {
    const visited = {};
    return (next) => {
        if (!visited[next.getKey()]) {
            visited[next.getKey()] = true;
            return true;
        }
        return false;
    };
}
