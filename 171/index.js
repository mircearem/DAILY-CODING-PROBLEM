/*
You are given a list of data entries that represent entries and exits of groups of people into a building. 

An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}
This means 3 people entered the building. 

An exit looks like this:
{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. Timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. 
Return it as a pair of (start, end) timestamps. 
You can assume the building always starts off and ends up empty, i.e. with 0 people inside.
*/

const busiest = function(array){
  array = array.sort((a, b) => a.timestamp - b.timestamp);
  const len = array.length - 1;

  for (let i = 0; i < len; i++ ){
    if ( array[i].type == 'exit' ){
      array[i].count = -array[i].count;
    }
  } 

  this.interval = {
    start: array[0].timestamp
  };

  this._occupancy = array[0].count;

  for ( let i = 1; i < len - 1; i++ ){
    for( let j = i + 1; j < len; j++ ){
      const occupancy = this._occupancy + array[j].count;
      if (occupancy > this._occupancy){
        this._occupancy = occupancy;
        this.interval.start = array[i].timestamp;
        this.interval.end = array[j].timestamp;
        this.interval.occupancy = this._occupancy;
      } 
    }
  }

  return this.interval;
}


const intervals = [
  {
    timestamp: 1619601300,
    count: 3,
    type: 'enter'
  },
  {    
    timestamp: 1619602200,
    count: 2,
    type: 'exit'
  },
  {    
    timestamp: 1619602500,
    count: 1,
    type: 'enter'
  },
  {
    timestamp: 1619603700,
    count: 2,
    type: 'enter'
  },
  {
    timestamp: 1619603700,
    count: 1,
    type: 'exit'
  }
]

console.log(busiest(intervals));