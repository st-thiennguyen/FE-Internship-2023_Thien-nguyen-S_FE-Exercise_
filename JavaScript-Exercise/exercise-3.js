/**
 *  Write a JavaScript function to truncate a string to a certain number of words.
 * @param {*} inputString the string that used for input
 * @param {*} number the number to count the string start ?
 * @returns new string
 * Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"
 */

function trucateString(inputString, number) {
  let arrString = inputString.split(" ");
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(arrString[i]);
  }
  return result.join(" ");
}

console.log(trucateString("The quick brown fox jumps over the lazy dog", 4));
