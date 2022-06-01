// Here are various methods for calculating the Fibonacci sequence

// Creating the fibonacci sequence using an array 
// O(n) time complexity, linear space

function fibonacci(number) {
	let sequence = [1, 1];
	for (let i = 2; i < number; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence;
}

console.log(fibonacci(6)); 

// -------------------------------------------------------------------------------------------------------

// This is how to get the NEXT number in the sequence, using iteration
// O(n) time complexity, linear space

// function fibonacci(number) {

//     var previous_first = 0, previous_second = 1, next = 1;

//     for(var i = 2; i <= number; i++) {
//         next = previous_first + previous_second;
//         previous_first = previous_second;
//         previous_second = next;
//     }
//     return next;
// };

// console.log(fibonacci(6));

// -------------------------------------------------------------------------------------------------------

// Using memoisation
// O(n) time complexity, O(m) space

// var memo = {};

// function fibonacci(number) {
    
//     if (number < 1) return 0;

//     if (number <= 2) return 1;
    
//     if (number in memo) return memo[number];
    
//     var value = fibonacci(number- 1) + fibonacci(number - 2);
        
//     memo[number] = value;

//     return value;
// }

// console.log(fibonacci(6));

// -------------------------------------------------------------------------------------------------------

// Binet’s Formula. Time complexity of O(1)!!!!
// Now lets complicate things a little bit an use Binet’s Formula for our calculations:

// number = [ Phi^n — (phi)^n ]/Sqrt[5]
// where
// Phi=(1 + Sqrt(5))/2
// and
// phi=(1 — Sqrt(5))/2

// function fibonacci(number) {
//     var sqRootOf5 = Math.sqrt(5);

//     var Phi = (1+sqRootOf5)/2;
//     var phi = (1-sqRootOf5)/2

//     return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
// }

// console.log(fibonacci(6));