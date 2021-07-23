//В функцию передаем массив и значение. По результату выполнения вывести все номер элементов массива, которые меньше второго параметра.
let array=[4,5,3,2,3,4,5,6,7,8,4,3,2,1,9,8,4];
testFunction=(arr,val)=> {
    array.forEach((value, index) => {
        if (value < val) {
            console.log(index)
        }
    });
}
testFunction(array,2);
