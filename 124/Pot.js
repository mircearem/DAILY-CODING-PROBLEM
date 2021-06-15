class Coin {
  #heads = false;
  #tails = false;
  constructor() {
    const random = Math.random();
    if (random > 0.5) {
      this.#heads = true;
      this.#tails = false;
    } else {
      this.#heads = false;
      this.#tails = true;
    }
  }

  flip() {
    const random = Math.random();
    if (random > 0.5) {
      this.#heads = true;
      this.#tails = false;
    } else {
      this.#heads = false;
      this.#tails = true;
    }
  }

  side(){
    if (this.#heads) return 'heads';
    return 'tails';
  }
};

class Pot {
  #coins = [];

  #remove(index) {
    this.#coins.splice(index, 1);
  }

  constructor(coins) {
    for ( let i = 0; i < coins; i++ ) {
      const coin = new Coin();
      this.#coins.push(coin);
    }
  }

  flip() {
    this.#coins.forEach((coin) => { coin.flip(); });
  }

  check() {
    this.#coins.forEach((coin, index) => {
      if ( coin.side() == 'tails' ) {
        this.#remove(index);
      }
    });
  }

  length() {
    return this.#coins.length;
  }
};

module.exports = {
  Pot
};