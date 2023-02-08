/*

Given a positive integer num. 
return the sum of all odd Fibonacci numbers that are less than or equal to num

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers

The first six numbers of the Fibonacci sequence ar 1, 1, 2, 3, 5

*/

function sumFibs(num) {
    let a = 1,
        b = 1
    let sum = a

    while (b <= num) {
        b % 2 && (sum += b)
        ;[a, b] = [b, a + b]
    }

    return sum
}

console.log(sumFibs(4))
console.log(sumFibs(10))
console.log(sumFibs(75024))
console.log(sumFibs(75025))
