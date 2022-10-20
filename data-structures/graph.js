"use strict";
exports.__esModule = true;
exports.Graph = void 0;
/**
 *
 *
 * @export
 * @class Graph
 */
var Graph = /** @class */ (function () {
    /**
     * Creates an instance of Graph.
     * @param {boolean} directed
     * @memberof Graph
     */
    function Graph(directed) {
        this.directed = directed;
        this.verticies = {};
    }
    /**
     * Add a vertex to the graph
     *
     * @param {GraphVertex} vertex
     * @return {Graph}
     * @memberof Graph
     */
    Graph.prototype.addVertex = function (vertex) {
        this.verticies[vertex.getKey()] = vertex;
        return this;
    };
    /**
     * @param {GraphEdge} edge
     * @return {Graph}
     * @memberof Graph
     */
    Graph.prototype.addEdge = function (edge) {
        var start = edge.startVertex;
        if (!this.getVertex(start)) {
            this.addVertex(edge.startVertex);
        }
        var end = edge.endVertex;
        if (!this.getVertex(end)) {
            this.addVertex(edge.endVertex);
        }
        if (this.directed) {
            this.getVertex(start).addEdge(edge);
        }
        else {
            this.getVertex(start).addEdge(edge);
            this.getVertex(end).addEdge(edge);
        }
        return this;
    };
    /**
     * @param {GraphVertex} vertex
     * @return {GraphVertex}
     * @memberof Graph
     */
    Graph.prototype.getVertex = function (vertex) {
        return this.verticies[vertex.getKey()] || null;
    };
    /**
     *
     *
     * @return {GraphVertex[]}
     * @memberof Graph
     */
    Graph.prototype.getVertices = function () {
        var _this = this;
        return Object.keys(this.verticies).map(function (k) { return _this.verticies[k]; });
    };
    /**
     *
     *
     * @return {GraphEdge[]}
     * @memberof Graph
     */
    Graph.prototype.getEdges = function () {
        return [].concat.apply([], this.getVertices().map(function (v) { return v.getEdges(); }));
    };
    /**
     * @param {GraphVertex} vertex
     * @return {GraphVertex[]}
     * @memberof Graph
     */
    Graph.prototype.getNeighbors = function (vertex) {
        return this.getVertex(vertex).getNeighbors();
    };
    /**
     * @param {GraphVertex} start
     * @param {GraphVertex} end
     * @return {GraphEdge}
     * @memberof Graph
     */
    Graph.prototype.findEdge = function (start, end) {
        var vertex = this.getVertex(start);
        if (!vertex) {
            return null;
        }
        return vertex.findEdge(end);
    };
    /**
     * @return {string}
     * @memberof Graph
     */
    Graph.prototype.toString = function () {
        return Object.keys(this.verticies).toString();
    };
    return Graph;
}());
exports.Graph = Graph;
