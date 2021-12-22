// 비구조화 할당

// 비구조 배열
let foo = [1,2,3]
let [one, two, three] = foo
console.log(one,two,three)

let foo2 = [1,2,3]
//...two2는 첫번째 요소를 제외한 나머지를 의미한다.
let [one2, ...two2] = foo2
console.log(one2, two2)

// 비구조 객체
let foo3 = {a : 1, b: null}
let {a, b, c=10} = foo3
console.log(a)
console.log(b)
console.log(c)

const {obj}  = { obj : 1}
console.log(obj)

const {form}  = { ab : 1, form : 2}
console.log(form)