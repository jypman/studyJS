// 전개 연산자
function foo(x,y,z) {
    console.log(x,y,z)
}
const boo = [0,1,2]
foo(...boo)

const foo2 = [1,2]
const foo3 = [...foo2,11,22,33]
const foo4 = [11, ...foo2, 22, 33]
console.log(foo3)
console.log(foo4)

const foo5 = {a:1, b:2}
const foo6 = {...foo5, b:3, c:1}
console.log(foo6)