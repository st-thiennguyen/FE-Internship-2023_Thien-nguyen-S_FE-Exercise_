/**
 * Write a JavaScript function to repeat a string a specified times.
 * @param {*} inputString String input to repeat
 * @param {*} times Time that string will repeat
 * @returns String that repeated
 */

function repeatString(inputString, times) {
  let result = inputString.repeat(times);
  return result;
}
console.log(repeatString("FE", 4));
