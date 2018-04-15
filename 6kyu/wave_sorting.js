function waveSort(arr){
    let temp = 0;
    //sort array in descending order
    arr = arr.sort( (a,b) => {
      return b - a;
    })
    
    for(let i = 1; i < arr.length - 1; i += 2){
      if(arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
      }
    }
  }