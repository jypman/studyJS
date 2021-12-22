// 배열의 모든 요소가 every의 콜백함수 조건을 만족하는지 확인
// 한번이라도 조건을 충족하지 못하면 false를 반환하고 실행을 종료
// 모든 조건을 만족하면 true를 반환하고 실행을 종료

const userInfo = [
    {id : 0, name : 'jyp', comment : 'hello'},
    {id : 1, name : 'jyp', comment : 'hi'},
    {id : 2, name : 'jyp', comment : 'hey'},
    {id : 3, name : 'jyp', comment : 'hallo'},
]

const isAllJyp = userInfo.every(item => item.name === 'jyp')
const isRedundantComment = userInfo.every(item => item.comment === 'hello')

console.log('댓글을 작성한 유저는 모두 jyp이다??', isAllJyp)
console.log('댓글의 내용은 모두 "hello"라는 내용의 중복된 댓글이다??', isRedundantComment)