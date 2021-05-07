/*
  Given an array and a number K that is smaller than the
  length of the array, rotate the array to the right, K
  elements in place.
*/

const rotate = (arr,k) => {
  const len = arr.length - 1;
  let i = len;

  while( i > k ) {
    arr.unshift(arr[len]);
    arr.pop()
    i -= 1;
  }

  return arr;
};

let arr = [3,5,9,2,7,1,3,5,4]
let k = 3

console.log(rotate(arr, k)); 
