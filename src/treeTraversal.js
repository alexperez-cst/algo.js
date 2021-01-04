function dfsPreorder(startNode) {
	const array = [];
	if (!startNode) return [];
	array.push(startNode.data);
	if (startNode.left) {
		array.push(...dfsPreorder(startNode.left, array));
	}
	if (startNode.right) {
		array.push(...dfsPreorder(startNode.right, array));
	}
	return array;
}
function dfsInorder(startNode) {
	const array = [];
	if (!startNode) return [];
	if (startNode.left) {
		array.push(...dfsInorder(startNode.left, array));
	}
	array.push(startNode.data);
	if (startNode.right) {
		array.push(...dfsInorder(startNode.right, array));
	}
	return array;
}
function dfsPostorder(startNode) {
	const array = [];
	if (!startNode) return [];
	if (startNode.left) {
		array.push(...dfsPostorder(startNode.left, array));
	}
	if (startNode.right) {
		array.push(...dfsPostorder(startNode.right, array));
	}
	array.push(startNode.data);
	return array;
}
function breadthFirstSearch(startNode) {
	const valueWarehouse = [];
	const queue = [];
	queue.push(startNode);
	while (queue.length > 0) {
		const deleted = queue.shift();
		valueWarehouse.push(deleted.data);
		if (deleted.left) {
			queue.push(deleted.left);
		}
		if (deleted.right) {
			queue.push(deleted.right);
		}
	}
	return valueWarehouse;
}
module.exports = {
	dfsPreorder,
	dfsInorder,
	dfsPostorder,
	breadthFirstSearch,
}