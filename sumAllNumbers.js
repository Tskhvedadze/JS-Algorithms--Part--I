/*

Sum all numbers in range

We'll pass you an array of two numbers

Return the sum of those two numbers plus the sum of all 
the numbers between them

the lowest number will not always come first 

*/

const sumAll = (arr) => {
    // with ternary
    //  const min = arr[0] < arr[1] ? arr[0] : arr[1]
    //  const max = arr[0] > arr[1] ? arr[0] : arr[1]

    // with logical operators
    const min = (arr[0] < arr[1] && arr[0]) || arr[1]
    const max = (arr[0] > arr[1] && arr[0]) || arr[1]

    let sum = 0
    for (let i = min; i <= max; i++) sum += i

    return sum
}

console.log(sumAll([1, 4]))
console.log(sumAll([4, 1]))
console.log(sumAll([4, 4]))
