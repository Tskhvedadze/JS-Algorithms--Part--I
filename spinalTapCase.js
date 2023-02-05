/*

Convert a string spinal case

Spinal case is all-lowercase-words-joined-by-dashes

1) all lowercase

2) _ and ' ' (spaces) become hyphens (-)

3) Capital case always determine the start of a new word(but not     always)

*/

// First solution
// function spinalCase(str) {
//     const words = []
//     let word = ''

//     for (const char of str) {
//         if (char === '_' || char === ' ') {
//             words.push(word)
//             word = ''
//         } else if (char >= 'A' && char <= 'Z' && !word.length) {
//             word = char.toLowerCase()
//         } else if (char >= 'A' && char <= 'Z' && word.length) {
//             words.push(word)
//             word = char.toLowerCase()
//         } else {
//             word += char
//         }
//     }

//     if (word.length) {
//         words.push(word)
//     }

//     const spinal = words.join('-')

//     return spinal
// }

// Second solution
const spinalCase = (str) =>
    str
        .split('')
        .map((c) => (/[A-Z]/.test(c) && `-${c.toLowerCase()}`) || c)
        .join('')
        .split(/[_ -]+/)
        .filter((w) => w.length)
        .join('-')

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('The_Andy_Griffith_Show'))
console.log(spinalCase('Teletubbies say Eh-oh'))
console.log(spinalCase('AllThe-small Things'))
