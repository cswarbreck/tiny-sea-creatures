"use strict";
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
exports.__esModule = true;
exports.duplicateEncode = void 0;
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function duplicateEncode(word) {
    var wordArray = word.toLowerCase();
    var newMap = new map, _a = void 0;
    // let map = {};
    var result = [];
    for (var i = 0; i < wordArray.length; i++) {
        if (map[wordArray[i]]) {
            map[wordArray[i]]++;
        }
        else {
            map[wordArray[i]] = 1;
        }
    }
    for (var i = 0; i < wordArray.length; i++) {
        if (map[wordArray[i]] > 1) {
            result.push(')');
        }
        else {
            result.push('(');
        }
    }
    return result;
}
exports.duplicateEncode = duplicateEncode;
var test = 'Success';
console.log(duplicateEncode(test));
