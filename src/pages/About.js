import React from "react";
import data from "./info.json";
import aboutimage from "../images/about.png";
import "./About.css";
function About(){
    return(
        <div id="about" >
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipising elit.Ipsum is the best</p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src= {aboutimage} />
            </div>
         </div>
    );
  
}

export default About;