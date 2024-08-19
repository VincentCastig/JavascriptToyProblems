function goodVsEvil(good, evil) {
    // Worth values for each race
    const goodWorth = [1, 2, 3, 3, 4, 10]; 
    const evilWorth = [1, 2, 2, 2, 3, 5, 10];

    // Parse the input strings into arrays of counts
    const goodCounts = good.split(' ').map(Number);
    const evilCounts = evil.split(' ').map(Number);

    // Calculate the total worth for good and evil
    const goodTotal = goodCounts.reduce((sum, count, index) => sum + count * goodWorth[index], 0);
    const evilTotal = evilCounts.reduce((sum, count, index) => sum + count * evilWorth[index], 0);

    // Determine the result
    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (evilTotal > goodTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}

// Example Usage
console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
