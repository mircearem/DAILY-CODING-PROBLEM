// Heap's algorithm to get all possible permutations of array
const permute = (array, len = array.length, perms = []) => {
  const spread = [...array];
  if ( len == 1 ) perms.push(spread.slice());
  for(let i = 0; i < len; i += 1 ){
    permute(spread, len - 1, perms);
    if ( len % 2 == 0) [spread[i], spread[len - 1]] = [spread[len - 1], spread[i]];
    else [spread[0], spread[len - 1]] = [spread[len - 1], spread[0]];
  }

  return perms;
}

const palindrome = (input) => {
  const array = [...input];
  const perms = permute(array);
  const len = perms.length;

  for (let i = 0; i < len; i += 1){
    const perm = perms[i];
    const permJoin = perm.join('');
    const rev = perm.reverse();
    const revJoin = rev.join('');

    if( permJoin === revJoin) return true;
  }

  return false;
}

const input = 'daily';
console.log(palindrome(input));
