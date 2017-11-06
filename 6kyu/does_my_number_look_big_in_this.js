function narcissistic( y ) {
    y = y.toString()
    var x = 0;
    for(i = 0; i < y.length; i++) {
      x += Math.pow(y[i], y.length)
    }
    
    return x == y;
  }