function positiveSum(arr) {
    arr = arr.filter(num => num >= 0);
    let x = 0;
    
    if(arr.length < 1) {
      return 0;
    }
    
    arr = arr.map( (val) => x += val);
    
    return arr[arr.length - 1];
}