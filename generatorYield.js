function* gen() {
    let result = yield "0+0 = ?"
    console.log(result)
}

const returnGen = gen()
console.log('식 :', returnGen.next().value)
console.log('식 :', returnGen.next(0).value)

function* gen2() {
    let ask1 = yield "1+1 = ?"
    console.log(ask1)
    let ask2 = yield "2+2 = ?"
    console.log(ask2)
}

const returnGen2 = gen2()
console.log('식 :', returnGen2.next().value)
console.log('식 :', returnGen2.next(2).value)
console.log('식 :', returnGen2.next(4).value)

function* gen3() {
    let result = yield "4+4 = ?"
}

const returnGen3 = gen3()

console.log('식 :', returnGen3.next().value)

try {
    returnGen3.throw(new Error('답을 찾지 못함여 ㅠ'))
} catch (err) {
    console.log('에러 발생 =>', err)
}