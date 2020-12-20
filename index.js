function binarySearch(arr,value,startIndex = 0,finishIndex = arr.length) {
	if (finishIndex<startIndex) return -1;
	const midPoint = Math.floor((startIndex+finishIndex) / 2);
	if (arr[midPoint] === value) return midPoint;
	if (arr[midPoint] > value){
		return binarySearch(arr, value, startIndex, midPoint-1);
	}
	return binarySearch(arr, value, midPoint + 1, finishIndex);
}

function bubbleSort(arr) {
	if(arr.length === 0) return arr;
	const arrCopy = [...arr];
	let swapped = false;
	for(let lastSortedIndex = arrCopy.length - 1; lastSortedIndex !== 0; lastSortedIndex--) {
		for (let i = 0; i < lastSortedIndex; i++) {
			if (arrCopy[i] > arrCopy[i + 1]) {
				[arrCopy[i], arrCopy[i + 1]] = [arrCopy[i + 1], arrCopy[i]];
				swapped = true;
			}
		}
		if (swapped === false) return;
	}
	return arrCopy;
}
function insSort(arr, indexNotSorted, indexToChange) {
	const copy = arr[indexNotSorted];
	arr.splice(indexNotSorted, 1);
	arr.splice(indexToChange, 0, copy);
}
function insertionSort(arr) {
	if(arr.length === 0) return arr;
	const arrCopy = [...arr];
	sorting:for(let lastSortedIndex =0; lastSortedIndex !== arrCopy.length - 1;lastSortedIndex++) {
		const elementNotSorted = arrCopy[lastSortedIndex + 1];
		if (elementNotSorted < arrCopy[lastSortedIndex]){
			for (let i = lastSortedIndex; i >= 0; i--) {
				if (elementNotSorted > arrCopy[i]) {
					insSort(arrCopy, lastSortedIndex + 1, i + 1);
					continue sorting;
				}
			}
			insSort(arrCopy,lastSortedIndex + 1,0)
		}
	}
	return arrCopy;
}
function selectionSort(arr){
	if(arr.length === 0) return arr;
	const arrCopy = [...arr];
	for(let firstMin = 0; firstMin !== arrCopy.length - 1;firstMin++){
		let min = firstMin;
		for(let i = firstMin + 1; i < arrCopy.length; i++){
			if(arrCopy[i] < arrCopy[min]) min = i;
		}
		if(min !== firstMin){
			[arrCopy[firstMin],arrCopy[min]] = [arrCopy[min],arrCopy[firstMin]];
		}
	}
	return arrCopy;
}
function mergeArrays(first, second){
	let newArr = [];
	while(first.length && second.length){
		if(first[0] < second[0]){
			newArr.push(first.shift());
		}else{
			newArr.push(second.shift());
		}
	}
	return newArr.concat(...first,...second);
}
function mergeSort(arr){
	if(arr.length <= 1) return arr;
	const arrCopy = [...arr];
	const middle = Math.floor(arr.length /2);
	return mergeArrays(mergeSort(arrCopy.slice(0,middle)),mergeSort(arrCopy.slice(middle)))
}
function quickSort(arr){
	if(arr.length <= 1) return arr;
	const arrCopy = [...arr]
	const pivot = arrCopy.pop();
	const leftOfPiv = [];
	const rightOfPiv = [];
	arrCopy.forEach(val => val<=pivot?leftOfPiv.push(val):rightOfPiv.push(val))
	return [].concat(...quickSort(leftOfPiv),pivot,...quickSort(rightOfPiv));
}
module.exports = {
	binarySearch,
	bubbleSort,
	insertionSort,
	selectionSort,
	mergeSort,
	quickSort,
}