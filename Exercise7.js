/**
 * 7. 	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
    Write a function with 1 input parameter, an return a new object like this:
    {'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences 
    of 'face', 'zalo', 'gmail' in the array
 */

function countDuplicate(arr) {
    let result = {}

    arr.forEach((key) => {
        result[key] = (result[key] || 0) + 1;
    });

    console.log(result);

    return result
}

countDuplicate(['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'])
// countDuplicate([1,2,3,2,2,3,2,1,1,1,1,2,4,5,6])