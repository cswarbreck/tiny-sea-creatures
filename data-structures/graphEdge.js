/**
 *
 *
 * @export
 * @class GraphEdge
 */
export class GraphEdge {
    /**
     *Creates an instance of GraphEdge.
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @param {number} [weight=0]
     * @memberof GraphEdge
     */
    constructor(startVertex, endVertex, weight = 0) {
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }
}
