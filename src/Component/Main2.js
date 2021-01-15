import React from 'react';

const Test=()=> {
    let firstName = "Wissem";
    let lastName = "Ayadi";
      let imageUrl="https://lh3.googleusercontent.com/proxy/_ZXCg3O0NkhZwgm3bvM3ydtrVWPMSv4Hau7qMofRu7JmhjKeeNleoh9ZXzQ0NXUDe9xZ8lKmGarp8C6ySAfnYIq5z0u8oPNhKzhN_vdKc_Ynu0lsQKo5NOCwzKWPtRMtMurs7iQIeUFOJUwGw4o-vB4P2qSpDmUfwpz53xM";
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