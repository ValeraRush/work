let array = [3,4,3,42,34,5,6,754,4];

TestFunction = (arr, val) => {
     array.forEach((value, index) => {
          if(value === val){
               console.log(value)
          }
     });

}

console.log(TestFunction(array));
