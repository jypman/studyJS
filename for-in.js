var store = { snack:500, paper:1000, beverage:1500}

for (const item in store) {
    if (store.hasOwnProperty(item)) {
        console.log(item+"은 가격이 "+store[item]+"원입니다.")
    }
}