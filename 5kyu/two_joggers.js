// Task

// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

var nbrOfLaps = function (x, y) {
    const z = x;
    
    x = x * y / x;
    y = z * y / y;
    
    for (i = z; i > 1; i--) {
      if(x / i % 1 == 0 && y / i % 1 == 0 ) {
        x = x / i 
        y = y / i 
        i = 1;
      }
    }
    return [x, y];
  }