function* gen(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* genPWD() {
    yield* gen(48, 57)
    yield* gen(65, 90)
    yield* gen(97, 122)
}

let str = ''
for (let code of genPWD()) {
    str += String.fromCharCode(code)
}

console.log(str)