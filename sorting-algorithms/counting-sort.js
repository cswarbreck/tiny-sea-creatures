"use strict";
exports.__esModule = true;
exports.sort = void 0;
/**
 * Sort an array with a counting sort algorithm
 *
 * @export
 * @param {number[]} array
 * @param {number} k
 * @return {(number[] | null)}
 */
function sort(array, k) {
    if (k === void 0) { k = 255; }
    // Result is null for a nullable or undefined array
    if (!array) {
        return null;
    }
    if (array.length <= 1) {
        return array;
    }
    // Count a number of occurences:
    //  * array: [1, 2, 1, 4] =>
    //  * count: [2, 1, 0, 1]
    var count = new Array(k).fill(0);
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var el = array_1[_i];
        count[el] = (count[el] + 1) || 1;
    }
    // Summarize a current element with a previous:
    //  * count: [2, 1, 0, 1] =>
    //  * count: [2, 3, 3, 4]
    for (var i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    // Insert input numbers to appropriate positions
    //  * array: [1, 2, 1, 4]
    //  * count: [2, 3, 3, 4]
    //  * output: [0, 1, 0, 0] => [0, 1, 2, 0] => [1, 1, 2, 0] => [1, 1, 2, 4]
    var output = new Array(array.length).fill(0);
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var el = array_2[_a];
        output[count[el] - 1] = el;
        count[el] -= 1;
    }
    return output;
}
exports.sort = sort;
