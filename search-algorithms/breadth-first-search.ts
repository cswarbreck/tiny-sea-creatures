// Use this search to find  if there is a route from two destinations in the graph

import adjacencyList from "./graph"

function bfs(start, finish) {

    const visited = new Set();

    const queue = [start];

    let routeFound = false


    while (queue.length > 0) {

        const airport = queue.shift(); // mutates the queue

        const destinations = adjacencyList.get(airport);

        


        for (const destination of destinations) {

            if (destination === finish)  {
                routeFound = true
                return console.log(`There is a route from ${start} to ${finish}`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
           
        }

        
    }

    if(!routeFound){
        console.log('There is no route. Would you like to try a different destination?')
    }
}

bfs('JFK', 'MEX')
