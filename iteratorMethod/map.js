// 배열의 요소를 일괄 변경하고 싶은 경우 map을 사용한다.
// map의 콜백함수가 반환하는 값들을 요소로 하는 새로운 배열을 반환한다.

const userInfo = [
    {id : 0, name : 'fgh'},
    {id : 1, name : 'asd'},
    {id : 2, name : 'jyp'},
    {id : 3, name : 'zxc'}
]

const addedAge = userInfo.map(item => {
    item.age = 20
    return item
})

console.log(addedAge)