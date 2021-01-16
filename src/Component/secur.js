
import React from 'react';

    const firstName = prompt("type your first name");

    function Secu() {
      return (
        <div>
          <p> Hello {firstName || "Anonymous"} </p>
          <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
          {!firstName && (
            <form>
              <p> Type your name here </p>
              <input type="text"  />
              <button onclick="{firstName}">valider </button>
            </form>
          )}
        </div>
      );
    }
 
export default Secu ;
