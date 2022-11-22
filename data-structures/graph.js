/**
 *
 *
 * @export
 * @class Graph
 */
export class Graph {
    /**
     * Creates an instance of Graph.
     * @param {boolean} directed
     * @memberof Graph
     */
    constructor(directed) {
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
    addVertex(vertex) {
        this.verticies[vertex.getKey()] = vertex;
        return this;
    }
    /**
     * @param {GraphEdge} edge
     * @return {Graph}
     * @memberof Graph
     */
    addEdge(edge) {
        const start = edge.startVertex;
        if (!this.getVertex(start)) {
            this.addVertex(edge.startVertex);
        }
        const end = edge.endVertex;
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
    }
    /**
     * @param {GraphVertex} vertex
     * @return {GraphVertex}
     * @memberof Graph
     */
    getVertex(vertex) {
        return this.verticies[vertex.getKey()] || null;
    }
    /**
     *
     *
     * @return {GraphVertex[]}
     * @memberof Graph
     */
    getVertices() {
        return Object.keys(this.verticies).map((k) => this.verticies[k]);
    }
    /**
     *
     *
     * @return {GraphEdge[]}
     * @memberof Graph
     */
    getEdges() {
        return [].concat(...this.getVertices().map((v) => v.getEdges()));
    }
    /**
     * @param {GraphVertex} vertex
     * @return {GraphVertex[]}
     * @memberof Graph
     */
    getNeighbors(vertex) {
        return this.getVertex(vertex).getNeighbors();
    }
    /**
     * @param {GraphVertex} start
     * @param {GraphVertex} end
     * @return {GraphEdge}
     * @memberof Graph
     */
    findEdge(start, end) {
        const vertex = this.getVertex(start);
        if (!vertex) {
            return null;
        }
        return vertex.findEdge(end);
    }
    /**
     * @return {string}
     * @memberof Graph
     */
    toString() {
        return Object.keys(this.verticies).toString();
    }
}
