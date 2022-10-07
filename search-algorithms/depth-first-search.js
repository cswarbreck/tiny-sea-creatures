"use strict";
exports.__esModule = true;
var graph_1 = require("./graph");
function dfs(start, finish, visited) {
    if (visited === void 0) { visited = new Set(); }
    console.log(start);
    visited.add(start);
    var destinations = graph_1["default"].get(start);
    var routeFound = false;
    for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
        var destination = destinations_1[_i];
        if (destination === 'BKK') {
            routeFound = true;
            console.log("There is a route from ".concat(start, " to ").concat(finish));
            return;
        }
        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
    if (!routeFound) {
        console.log('There is no route. Would you like to try a different destination?');
    }
}
dfs('PHX', 'BKK');
