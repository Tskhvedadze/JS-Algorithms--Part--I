/*

Find the missing letter in the passed letter range and returnt it

If all letters are present in the range, return undefined

*/

function fearNotLetter(str) {
    let output

    for (let i = 0; i < str.length - 1; i++) {
        const currentCode = str.charCodeAt(i)
        const nextCode = str.charCodeAt(i + 1)

        if (nextCode - currentCode !== 1) {
            output = String.fromCharCode(currentCode + 1)
            break
        }
    }
    return output
}

console.log(fearNotLetter('abce'))
console.log(fearNotLetter('stvwx'))
