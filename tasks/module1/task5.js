//Написать функцию list, которая принимает массив объектов с полем ‘name’ 
// и возвращает массив строк с содержанием поля name каждого из объектов в изначальном массиве.

function list(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
  if (!arr.length || arr.some(obj => !(obj instanceof Object))) throw new Error('Argument must be an array of objects');
  if (arr.some(obj => !obj.name && obj.name !== '')) throw new Error('Arr elements must contain a field "name"');
  if (arr.some(obj => typeof(obj.name) !== 'string' )) throw new Error('Name must be a string');
  
  return arr.map(obj => obj.name);
}