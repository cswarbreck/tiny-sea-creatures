"use strict";
exports.__esModule = true;
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    if (n < 10) {
        return n;
    }
    else {
        var stringed = n.toString().split('');
        var resultArray_1 = [];
        stringed.forEach(function (el) { resultArray_1.push(parseInt(el)); });
        var result = resultArray_1.reduce(function (a, b) { return a + b; });
        return (0, exports.digitalRoot)(result);
    }
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(147));
