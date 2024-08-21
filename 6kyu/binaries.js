// Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be able to decode it.

// To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

// Coding process to code a number n expressed in base 10:
// For each digit d of n

// a) Let k be the number of bits of d

// b) Write k-1 times the digit 0 followed by the digit 1

// c) Write digit d as a binary string, with the rightmost bit being the least significant

// d) Concat the result of b) and c) to get the coding of d

// At last concatenate all the results got for the digits of n.

// An example
// So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

// With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

// Task:
// Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

// Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

function code(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let digit = parseInt(str[i]);
        let binaryDigit = digit.str(2);
        let prefix = '0'.repeat(binaryDigit.length - 1) + '1';

        result += prefix + binaryDigit;
    }

    return result;
}

function decode(strng) {
    let i = 0;
    let result = '';

    while (i < strng.length) {
        let countZeros = 0;

        // Count the number of leading zeros
        while (strng[i] === '0') {
            countZeros++;
            i++;
        }

        // Move past the '1' after zeros
        i++;

        // Extract the binary number of the length based on the number of leading zeros plus 1
        let binaryDigit = strng.slice(i, i + countZeros + 1);

        // Convert binary back to a decimal digit
        let digit = parseInt(binaryDigit, 2);
        result += digit.toString();

        // Move the pointer ahead by the length of the binary digit
        i += countZeros + 1;
    }

    return result;
}


console.log(code("77338855")); // Output: "001111001111011101110001100000011000001101001101"
console.log(decode("001111001111011101110001100000011000001101001101")); // Output: "77338855"

