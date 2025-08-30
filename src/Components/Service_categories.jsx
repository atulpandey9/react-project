import React from 'react';
import { FaShower, FaSpa, FaPalette, FaCut } from "react-icons/fa";  
import { GiRazor, GiHairStrands } from "react-icons/gi";  

function Service_categories({ icon: Icon, title, text,index ,button}) {
  return (
    <div className="grid-item">
      <div className="icon">
        <FaCut key={index} size={40}/>     
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Service_categories;
