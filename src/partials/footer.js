// src/components/Footer.js

import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Our Address</h2>
        <p>123 Main Street</p>
        <p>Zurich, Switzerland</p>
        <p>Phone: +41 44 123 45 67</p>
        <p>Email: contact@ourcompany.com</p>
      </div>
      
      <div className="footer-section">
        <h2>Our Sponsors</h2>
        <div className="sponsors">
          <img src="sponsor1.png" alt="Sponsor 1" className="sponsor-logo" />
          <img src="sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
          <img src="sponsor3.png" alt="Sponsor 3" className="sponsor-logo" />
          {/* Add more sponsor logos as needed */}
        </div>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
