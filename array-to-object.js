// !IMPORTANT! HOW TO CREATE AN OBJECT FROM AN ARRAY
// AND HOW TO ITERATE OVER SAID OBJECT (FOR...IN){}
var findOdd = function (arr) {
    var count = {};
    for (var i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        }
        else {
            count[arr[i]] = 1;
        }
    }
    for (var num in count) {
        if (count[num] % 2 === 1) {
            return num;
        }
    }
};
var myArr = [1, 3, 1, -2, 8, -6, -6, -2, 7, 6, 3, 8, 7, 6, 3];
console.log(findOdd(myArr));
