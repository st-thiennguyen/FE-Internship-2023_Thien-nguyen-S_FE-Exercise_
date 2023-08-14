/**
 * Write a function to get a unique random array number in the specified range.
 * @param int length array
 * @param int min
 * @param int max
 * Output: new array
 * Ex: (4, 1, 10) => [3, 6, 1, 9]
 */
function getUniqueRandomArray(arrLength, min, max) {
  var result = [];
  for (let i = 0; i < arrLength; i++) {
    const item = Math.floor(Math.random() * (max - min) + 1) + min;
    var check = result.includes(item);
    if (!check) {
      result.push(item);
    } else {
      i--;
    }
  }
  return result;
}
console.log(getUniqueRandomArray(4, 1, 10));
