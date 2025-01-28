function sumArray(arr) {
  if (arr.some(item => typeof(item) !== 'number')) throw new Error('arr must be an array of numbers');

  return arr.reduce((acc, current) => acc + current, 0);
}