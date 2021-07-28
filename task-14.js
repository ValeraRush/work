//Найти максимальный/минимальный элемент в массиве
let arr = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 30, -50];

let testFunction = (arr) => {
    let min = 0;

    arr.forEach(value => {
        if (value < min) {
            min = value
        }
    })
    return min
}
console.log(testFunction(arr))


let testFunction1 = (arr) => {
    let max = 0;

    arr.forEach(value => {
        if (value > max) {
            max = value
        }
    })
    return max
}
console.log(testFunction1(arr))