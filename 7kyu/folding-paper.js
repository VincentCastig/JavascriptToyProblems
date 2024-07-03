function folding(a, b) {
    let count = 0;
    
    while (a > 0 && b > 0) {
        count += Math.floor(a / b);
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return count;
}

// Example usage:
console.log(folding(2, 1)); // Output: 2
console.log(folding(10, 7)); // Output: 6
