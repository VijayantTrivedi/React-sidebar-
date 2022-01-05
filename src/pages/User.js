import React from "react";
import data from "./info.json"
function User(){
  
    return(
        <>
        <div className="user">
       
        {data.map((item) =>(
            <li>
             id=   {item.id}
                <br></br>
               name = {item.name}
               <br></br>
               username={item.username}
               <br></br>
               email ={item.email}
               <br></br>
                address:
             street={item.address.street}
             <br></br>
             suite={item.address.suite}
             <br></br>
             city={item.address.city}
             <br></br>
             zipcode={item.address.zipcode}
            </li>
        
      
         ))}
        
         </div>
         </>
    );
}

export default User;