"use strict";
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
exports.__esModule = true;
exports.arrayDiff = void 0;
// It should remove ALL values from list a (INCLUDING DUPLICATES), which are present in list b keeping their order.
// expect(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
// expect(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
// expect(arrayDiff([1, 8, 2], [])).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
// expect(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');
function arrayDiff(a, b) {
    var _loop_1 = function (i) {
        if (a.indexOf(b[i]) !== -1) {
            a = a.filter(function (el) {
                return el !== b[i];
            });
        }
    };
    for (var i = 0; i < b.length; i++) {
        _loop_1(i);
    }
    return a;
}
exports.arrayDiff = arrayDiff;
var arr1 = [60, 85, 28, 75, 46, 84, 89, 95, 29, 45, 61, 41, 77, 74, 37, 23, 62, 75, 80, 29, 28, 18, 31, 30, 92, 24, 70, 17, 24, 42, 16, 39];
var arr2 = [95, 56, 50, 8, 44, 60];
console.log(arrayDiff(arr1, arr2));
