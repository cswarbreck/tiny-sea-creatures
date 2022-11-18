// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
export function duplicateEncode(word) {
    const wordArray = word.toLowerCase();
    let newMap = new map, {};
    // let map = {};
    let result = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (map[wordArray[i]]) {
            map[wordArray[i]]++;
        }
        else {
            map[wordArray[i]] = 1;
        }
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (map[wordArray[i]] > 1) {
            result.push(')');
        }
        else {
            result.push('(');
        }
    }
    return result;
}
let test = 'Success';
console.log(duplicateEncode(test));
