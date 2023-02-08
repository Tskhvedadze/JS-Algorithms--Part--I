/*

A prime number is a whole number greater than 1 with exactly two divisors: 1 andt itself 

*/

function sumPrimes(num) {
    if (num < 2) {
        return 0
    }
    const primes = []
    let sum = 0

    for (let i = 2; i <= num; i++) {
        let isPrime = false
        for (const p of primes) {
            if (i % p === 0) {
                isPrime = true
                break
            }
        }
        if (!isPrime) {
            primes.push(i)
        }
    }

    for (const p of primes) {
        sum += p
    }

    return sum
}

console.log(sumPrimes(10))
console.log(sumPrimes(977))
