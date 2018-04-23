//Remove n exclamation marks in the sentence from left to right. n is positive integer.
function remove(s,n){
    s = s.split("");
    s = s.filter( (val, i) => {
      if(val === '!' && n > 0) {
        n--;
        return;
      }
      return val;
    })
    return s.join("");
  }
  
  remove("!!!Hi!!", 2);