// В функцию передаем массив и значение. По результату выполнения вывести все элементы массива, которые больше второго параметра.
let array=[3,4,2,2,1,6,7,8,9,0,33,2]
lengthFunction=(arr)=>{
    let count=0;
    array.forEach((value,index) => {
        count=index+1
    });
    return count;
}

const t = lengthFunction(array);
console.log(t)