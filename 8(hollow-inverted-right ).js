/*Problem 8: Hollow Inverted Right Triangle Pattern
*****
*   *
*  *
* * 
*  
 */
var n=5;
for(var i=1;i<=n;i++){
    var row=""
    for(var j=1;j<=n-i;j++){
        if(j==1 || j==n-i || i==1 ){
            row+="*"
        }else{
            row+=" "
        }
    }console.log(row)
}