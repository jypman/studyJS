// 배열의 요소를 순환하면서 reduce의 콜백함수에 의해 단일 값을 누적할 수 있다.
// reduce는 해당 누적된 값을 반환한다.

const numArray = [1, 3, 7, 2, 5]

const sum = numArray.reduce((result, item) => result + item, 0)

console.log('배열의 각 요소를 모두 합한 값은? :', sum)