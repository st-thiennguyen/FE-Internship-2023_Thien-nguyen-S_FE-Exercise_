/**
 * Write a JavaScript function to truncate a string to a certain number of words.
 * @param string
 * @param number
 * Output: new string
 * Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"
 */

function trucateString(inputString, number) {
  var arrString = inputString.split(" ");
  var result = [];
  for (let i = 0; i < number; i++) {
    result.push(arrString[i]);
  }
  return result.join(" ");
}

console.log(trucateString("The quick brown fox jumps over the lazy dog", 4));
