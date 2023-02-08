/*

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument) 

Each name and value pair of the source object to be present in the object from the collection if it is to be included in the returned array.

*/

function whatIsInAName(collection, source) {
    const arr = []
    const keys = Object.keys(source)

    for (const obj of collection) {
        let hasKeyValuePairs = true
        for (const key of keys) {
            if (obj[key] !== source[key]) {
                hasKeyValuePairs = false
                break
            }
        }
        if (hasKeyValuePairs) arr.push(obj)
    }
    return arr
}

console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        {
            apple: 1,
            cookie: 2,
        },
    ),
)
