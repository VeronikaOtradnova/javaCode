setTimeout(() => {
  for (let i = 0; i < 100000000; i++) {
    //anything 
  }

  console.log("1 timer");
}, 1000);

setTimeout(() => {
  console.log("2 timer");
}, 1000);

setTimeout(() => {
  console.log("3 timer");
}, 1000);

//Что выведет в консоль, почему?

//Вообще 
// 1 timer
//2 timer
//3 timer
//но скорее всего браузер зависнет при выполнении цикла из колбэка первого таймаута