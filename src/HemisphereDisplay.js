import React from "react";
import './Hemisphere.css';
import northernPic from "./image/NorthernHemisphere.jpg";
import southernPic from "./image/SouthernHemisphere.jpg";

const hemisphereConfig = {
  Northern: {
    text: 'it is Northern hemisphere',
    picture: northernPic
  },
  Southern: {
    text: 'it is Southern hemisphere',
    picture: southernPic
  }
};

const HemisphereDisplay = ({latitude}) =>{
 const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
 const {text,picture}= hemisphereConfig[hemisphere];
 return (
   <div className={hemisphere}>
     <div className='ui raised text container segment'>
       <div className='image'>
         <img src={picture} alt='hemisphere' />
       </div>
       <div className='ui teal bottom attached label'>
         <h1>{text}</h1>
       </div>
     </div>
   </div>
 );
}

export default HemisphereDisplay;