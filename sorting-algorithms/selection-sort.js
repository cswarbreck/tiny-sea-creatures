var selectionSort = function (arr) {
    var _a;
    var len = arr.length;
    var minInd = -1;
    for (var i = 0; i < (len - 1); i++) {
        minInd = i;
        for (var j = (i + 1); j < len; j++) {
            if (arr[j] < arr[minInd]) {
                minInd = j;
            }
        }
        if (minInd !== i) {
            _a = [arr[minInd], arr[i]], arr[i] = _a[0], arr[minInd] = _a[1];
        }
    }
    return arr;
};
var result = selectionSort([64, 25, 12, 22, 11]);
