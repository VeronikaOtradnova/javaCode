//Что выводится в консоль?
  //[{code: 0}, {code: 3}, {code: 4}];

//Зачем здесь нужен break?
  //break нужен чтобы выйти из внутреннего цикла после того, как мы нашли в массиве first элемент, count которого равен second[k]
  //и не продолжать поиски того, что уже было найдено

//Как можно улучшить код до O(n)?


const filterArrByArr = (first, second) => {
  const newArr = [];
  const secondSet = new Set(second);

  for (let i = 0; i < first.length; i++) {
    if (secondSet.has(first[i].code)) {
      newArr.push(first[i])
    }
  }

  return newArr;
}

const a = [{code: 0}, {code: 1}, {code: 2}, {code: 3}, {code: 4}];
const b = [0, 3, 4]

console.log(filterArrByArr(a, b))