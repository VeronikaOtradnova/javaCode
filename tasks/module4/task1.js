//Задачка
//  Дана строка(возможно пустая), состоящая из буква A-Z: AAAABBBCCCCEEAA.. 
// Нужно Написать функцию RLE, которая на выходе даст строку вида: A4B3C4E2A2... 

// Пояснение Если символ встречается один раз, он остается без изменений, 
// если более то остается одна буква и добавляется количество ей повторений

function rle(str) {
  if (!str.length) return str;

  let result = [];
  let current = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      result.push(current, count > 1 ? count : '');
      current = str[i];
      count = 1;
    }
  }
  
  result.push(current, count > 1 ? count : '');

  return result.join('');
}

console.log(rle('AAAABBBCCCCEEAA')); //A4B3C4E2A2