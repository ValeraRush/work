let array=[4,34,4,232,4,24,4,5,235,4];
lengthFunction=(arr)=>{
     let count=0;
     array.forEach((value,index) =>{
          count=index+1
     });
     return count;
}
const t=lengthFunction(array);
console.log(t)