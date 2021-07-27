//В функцию передаем коллекцию и 2 значения. По результату выполнения вывести все объекты массива, у которых одно свойство ('name' )равно первому параметру или другое свойство ('age') равно второму параметру.
let collectionArr = [
    {
        name: 'Ivan',
        age: 24,
    },
    {
        name: 'Vladimir',
        age: 23
    },
    {
        name: 'Ivan',
        age: 24
    },
    {
        name: 'Vita',
        age: '56'
    },
    {
        name: 'Valera',
        age: 21
    },
    {
        name: 'Valera',
        age: 21
    }
];
let testFunction
testFunction = (arr, val, val2) => {
    arr.forEach(value => {
        if (value.name === val && value.age > val2) {
            console.log(value);
        }
    });
}
let t = testFunction(collectionArr, 'Valera', 18);
console.log(t);