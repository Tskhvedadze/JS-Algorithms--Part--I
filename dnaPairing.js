/*

The DNS strand is missing the pairing element.

Take each charachter , get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG

Match the missing element to the provided character

Return the provided character as the first element in each array

For example, for the input GCG return [['G','C'],['C','G'],['G','C']]

*/

const dnaDict = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

const pairElement = (str) => str.split('').map((c) => [c, dnaDict[c]])

console.log(pairElement('ATCGA'))
console.log(pairElement('TTGAG'))
console.log(pairElement('CTCTA'))
console.log(pairElement('GCG'))
