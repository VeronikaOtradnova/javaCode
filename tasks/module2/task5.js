function moreThanNByThree(nums) {
  let cand1 = null;
  let count1 = 0;

  let cand2 = null;
  let count2 = 0;

  for (let num of nums) {
    if (num === cand1) {
      count1++;
    } else if (num === cand2) {
      count2++;
    } else if (!count1) {
      cand1 = num;
      count1 = 1;
    } else if (!count2) {
      cand2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = count2 = 0;

  for (let num of nums) {
    if (num === cand1) {
      count1++;
    } else if (num === cand2) {
      count2++;
    }
  }

  const result = [];
  const tmp = Math.floor(nums.length/3);

  if (count1 > tmp) result.push(cand1);
  if (count2 > tmp) result.push(cand2);

  return result;
}

console.log(moreThanNByThree([3,2,3])) //[3]
// console.log(moreThanNByThree([1])) //[1]
// console.log(moreThanNByThree([1,2])) //[1,2]


function moreThanNByThree2(nums) {
  let cand1 = null;
  let cand2 = null;

  let count1 = 0;
  let count2 = 0;

  for (let num of nums) {
    if (num === cand1) {
      count1++;
    } else if (num === cand2) {
      count2++;
    } else if (!count1) {
      cand1 = num;
      count1 = 1;
    } else if (!count2) {
      cand2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = count2 = 0;

  for (let num of nums) {
    if (num === cand1) {
      count1++;
    } else if (num === cand2) {
      count2++;
    }
  }

  const result = [];
  const tmp = Math.floor(nums.length/3);

  if (count1 > tmp) result.push(cand1);
  if (count2 > tmp) result.push(cand2);

  return result;
}