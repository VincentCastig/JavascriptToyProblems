function parseF(s) {
  if(parseFloat(s) === 0) {
    return 0
    }
  return parseFloat(s) || null;
}