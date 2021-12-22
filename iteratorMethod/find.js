// 배열의 요소 중 find의 콜백함수 조건을 만족하는지 확인
// 조건을 만족하는 첫번째 요소를 반환하고 실행을 종료
// 조건을 만족하는 요소가 없는 경우 undefined를 반환

const userInfo = [
    {id : 0, name : 'fgh', age : 20},
    {id : 1, name : 'asd', age : 30},
    {id : 2, name : 'jyp', age : 40},
    {id : 3, name : 'zxc', age : 50}
]

const jypInfo = userInfo.find(item => item.name === 'jyp')
const harryInfo = userInfo.find(item => item.name === 'harry')

console.log('jyp 유저 정보 :', jypInfo)
console.log('harry 유저 정보 :', harryInfo)