import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Newsletter */}
      <div className="newsletter">
        <h2 className="footer-logo">BARBER <span>Hair Salon</span></h2>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter Your Email" />
          <button>SUBSCRIBE NOW →</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Our Services</li>
            <li>Meet Our Team</li>
            <li>Our Portfolio</li>
            <li>Need A Career?</li>
            <li>News & Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>SERVICES</h3>
          <ul>
            <li>Hair Cutting</li>
            <li>Shaving & Design</li>
            <li>Hair Colors</li>
            <li>Beauty & Spa</li>
            <li>Body Massages</li>
          </ul>
        </div>

        {/* Recent News */}
        <div className="footer-col">
          <h3>RECENT NEWS</h3>
          <div className="news-item">
            <img
              src="https://codewithsadee.github.io/barber/assets/images/blog-1.jpg"
              alt="news"
                className="img-cover"
            />
            <div>
              <p>The beginners guide to Henna Brows in Brisbane</p>
              <span>25 AUGUST 2022</span>
            </div>
          </div>
          <div className="news-item">
            <img
              src="https://codewithsadee.github.io/barber/assets/images/blog-2.jpg"
              alt="news"
                className="img-cover"
            />
            <div>
              <p>How do I get rid of unwanted hair on my face?</p>
              <span>25 AUGUST 2022</span>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <h3>CONTACT US</h3>
          <p><FaMapMarkerAlt /> 7528 Roberts Ave. Palm Bay, FL 32907</p>
          <p><FaPhoneAlt /> +012 (345) 67 89</p>
          <p><FaClock /> Sun - Friday, 08 am - 09 pm</p>
          <p><FaEnvelope /> support@gmail.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 <span>CodewithAP</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
