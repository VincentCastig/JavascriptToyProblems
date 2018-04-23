// Complete the functionthat removes duplicates from a list of numbers.

// The order of the sequence needs to stay the same.

function distinct(a) {
    return a.filter( (val,index) => !a.includes(val, index + 1));
  }

  distinct([1,1,2,3,4,4])