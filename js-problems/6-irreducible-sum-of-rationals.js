// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]

// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Example:
// [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
// 1/2  +  1/3  +  1/4     =      13/12

// [[2, 7], [1, 3], [1, 12]], [59, 84]




function sumFracts(arr) {
    // Algorithm fails for certain cases
    let denominators = [];
    let numerators = [];

    arr.forEach(el => {
        denominators.push(el[1])
    })

    denominators = denominators.sort((a, b) => {return b  - a})
    
    const max = denominators[denominators.length - 1]
    
    const lowestCommon = (currentValue) => denominator % currentValue === 0;
    let common = false
    let denominator = max* (max-1)

   common =  denominators.every(lowestCommon)

    while (common === false){
        denominator++
        common =  denominators.every(lowestCommon)
    }

    for(let i = 0; i < arr.length; i++){
        numerators.push(arr[i][0] * (denominator / arr[i][1]))
    }

    const numerator = numerators.reduce((a, b) => {return a + b})

    return numerator % denominator === 0 ? numerator / denominator : [numerator, denominator]

}

console.log(sumFracts([[2, 7], [1, 3], [1, 12]]));