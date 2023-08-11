/*
2) javascript function returns

Write a JavaScript function named findMaxNumber that takes an array of 
numbers as an argument and returns the maximum number in the array. 
If the array is empty, the function should return null.
*/

function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const numberArray = [12, 45, 6, 78, 32, 91];
const maxNumber = findMaxNumber(numberArray);
console.log(`The maximum number is: ${maxNumber}`);
