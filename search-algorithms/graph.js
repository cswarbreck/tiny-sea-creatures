"use strict";
exports.__esModule = true;
exports.adjacencyList = void 0;
// DATA
var airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
var routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
// The graph
exports.adjacencyList = new Map();
// Add node
function addNode(airport) {
    exports.adjacencyList.set(airport, []);
}
// Add edge, undirected
function addEdge(origin, destination) {
    exports.adjacencyList.get(origin).push(destination);
    exports.adjacencyList.get(destination).push(origin);
}
// Create the Graph
airports.forEach(addNode);
routes.forEach(function (route) { return addEdge(route[0], route[1]); });
exports["default"] = exports.adjacencyList;
