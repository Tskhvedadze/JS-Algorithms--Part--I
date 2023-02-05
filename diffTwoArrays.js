/*

Compare two arrays and return a new array items
only found in one of the two given arrays, but in other words,
return the symmetryc difference of the two arrays

You can return the array its elements in any order

*/

const diffArray = (arr1, arr2) => {
    // const union = new Set([...arr1,...arr2])

    const union = []

    for (let el of arr1) !union.includes(el) && union.push(el)
    for (let el of arr2) !union.includes(el) && union.push(el)

    const symmDiff = []

    for (let currEl of union) {
        ;(arr1.includes(currEl) &&
            !arr2.includes(currEl) &&
            symmDiff.push(currEl)) ||
            (arr2.includes(currEl) &&
                !arr1.includes(currEl) &&
                symmDiff.push(currEl))
    }

    return symmDiff
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])) //[6, 4]

console.log(
    diffArray(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
    ),
) //['pink wool']
