//Написать функцию duplicate которая вернет список повторяющихся email'ов

//На портале уже есть решение этой задачи, но я подумала, почему бы не решить её таким способом, норм?
function duplicate(list) {
  const result = [];

  list.forEach((email, index) => {
    if (result.includes(email)) return;

    const double = list.find((e, i) => email === e && index !== i);

    if (double) {
      result.push(double);
    }
  })

  return result;
}

const emails = [
  'lyhxr@example.com',
  'lyhxr@example.com',
  'masha@example.com',
  'fedya@example.com',
  'katya@example.com',
  'fedya@example.com',
  'katya@example.com',
  'lyhxr@example.com',
];

const val = duplicate(emails);
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com']