// 배열의 요소 중 filter의 콜백함수 조건을 만족하는지 확인
// 조건을 만족하는 요소를 갖는 새로운 배열을 반환

const numArray = [1, 2, 3, 11, 8, 7]

const lessThanFive = numArray.filter(item => item < 5)
const biggerThanTwelve = numArray.filter(item => item > 12)

console.log('5보다 작은 숫자를 원소로 갖는 배열 :', lessThanFive)
console.log('12보다 큰 숫자를 원소로 갖는 배열 :', biggerThanTwelve)