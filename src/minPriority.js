class PriorityVal {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}
module.exports = class PriorityQueue {
	constructor() {
		this.queue = [];
		this.length = 0;
	}
	nodeParent(index) {
		return ~~((index - 1) / 2);
	}
	left(index) {
		return (2 * index) + 1;
	}
	right(index) {
		return (2 * index) + 2;
	}
	enqueue(value, priority) {
		const queue = this.queue;
		this.length++;
		const newVal = new PriorityVal(value, priority);
		this.queue.push(newVal);
		if(this.length === 1) return;
		for (let actualIn = this.length - 1; ; ) {
			const actualParent = this.nodeParent(actualIn);
			if (queue[actualParent].priority > queue[actualIn].priority) {
				[queue[actualParent], queue[actualIn]] = [
					queue[actualIn],
					queue[actualParent],
				];
				actualIn = actualParent;
				continue;
			}
			break;
		}
	}
	min(left, right) {
		return this.queue[left].priority < this.queue[right].priority
			? left
			: right;
	}
	dequeue() {
		this.length--;
		const copy = this.queue[0]
		const deleted = this.queue.pop();
		if(this.length){
			this.queue[0] = deleted;
			this.heapify(0);
		}
		return copy;
	}
	heapify(actualIn) {
		const queue = this.queue;
		while (true) {
			const left = this.left(actualIn);
			const right = this.right(actualIn);
			let min;
			if(this.queue[left]&&this.queue[right]){
				min = this.min(left, right);
			}else if(!this.queue[left] && !this.queue[right]){
				return;
			}else{
				min = queue[left]?left:right;
			}
			if (queue[min].priority < queue[actualIn].priority) {
				[queue[actualIn], queue[min]] = [queue[min], queue[actualIn]];
				actualIn = min;
				continue;
			}
			break;
		}
	}
	changePriority(value, priority) {
		const queue = this.queue;
		let actualIn = queue.findIndex(val => val.value === value);
		queue[actualIn].priority = priority;
		while(true){
			const parent = this.nodeParent(actualIn);
			if(queue[parent].priority > queue[actualIn].priority){
				[queue[parent],queue[actualIn]]=[queue[actualIn],queue[parent]];
				actualIn = parent;
				continue;
			}
			break;
		}
	}
}
