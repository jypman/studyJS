const a = { p1: 1 }

function change(obj) {
    obj = { p1: 100 }
    console.log(obj)
}

change(a)
console.log(a)

const b = { p1: 1 }

function change2(obj) {
    obj.p1 = 100
    console.log(obj)
}

change2(b)
console.log(b)
