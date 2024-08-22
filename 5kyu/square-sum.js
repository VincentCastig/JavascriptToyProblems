// Square sums
// Write function square_sums_row ( or squareSumsRow or SquareSumsRow ) that, given integer number N (in range 2..43), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.

// Solution is valid if and only if following two criterias are met:

// Each number in range 1..N is used once and only once.
// Sum of each 2 consecutive numbers is a perfect square.
// Example
// For N=15 solution could look like this:

// [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]

// Verification
// All numbers are used once and only once. When sorted in ascending order array looks like this:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

// Sum of each 2 consecutive numbers is a perfect square:
//    16    16     16     16     16     16     16
//    /+\   /+\    /+\    /+\    /+\    /+\    /+\
// [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
//       \+/    \+/    \+/    \+/    \+/    \+/    \+/
//        9     25      9     25      9     25      9

//  9 = 3*3
// 16 = 4*4
// 25 = 5*5
// If there is no solution, return false ( None in Scala, Nothing in Haskell ). For example if N=5, then numbers 1,2,3,4,5 cannot be put into square sums row: 1+3=4, 4+5=9, but 2 has no pairs and cannot link [1,3] and [4,5].


function square_sums_row(N) {
    // Check if a number is a perfect square
    const isPerfectSquare = (num) => Number.isInteger(Math.sqrt(num));

    // Helper function for generating the square sums row using backtracking
    const generateRow = (path, remaining) => {
        if (remaining.length === 0) {
            return path;
        }
        for (let i = 0; i < remaining.length; i++) {
            if (path.length === 0 || isPerfectSquare(path[path.length - 1] + remaining[i])) {
                const newPath = path.concat(remaining[i]);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                const result = generateRow(newPath, newRemaining);
                if (result) return result;
            }
        }
        return null;
    };

    // Start generating the row with an empty path and all numbers in the range
    const result = generateRow([], [...Array(N).keys()].map(x => x + 1));
    return result ? result : false;
}

console.log(square_sums_row(15));