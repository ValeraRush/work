//В функцию передаем массив и значение. По результату выполнения вывести true, если в массиве есть значение равное второму параметру.
let arr=[1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]

let testFunction = (arr, elem  ) => {
    return arr.filter(elem1 =>elem1===elem).length>0

}
console.log(testFunction(arr, 10 ))
