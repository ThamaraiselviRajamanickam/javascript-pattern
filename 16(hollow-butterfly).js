/*Problem 16: Hollow Butterfly Pattern
*        *
**      **
* *    * *
*  *  *  *
*   **   *
*   **   *
*  *  *  *
* *    * *
**      **
*        *
 */
var n=5;
for(i=1;i<=n;i++){
    var row="";
    for(j=1;j<=i;j++){
        if(j==1 || j==i){
        row+="*"}
        else{
            row+=" "
        }
    }
    for(k=1;k<=2*(n-i);k++){
        row+=" "
    }
    for(l=1;l<=i;l++){
        if(l==1 || l ==i){
        row+="*"
        }else{
            row+=" "
        }
    }console.log(row)
}
for(i=n;i>=1;i--){
    row=""
    for(j=1;j<=i;j++){
        if(j==1 || j ==i){
            row+="*"
            }else{
                row+=" "
            }
       
    }
    for(k=1;k<=2*(n-i);k++){
        row+=" "
    }
    for(l=1;l<=i;l++){
        if(l==1 || l ==i){
            row+="*"
            }else{
                row+=" "
            }
    }console.log(row)
}
