/**
 * Write a function to find the maximum sum of 2 consecutive elements in the array.
 * @param array
 * Output: number
 * Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
 * Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12
 */

function sumOfTwoConsecutive(arr) {
  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(sumOfTwoConsecutive([1, 2, 3, 7, 5, 6, 4]));
