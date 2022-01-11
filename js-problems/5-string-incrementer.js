// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo099 -> foo100

function incrementString(str) {
  const hasNumber = /\d/;

  if (hasNumber.test(str) == false) {
    return str.concat("1");
  }

  function separateNumber(str) {
    let numbers = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 47 && str.charCodeAt(i) <= 57) {
        numbers.push(str[i]);
      }
    }
    return numbers.join("");
  }

  let numString = separateNumber(str);

  let incremented = (parseInt(numString) + 1).toString();

  if (numString.length > incremented.length) {
    let difference = numString.length - incremented.length;
    for (let i = 0; i < difference; i++) {
      incremented = "0".concat(incremented);
    }
  }

  return str.replace(numString, incremented);
}

console.log(incrementString("foobar0042"));