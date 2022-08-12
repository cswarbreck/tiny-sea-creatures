"use strict";
exports.__esModule = true;
exports.quickSort = void 0;
function quickSort(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    if (start < end) {
        var p = partition(arr, start, end);
        quickSort(arr, start, p - 1);
        quickSort(arr, p + 1, end);
    }
    return arr;
}
exports.quickSort = quickSort;
function partition(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function swap(arr, startIndex, finishIndex) {
    var temp = arr[startIndex];
    arr[startIndex] = arr[finishIndex];
    arr[finishIndex] = temp;
}
var items = [5, 3, 7, 6, 2, 9, 12, 64, 23, 12, 43, 25, 78, 12,];
var sortedArray = quickSort(items, 0, items.length);
console.log(sortedArray);
