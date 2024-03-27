/*Problem 2: Hollow Pyramid Pattern
 *
 * *
 *   *
 *     *
 *********
 */

// var rows = 5;
// var Pattern = "";
// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= rows - i; j++) {
//     Pattern += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k == 1 || k == 2 * i - 1) {
//       Pattern += "*";
//     } else {
//       Pattern += " ";
//     }
//   }
//   Pattern += "\n";
// }
// console.log(Pattern);

//     *
//    * *
//   *   *
//  *     *
// *********

var n = 5;
for (let i = 1; i <= n; i++) {
  var row = "";

  for (let j = 1; j <= n - i; j++){
    row += " ";
  }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k ===(2 * i - 1)) {
        row += "*";
      } else {
        if (i == n) {
          row += "*";
        } else {
          row += " ";
        }
      }
    }

  console.log(row);
}
