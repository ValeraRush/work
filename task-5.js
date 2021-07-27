//В функцию передаем массив и значение. По результату выполнения вывести номер последнего элемента массива, который равен второму параметру
const testFunction = (arr, value) => {
    let number = -1
    arr.forEach((element, index) => {
        if (element === value) {
            number = index;
        }
    });
    return number;
}
const array1 = [5, 4, 3, 6, 7, 8, 4, -9, 4, -4, -3];
const result = testFunction(array1, 5);
console.log(result)