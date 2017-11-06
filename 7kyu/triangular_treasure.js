//Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
//Return the nth triangular number
function triangular( n ) {
    var counter = 0;
    for(i = 1; i <= n; i++){
      counter += 1;
      for(j = 1; j < i; j++){
        counter += 1
        }
      }
      return counter;
    }