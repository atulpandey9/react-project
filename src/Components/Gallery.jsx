import React from "react";

function Gallery() {
  const photos = [
    {
      img: "https://codewithsadee.github.io/barber/assets/images/gallery-1.jpg",
      title: "Hair Cutting",
      text: "Barber & salone services",
    },
    {
      img: "https://codewithsadee.github.io/barber/assets/images/gallery-2.jpg",
      title: "Shaving",
      text: "Smooth shave experience",
    },
    {
      img: "https://codewithsadee.github.io/barber/assets/images/gallery-3.jpg",
      title: "Hair Color",
      text: "Trendy & stylish coloring",
    },
    {
      img: "https://codewithsadee.github.io/barber/assets/images/gallery-4.jpg",
      title: "Facial & Spa",
      text: "Relax with premium care",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div>
          <h2 className="gallery-title">LATEST PHOTO GALLERY</h2>
          <p className="gallery-subtitle">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt labore dolore magna aliqua suspendisse
          </p>
        </div>
        <button className="gallery-btn">EXPLORE MORE GALLERY →</button>
      </div>

      <div className="gallery-grid">
        {photos.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="card-overlay">
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <button className="card-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
