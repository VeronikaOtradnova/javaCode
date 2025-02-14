function isInt32(num) {
  return (num | 0) === num;
}

function isValidLength(nums) {
  if (nums.length < 1 || nums.length > 2*104) return false;
  return true;
}

function areNumbersWithinRange(nums) {
  if (nums.some(num => num > 10 || num < -10)) return false;
  return true;
}

function areNumbersWithin32Bit(nums) {
  let prefixProd = 1; // произведение префикса
  let suffixProd = 1; // произведение суффикса

  // Проверяем все префиксы
  for (let i = 0; i < nums.length; i++) {
    prefixProd *= nums[i];
    if (!isInt32(prefixProd)) return false;
  }

  // Проверяем все суффиксы
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixProd *= nums[i];
    if (!isInt32(suffixProd)) return false;
  }

  return true;
}

function getMaxProduct(arrays) {
  if (!Array.isArray(arrays)) throw new Error('Arrays must be an array');
  if (arrays.some(arr => !Array.isArray(arr)) || arrays.some(arr => arr.some(num => typeof(num) !== 'number'))) {
    throw new Error('Arrays must contain subarrays of numbers');
  }

  arrays.forEach(arr => {
    if (!isValidLength(arr)) {
      throw new Error('Incorrect length of subarrays');
    } else if (!areNumbersWithinRange(arr)) {
      throw new Error('Numbers in subarrays must be between -10 and 10');
    } else if (!areNumbersWithin32Bit(arr)) {
      throw new Error('The product of any subarray prefix or suffix must fit into a 32-bit integer');
    }
  })

  let maxProduct = 0;

  arrays.forEach(arr => {
    const product = arr.reduce((acc, item) => acc * item, 1);
    if (product > maxProduct) {
      maxProduct = product
    }
  })

  return maxProduct;
}