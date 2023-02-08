/*

Given the array arr, iterate through and remove each element starting from the first element until the func returns true when the iterated element is passed through it

Then return the rest of the array once the condition is satidfied, otherwise , arr should be returned as an empty array

*/

function dropElement(arr, func) {
    let trueIndex = -1

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i]

        if (func(el)) {
            trueIndex = i
            break
        }
    }

    if (trueIndex === -1) {
        return []
    } else {
        return arr.slice(trueIndex)
    }
}

console.log(dropElement([1, 2, 3], (n) => n < 3))
console.log(dropElement([1, 2, 3, 4], (n) => n >= 3))
console.log(dropElement([1, 2, 3], (n) => n > 0))
