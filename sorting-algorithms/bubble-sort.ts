const bubbleSort = (arr: number[]): number[] => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

bubbleSort([5, 3, 1, 4, 6])