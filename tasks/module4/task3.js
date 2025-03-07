// Написать функцию duplicate которая вернет список повторяющихся email'ов 

// function duplicate(list) { 
//  let result = []; //your code return result; 
// } 

// const emails = [ 'lyhxr@example.com', 'lyhxr@example.com', 'masha@example.com', 'fedya@example.com', 'katya@example.com', 'fedya@example.com', 'katya@example.com', 'lyhxr@example.com', ]; 
// const val = duplicate(emails); 
// console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com' ]

function duplicate(list) { 
  let count = {};

  list.forEach(email => {
    count[email] = (count[email] || 0) + 1;
  })

  return Object.keys(count).filter(email => count[email] > 1);
} 

const emails = [ 'lyhxr@example.com', 'lyhxr@example.com', 'masha@example.com', 'fedya@example.com', 'katya@example.com', 'fedya@example.com', 'katya@example.com', 'lyhxr@example.com', ]; 
const val = duplicate(emails); 
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com' ]