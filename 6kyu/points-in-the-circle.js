function pointsNumber(radius) {
    let count = 0;

    for (let x = -radius; x <= radius; x++) {
        let maxY = Math.floor(Math.sqrt(radius * radius - x * x));
        count += (2 * maxY + 1);
    }

    return count;
}

// Example usage:
console.log(pointsNumber(2));  // Output: 13