/*
You have a large array with most of the elements as zero.
Use a more space-efficient data structure, SparseArray, that implements the same interface:

init(arr, size): initialize with the original large array and size.

set(i, val): updates index at i with val.

get(i): gets the value at index i.
*/

class SparseArray {
  construnctor() {
    this.arr = [];
    this.size = null;
  }

  init(arr, size) {
    this.arr = arr;
    this.size = size;
  }

  set(i, val) {
    this.arr[i] = val;
  }

  get(i) {
    return this.arr[i];
  }
}