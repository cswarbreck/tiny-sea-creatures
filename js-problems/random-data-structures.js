minimum = (one, two) => {
  return Math.min(one, two);
}

// console.log(minimum(3,7));

// Basic Recursive Function example (total shit, big of O(N^2))

function factorial(number) {
  if(number <= 1){
    return 1
  } else {
    return number*factorial(number -1);
  }
}

factorial = number => number <= 1 ? 1 : number*factorial(number -1);

console.log(factorial(11))

// For factorial(3)
// At the beginning, number = 3
//    3 x factorial(3 - 1) // which equals 2
//       2 x factorial(2 -1) // which equals 1
//           return 1
// In total we get 3 x 2 x 1 = 6

// console.log(factorial(3))

function loopFactorial(number) {
  let result = 1;
  let counter;
  for(counter = number; counter > 1; counter--) {
    result *= counter;
  }
  return result;
}

// console.log(`Looping we get ${loopFactorial(3)}`);

function findSequence(target) {
  function find(current, history) {
    if(current == target) {
      return history;
    } else if(current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${current} * 3)`)
    }
  }
  return find(1, "1");
}

// console.log(findSequence(677));

// function findIfEven(number) {
//   if(number % 2 == 0){
//     return `It is!`;
//   } else {
//     return `${number} is not divisible by 2`;
//   }
// }

findIfEven = number => number % 2 == 0 ? true : false;

// console.log(findIfEven(17));

// function isEven(number) {
//   modulus = Math.abs(number);
//   if(modulus == 0) {
//     return true;
//   } else if(modulus == 1) {
//     return false;
//   } else {
//     return isEven(modulus - 2);
//   }
// }

isEven = number => Math.abs(number) == 0 ? true : Math.abs(number) == 1 ? false : isEven(Math.abs(number) - 2);

console.log(`Is it even? ${isEven(16)}`);

// console.log(isEven(-2));

function countBs(str) {
  let counter = 0;

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === "B") {
      counter++
    }
  }
  return counter;
}

// console.log(countBs("Bello"));

function countChar(str, character) {
  let counter = 0;

  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === character) {
      counter ++;
    }
  }
  return counter;
}

// console.log(countChar("BibliBgrpahy", "B"))

function range(start, end) {
  let rangeArray = [];
  for(let i = start; i <= end; i++) {
    rangeArray.push(i);
    
  }
  return rangeArray;
}

// console.log(range(3,8));

function alternativeRange(start, end) {
  return Array(end - start +1).fill().map((_, idx) => start + idx)
}

// console.log(alternativeRange(3, 6))

function sum(start, end) {
  var sum = 0;
  let rangeArray = [];
  for(let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  rangeArray.forEach(sumArray);

  function sumArray(item) {
    sum += item;
  }
  return sum;
}

// console.log(sum(1, 10))

function reverseArray(arr) {
  let newArr = [];
  for(let i = 0; i = arr.length; i++) {
    newArr.push(arr.pop());
  }
  return newArr;
}

const myArr = [1,2,3]

// console.log(reverseArray(myArr));

function reverseArrayInPlace(arr) {
  for(var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}


// console.log(reverseArrayInPlace(myArr));

let obj = {here: {is: "an"}, object: 2};

function deepEqual(obj1, obj2) {
  if(obj1 === obj2) {
    return true
  } else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    if(Object.keys(obj1).length != Object.keys(obj2).length){
      return false;
    }
    for(var prop in obj1) {
      if(obj2.hasOwnProperty(prop)) {
        if(! deepEqual(obj1[prop], obj2[prop])) {
          return false
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// console.log(deepEqual(obj, obj));

const arrayToObject = arr => {
  let myObj = {};
  for(let i = 0; i < arr.length; i++){
    myObj[arr[i]] ? myObj[arr[i]]+= 1 : myObj[arr[i]] = 1
  }
  return myObj;
}

let thisArray = ['a', 'b', 'a', 'c', 1, "1", "seventeen"]

console.log(arrayToObject(thisArray))

