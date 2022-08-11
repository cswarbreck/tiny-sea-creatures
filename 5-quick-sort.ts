export function quickSort(
    arr: Array<number>,
    start: number = 0,
    end: number = arr.length
  ): Array<number> {
    if (start < end) {
      let p = partition(arr, start, end);
      quickSort(arr, start, p - 1);
      quickSort(arr, p + 1, end);
    }
    return arr;
  }
  
  function partition(
    arr: Array<number>,
    start: number = 0,
    end: number = arr.length
  ) {
    let pivot: number = arr[start];
    let swapIndex: number = start;
    for (let i = start + 1; i < end; i++) {
      if (arr[i] < pivot) {
        swapIndex++;
        swap(arr, i, swapIndex);
      }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
  }
  
  function swap(arr: Array<number>, startIndex: number, finishIndex: number) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[finishIndex];
    arr[finishIndex] = temp;
  }

  const items = [5,3,7,6,2,9,12,64,23,12,43,25,78,12,];

let sortedArray = quickSort(items, 0, items.length);
console.log(sortedArray);