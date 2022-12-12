/**
 * 6. Given an array arr1. Write a function that returns a new array of the elements that 
 * appear more than once in arr1. The elements in new array can only appear once in this array.
Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
		const myFunc = (inputArr) => {
			// write your code here
		}
		const arr2 = myFunc(arr1); // [2,3,1,5]
*/

function getDuplicate(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                result.push(arr[j])
            }
        }
    }
    
    console.log(Array.from(new Set(result)))
   return (Array.from(new Set(result)))
}

getDuplicate([1,2,3,4,2,3,5,3,1,1,5,2,3])