const Heap = require('./heap/heap.js');

const heap = new Heap();

heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);
heap.push(10);

console.log(heap);  

// const last = heap.pop();

// console.log(last);
// console.log(heap);

// const secondLast = heap.pop();
// console.log(secondLast);