/**
 * Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
 * @param array
 * @param number
 * Output: number
 * Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
 * Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9
 */
function sumOfDividedNumber(arr, num) {
  var result = 0;
  for (const value of arr) {
    if (value % num === 0) {
      result += value;
    }
  }
  console.log(result);
}
sumOfDividedNumber([1, 2, 3, 4, 5, 6, 7], 3);
