/*
Determine whether there exists a one-to-one character mapping 
from one string s1 to another s2.For example, given s1 = abc and s2 = bcd, 
return true since we can map a to b, b to c, and c to d.
Given s1 = foo and s2 = bar, return false since the o cannot map 
to two characters.
*/

const mapping = function(string1, string2){
  if (string1.length != string2.length){
    return false;
  }
   
  const len = string1.length;
 
  for( let i = 0; i < len - 1; i++){
    for(let j = i + 1; j < len; j++ ){
      if ( string1[i] == string1[j] ){
        return false;
      }
    }
  }

  return true;
}

console.log(mapping('abc','bcd'));