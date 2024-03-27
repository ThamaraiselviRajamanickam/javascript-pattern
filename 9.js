/*Problem 9: Square Pattern
 *****
 *****
 *****
 *****
 *****
 */
var n = 5;
for (let i = 1; i <= n; i++) {
  var row = "";
  for (let j = 1; j <= n; j++) {
    row += "*";
  }
  console.log(row);
}
