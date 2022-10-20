"use strict";
exports.__esModule = true;
exports.GraphVertex = void 0;
/**
 *
 *
 * @export
 * @class GraphVertex
 */
var GraphVertex = /** @class */ (function () {
    /**
     *Creates an instance of GraphVertex.
     * @param {string} key
     * @memberof GraphVertex
     */
    function GraphVertex(key) {
        this.key = key;
        this.edges = [];
    }
    /**
     * @return {string}
     * @memberof GraphVertex
     */
    GraphVertex.prototype.getKey = function () {
        return this.key;
    };
    /**
     * @param {GraphEdge} edge
     * @return {GraphVertex}
     * @memberof GraphVertex
     */
    GraphVertex.prototype.addEdge = function (edge) {
        this.edges.push(edge);
        return this;
    };
    /**
     * @param {GraphVertex} vertex
     * @return {GraphEdge}
     * @memberof GraphVertex
     */
    GraphVertex.prototype.findEdge = function (vertex) {
        var _a;
        var edge = this.edges.filter(function (edge) {
            return edge.startVertex === vertex || edge.endVertex === vertex;
        });
        return (_a = edge[0]) !== null && _a !== void 0 ? _a : null;
    };
    /**
     * @return {GraphVertex[]}
     * @memberof GraphVertex
     */
    GraphVertex.prototype.getNeighbors = function () {
        var _this = this;
        var edges = this.edges;
        return edges.map(function (edge) {
            return edge.startVertex === _this ? edge.endVertex : edge.startVertex;
        });
    };
    /**
     * @return {GraphEdge[]}
     * @memberof GraphVertex
     */
    GraphVertex.prototype.getEdges = function () {
        return this.edges;
    };
    return GraphVertex;
}());
exports.GraphVertex = GraphVertex;
