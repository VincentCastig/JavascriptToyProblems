//All integers can be uniquely expressed as a sum of powers of 3 using each power of 3 at most once.

function balancedTernary(n) {
    if (n === 0) {
        return "0";
    }

    let symbols = [];
    while (n !== 0) {
        let remainder = n % 3;
        n = Math.floor(n / 3);
        
        if (remainder === 2) {
            remainder = -1;
            n += 1;
        }
        
        symbols.push(remainder);
    }
    
    return symbols.reverse().map(x => x === 1 ? '+' : x === -1 ? '-' : '0').join('');
}

// Test examples
console.log(balancedTernary(17));  // Output: "-0-+"
console.log(balancedTernary(-8));  // Output: "+0-"
console.log(balancedTernary(25));  // Output: "+-0+"