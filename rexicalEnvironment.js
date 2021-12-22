let x = 1
function f() {
    console.log(x)
    let x = 2
}

console.log(f()) // Error 발생