/*Problem 17: Zigzag Pattern
  *        *
  *      *
  *    *
  *  *
   **
 */
// var n = 5;
// for (i=0; i < n; i++) {
//    var row=""
//    for(j=0;j<n;j++){
//       if(j===i || j===n-i-1){
//          row+="*"
//       }else{
//          row+=" "
//       }
//    }console.log(row)
// }

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
  for (let j = 0; j <= rows - i; j++) {
    Pattern += " ";
  }
  Pattern += "\n";
}
console.log(Pattern);





