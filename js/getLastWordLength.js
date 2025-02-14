function getLastWordLength(str) {
  if (typeof(str) !== 'string') throw new Error('str must be a string');
  if (str.length < 1 || str.length > 104) throw new Error('str length must be from 1 to 104');
  if (!/^[A-Za-z ]*$/.test(str)) throw new Error('str must contain only Latin characters and spaces');
  if (!str.trim().length) throw new Error('str must contain at least one word');

  const wordsArr = str.split(' ');
  const lastWord = wordsArr[wordsArr.length -1].trim();

  return lastWord.length;
}