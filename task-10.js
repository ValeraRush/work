//10 В функцию передаем коллекцию и 2 значения. По результату выполнения вывести true, если у всех объектов одно свойство равно второму параметру, а другое свойство равно третьему параметру.
let collectionArr = [
    {
        name: 'Ivan',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Vladimir',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Ivan',
        age: 21,
        town: 'Spb'
    },
    {
        name: 'Vita',
        age: 21,
        town: 'Spb'
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

let testFunction = (arr, elem1, elem2) => {
    return arr.length === arr.filter(elem =>
        elem.age === elem1 && elem.town === elem2).length

}
console.log(testFunction(collectionArr, 21, 'Spb'))
