//Написать функцию, которая преобразовывает строку в другую строку, которая включает 
// по одному разу каждый уникальный символ из входной строки плюс количество его повторений в другой строке.

//например, countSymbols(‘AAAABBCCCDDD’) => ‘A4B2C3D3’

function countSymbols(str = '') {
  if (typeof(str) !== 'string') throw new Error('str must be a string');

  let unique = [];

  for (let i = 0; i < str.length; i++) {
    const symbol = str.charAt(i);
    const uniqueSymbolObj = unique.find(item => item.value === symbol)

    if (uniqueSymbolObj) {
      uniqueSymbolObj.count += 1;
      unique = [...unique.filter(item => item.value !== symbol), uniqueSymbolObj];
    } else {
      unique.push({
        value: symbol,
        count: 1,
      })
    }
  }

  let result = '';

  unique.forEach(item => {
    result += `${item.value}${item.count}`
  })

  return result;
}