const selectionSort = (arr: number[]): number[] => {
    const len: number = arr.length;
    let minInd: number = -1;
    for (let i = 0; i < (len - 1); i++) {
        minInd = i

        for (let j = (i + 1); j < len; j++) {
            if (arr[j] < arr[minInd]) {
                minInd = j
            }
        }

        if (minInd !== i) {
            [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
        }
    }
    return arr;
}

const result = selectionSort([64, 25, 12, 22, 11]);