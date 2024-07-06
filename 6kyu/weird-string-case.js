function toWeirdCase(string) {
    return string
        .split(' ') // Split the string into words
        .map(word => {
            return word
                .split('') // Split the word into characters
                .map((char, index) => {
                    // Uppercase for even index, lowercase for odd index
                    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
                })
                .join(''); // Join the characters back into a word
        })
        .join(' '); // Join the words back into a single string
}

// Example usage:
console.log(toWeirdCase("Weird string case")); // Output: "WeIrD StRiNg CaSe"
