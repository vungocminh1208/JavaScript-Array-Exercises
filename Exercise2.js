/**
 * 2. Find 2 elements with the greatest sum in an array
Example: [1,7,9,2,5,3,8] => [9.8]
 */

function greatestSum(arr) {
    let res = arr.sort((a,b) => a-b)

    return res.slice(arr.length-2)
}

console.log(greatestSum([1,2,9,5,3,8]))