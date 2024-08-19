function getMiddle(s) {
    const length = s.length;
    const middleIndex = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        // Even length: return two middle characters
        return s[middleIndex - 1] + s[middleIndex];
    } else {
        // Odd length: return the middle character
        return s[middleIndex];
    }
}

// Test cases
console.log(getMiddle("test"));    // Output: "es"