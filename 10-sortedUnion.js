/*

Write a function that takes two or more arrays and return a new array of unique values in the order of the original provided arrays

In other words, all values present from all arrays should be included in their original order, but with no duplicate in the final array

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order 

*/

// First solution
// function uniteUnique(...array) {
//     const output = []
//
//     for (const arr of array) {
//         for (const num of arr) {
//             !output.includes(num) && output.push(num)
//         }
//     }

//     return output
// }

// Second solution
function uniteUnique(...array) {
    const output = []
    const arrOfAllEls = array.reduce((acc, cur) => {
        return [...acc, ...cur]
    }, [])

    for (const num of arrOfAllEls) {
        !output.includes(num) && output.push(num)
    }

    return output
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
