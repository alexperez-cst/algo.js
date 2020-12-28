# asap-algo.js
## As Simple As Possible Javascript Library with the implementations of all the algorithms that i'm learning.
### Download
```
npm install --save asap-algo.js
```

## Functions:
### Array Searching
#### ⚠The function assumes that the array is sorted⚠
* binarySearch(sortedArray) O(log(n))
### Array Sort
#### ⚠The functions returns new arrays and doesn't mutate the originals⚠
* bubbleSort(array) O(n^2)
* insertionSort(array) O(n^2)
* selectionSort(array) O(n^2)
* mergeSort(array) O(n * log(n))
* quickSort(array) O(n * log(n))
### Tree Search
#### b => branches of every node
#### d => depth of the tree
#### ⚠ This algorithms assumes that the data property of a node must be called 'data', the left node 'left' and the right node 'right'. Also, it returns an array of the data on the order that the function goes on the tree ⚠
* dfsPreorder(rootNode) O(b^d)
* dfsInorder(rootNode) O(b^d)
* dfsPostorder(rootNode) O(b^d)
* breadthFirstSearch(rootNode) O(b^d)

## Please if you trouble some error or you have a recomendation for some of the algorithms open an issue on github, this helps me to improve the algorithms and learn about it.
