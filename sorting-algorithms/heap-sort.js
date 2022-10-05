var HeapSort = /** @class */ (function () {
    function HeapSort() {
    }
    HeapSort.prototype.sort = function (arr) {
        var size = arr.length;
        for (var i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(arr, size, i);
        }
        var j = size - 1;
        while (j >= 1) {
            this.swap(arr, 0, j);
            this.heapify(arr, j, 0);
            j--;
        }
    };
    HeapSort.prototype.heapify = function (arr, size, i) {
        var largest = i;
        var leftLeaf = 2 * i + 1;
        var rightLeaf = 2 * i + 2;
        // If the left child is larger than the current largest.
        if (leftLeaf < size && arr[leftLeaf] > arr[largest]) {
            largest = leftLeaf;
        }
        // If the right child is larger than the current largest.
        if (rightLeaf < size && arr[rightLeaf] > arr[largest]) {
            largest = rightLeaf;
        }
        // If the largest of the two is not the original largest
        if (largest != i) {
            // Swap i and the largest.
            this.swap(arr, i, largest);
            // Heapify the sub-tree. 
            this.heapify(arr, size, largest);
        }
    };
    HeapSort.prototype.swap = function (arr, a, b) {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    };
    return HeapSort;
}());
