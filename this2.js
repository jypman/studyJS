let calculator = {
    read(a,b){
        this.a = a;
        this.b = b;
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}

calculator.read(3,4)
console.log(calculator.sum()) // 7
console.log(calculator.mul()) // 12