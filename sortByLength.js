function sortByLength(arr) {
  if (!Array.isArray(arr) || !arr.every(item => typeof(item) === 'string')) {
    throw new Error('Input must be an array of strings.');
  }

  arr.sort((a, b) => a.length - b.length)

  return arr;
}