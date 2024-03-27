/*Problem 1: Pyramid Pattern
    *    
   ***   
  *****  
 ******* 
*********

 */
//  var rows = 5;
//  var Pattern = "";
//  for (let n = 1; n <= rows; n++) {
//    for (let space = 1; space <= rows - n; space++) {
//      Pattern += " ";
//    }
//    for (let num = 1; num <= 2 * n - 1; num++) {
//      Pattern += "*";
//    }
//    Pattern += "\n";
//  }
//  console.log(Pattern);

//     *
//    ***
//   *****
//  *******
// *********
var n=5;
for(var i=0;i<=n;i++){
  var row="";
  for(var j=1;j<=n-i;j++){
    row+=" "
  }
  for(var k=1;k<=2*i-1;k++){
    row+="*";
  }
  for(var l=1;l<=n-i;l++){
    row+=" "
  } console.log(row)
}










// var n = 5;
// for (let i = 1; i <= n; i++) {
//   var row = "";
//   for (let j = 1; j <= n - i; j++) 
//   row += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) 
//  {
//     row += "*";
//   }
//   for (let l = 1; l <= n - i; l++) {
//     row += " ";
//   }
//   console.log(row)
// }


