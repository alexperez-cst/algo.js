module.exports = function binarySearch(arr,value,IGNOREstartIndex = 0,IGNOREfinishIndex = arr.length) {
	if (IGNOREfinishIndex<IGNOREstartIndex) return -1;
	const midPoint = Math.floor((IGNOREstartIndex+IGNOREfinishIndex) / 2);
	if (arr[midPoint] === value) return midPoint;
	if (arr[midPoint] > value){
		return binarySearch(arr, value, IGNOREstartIndex, midPoint-1);
	}
	return binarySearch(arr, value, midPoint + 1, IGNOREfinishIndex);
}