/*

Flatten a nested array

You must account for varying levels of nesting

*/

// First solution with built in method
// const steamrollArray = (arr) => arr.flat(Infinity)

// Second solution
const flatten = (arr) => {
    const result = []

    for (const el of arr) {
        if (Array.isArray(el)) {
            result.push(...el)
        } else {
            result.push(el)
        }
    }

    return result
}

function steamrollArray(arr) {
    let result = arr
    while (true) {
        let isFlat = true
        for (const el of result) {
            if (Array.isArray(el)) {
                isFlat = false
                result = flatten(result)
                break
            }
        }
        if (isFlat) {
            return result
        }
    }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([[['a']], [['b']]]))
