
import React, { useState } from 'react';

import '../css/navbar.css';

const Navbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/home">
          <span className="label">Home</span>
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
