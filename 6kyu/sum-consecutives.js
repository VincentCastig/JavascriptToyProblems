//You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
function sumConsecutives(s) {
    var counter = 0;
      var y = [];
      var a = true;
      
      for (i = 0; i < s.length; i++) {
        if(a) {
          console.log(a)
          counter = s[i] 
        }
        if(s[i] === s[i + 1]) {
          counter += s[i]
          a = false
        }
        else {
          y.push(counter)
          a = true
        }
      }
      return y
    }