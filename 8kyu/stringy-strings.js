function stringy(size) {
    let str = '';
    for (i = 1; i < size + 1; i++) {
      str += i % 2;
    }
    return str;
  }