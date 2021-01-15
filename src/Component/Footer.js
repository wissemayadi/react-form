import { removeData } from 'jquery';
import React from 'react'


// const FooTer=()=> {
//     return (
//     <div>
  
//   <p>hello</p>




//     </div>
//     )
// }

function Appi(){

  function createForm() {
   let input = <p>Copyright created by wissem</p>;
  
   return (
     <form>
       {input}
 
     </form>
   );
 }
 return <div style={{backgroundColor:'skyBlue'}}>{createForm()}</div>;
}
// export default FooTer ;
export default Appi ;
