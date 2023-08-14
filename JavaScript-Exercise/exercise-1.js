//Write a JavaScript function to repeat a string a specified times.
function repeatString(inputString, times) {
  var result = "";
  for (let i = 0; i < times; i++) {
    result += inputString;
  }
  return result;
}
console.log(repeatString("FE", 4));
