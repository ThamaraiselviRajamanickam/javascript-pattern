/*Problem 12: Hollow Rhombus Pattern
    *    
   * *   
  *   *  
 *     * 
*       * 
 *     * 
  *   *  
   * *   
    *   
 */
var n=5;
for(var i=1;i<=n;i++){
    var row=""
    for(var j=1;j<=n-i;j++){
        row+=" "
    }
    for(var k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
        row+="*";
        }else{
         row+=" "
        }
    }
    for(var l=1;l<=n-i;l++){
        row+=" "
    }console.log(row)

}
for(var i=n-1;i>=1;i--){
    row=""
    for(var j=1;j<=n-i;j++){
        row+=" "
    }
    for(var k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
        row+="*";
        }else{
         row+=" "
        }
    }
    for(var l=1;l<=n-i;l++){
        row+=" "
    }console.log(row)
}