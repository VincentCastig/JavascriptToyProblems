function avgArray(arr) {
    let num = 0;
    let newArray = [];
    
    for(i = 0; i < arr[0].length; i++) {
      for(j = 0; j < arr.length; j++) {
        num += arr[j][i]
      }
     newArray.push(num / arr.length)
     num = 0
    }
    return newArray;
  }