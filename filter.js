let arr = [1,2,3,4,5,6,7]

function inBetween(min, max) {
    return function (item) {
        return min <= item && item <= max
    }
}

function inArray(arr) {
    return function (item) {
        return arr.indexOf(item) > -1
    }
}

console.log(
    arr.filter(inBetween(3,6))
)

console.log(
    arr.filter(inArray([1,2,10]))
)