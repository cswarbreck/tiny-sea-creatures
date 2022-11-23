/**
 *
 *
 * @export
 * @class GraphConfig
 */
export class GraphConfig {
    /**
     *Creates an instance of GraphConfig.
     * @param {*} {enterVertex, leaveVertex, allowEnterVertex}
     * @memberof GraphConfig
     */
    constructor({ enterVertex, leaveVertex, allowEnterVertex }) {
        this.enterVertex = enterVertex;
        this.leaveVertex = leaveVertex;
        this.allowEnterVertex = allowEnterVertex;
    }
}
