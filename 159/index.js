/*
Given a string, return the first recurring character in it, or null if there is no recurring character.
For example, given the string "acbbac", return "b". Given the string "abcdef", return null.
*/

const firstRepeating = (string)=> {
  const len = string.length;
  const set = new Set();
  
  for( let i = 0; i < len; i++ ){
    const char = string[i];
    if( set.has(char) ) return char;
    set.add(char);
  }

  return null;
}

const string = 'acbdbac';
console.log(firstRepeating(string));

