/*

Return a search and replace the sentence using the arguments provided and return the new sentence

First argument is the sentence to perform the search and replace on

Second argument is the word that you will be replacing (before)

Third argument is what will be replacing the second argument with (after)

NOTE
   Preserve the case of the first character in the original word when you are replacing it, For example if you mean to replace the word 'Book' with the word 'dog' , it should be replaced as 'Dog'

*/

function myReplace(str, before, after) {
    const isCapitalized = before[0] >= 'A' && before[0] <= 'Z'
    let casedAfter

    if (isCapitalized) {
        casedAfter = after[0].toUpperCase() + after.substring(1)
    } else {
        casedAfter = after[0].toLowerCase() + after.substring(1)
    }

    //  with built in method
    //  return str.replace(before, casedAfter)

    //  With for loop
    let replacedStr = str
    for (let i = 0; i < replacedStr.length; i++) {
        const iString = replacedStr.substring(i, i + before.length)
        if (iString === before) {
            replacedStr =
                replacedStr.substring(0, i) +
                casedAfter +
                replacedStr.substring(i + before.length)
        }
    }

    return replacedStr
}

console.log(myReplace('Let us go to the store', 'store', 'mall'))
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling'))
console.log(
    myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'),
)
