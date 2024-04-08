const reverseSeq = n => {
    let x = [];
    for(i = n; i > 0; i--) {
      x.push(i)
    }
    return x;
  };

reverseSeq(5)