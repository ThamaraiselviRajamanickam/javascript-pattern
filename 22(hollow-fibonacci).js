/*Problem 22: Hollow Fibonacci Pattern
1
1 1
1   2
1     3
1       5
 */
var n = 5;
var fibPrev = 0;
var fibCurr = 1;
for (let i = 1; i <= n; i++) {
  var row = "";
  for (let j = 0; j <= i ; j++) {
    if(j==1 || j==i){
    row += fibCurr  + " ";
    }else{
        row+=" "
    }
  }
 console.log(row);
 var fibNext = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = fibNext;
}
