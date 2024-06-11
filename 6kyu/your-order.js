function order(words) {
    if (!words) return "";
    let wordsArray = words.split(' ');
    let correctOrder = [];
    
    for (let number = 1; number <= wordsArray.length; number++) {
      for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].includes(number.toString())) {
          correctOrder.push(wordsArray[i]);
          break; // Exit inner loop once the correct word is found
        }
      }
    }
    
    return correctOrder.join(' ');
  }