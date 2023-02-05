/*

You will be provided with an initial array (the first argument in the dastroyer function), followed by one or more arguments.

Remove all elemnts from the initial array that are of the samebvalues as these arguments.

*/

//  1) First way
// function destroyer(arr) {
//     const argsArr = [...arguments].slice(1)

//     const fillteredArray = []
//     for (const el of arr) !argsArr.includes(el) && fillteredArray.push(el)

//     //  return firstArray.filter((el) => !argsArray.includes(el))
//     return fillteredArray
// }

// 2) Second way
// const destroyer = (...args) =>
//     args[0].filter((el) => !args.slice(1).includes(el))

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// console.log(destroyer([1, 2, 3, 1, 2, 3, 21, 23, 45], 2, 3, 23))
