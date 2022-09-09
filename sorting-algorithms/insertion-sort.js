var insertionSort = function (arr) {
    var _a;
    //Start from the second element.
    for (var i = 1; i < arr.length; i++) {
        //Go through the elements behind it.
        for (var j = i - 1; j > -1; j--) {
            //value comparison using ascending order.
            if (arr[j + 1] < arr[j]) {
                //swap
                _a = [arr[j], arr[j + 1]], arr[j + 1] = _a[0], arr[j] = _a[1];
            }
        }
    }
    ;
    return arr;
};
console.log(insertionSort([23, 1, 10, 5, 2]));
