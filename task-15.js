//В функцию передаем коллекцию. По результату выполнения вывести объект, определенное свойство которого, максимальное.
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
        age: 41,
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


let testFunction = (arr => {
    let max = arr[0]
    collectionArr.forEach(elem => {
        if (elem.age > max.age)
            max = elem
    })
    return max
})

const t = testFunction(collectionArr);
console.log(t)