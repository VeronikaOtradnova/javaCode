function isValidParentheses(str) {
  if (typeof(str) !== 'string') throw new Error('str must be a string');
  if (str.length < 1 || str.length > 104) throw new Error('str length must be from 1 to 104');
  if (!/^[()\[\]{}]*$/.test(str)) throw new Error('string must contain only ()[]{} characters');
  if (str.length % 2 === 1) return false;

  const arr = str.split('');

  for (let i = 0; i < arr.length; i += 2) {
    if (/^[)\]}]*$/.test(arr[i])) return false;

    switch (arr[i]) {
      case '(':
        if (arr[i+1] !== ')') return false;
        break;
      case '[':
        if (arr[i+1] !== ']') return false;
        break;
      case '{': 
        if (arr[i+1] !== '}') return false;
        break;
    }
  }

  return true
}