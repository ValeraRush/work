//В функцию передаем коллекцию и 2 значения. По результату выполнения вывести true, если хотя бы у одного одно свойство равно второму параметру, а другое свойство равно третьему параметру.
let collectionArr = [
    {
        name: 'Ivan',
        age: 21,
        town: 'Саратов'
    },
    {
        name: 'Vladimir',
        age: 41,
        town: 'Москва'
    },
    {
        name: 'Ivan',
        age: 31,
        town: 'Ростов-на-Дону'
    },
    {
        name: 'Vita',
        age: 56,
        town: 'Самара'
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

let testFunction = (arr, elem1, elem2, ) => {
    return arr.length === arr.filter(elem =>
        elem.age === elem1 || elem.town === elem2 ).length

}
console.log(testFunction(collectionArr, 21, 'Spb'))


