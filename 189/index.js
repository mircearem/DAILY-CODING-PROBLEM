/*
Given an array of elements, return the length of the longest 
subarray where all its elements are distinct.
For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 
as the longest subarray of distinct elements is [5, 2, 3, 4, 1].
*/

const longestDistinct = (array) => {
  let distinct = 1;
  let mem = array[0];

  for( let i = 1; i < array.length; i++ ){
    if ( array[i] != array[i-1] && array[i] != mem ){
      distinct += 1;
    }else{
      distinct = 1;
      mem = array[i];
    }
  }

  return distinct;
}

const array = [5, 1, 3, 5, 2, 3, 4, 1];
console.log(longestDistinct(array));