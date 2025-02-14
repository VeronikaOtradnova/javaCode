function getUniqueNotBySet(arr) {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');

  return arr.filter((item, index) => arr.indexOf(item) === index);
}