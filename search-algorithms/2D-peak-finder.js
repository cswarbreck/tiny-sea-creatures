"use strict";
exports.__esModule = true;
exports.findPeak = void 0;
// /**
//  *
//  *
//  * @export
//  * @param {number[]} array
//  * @return {(number | null)}
//  */
function findPeak(array) {
    // There is no peak in a nullable or undefined array
    if (!array) {
        return null;
    }
    // There is no peak in an empty array
    if (array.length == 0) {
        return null;
    }
    // Use a 1d version of findPeak for an array with a single element
    if (array.length == 1) {
        return array[0][0];
    }
    // Get a number of columns
    var len = array[0].length;
    // Get a middle column index
    var j = Math.floor(len / 2);
    // Get column values
    var column = array.map(function (arr) { return arr[j]; });
    // Get an index of max value on column
    var i = column.indexOf(Math.max.apply(Math, column));
    // The current element is a peak if it's:
    //  - greater or equal than the neighbors
    //  - a max in a single column array
    var current = array[i][j];
    var left = array[i][j - 1] || current;
    var right = array[i][j + 1] || current;
    if (current >= left && current >= right) {
        return current;
    }
    if (current < left) {
        return findPeak(array.map(function (arr) { return arr.slice(0, j); }));
    }
    if (current < right) {
        return findPeak(array.map(function (arr) { return arr.slice(j, len); }));
    }
    return null;
}
exports.findPeak = findPeak;
// console.log(findPeak([[1,34],[2,1],[56,7]]));
console.log(findPeak([[1, 34]]));
