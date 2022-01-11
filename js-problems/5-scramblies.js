// // INCOMPLETE   

// function scramble(str1, str2) {
//     console.log(str1 + ' - ' + str2)
//     str1 = str1.split('');
//     str2 = str2.split('');
//     console.log(str1 + ' - ' + str2)
//    let result = []
  
//     let count = 0;
//     for(let i = 0; i < str2.length; i++){
//         if(str2.indexOf(str2[i]) !== str2.lastIndexOf(str2[i])){
//             str1.splice(str2[i], 1)
//         }
//         if(str1.indexOf(str2[i]) != -1){
//             result.push(str2[i]);
//             count++
//             // str1.splice(str2[i], 1)
//         }
//     }
//     console.log(result);
//     return count >= str2.length ? true : false;
//   }

// let scrambled = 'scriptjavx';
// let word = 'javascript';

// console.log(scramble(scrambled, word));

// function logg(n){
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             console.log(i)
//         }
//     }
// }

// logg(12)

function scramble(str1, str2) {
  
    // Creates Map of both strings
    function mapValues(str) {
      let obj = {}
      for(let i = 0; i < str.length; i++){
        obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
      }
      return obj;
    }
    
    let word = mapValues(str1);
    let scramble = mapValues(str2);
    let wordKeys = Object.keys(word);
    
    let noProblem = true;
    
    // Loops through scramble to check if it contains the correct letters with the correct values
    for(let i = 0; i < wordKeys.length; i++){
      !scramble[wordKeys[i]] || scramble[wordKeys[i]] < word[wordKeys[i]] ? noProblem = false : noProblem;
    }
    
    return noProblem;

  }

let word = 'anagram';
let anagram = 'ranamgramadtye';

console.log(scramble(word, anagram));