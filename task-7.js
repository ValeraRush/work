//В функцию передаем массив и 2 значения. По результату выполнения вывести все элементы массива, которые равны или второму, или третьему параметру.
let arr = [4, 3, 2, 1, 45, 6, 7, 8, 9, 23, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6];
let testFunction = (arr, elem) => {
    return arr.filter(elem1 => elem1 === elem);

}

function test(arr, val) {
    return arr.filter(val1 => val1 === val);
}

let result = testFunction(arr, 4);
console.log(result)
test(arr, 1);


const t = test(arr, 6);
console.log(t);