//В функцию передаем массив и значение. По результату выполнения вывести все элементы массива, которые больше второго параметра.
let array = [32,4234,5,6,7,8,8,87,7,77,8,9,6,5,7];
testFunction=(arr,val)=>{
    let newArray=[];
    array.forEach((value,index)=>{
        if (value>val){
            newArray.push(value)
        }
    });
    return newArray;
}
console.log(testFunction(array,7));
