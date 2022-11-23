/**
 *
 *
 * @export
 * @class GraphVertex
 */
export class GraphVertex {
    /**
     *Creates an instance of GraphVertex.
     * @param {string} key
     * @memberof GraphVertex
     */
    constructor(key) {
        this.key = key;
        this.edges = [];
    }
    /**
     * @return {string}
     * @memberof GraphVertex
     */
    getKey() {
        return this.key;
    }
    /**
     * @param {GraphEdge} edge
     * @return {GraphVertex}
     * @memberof GraphVertex
     */
    addEdge(edge) {
        this.edges.push(edge);
        return this;
    }
    /**
     * @param {GraphVertex} vertex
     * @return {GraphEdge}
     * @memberof GraphVertex
     */
    findEdge(vertex) {
        const edge = this.edges.filter((edge) => {
            return edge.startVertex === vertex || edge.endVertex === vertex;
        });
        return edge[0] ?? null;
    }
    /**
     * @return {GraphVertex[]}
     * @memberof GraphVertex
     */
    getNeighbors() {
        const edges = this.edges;
        return edges.map((edge) => {
            return edge.startVertex === this ? edge.endVertex : edge.startVertex;
        });
    }
    /**
     * @return {GraphEdge[]}
     * @memberof GraphVertex
     */
    getEdges() {
        return this.edges;
    }
}
