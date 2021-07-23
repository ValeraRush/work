let array = [3,4,3,42,34,5,6,754,4];

TestFunction = (arr, val) => {
    let count=0;
    array.forEach((value,index) => {
        count = index+1;
    });
    return count;
}
const t = TestFunction(array)
console.log(t)
