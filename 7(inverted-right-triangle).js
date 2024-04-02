/*Problem 7: Inverted Right Triangle Pattern
 *****
 ****
 ***
 **
 *
 */
var n = 5;
for (i = 0; i <= n; i++) {
  var row = "";
  for (var j = 1; j <=n-i; j++) {
    row += "*";
  }
  console.log(row);
}
