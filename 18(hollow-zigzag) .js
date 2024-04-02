/*
Problem 18: Hollow Zigzag Pattern
*        *
 *      * 
  *    *  
   *  *   
    **    
 */
var n=5;
for(var i=n;i>=1;i--){
   var row=""
   for(var j=1;j<=n-i;j++){
      row+=" "
   }for( var k=2;k<=2*i-1;k++){
      if(k==2 ||k==2*i-1){
        row+="*"
      }else{
         row+=" "
      }
   }console.log(row)
}