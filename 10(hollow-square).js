/*Problem 10: Hollow Square Pattern
*****
*   *
*   *
*   *
*****
 */
var n=5;
for(var i=1;i<=n;i++){
    var row=""
    for(var j=1;j<=n;j++){
        if(j==1 || j ==n || i==1 || i==n){
            row+="*"
        }else{
            row+=" "
        }
    }console.log(row)
}



// Certainly! Let's break down the condition if(j==1 || j ==n || i==1 || i==n):

// j==1: This condition checks if the current column (j) is the first column. If it is, it means we are at the left edge of the pattern, so an asterisk should be printed.
// j==n: This condition checks if the current column (j) is the last column. If it is, it means we are at the right edge of the pattern, so an asterisk should be printed.
// i==1: This condition checks if the current row (i) is the first row. If it is, it means we are at the top edge of the pattern, so an asterisk should be printed.
// i==n: This condition checks if the current row (i) is the last row. If it is, it means we are at the bottom edge of the pattern, so an asterisk should be printed.
// By using these conditions together, the code ensures that asterisks are printed at the edges of the pattern (top, bottom, left, and right), while spaces are printed in the interior. This results in a box-like pattern with asterisks forming the border.