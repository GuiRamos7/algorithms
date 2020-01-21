/* 
  Given an array of integers, calculate the fractions of its elements that are positive, negative
  adn are zeros. Print the decimal value of each fraction on a new line.
*/

const numbers = [-4, 3, -9, 0, 4, 1];
const n = numbers.length;
let numsPositive = 0;
let numsNegative = 0;
let numsZeros = 0;

numbers.forEach(num => {
  if (num > 0) {
    numsPositive++;
  } else if (num < 0) {
    numsNegative++;
  } else {
    numsZeros++;
  }
});

console.log(`We have ${(numsPositive / n) * 100}% of positives`);
console.log(`We have ${(numsNegative / n) * 100}% of negatives`);
console.log(`We have ${(numsZeros / n) * 100}% of zeros`);
