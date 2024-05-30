//Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
Math.roundTo = function (number, precision) {
    //toFixed() method formats a number using fixed-point notation
    //parseFloat() function parses an argument and returns a floating point number.
    return parseFloat(number.toFixed(precision));
}
  
Math.roundTo(3.123, 4)