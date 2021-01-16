import React from 'react';
import imageUrl from "./roi.jpg";

const Test=()=> {
    let firstName = "Wissem";
    let lastName = "Ayadi";
      // let imageUrl="../roi.jpg";
    return (
      <div>
        <img src={imageUrl} className="my-profile" alt='Wess'/>
       
        <p>
          {firstName} {lastName} 
        </p>
      
      </div>
    );
   }
   export default Test; 