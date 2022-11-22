// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// !IMPORTANT! HOW TO CREATE AN OBJECT FROM AN ARRAY
// AND HOW TO ITERATE OVER SAID OBJECT (FOR...IN){}
let findOdd = (arr) => {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] ? count[arr[i]]++ : count[arr[i]];
    }
    for (let num in count) {
        if (count[num] % 2 === 1) {
            return num;
        }
    }
};
let myArr = [1, 3, 1, -2, 8, -6, -6, -2, 7, 6, 3, 8, 7, 6, 3];
console.log(findOdd(myArr));
