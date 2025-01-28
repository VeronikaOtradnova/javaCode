function getUniqueValues(arr) {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');

  return [...new Set(arr)]
}