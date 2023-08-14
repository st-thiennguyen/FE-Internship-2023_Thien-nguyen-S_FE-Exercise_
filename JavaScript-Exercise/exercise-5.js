/**
 *  Write a function to generate a random hexa color code.
 * Input: ()
 * Output: string
 * Ex: () => #1A7B9D
 */
function generateRandomHexColor() {
  var regex = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    const character = regex[Math.floor(Math.random() * 16)];
    color += character;
  }
  return color;
}
console.log(generateRandomHexColor());
