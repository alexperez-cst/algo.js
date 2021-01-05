const PriorityQueue = require('./minPriority.js');
module.exports = class WeightedGraph{
	constructor() {
		this.vertices = [];
		this.adjacencyList = {};
	}
	addVertex(nodeValue) {
		if (nodeValue in this.adjacencyList)
			throw ReferenceError(
				'The vertex that you try to insert also has already been added',
			);
		this.adjacencyList[nodeValue] = [];
		this.vertices.push(nodeValue);
	}
	addEdge(firstVertex, secondVertex, weight) {
		const firVerEdges = this.adjacencyList[firstVertex];
		const secVerEdges = this.adjacencyList[secondVertex];
		if (
			firVerEdges.includes(secondVertex) ||
			secVerEdges.includes(firstVertex)
		) {
			throw ReferenceError(
				`Sorry but actually exist a edge between ${firstVertex} & ${secondVertex}`,
			);
		}
		firVerEdges.push({ vertex: secondVertex, weight });
		secVerEdges.push({ vertex: firstVertex, weight });
	}
	removeVertex(vertexVal) {
		const vertexIndex = this.vertices.indexOf(vertexVal);
		if (vertexIndex < 0) {
			throw ReferenceError("The vertex that you try to remove doesn't exist");
		}
		this.vertices.splice(vertexIndex, vertexIndex);
		delete this.adjacencyList[vertexVal];
		for (const conexion of Object.keys(this.adjacencyList)) {
			const toDeleteVerInd = this.adjacencyList[conexion].findIndex(
				con => con.vertex === vertexVal,
			);
			if(toDeleteVerInd!== -1){
				this.adjacencyList[conexion].splice(toDeleteVerInd, toDeleteVerInd);
			}
		}
	}
	removeEdge(firstVertex, secondVertex) {
		try {
			const secIndex = this.adjacencyList[firstVertex].findIndex(
				val => val.vertex === secondVertex,
			);
			const firIndex = this.adjacencyList[secondVertex].findIndex(
				val => val.vertex === firstVertex,
			);
			this.adjacencyList[firstVertex].splice(secIndex, secIndex);
			this.adjacencyList[secondVertex].splice(firIndex, firIndex);
		} catch (e) {
			throw new Error(`removeEdge error: ${e.message}`);
		}
	}
	size() {
		return this.vertices.length;
	}
	depthFirstSearch(start) {
		const stack = [];
		const toReturn = [];
		const visited = new Set();
		stack.push(start);
		visited.add(start);
		while (stack.length) {
			const current = stack.pop();
			toReturn.push(current);
			for (const adjacent of this.adjacencyList[current]) {
				if (!visited.has(adjacent.vertex)) {
					stack.push(adjacent.vertex);
					visited.add(adjacent.vertex);
				}
			}
		}
		return toReturn;
	}
	breadthFirstSearch(start) {
		const queue = [];
		const toReturn = [];
		const visited = new Set();
		queue.push(start);
		visited.add(start);
		while (queue.length) {
			const current = queue.shift();
			toReturn.push(current);
			for (const adjacent of this.adjacencyList[current]) {
				if (!visited.has(adjacent.vertex)) {
					queue.push(adjacent.vertex);
					visited.add(adjacent.vertex);
				}
			}
		}
	return toReturn;
	}
	dijkstraPath(start, target) {
		const results = this.dijkstra(start);
		const shortestPath = [];
		for (let prev = results[1][target]; prev; prev = results[1][prev]) {
			shortestPath.unshift(prev);
		}
		return shortestPath;
	}
	dijkstra(start) {
		const dist = {};
		const previous = {};
		const priority = new PriorityQueue();
		priority.enqueue(start, 0);
		dist[start] = 0;
		for (let i = 0; i < this.vertices.length - 1; i++) {
			const actual = this.vertices[i+1];
			dist[actual] = Infinity;
			previous[actual] = null;
			priority.enqueue(actual, Infinity);
		}
		while (priority.queue.length) {
			const actual = priority.dequeue();
			const actualInAdjacency = this.adjacencyList[actual.value];
			for (const neighbor of actualInAdjacency) {
				const newDist = dist[actual.value] + neighbor.weight;
				if (newDist < dist[neighbor.vertex]) {
					dist[neighbor.vertex] = newDist;
					priority.changePriority(neighbor.vertex, newDist);
					previous[neighbor.vertex] = actual.value;
				}
			}
		}
		return [dist, previous];
	}
}
