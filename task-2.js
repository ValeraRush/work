//В функцию передаем массив и значение. По результату выполнения вывести все элементы массива, которые равны второму параметру.
let array = [44,3,3321,34,4,5,6,7,5,4,776];
testFunction=(arr,val)=>{
    let newArray=[];
    array.forEach((value,index)=>{
        if (value===val){
            newArray.push(value)
        }
    });
    return newArray;
}
console.log(testFunction(array,7));