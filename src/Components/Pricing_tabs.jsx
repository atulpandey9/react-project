import React, { useState } from "react";
import { FaCut, FaSpa, FaBath, FaSmile, FaUserNinja } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";

function Pricing_tabs() {
  const categories = [
    { key: "all", icon: <FaCut />, title: "All Pricing" },
    { key: "spa", icon: <FaSpa />, title: "Beauty & Spa" },
    { key: "body", icon: <FaBath />, title: "Body Treatments" },
    { key: "face", icon: <FaSmile />, title: "Face Washing" },
    { key: "meditation", icon: <FaUserNinja />, title: "Meditations" },
    { key: "shaving", icon: <GiRazor />, title: "Shaving" },
  ];

  const services = [
    {
      category: "all",
      img: "https://codewithsadee.github.io/barber/assets/images/pricing-1.jpg",
      title: "Hair Cutting & Fitting",
      desc: "Clean & simple 30-40 minutes",
      price: "$89",
    },
    {
      category: "shaving",
      img: "https://codewithsadee.github.io/barber/assets/images/pricing-2.jpg",
      title: "Shaving & Facial",
      desc: "Clean & simple 30-40 minutes",
      price: "$45",
    },
    {
      category: "spa",
      img: "https://codewithsadee.github.io/barber/assets/images/pricing-3.jpg",
      title: "Hair Color & Wash",
      desc: "Relaxing spa hair wash & color",
      price: "$35",
    },
    {
      category: "body",
      img: "https://codewithsadee.github.io/barber/assets/images/pricing-4.jpg",
      title: "Body Massage",
      desc: "Relax with 30-40 minutes massage",
      price: "$56",
    },
    {
      category:"meditation",
      img:"https://codewithsadee.github.io/barber/assets/images/pricing-8.jpg",
      title:"Meditation and Massage",
      desc:"Clean and simple 30-40 minutes",
      price:"$74",
    },
    {
      category:"face",
      img:"https://codewithsadee.github.io/barber/assets/images/pricing-6.jpg",
      title:"Facial & Face Wash",
      desc:"Clean and simple 30-40 minutes",
      price:"$63",
    },

  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="pricing-section">
      {/* Tabs */}
      <div className="pricing-tabs">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`tab ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            <span className="icon">{cat.icon}</span>
            <span className="title">{cat.title}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="pricing-grid">
        {filteredServices.map((service, index) => (
          <div className="pricing-card" key={index}>
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing_tabs;