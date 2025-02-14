function countSymbols(s) {
  if (typeof(s) !== 'string') throw new Error('s is not valid');

  let unique = [];

  for (let i = 0; i < s.length; i++) {
    const symbol = s.charAt(i);
    const uniqueSymbolObj = unique.find(item => item.value === symbol);

    if (!uniqueSymbolObj) {
      unique.push({
        value: symbol,
        count: 1,
      })
    } else {
      unique = [...unique.filter(item => item.value !== symbol), {
        value: symbol,
        count: uniqueSymbolObj.count + 1,
      }]
    }
  }

  let resultArr = [];
  unique.forEach(item => {
    resultArr.push(item.value, item.count)
  })

  return resultArr.join('');
}