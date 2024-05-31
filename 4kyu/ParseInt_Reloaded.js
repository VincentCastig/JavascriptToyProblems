// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

function parseIntFromString(str) {
    const units = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
        "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16,
        "seventeen": 17, "eighteen": 18, "nineteen": 19
    };

    const tens = {
        "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
    };

    const scales = {
        "hundred": 100, "thousand": 1000, "million": 1000000
    };

    const words = str.replace(/ and /g, " ").split(/[\s-]+/);
    let total = 0;
    let current = 0;

    for (let word of words) {
        if (units[word] !== undefined) {
            current += units[word];
        } else if (tens[word] !== undefined) {
            current += tens[word];
        } else if (scales[word] !== undefined) {
            if (word === "hundred") {
                current *= scales[word];
            } else {
                current *= scales[word];
                total += current;
                current = 0;
            }
        }
    }

    return total + current;
}

// Example usage:
console.log(parseIntFromString("one")); // 1
console.log(parseIntFromString("twenty")); // 20
console.log(parseIntFromString("two hundred forty-six")); // 246
console.log(parseIntFromString("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
