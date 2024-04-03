/*Problem 21: Fibonacci Pattern
1
1 1
1 1 2
1 1 2 3
1 1 2 3 5
 */
// var n=5;
// var row=""
// for(var i=1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//             row+=j
        
//     }
//     row+="\n"
// }console.log(row)
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += n;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);

// var n=5;
// let  row=""
// for(var i=1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//         row+=i;
//     }
//     row+="\n"
// }console.log(row)



// var n=5;
// var fibPrev=0;
// var fibCurr=1;
// for(i=1;i<=n;i++){
//     var row=""
//     for(var j=1;j<=i;j++){
//         row+= fibCurr + " "
//     }
//     var fibNext = fibPrev + fibCurr;
//     fibPrev = fibCurr;
//     fibCurr = fibNext;
//     console.log(row)
// }

let n = 5;
let a = 1, b = 1;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += a + " ";
        let sum = a + b;
        a = b;
        b = sum;
    }
    a = 1;
    b = 1;
    console.log(row);
}