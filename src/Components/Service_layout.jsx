import React from "react";
import { FaShower, FaSpa, FaPalette,FaCut } from "react-icons/fa";
import { GiRazor, GiHairStrands } from "react-icons/gi";

function ServiceLayout() {
  return (
    <section className="grid">
      <div className="grid-item">
        <GiHairStrands size={40} color="#d4af37" />
        <h3>Hair Wash</h3>
        <p>Refreshing and deep clean for your hair.</p>
    <button className="service-btn">click</button>
      </div>

      <div className="grid-item">
        <FaShower size={40}  color="#d4af37"/>
        <h3>Body Wash</h3>
        <p>Relaxing body wash for complete freshness.</p>
            <button className="service-btn">click</button>
      </div>

      <div className="grid-item">
        <FaSpa size={40} color="#d4af37" />
        <h3>Beauty & Spa</h3>
        <p>Pamper yourself with our spa treatments.</p>
            <button className="service-btn">click</button>
      </div>

      <div className="grid-item">
        <GiRazor size={40}  color="#d4af37"/>
        <h3>Shaving</h3>
        <p>Classic smooth shaving experience.</p>
            <button className="service-btn">click</button>
      </div>

      <div className="grid-item">
        <FaPalette size={40}  color="#d4af37"/>
        <h3>Hair Color</h3>
        <p>Trendy and stylish hair coloring.</p>
            <button className="service-btn">click</button>
      </div>

       <div className="grid-item">
        <FaCut size={40}  color="#d4af37"/>
        <h3>Hair Cut</h3>
        <p> Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="service-btn">click</button>
      </div>
    </section>
  );
}

export default ServiceLayout;
