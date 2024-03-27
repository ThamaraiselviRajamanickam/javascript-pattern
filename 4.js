/*Problem 4: Hollow Inverted Pyramid Pattern
*********
 *     *
  *   *
   * *
    *
 */
var rows = 5;
var Pattern = "";
for (let i = rows; i >= 1; i--) {
  for (let j = 1; j <= rows - i; j++) {
    Pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      Pattern += "*";
    } else {
      Pattern += " ";
    }
  }
  for (let j = 1; j <= rows - i; j++) {
    Pattern += " ";
  }
  Pattern += "\n";
}
console.log(Pattern);



