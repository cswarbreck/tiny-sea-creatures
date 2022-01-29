"use strict";
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
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
exports.orderWeight = void 0;
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
// 180 is before 90 since, having the same "weight" (9), it comes before as a string.
// All numbers in the list are positive numbers and the list can be empty.
//Elegant Solution
// function sumOfParts(num: string): number {
//     return num.split('').reduce((a, b) => a + +b, 0)
// } 
// export function orderWeight(str: any): string {
//     return str
//         .split(' ')
//         .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
//         .join(' ');
// }
//Inelegant Solution
function orderWeight(str) {
    var obj;
    if (str) {
        str.split(" ").forEach(function (el) {
            var total = el
                .split("")
                .map(Number)
                .reduce(function (a, b) {
                return a + b;
            });
            !obj[total] ? (obj[total] = [el]) : obj[total].push(el);
        });
    }
    var orderedObj = {};
    Object.keys(obj)
        .sort()
        .forEach(function (key) {
        orderedObj[key] = obj[key];
    });
    var finalArr = [];
    Object.keys(orderedObj).forEach(function (key) {
        orderedObj[key].length > 1
            ? (finalArr = __spreadArray(__spreadArray([], finalArr, true), orderedObj[key].sort(), true))
            : finalArr.push(orderedObj[key][0]);
    });
    return finalArr.join(" ");
}
exports.orderWeight = orderWeight;
console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
