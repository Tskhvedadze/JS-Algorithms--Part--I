/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters

The range will be an array of two numbers that will not neccessarily be in numerical order

*/

function smallestCommon(arr) {
    let small, big
    if (arr[0] > arr[1]) {
        big = arr[0]
        small = arr[1]
    } else {
        big = arr[1]
        small = arr[0]
    }

    let scm = big
    while (true) {
        let isScm = true
        for (let i = small; i <= big; i++) {
            if (scm % i !== 0) {
                isScm = false
                break
            }
        }
        if (isScm) {
            return scm
        } else {
            scm++
        }
    }
}

console.log(smallestCommon([1, 5]))
console.log(smallestCommon([5, 1]))
console.log(smallestCommon([2, 10]))
