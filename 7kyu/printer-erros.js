//You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator is the length of the control string. Don't reduce this fraction to a simpler expression.

function printerError(s) {
    var x = 0;

    s = s.split('')
    s.forEach(function(val){
        if(val.match(/[a-m]/gi) === null){
          x += 1;
        }
    })
    x = x + "/" + s.length
    
    return x;
}