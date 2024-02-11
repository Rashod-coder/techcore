import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#101827' }}> 
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Inspiration">Inspiration</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/Contact">Contact</Link>
          <a href="https://www.gofundme.com/f/schools-in-need-of-computers" target="_blank" rel="noopener noreferrer">Donate</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
