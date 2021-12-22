// 배열의 요소 중 하나라도 some의 콜백함수 조건을 만족하는지 확인
// 한번이라도 조건을 충족할 경우 true를 반환하고 실행을 종료
// 모든 조건을 만족하지 못하면 false를 반환하고 실행을 종료

const userInfo = [
    {id : 0, name : 'fgh', comment : 'hello'},
    {id : 1, name : 'jyp', comment : 'hi'},
    {id : 2, name : 'asd', comment : 'hey'},
    {id : 3, name : 'zxc', comment : 'hallo'},
]

const isJyp = userInfo.some(item => item.name === 'jyp')
const isHarry = userInfo.some(item => item.name === 'Harry')

console.log('댓글을 작성한 유저 중 jyp가 있다??', isJyp)
console.log('댓글을 작성한 유저 중 herry가 있다??', isHarry)
