/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

*/

function addTogether() {
    const [arg1, arg2] = [...arguments]

    if (typeof arg1 !== 'number') {
        return undefined
    }

    if (arg2 === undefined) {
        return function (num) {
            if (typeof num !== 'number') {
                return undefined
            }
            return arg1 + num
        }
    }

    if (typeof arg2 !== 'number') {
        return undefined
    }

    return arg1 + arg2
}

// console.log(addTogether(2, 3))
// console.log(addTogether(2, '3'))
// console.log(addTogether(2)(3))
console.log(addTogether(5, undefined))
