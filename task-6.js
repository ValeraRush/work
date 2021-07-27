//В функцию передаем коллекцию и значение. По результату выполнения вывести все объекты массива, конкретное свойство ('name', 'age' и тд), которых равно второму параметру
let collectionArr = [
    {
        name: 'Ivan',
        age: 24,
    },
    {
        name: 'Vova',
        age: 23
    },
    {
        name: 'Ivan',
        age: 24
    },
    {
        name: 'Alexsandr',
        age: '56'
    }
];

testFunction = (arr, val) => {
    collectionArr.forEach(item => {
        if (item.name === val) {
            console.log(item)
        }
    })
}
const t = testFunction(collectionArr, 'Ivan')
console.log(t)
