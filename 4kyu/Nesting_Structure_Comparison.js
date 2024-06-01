// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

Array.prototype.sameStructureAs = function (other) {
    // Helper function to check if both items are arrays
    const isArray = (item) => Array.isArray(item);

    // Function to recursively compare structures
    const compareStructure = (arr1, arr2) => {
        // If both are arrays
        if (isArray(arr1) && isArray(arr2)) {
            // If they have different lengths, structures don't match
            if (arr1.length !== arr2.length) return false;
            // Compare each corresponding element
            for (let i = 0; i < arr1.length; i++) {
                if (!compareStructure(arr1[i], arr2[i])) return false;
            }
            return true;
        }
        // If one is array and other is not, structures don't match
        return !isArray(arr1) && !isArray(arr2);
    };

    // Initial call to the recursive function
    return compareStructure(this, other);
};

// Example usage:
console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); // true
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])); // false
console.log([1, [1, 1]].sameStructureAs([[2], 2])); // false
console.log([[[ ], [ ]]].sameStructureAs([[[ ], [ ]]])); // true
console.log([[[ ], [ ]]].sameStructureAs([[1, 1]])); // false