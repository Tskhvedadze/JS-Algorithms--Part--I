/*

Convert the characters & , < , > , * in a string to their corresponding HTML entities

*/

const htmlDict = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
}

// First solution
// function convertHTML(str) {
//     let output = ''

//     for (const char of str) {
//         if (char in htmlDict) {
//             output += htmlDict[char]
//         }else{
//          output += char
//         }
//     }

//     return output
// }

// Second solution
// function convertHTML(str) {
//     let output = ''

//     for (const char of str)
//         output += (char in htmlDict && htmlDict[char]) || char

//     return output
// }

// Third solution with arrow function
const convertHTML = (str) =>
    str
        .split('')
        .map((char) => htmlDict[char] || char)
        .join('')

console.log(convertHTML('Dolce & Gabbana'))
console.log(convertHTML('Hamburger < Pizza < Tacos'))
