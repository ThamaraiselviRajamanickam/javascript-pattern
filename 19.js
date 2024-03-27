/*Problem 19: Triangle Pattern
1
12
123
1234
12345
 */
var n=5;
for(i=1;i<=n;i++){
    var row=""
    for(var j=1;j<=i;j++){
        row+=j

    }
    console.log(row)
}