// arrayManipulation.js

/**
 * Function to process an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - New array with each even number squared and each odd number tripled
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

/**
 * Function to format array strings based on processed numbers
 * @param {string[]} strArr - Array of strings
 * @param {number[]} numArr - Array of numbers processed by processArray
 * @returns {string[]} - Modified array of strings
 */
function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Exporting the functions for use in other modules
module.exports = { processArray, formatArrayStrings };
