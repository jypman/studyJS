const str = 'Meg March, Jo March, Beth March, Amy March'
console.log(str.replace(/\w+ March/ig,"Mrs.$2"))

let a = '1111111111111'
console.log(a)
a = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
console.log(a)