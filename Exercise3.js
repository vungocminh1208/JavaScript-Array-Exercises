/**
 * 3. Find pairs of elements whose sum is equal to a given number
Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
 */


function findElementSum(num, arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                result.push([arr[i], arr[j]])
            }
        }
    }

    console.log(...result)

    return result
}

const array =  [1,7,9,2,5,3,8]
findElementSum(10, array)
