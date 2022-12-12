/**
 * 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
			const arr2 = [3, 5, 9, 10, 88];
			=> [3,5,9]
 */

function getElements(arr1, arr2) {

    let formatArr1 = Array.from(new Set(arr1))
    let formatArr2 = Array.from(new Set(arr2))

    let result = []

    for (let i = 0; i < formatArr1.length; i++) {
        if (formatArr2.includes(formatArr1[i])) {
            result.push(formatArr1[i])
        }
    }

    console.log(result)

    return result
}

getElements([1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7], [3, 5, 9, 10, 88])