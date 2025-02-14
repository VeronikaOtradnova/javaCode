function promiseAll(promises: Promise<any>[]):Promise<any[]> {
  return new Promise((res, rej) => {
    if (!Array.isArray(promises)) {
      return rej(new TypeError('Promises must be an array'))
    }

    //создаём массив для результатов и счётчик
    const results: any[] = [];
    let count: number = 0;

    //пробегаемся по всем промисам из массива
    promises.forEach((promise, index) => {
      //оборачиваем promise в промис на случай если это не промис
      Promise.resolve(promise)
      .then(result => {
        results[index] = result;
        count++;

        if (count === promises.length) {
          return res(results)
        }
      })
      .catch(err => {
        return rej(err)
      })
    })
  })
}

const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
const promiseB = Promise.resolve("a");
const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
const promiseD = new Promise((res, rej) =>
  setTimeout(() => rej("error"), 1000)
);

Promise.all([promiseA, promiseB, promiseC]).then(console.log);
promiseAll([promiseA, promiseB, promiseC]).then(console.log);
Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
promiseAll([promiseA, promiseB, promiseD]).catch(console.error);