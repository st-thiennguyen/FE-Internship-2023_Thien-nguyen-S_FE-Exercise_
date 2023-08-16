/**
 *  Write a JavaScript function to count the occurrence of a substring in a string.
 * @param {*} inputString string input for search
 * @param {*} subString sub string that used to keyword for search
 * @returns number of times that substring repeat in inputString
 */

function countOccurrence(inputString, subString) {
  var result = inputString.toLowerCase().split(subString).length - 1;
  return result;
}
console.log(
  countOccurrence("The quick brown fox jumps over the lazy dog", "the quick")
);
