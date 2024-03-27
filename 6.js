/*Problem 6: Hollow Right Triangle Pattern
*        
**       
* *      
*  *     
*****
 */
var n=5;
for(var i=1;i<=n;i++){
    var row=""
    for(var j=1; j<=n;j++){
        if(j==1 || j==i ){
            row+="*"
        }else{
            row+=" "
        }
    }console.log(row)

}