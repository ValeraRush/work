//В функцию подается несколько массивов. Вернуть один массив со всеми элементами.
let arr=[1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
let arr1=[9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9];

let testFunction=(arr,arr1)=>{
    let result = []
    arr.forEach(item=>result.push(item));
    arr1.forEach(item=>result.push(item));
    return result
}

console.log(testFunction(arr,arr1))