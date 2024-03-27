/*Problem 21: Fibonacci Pattern
1
1 1
1 1 2
1 1 2 3
1 1 2 3 5
 */
var n = 5;
for (var i = 1; i <= n; i++) {
    var row = "";
    var a = 1, b = 1; // Reset a and b for each row
    for (var j = 1; j <= i; j++) {
        row += a + " ";
        var temp = a + b;
        console.log(temp)
        a = b;
        b = temp;
    }
   // console.log(row);
}