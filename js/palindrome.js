function getIsPrintableAscii(s) {
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i)
    if (code < 32 || code > 126) {
      return false;
    }

    return true;
  }
}

function getIsPalindrome(s) {
  if (typeof(s) !== 'string' || s.length < 1 || s.length > 2 * 105 || !getIsPrintableAscii(s)) throw new Error('s is not valid');

  const cleanS = s.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
  const cleanSReversed = [...cleanS].reverse().join('');

  if (cleanS === cleanSReversed) {
    return true;
  } else {
    return false;
  }
}