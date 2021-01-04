module.exports = class Graph {
	constructor() {
		this.vertices = [];
		this.adjacencyList = {};
	}
	//AddVertex
	addVertex(nodeValue) {
		if (nodeValue in this.adjacencyList)
			throw ReferenceError(
				'The vertex that you try to insert also has already been added',
			);
		this.adjacencyList[nodeValue] = [];
		this.vertices.push(nodeValue);
	}
	//Add Edge
	addEdge(firstVertex, secondVertex) {
		const firVerEdges = this.adjacencyList[firstVertex];
		const secVerEdges = this.adjacencyList[secondVertex];
		if (firVerEdges.includes(secondVertex)) {
			throw ReferenceError(
				`Sorry but actually exist a edge between ${firstVertex} & ${secondVertex}`,
			);
		}
		firVerEdges.push(secondVertex);
		secVerEdges.push(firstVertex);
	}
	//RemoveVertex
	removeVertex(vertexVal) {
		const vertexIndex = this.vertices.indexOf(vertexVal);
		if (vertexIndex < 0) {
			throw ReferenceError("The vertex that you try to remove doesn't exist");
		}
		this.vertices.splice(vertexIndex, vertexIndex);
		const conexions = this.adjacencyList[vertexIndex];
		delete this.adjacencyList[vertexIndex];
		for (const conexion of conexions) {
			const toDeleteVerInd = conexionArr.indexOf(vertexVal);
			this.adjacencyList[conexion].splice(toDeleteVerInd, toDeleteVerInd);
		}
	}
	//RemoveEdge
	removeEdge(firstVertex, secondVertex) {
		try {
			const secIndex = this.adjacencyList[firstVertex].indexOf(secondVertex);
			const firIndex = this.adjacencyList[secondVertex].indexOf(firstVertex);
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
			console.log(visited);
			const current = stack.pop();
			toReturn.push(current);
			for (const adjacent of this.adjacencyList[current]) {
				if (!visited.has(adjacent)) {
					stack.push(adjacent);
					visited.add(adjacent);
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
				if (!visited.has(adjacent)) {
					queue.push(adjacent);
					visited.add(adjacent);
				}
			}
		}
		return toReturn;
	}
}