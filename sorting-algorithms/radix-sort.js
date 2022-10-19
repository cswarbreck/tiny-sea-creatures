"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getDigit = exports.findMax = exports.sort = void 0;
/**
 * Sort an array with a radix sort algorithm
 *
 * @export
 * @param {number[]} array
 * @return {number[]}
 */
function sort(array) {
    // Result is null for a nullable or undefined array
    if (!array) {
        return null;
    }
    if (array.length <= 1) {
        return array;
    }
    var max = findMax(array);
    // Copy input array to output
    var output = __spreadArray([], array, true);
    // Do counting sort for every digit (10^i)
    for (var i = 1; i < max; i *= 10) {
        output = countingSort(output, i);
    }
    return output;
}
exports.sort = sort;
/**
 * Sort an array with a counting sort algorithm, which is based on digit
 *
 * @param {number[]} array
 * @param {number} digit
 * @return {number[]}
 */
function countingSort(array, digit) {
    var count = new Array(10).fill(0);
    // Count a number of occurences
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var el = array_1[_i];
        var key = getDigit(el, digit);
        count[key]++;
    }
    // Summarize pairs of elements
    for (var i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    var output = new Array(array.length).fill(0);
    // Iterate through input array by saving ordering
    for (var i = array.length - 1; i >= 0; i--) {
        // Insert input numbers to appropriate positions
        var key = getDigit(array[i], digit);
        output[count[key] - 1] = array[i];
        // Decrease a number position
        count[key]--;
    }
    return output;
}
/**
 * Get a max number of an array (e.g. [5, 3, 17] => 17)
 *
 * @export
 * @param {number[]} array
 * @return {number}
 */
function findMax(array) {
    return Math.max.apply(Math, array);
}
exports.findMax = findMax;
/**
 * Get a specific digit of a number (e.g. (13, 1) => 3)
 *
 * @export
 * @param {number} number
 * @param {number} n
 * @return {number}
 */
function getDigit(number, n) {
    return Math.floor((number / n) % 10);
}
exports.getDigit = getDigit;
