/*Problem 25: Palindrome Pattern
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
 */
var n = 5;
for (let i = 1; i <= n; i++) {
  var row = "";
  for (let j = 1; j <= i ; j++) {
    row += j;
  }
 console.log(row);
}
