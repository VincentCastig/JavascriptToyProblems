function spongeMeme(sentence) {
    var y = ""
    var x = true
    for(i = 0; i < sentence.length; i++){
          if(x === true){
            y += sentence[i].toUpperCase()
            x = false
          }
          else{
            y += sentence[i] = sentence[i].toLowerCase()
            x = true
          }
    }
    return y
}