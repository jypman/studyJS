function sum(a) {
    let c = 2
    return function (b) {
        return a + b + (--c)
    }
}

const a = sum(1)(2)
const b = sum(5)(-1)

console.log(a) // 4
console.log(b) // 5