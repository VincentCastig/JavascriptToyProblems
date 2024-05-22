//Write a function which calculates the average of the numbers in a given list.


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // To handle empty array case
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;
    return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const avg = calculateAverage(numbers);
console.log(`The average is: ${avg}`);