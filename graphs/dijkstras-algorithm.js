var NodeVertex = /** @class */ (function () {
    function NodeVertex() {
    }
    return NodeVertex;
}());
var Vertex = /** @class */ (function () {
    function Vertex(theName, theNodes, theWeight) {
        this.name = theName;
        this.nodes = theNodes;
        this.weight = theWeight;
    }
    return Vertex;
}());
var Dijkstra = /** @class */ (function () {
    function Dijkstra() {
        this.vertices = {};
    }
    Dijkstra.prototype.addVertex = function (vertex) {
        this.vertices[vertex.name] = vertex;
    };
    Dijkstra.prototype.findPointsOfShortestWay = function (start, finish, weight) {
        var nextVertex = finish;
        var arrayWithVertex = [];
        while (nextVertex !== start) {
            var minWeigth = Number.MAX_VALUE;
            var minVertex = "";
            for (var _i = 0, _a = this.vertices[nextVertex].nodes; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                    minWeigth = this.vertices[i.nameOfVertex].weight;
                    minVertex = i.nameOfVertex;
                }
            }
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return arrayWithVertex;
    };
    Dijkstra.prototype.findShortestWay = function (start, finish) {
        var _this = this;
        var nodes = {};
        var visitedVertex = [];
        for (var i in this.vertices) {
            if (this.vertices[i].name === start) {
                this.vertices[i].weight = 0;
            }
            else {
                this.vertices[i].weight = Number.MAX_VALUE;
            }
            nodes[this.vertices[i].name] = this.vertices[i].weight;
        }
        while (Object.keys(nodes).length !== 0) {
            var sortedVisitedByWeight = Object.keys(nodes).sort(function (a, b) { return _this.vertices[a].weight - _this.vertices[b].weight; });
            var currentVertex = this.vertices[sortedVisitedByWeight[0]];
            for (var _i = 0, _a = currentVertex.nodes; _i < _a.length; _i++) {
                var j = _a[_i];
                var calculateWeight = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                    this.vertices[j.nameOfVertex].weight = calculateWeight;
                }
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        var finishWeight = this.vertices[finish].weight;
        var arrayWithVertex = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
        arrayWithVertex.push(finish, finishWeight.toString());
        return arrayWithVertex;
    };
    return Dijkstra;
}());
var dijkstra = new Dijkstra();
dijkstra.addVertex(new Vertex("A", [{ nameOfVertex: "C", weight: 3 }, { nameOfVertex: "E", weight: 7 }, { nameOfVertex: "B", weight: 4 }], 1));
dijkstra.addVertex(new Vertex("B", [{ nameOfVertex: "A", weight: 4 }, { nameOfVertex: "C", weight: 6 }, { nameOfVertex: "D", weight: 5 }], 1));
dijkstra.addVertex(new Vertex("C", [{ nameOfVertex: "A", weight: 3 }, { nameOfVertex: "B", weight: 6 }, { nameOfVertex: "E", weight: 8 }, { nameOfVertex: "D", weight: 11 }], 1));
dijkstra.addVertex(new Vertex("D", [{ nameOfVertex: "B", weight: 5 }, { nameOfVertex: "C", weight: 11 }, { nameOfVertex: "E", weight: 2 }, { nameOfVertex: "F", weight: 2 }], 1));
dijkstra.addVertex(new Vertex("E", [{ nameOfVertex: "A", weight: 7 }, { nameOfVertex: "C", weight: 8 }, { nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 5 }], 1));
dijkstra.addVertex(new Vertex("F", [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }], 1));
dijkstra.addVertex(new Vertex("G", [{ nameOfVertex: "D", weight: 10 }, { nameOfVertex: "E", weight: 5 }, { nameOfVertex: "F", weight: 3 }], 1));
console.log(dijkstra.findShortestWay("A", "F"));
