// Write a JavaScript function to count the occurrence of a substring in a string.
function countOccurrence(inputString, subString) {
  var result = inputString
    .split(" ")
    .filter((out) => out.toLowerCase() === subString);
  return result.length;
}
console.log(
  countOccurrence("The quick brown fox jumps over the lazy dog", "the")
);
