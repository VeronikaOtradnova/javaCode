function foo(a, b) {
  console.log(a);
  console.log(b);
}

const obj = { a: 1, b: 2 };
foo(22, 23); //1
foo.call(obj, 22, 33); //2
foo.apply(obj, 22, 33); //3

//Можно ли так вызвать функции, почему?

// Вызов 1 - да, всё хорошо
// Вызов 2 - в целом можно, но непонятно, зачем привязывать this к функции, которая к нему не обращается
// Вызов 3 - тоже не понимаю зачем. И в apply аргументы нужно передавать массивом, а не через запятую,
// поэтому такой вызов приведёт к ошибке