/**
 * Write a function to get a unique random array number in the specified range.
 * @param int length array
 * @param int min
 * @param int max
 * Output: new array
 * Ex: (4, 1, 10) => [3, 6, 1, 9]
 */
function getUniqueRandomArray(arrLength, min, max) {
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    let unique = true;
    const item = Math.floor(Math.random() * (max - min) + 1) + min;
    for (const value of result) {
      if (value === item) {
        unique = false;
        i--;
      }
    }
    if (unique) {
      result.push(item);
    }
  }
  return result;
}
console.log(getUniqueRandomArray(4, 1, 10));
