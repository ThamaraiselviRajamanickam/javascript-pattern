/*Problem 14: Hollow Diamond Pattern
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
for(i=1;i<=n;i++){
    var row=""
    for(j=1;j<=n-i;j++){
        row+=" "
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
            row+="*" 
        }else{
        row+=" "
    }
    }
    for(l=1;l<=n-i;l++){
        row+= " "
    }console.log(row)
}
for(i=n-1;i>=1;i--){
    var row=""
    for(j=1;j<=n-i;j++){
        row+=" "
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
            row+="*" 
        }else{
        row+=" "
    }
    }
    for(l=1;l<=n-i;l++){
        row+= " "
    }console.log(row)
}