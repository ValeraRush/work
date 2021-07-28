//В функцию передаем коллекцию и название ключа. По результату выполнения вывести массив значений по этому ключу всех объектов.

let collectionArr = [
    {
        name: 'Ivan',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Vladimir',
        age: 21,
        town: 'Samara'
    },
    {
        name: 'Ivan',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Vita',
        age: 21,
        town: 'Shahty'
    },
    {
        name: 'Valera',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Valera',
        age: 21,
        town: 'Spb'
    }
];

let testFunction = (arr, key) => {
    return arr.filter(elem=>elem.town===key)

}
console.log(testFunction(collectionArr,'Spb'))