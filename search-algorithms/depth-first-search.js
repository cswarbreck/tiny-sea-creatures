import adjacencyList from "./graph";
function dfs(start, finish, visited = new Set()) {
    console.log(start);
    visited.add(start);
    const destinations = adjacencyList.get(start);
    let routeFound = false;
    for (const destination of destinations) {
        if (destination === 'BKK') {
            routeFound = true;
            console.log(`There is a route from ${start} to ${finish}`);
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
