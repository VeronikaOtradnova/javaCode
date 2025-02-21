console.log(1);

const a = new Promise((resolve, reject) => resolve(console.log(2)));

setTimeout(() => console.log(4), 0);

a.then((res) => console.log(3));

console.log(5);

//1
//2
//5
//3
//4