
//The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
    counter = ""
    wordCopy = word.toLowerCase().split('')
    x = {}
    
    wordCopy.forEach( (val) => {
      x[val] = (x[val] || 0) + 1
    })
    
    wordCopy.forEach( (val, i) => {
      if(x[val] > 1) {
        wordCopy[i] = ")"
      }
      else{
        wordCopy[i] = "("
      }
    })
     
    return wordCopy.join('')
  }