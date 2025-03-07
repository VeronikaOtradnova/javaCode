function doSomthing(array, index) {
  array[index].name = 'Fedya';
}

const people = [
  {
    id: 1,
    name: 'Vasya',
  },
  {
    id: 2,
    name: 'Petya'
  }
];

const person = people[0];
person.name = 'Dasha';
doSomthing(people, 0);
console.log(person);
console.log(people);

//Что выведет в консоль, почему?

// {
//   id: 1,
//   name: 'Fedya',
// },

// [
//   {
//     id: 1,
//     name: 'Fedya',
//   },
//   {
//     id: 2,
//     name: 'Petya'
//   }
// ]

// потому что person и people[0] ссылаются на один и тот же объект в памяти.
// когда мы вносим изменения в person или people[0], мы изменяем один и тот же объект