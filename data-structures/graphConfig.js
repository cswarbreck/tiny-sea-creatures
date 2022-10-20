"use strict";
exports.__esModule = true;
exports.GraphConfig = void 0;
/**
 *
 *
 * @export
 * @class GraphConfig
 */
var GraphConfig = /** @class */ (function () {
    /**
     *Creates an instance of GraphConfig.
     * @param {*} {enterVertex, leaveVertex, allowEnterVertex}
     * @memberof GraphConfig
     */
    function GraphConfig(_a) {
        var enterVertex = _a.enterVertex, leaveVertex = _a.leaveVertex, allowEnterVertex = _a.allowEnterVertex;
        this.enterVertex = enterVertex;
        this.leaveVertex = leaveVertex;
        this.allowEnterVertex = allowEnterVertex;
    }
    return GraphConfig;
}());
exports.GraphConfig = GraphConfig;
