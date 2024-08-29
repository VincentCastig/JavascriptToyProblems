function arrayPacking(a) {
    return a.reduce((acc, num, index) => acc + (num << (8 * index)), 0);
}

// Example usage:
console.log(arrayPacking([24, 85, 0])); 
console.log(arrayPacking([0, 0, 0, 255]));  
