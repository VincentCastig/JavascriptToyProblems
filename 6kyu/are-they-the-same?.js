function comp(array1, array2){
    //your code here
    if (!array1.length || !array2.length) {
      return false;
    }
    var x = array1.length;
    function compSame (array1, array2){
        for(i = 0; i < array2.length; i++){
          if(array1[array1.length-1] === Math.sqrt(array2[i])){
              array1.pop();
              array2.splice(i,1);
              //Start over
              compSame(array1, array2);
          }
        }
    }
    
    if(x == array1.length){
      compSame(array1, array2);
    }
    if(array1.length >= 1){
      return false;
    }
    return true;
  }