/*
You have n fair coins and you flip them all at the same time. 
Any that come up tails you set aside. The ones that come up heads you flip again. 
How many rounds do you expect to play before only one coin remains?

Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.
*/

const { Pot } = require('./Pot.js');

const number = 15;

const pot = new Pot(number);

function numberOfRounds(pot, round = 0) {
  this.round = round;

  if ( pot.length() > 1 ) {
    this.round += 1;
    pot.check();
    pot.flip();
    numberOfRounds(pot, this.round);
  }

  return this.round;
}

console.log(numberOfRounds(pot));

