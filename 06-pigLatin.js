/*

Translate the provided string to pig latin

Pig Latin takes the first consonant of an English word.
moves it to the end of the word and suffers an 'ay'

If a word begins with a vowel you just add 'way'
to the end

If a word does not contain a vowel just add 'ay' 
to the end

Input strings are guarenteed to be English words in all lowerCase

*/

const VOWELS = ['a', 'e', 'i', 'o', 'u']

// First solution
// function translatePigLatin(str) {

//     const firstChar = str[0]
//     if (VOWELS.includes(firstChar)) {
//         return str + 'way'
//     }

//     let hasNoVowles = true
//     for (const char of str) {
//         if (VOWELS.includes(char)) {
//             hasNoVowles = false
//             break
//         }
//     }

//     if (hasNoVowles) {
//         return str + 'ay'
//     }

//     let consonantCluster = ''
//     let firstVowelIndex = 0
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]
//         if (VOWELS.includes(char)) {
//             firstVowelIndex = i
//             break
//         }

//         consonantCluster += char
//     }

//     return str.substring(firstVowelIndex) + consonantCluster + 'ay'
// }

// Second solution
const translatePigLatin = (str) => {
    const consonantCluster = str.split(/[aeiuo]/)[0]
    return VOWELS.includes(str[0])
        ? `${str}way}`
        : str.split('').every((char) => !VOWELS.includes(char))
        ? `${str}ay`
        : `${str.substring(consonantCluster.length)}${consonantCluster}ay`
}

console.log(translatePigLatin('glove')) // oveglay
console.log(translatePigLatin('california')) // aliforniacay
console.log(translatePigLatin('eight')) // eigthway
console.log(translatePigLatin('schwartz')) // artzschway
console.log(translatePigLatin('rhythm')) // rhythmay
