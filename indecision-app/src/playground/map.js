const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((map)=> map * this.multiplyBy)
    }
}

console.log(multiplier.multiply())