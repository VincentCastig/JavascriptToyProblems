var x = 'hey four seven'

function reverse(y) {
  y = y.split(' ')
  x = [];
  for(words of y) {
    if (words.length >= 5) {
      words = words.split('').reverse().join('');
    }
    x.push(words)
  }
  return x;
}

reverse(x)