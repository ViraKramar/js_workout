function pow(x, y) {

    let result = 1

    for (let i = 1; i <= y; i++) {
        result *= x
    }
    return result
}
let myResult = pow(1, 4)

console.log(myResult)