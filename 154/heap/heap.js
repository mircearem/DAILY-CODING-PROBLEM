class Heap{
  constructor(){
    this.data = [];
    this.indexes = [];
  };

  // HELPER METHODS 
  getParentIndex(index){
    return Math.floor((index - 1)/2);
  }

  getLeftChildIndex(index){
    return index * 2 + 1;
  }

  getRightChildIndex(index){
    return index * 2 + 2;
  }

  swap(index1, index2){
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  push(key){
    this.data.push(key);
    this.heapifyUp();
    console.log(this.data.indexOf(key));
    this.indexes.push(this.data.indexOf(key));
  };

  heapifyUp(){
    let currentIndex = this.data.length - 1;
    while( this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)] ){
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(){
    let currentIndex = 0;
    while( this.data[this.getLeftChildIndex(currentIndex)] ){
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);
      if( this.data[this.getRightChildIndex(currentIndex)] ){
        if ( this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {
          biggestChildIndex = this.getRightChildIndex(currentIndex);
        } 
      }
      if (this.data[currentIndex] < this.data[biggestChildIndex]){
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggesChildIndex;
      } else break;
    }
  }

  pop(){
    try{
      if (this.len == 0 || this.lastIndex == null) throw "Cannot use method pop"
      else {
        const result = this.data.splice(this.lastIndex,1) 
        this.heapifyDown();
        this.lastIndex = null;
        return result; 
      };
    }catch(err){
      return err;
    }
  }

  get(){
    return this.heap;
  }
}

module.exports = Heap; // must add stack for 