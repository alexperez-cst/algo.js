const algo = require('./index.js')
console.log('hey')
describe('Search', () => {
	it('should return 6',() => {
		expect(algo.binarySearch([4,7,9,12,34,56,76],76)).toEqual(6);
	})
	it('should return -1',() => {
		expect(algo.binarySearch([1,7,9,11,14,16,34,37,46],49)).toEqual(-1);
	})
});
describe('Sort',() => {
	it('bubble: should return [1,2,2,3,4,5,6,7,8,9]', () => {
		expect(algo.bubbleSort([3,5,4,1,2,2,6,7,9,8])).toEqual([1,2,2,3,4,5,6,7,8,9]);
	});
	it('bubble: should return []', () => {
		expect(algo.bubbleSort([])).toEqual([]);
	});
	it('insertion: should return [1,2,2,3,4,5,6,7,8,9]', () => {
		expect(algo.insertionSort([3,5,4,1,2,2,6,7,9,8])).toEqual([1,2,2,3,4,5,6,7,8,9]);
	});
	it('insertion: should return []', () => {
		expect(algo.insertionSort([])).toEqual([]);
	});
	it('selection: should return [1,2,2,3,4,5,6,7,8,9]', () => {
		expect(algo.selectionSort([3,5,4,1,2,2,6,7,9,8])).toEqual([1,2,2,3,4,5,6,7,8,9]);
	});
	it('selection: should return []', () => {
		expect(algo.selectionSort([])).toEqual([]);
	});
	it('merge: should return [1,2,2,3,4,5,6,7,8,9]', () => {
		expect(algo.mergeSort([3,5,4,1,2,2,6,7,9,8])).toEqual([1,2,2,3,4,5,6,7,8,9]);
	});
	it('merge: should return []', () => {
		expect(algo.mergeSort([])).toEqual([]);
	});
	it('quick: should return [1,2,2,3,4,5,6,7,8,9]', () => {
		expect(algo.quickSort([3,5,4,1,2,2,6,7,9,8])).toEqual([1,2,2,3,4,5,6,7,8,9]);
	});
	it('quick: should return []', () => {
		expect(algo.quickSort([])).toEqual([]);
	});
})