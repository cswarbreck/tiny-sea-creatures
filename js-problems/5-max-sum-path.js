// Task:
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

// A path can start from either list, and can finish in either list.
// If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
// Return only the maximum path sum.

// describe("Tests", function() {
//     it("Sample tests", function() {
//           assert.strictEqual(maxSumPath([2, 3, 7, 10, 12],[1, 5, 7, 8]), 35)
//           assert.strictEqual(maxSumPath([1,2,3], [3,4,5]), 15)
//           assert.strictEqual(maxSumPath([1,4,5,8,9,11,19], [2,3,4,11,12]), 61)
//           assert.strictEqual(maxSumPath([1,2,3], [4,5,6]), 15)
//           assert.strictEqual(maxSumPath([],[]),0)
//     });
//   });

// Efficient Approach: The idea is to do something similar to merge process of MERGE SORT. 
// This involves calculating the sum of elements between all common points of both arrays. Whenever there is a common point, compare the two sums and add the maximum of two to the result.



// Algorithm: 

// Create some variables, result, sum1, sum2. Initialize result as 0. Also initialize two variables sum1 and sum2 as 0. Here sum1 and sum2 are used to store sum of element in ar1[] and ar2[] respectively. These sums are between two common points.
// Now run a loop to traverse elements of both arrays. While traversing compare current elements of array 1 and array 2 in the following order:

// If current element of array 1 is smaller than current element of array 2, then update sum1, else if current element of array 2 is smaller, then update sum2.
// If the current element of array 1 and array 2are same, then take the maximum of sum1 and sum2 and add it to the result. Also add the common element to the result.
// This step can be compared to the merging of two sorted arrays, If the smallest element of the two current array indices is processed then it is guaranteed that if there is any common element it will be processed together. 
// So the sum of elements between two common elements can be processed.

maxSumPath = (arr1, arr2) => {
    let result = 0, sum1 = 0, sum2 = 0;
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            // sum1 += arr1[i++]; is the same as writing:
            sum1 += arr1[i];
            i++;
        } else if (arr1[i] > arr2[j]){
            sum2 += arr2[j++];
        } else {
            result += Math.max(sum1, sum2) + arr1[i];
            sum1 = 0, sum2 = 0;
            i++, j++;
        }
    }

    while(i < arr1.length){ sum1 += arr1[i++] }

    while(j < arr2.length){ sum2 += arr2[j++] }

    return result += Math.max(sum1, sum2)
}

console.log(maxSumPath([1,4,5,8,9,11,19], [2,3,4,11,12]));

// Complexity Analysis:  

// Space Complexity: O(1). 
// Any extra space is not required, so the space complexity is constant.
// Time complexity: O(m+n). 
// In every iteration of while loops, an element from either of the two arrays is processed. There are total m + n elements. Therefore, the time complexity is O(m+n).