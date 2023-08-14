//Write a JavaScript function to repeat a string a specified times.
function repeatString(inputString, times) {
  var result = "";
  for (let i = 0; i < times; i++) {
    result += inputString;
  }
  console.log(result);
}
repeatString("FE", 4);
