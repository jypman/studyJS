// generator는 반복기 객체를 반환하는 함수이다.
function* gen() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let returnGen = gen()

console.log(returnGen) // Object [Generator] {}
console.log(returnGen.next()) // { value: 1, done: false }
console.log(returnGen.next()) // { value: 2, done: false }
console.log(returnGen.next()) // { value: 3, done: false }
console.log(returnGen.next()) // { value: 4, done: true }
console.log(returnGen.next()) // { value: undefined, done: true }

function* gen2() {
    yield 5;
    yield 4;
    yield 3;
    return 2;
}

let returnGen2 = gen2()

for (let number of returnGen2) {
    console.log(number)
}

function* gen3() {
    yield 10;
    yield 20;
    yield 30;
    return 40;
}

let returnGen3Array = [0, ...gen3()]
console.log(returnGen3Array)