import React from 'react';
import TechLogo from './Assets/Tech.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-dark shadow-lg" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <a href="/" className='navbar-brand text-white'>
          Techcore
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="sidebar offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: 'rgba(73, 105, 191, 0.85)', backdropFilter: 'blur(10px)' }}>
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a href='/' className="text-white" style={{ textDecoration: 'none' }}>Techcore</a></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto"> {/* Use ms-auto to align items to the right */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/about" style={{ fontSize: '20px', fontFamily: 'Oxygen', textShadow: '1px 1px 2px black', margin: '10px' }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact" style={{ fontSize: '20px', fontFamily: 'Oxygen', textShadow: '1px 1px 2px black', margin: '10px' }}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://hcb.hackclub.com/donations/start/techcore" style={{ fontSize: '20px', fontFamily: 'Oxygen', textShadow: '1px 1px 2px black', margin: '10px' }}>Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/classes" style={{ fontSize: '20px', fontFamily: 'Oxygen', textShadow: '1px 1px 2px black', margin: '10px' }}>Summer Classes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
