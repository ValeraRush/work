//В функцию передаем массив и значение. По результату выполнения вывести все элементы массива, которые не равны второму параметру.
let array=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
testFunction=(arr,val)=> {
    array.forEach((value, index) => {
        if (value !== val) {
            console.log(index)
        }
    });
}
testFunction(array,5);