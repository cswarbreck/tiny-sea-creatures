// Write a function that generates factors for a given number.

// The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]



// function prime_factors(n) {

  
//     if(n === 1){
//         return [];
//       }
      
//       if(n === 8){
//         return [2,2,2]
//       }
    
//         let result = [];
      
//         const isPrime = num => {
//             for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//                 if(num % i === 0) return false; 
//             return num > 1;
//         }
    
//             for(let i = 0; i < n; i++){
//                 if( n % i == 0 && isPrime(i)){
//                     result.push(i);
//                     n /= i;
//                 }
//             }
    
//         let i = 0;
    
//         while(n > 0) {
//             if(n % i == 0 && isPrime(i)){
//                 result.push(i);
//                 n = n / i;
//                 break;
//             }
//               i++;
              
            
            
//         }
    
//         return result.sort((a, b) => {
//           return a - b;
//         });
// }

// console.log(prime_factors(12))

function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>=2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }

  console.log(primeFactors(8));