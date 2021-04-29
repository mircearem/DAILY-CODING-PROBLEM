/*
Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 
1111 0000 1111 0000 1111 0000 1111 0000, return
0000 1111 0000 1111 0000 1111 0000 1111
*/

const reverseBits = (number) => {
  let buffer = [];
  for (let i = 0; i < 32; i++ ){
    buffer.push((number >> i) & 1);
    buffer[i] = Number(!buffer[i]);
  }
  return buffer;
}

console.log(reverseBits(3294967295));