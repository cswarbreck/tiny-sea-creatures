"use strict";
exports.__esModule = true;
exports.GraphEdge = void 0;
/**
 *
 *
 * @export
 * @class GraphEdge
 */
var GraphEdge = /** @class */ (function () {
    /**
     *Creates an instance of GraphEdge.
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @param {number} [weight=0]
     * @memberof GraphEdge
     */
    function GraphEdge(startVertex, endVertex, weight) {
        if (weight === void 0) { weight = 0; }
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }
    return GraphEdge;
}());
exports.GraphEdge = GraphEdge;
