import React from 'react';

function Navbar(){

    return (
<>
<header>
    <div className="container">
      <nav className="nav">
        <a href="#" className="logo">BARBER<br></br><span className='logo-span'>Hair Salon</span></a>
        <div className="nav-container">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
                <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/appointment">Appointment</a></li>
                        <li><a href="/contact">Contact</a></li>
          </ul>
          <button className='btn-appointment'>Appointment</button>
        </div>
      </nav>
    </div>
    </header>
</>
    )
}
export default Navbar;