import React from "react";
import data from "./in.json";
function Posts(){
    return(
        <div >
        {data.map((item) =>(
            <li>
               id:{item.id}
                <br></br>
               title:{item.title}
              <br></br>
             body:{item.body}
               
            </li>
        
      
         ))}
         </div>
    );
}

export default Posts;