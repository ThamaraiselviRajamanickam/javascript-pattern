/*
rows: This variable likely represents the total number of rows in the pattern.
i: This variable represents the current row number within the loop.
Given these variables, let's analyze the expression 2 * (rows - i):

(rows - i): This part calculates the number of rows remaining to be printed. As i increases within the loop (since we're iterating over rows), (rows - i) decreases, indicating how many rows are left to print.
2 * (rows - i): Multiplying (rows - i) by 2 effectively doubles the value. This doubling is likely to create a mirrored effect for the pattern. As we're printing the pattern row by row, doubling the remaining rows suggests we're printing a mirrored portion of the pattern, ensuring symmetry.


Problem 15: Butterfly Pattern
*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *
k==2*i-1
 */

var n=5;
for(i=1;i<=n;i++){
    var row="";
    for(j=1;j<=i;j++){
        row+="*"
    }
    for(k=1;k<=2*(n-i);k++){
        row+=" "
    }
    for(l=1;l<=i;l++){
        row+="*"
    }console.log(row)
}
for(i=n;i>=1;i--){
    row=""
    for(j=1;j<=i;j++){
        row+="*"
    }
    for(k=1;k<=2*(n-i);k++){
        row+=" "
    }
    for(l=1;l<=i;l++){
        row+="*"
    }console.log(row)
}














// var rows=5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '*';
//     }
//     for (let k = 1; k <= 2 * (rows - i); k++) {
//         pattern += ' ';
//     }
//     for (let l = 1; l <= i; l++) {
//         pattern += '*';
//     }
//     console.log(pattern);
// }
// for (let i = rows; i >= 1; i--) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '*';
//     }
//     for (let k = 1; k <= 2 * (rows - i); k++) {
//         pattern += ' ';
//     }
//     for (let l = 1; l <= i; l++) {
//         pattern += '*';
//     }
//     console.log(pattern);
// }