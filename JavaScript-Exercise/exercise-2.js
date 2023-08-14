// Write a JavaScript function to count the occurrence of a substring in a string.
function countOccurrence(inputString, subString) {
  var result = inputString
    .split(" ")
    .filter((out) => out.toLowerCase() === subString);
  console.log(result.length);
}
countOccurrence("The quick brown fox jumps over the lazy dog", "the");
