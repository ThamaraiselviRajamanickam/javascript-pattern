/*Problem 3: Inverted Pyramid Pattern
 *********
 *******
 *****
 ***
 *
 */
//  var rows = 5;
//  var Pattern = "";
//  for (let i = rows; i >= 1; i--) {
//    for (let j = 1; j <= rows - i; j++) {
//      Pattern += " ";
//    }
//    for (let k = 1; k <= 2 * i - 1; k++) {
//      Pattern += "*";
//    }
//    Pattern += "\n";
//  }
//  console.log(Pattern);
var n = 5;
for(i=1;i<=n;i++){
  var row=""
  for(j=1;j<=n-i;j++){
    row+="*";
  }
  
  console.log(row)
}
