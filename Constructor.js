function Teacher(age, name, subject) {
    this.age = age;
    this.name = name;
    this.subject = subject
    this.teach = function (student) {
        console.log(`내 나이는 ${age}살이며 ${student}을(를) 가르치고 있습니다.`)
    }
}

const jyp = new Teacher(27, 'jinyoung', 'JS')
const fgh = Teacher(20, 'fghman', 'CSS')

console.log('jyp 객체 정보 :', jyp)
jyp.age = 40
jyp.teach('jypman')
console.log('jyp의 생성자 함수명은? :', jyp.constructor)
console.log('jyp는 Teahcer의 인스턴스인가? :', jyp instanceof Teacher)

console.log('전역객체 조회', fgh)
console.log('전역객체에서 age의 값은?', age)