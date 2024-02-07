// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <a href="https://www.gofundme.com/f/schools-in-need-of-computers" target="_blank" rel="noopener noreferrer">Donate</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
