class Iterable {
    constructor(from, to) {
        this.from = from
        this.to = to
    }
    // for 문을 통해 값을 반환하려면 [Symbol.iterator]가 있어야 한다.
    // for 문은 반환된 반복기 객체만을 대상으로 동작한다.
    [Symbol.iterator]() {
        // next의 this로 해석하지 않도록 설정
        const that = this
        let currentFrom = that.from
        // 아래와 같이 Symbol.iterator는 반복기 객체를 반환한다.
        return {
            next(){
                const value = currentFrom <= that.to
                    ? currentFrom++
                    : undefined
                const done = value === undefined
                return {value, done}
            }
        }
    }
}

const returnIterator = new Iterable(1, 5)
for (let value of returnIterator) {
    console.log(value)
}

const returnIterator2 = new Iterable(1, 5)
const array = [0, ...returnIterator2]
console.log(array)

const returnIterator3 = new Iterable(1, 5)
const returnIteratorValue = returnIterator3[Symbol.iterator]()
console.log(returnIterator3[Symbol.iterator]().next())
console.log(returnIterator3[Symbol.iterator]().next())
console.log('---')
console.log(returnIteratorValue.next())
console.log(returnIteratorValue.next())
console.log(returnIteratorValue.next())
console.log(returnIteratorValue.next())
console.log(returnIteratorValue.next())