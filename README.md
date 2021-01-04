# asap-algo.js

## As Simple As Possible Javascript Library with the implementations of all the algorithms that i'm learning.

### Download

```
npm install --save asap-algo.js
```

## Functionality:

### Array Searching:

> Functions

- binarySearch(sortedArray) O(log(n))

#### ⚠The function assumes that the array is sorted⚠

### Array Sorting:

> _Objects_

- sort

> _Methods_

- _bubbleSort(array) O(n^2)_
- _insertionSort(array) O(n^2)_
- _selectionSort(array) O(n^2)_
- _mergeSort(array) O(n \* log(n))_
- _quickSort(array) O(n \* log(n))_

#### ⚠The methods returns new arrays and doesn't mutate the originals⚠

### Binary Tree Traversal:

> _Objects_

#### binaryTreeTraversal

> _Methods_

#### b => Branches of every node

#### d => Depth of the tree

- dfsPreorder(rootNode) O(b^d)
- dfsInorder(rootNode) O(b^d)
- dfsPostorder(rootNode) O(b^d)
- breadthFirstSearch(rootNode) O(b^d)

#### ⚠ These methods assumes that the data property of a node is called 'data', the left node 'left' and the right node 'right'. Also, it returns an array of the data at the order that the function goes on the tree ⚠

### Priority queue

> _Class_

- minPriorityQueue ( Implemented with Min Heap )

> _Methods_

- nodeParend(index) ' Returns the parent of a minPriorityQueue node '
- left(index) ' Returns the left node of a minPriorityQueue node '
- right(index) ' Returns the right node of a minPriorityQueue node '
- enqueue(value,priority) ' Inserts on the minPriorityQueue the value-priority '
- dequeue() ' Delete the first value on the minPriorityQueue and returns the node '
- changePriority(value,newPriority) ' Changes the priority of the minPriorityQueue node selected '

##### Secondary Methods

- mim(left,right) ' Returns the minimum index in base of the priority of their priority value '
- heapify(index) ' Internal method, doesn't do much for himself '

### Graphs

#### Weighted Undirected Graph

> _Class_

- weightedGraph

> _Methods_

- addVertex(vertexValue) ' Adds a vertex to the graph '
- addEdge(firstVertex,secondVertex,weight) ' Adds a edge to the graph between the first and second vertices '
- removeVertex(vertexValue) ' Remove a vertex from the graph and his connections '
- removeEdge(firstVertex,secondVertex) ' Removes the edge between the first and second vertex '
- size() ' Returns the size of the graph (How many vertices are in) '
- depthFirstSearch(startVertexVal) ' Traverse the graph and returns an array of their values '
- breadthFirstSearch(startVertexVal) ' Traverse the graph and returns an array of their values '
- dijkstraPath(startVertexVal,target) ' Returns the best path for go from the startVertexVal to the target'

#### Unweighted Undirected Graph

> _Class_

- unweightedGraph

> _Methods_

- addVertex(vertexValue) ' Adds a vertex to the graph '
- addEdge(firstVertex,secondVertex) ' Adds a edge to the graph between the first and second vertices '
- removeVertex(vertexValue) ' Remove a vertex from the graph and his connections '
- removeEdge(firstVertex,secondVertex) ' Removes the edge between the first and second vertex '
- size() ' Returns the size of the graph (How many vertices are in) '
- depthFirstSearch(startVertexVal) ' Traverse the graph and returns an array of their values '
- breadthFirstSearch(startVertexVal) ' Traverse the graph and returns an array of their values '

## Please if you trouble some error or you have a recomendation for some of the algorithms open an issue on github, this helps me to improve the algorithms and learn about it.
