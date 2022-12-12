/**
 * 4. Get a new array from the given array so that the elements appear only once (using Set)
Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
 */

function eliminateDuplicate(arr) {
    let result = new Set(arr)

    console.log(Array.from(result))
    return Array.from(result)
}

eliminateDuplicate([1,2,3,1,2,3,4,5,6,4])
