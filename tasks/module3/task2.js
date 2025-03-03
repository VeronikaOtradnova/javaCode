//Все числа в массиве имеют пару, кроме одного. Как найти это значение?

const findUnpairedElement = (nums) => nums.reduce((acc, num) => acc ^ num, 0);