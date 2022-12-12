/**
 * 1. Write a function with 2 input parameters (each parameter is an array). This function
 *  returns an array of the same elements in two arrays;

Example: 	array1 = [1,2,3,4,5,6];
			array2 = [3,4,8,9,12];
			=> [3,4]
 */
function duplicateElement(arr1, arr2) {
    let result = [];

    for (e of arr1) {
        console.log(e)
        if(arr2.includes(e)) {
            result.push(e)
        }
    }
    return result
}

const array1 = [1,2,3,4,5,6];
const array2 = [3,4,8,9,12];

let res = duplicateElement(array1, array2)

console.log(res)


