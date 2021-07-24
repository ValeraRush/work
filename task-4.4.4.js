//В функцию передаем массив и значение. По результату выполнения вывести все номер элементов массива, которые меньше второго параметра.
let array=[1,2,3,4,5,6,7,8,9,10,11,12,13];
testFunction=(arr,val)=> {
    return array.reduce((acc,current, index ) => {
        if (current < val) {
            acc.push(current);

        }

        return(acc)

    },[]);
}
let t=testFunction(array, 10)
console.log(t)



