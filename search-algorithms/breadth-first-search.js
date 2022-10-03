"use strict";
// Use this search to find  if there is a route from two destinations in the graph
exports.__esModule = true;
var graph_1 = require("./graph");
function bfs(start, finish) {
    var visited = new Set();
    var queue = [start];
    var routeFound = false;
    while (queue.length > 0) {
        var airport = queue.shift(); // mutates the queue
        var destinations = graph_1["default"].get(airport);
        for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
            var destination = destinations_1[_i];
            if (destination === finish) {
                routeFound = true;
                return console.log("There is a route from ".concat(start, " to ").concat(finish));
            }
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
    if (!routeFound) {
        console.log('There is no route. Would you like to try a different destination?');
    }
}
bfs('JFK', 'MEX');
