//Написать решение https://static.itconsult-web.ru/file/1160/1710326906440.png

function concatenateValues(arr) {
  return [...new Set(
    arr
    .filter(item => !item.expired) //отсеиваем просроченные
    .sort((a, b) => a.order - b.order) //сортировка по возрастанию
    .map(item => item.value.split('').reverse().join('')) //получаем массив из перевёрнутых value
    .join('') //собираем их в строку, чтобы передать в сет и избавиться от повторов
  )].join('') //собираем сет обратно в строку
}

const input = [
  { expired: false, order: 4, value: 'abcd' },
  { expired: true, order: 2, value: 'qwer' },
  { expired: false, order: 1, value: 'xyz1' },
  { expired: false, order: 3, value: 'abx2' },
]

console.log(concatenateValues(input))