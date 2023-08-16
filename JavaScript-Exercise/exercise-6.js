/**
 * Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
 * @param array
 * @param number
 * Output: number
 * Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
 * Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9
 */
function sumOfDividedNumber(arr, num) {
  var result = arr.reduce(
    (total, value) => (value % num === 0 ? (total += value) : total),
    0
  );
  return result;
}

console.log(sumOfDividedNumber([1, 2, 3, 4, 5, 6, 7], 2));
