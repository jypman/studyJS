// 원하는 로직
// a가 콘솔에 먼저 찍히고 일정 시간 뒤에 b가 찍히는 로직을 만들고 싶은 상황

const delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve나 reject 함수를 호출하지 않으면 delay함수 이후의 함수가 실행되지 않고 delay함수까지만 실행하고 끝난다.

            // promise를 반환하고 catch를 건너뛰고 b가 찍힌다.
            // 단 await 키워드가 없을 경우 a,b가 먼저 호출되고 일정 시간 뒤에 promise를 반환한다.
            resolve()

            // promise를 반환하고 catch로 간 뒤 b가 찍힌다.
            // 단 await 키워드가 없을 경우 a,b가 찍히고 일정 시간 뒤에 promise를 반환하고 UnhandledPromiseRejectionWarning 에러가 발생하여 catch로 가지 않는다.
            // reject()
        },time * 1000)
    })
}

const run = async () => {
    console.log('a')
    try {
        await delay(3)
    } catch (err) {
        console.log('에러 발생')
    }
    console.log('b')
}

run()