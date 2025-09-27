import React from 'react';


function Appointment() {
  return (
    <div className="appointment-section">
      <div className="appointment-container">
        
        {/* Left Image */}
        <img 
          src="https://codewithsadee.github.io/barber/assets/images/appoin-banner-1.jpg" 
          alt="Left Banner" 
          className="img-cover"
        />

        {/* Center Content */}
        <div className="appointment-content">
          <h2>MAKE APPOINTMENT</h2>
          <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
          
          <form className="appointment-form">
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option value="">Select Category</option>
              <option value="haircut">Haircut</option>
              <option value="shaving">Shaving</option>
            </select>
            <input type="date" />
            <textarea placeholder="Write Message"></textarea>
            <button type="submit" className="appointment-btn">APPOINTMENT NOW →</button>
          </form>
        </div>

        {/* Right Image */}
        <img 
          src="https://codewithsadee.github.io/barber/assets/images/appoin-banner-2.jpg" 
          alt="Right Banner" 
          className="img-cover"
        />
      </div>
    </div>
  );
}

export default Appointment;
