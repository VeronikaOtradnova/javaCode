function runInOrder(functions, delays) {
  if (!Array.isArray(functions) || !functions.length || functions.some(f => typeof(f) !== 'function')) {
    throw new Error('functions must be an array of functions');
  } else if (!Array.isArray(delays) || !delays.length || delays.some(d => typeof(d) !== 'number')) {
    throw new Error('delays must be an array of numbers');
  } else if (functions.length > delays.length) {
    throw new Error('functions and delays must be the same length');
  }

  let p = Promise.resolve();

  functions.forEach((func, index) => {
    p = p
    .then(() => new Promise(resolve => setTimeout(resolve, delays[index])))
    .then(() => func())
  })

  return p;
}


const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays); 