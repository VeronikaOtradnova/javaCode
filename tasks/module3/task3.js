//Дан массив чисел. Известно, что все числа разные, кроме двух. Как найти дублированное значение?

function findDuplicate(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1;
}