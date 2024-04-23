import React from 'react';
import TechLogo from './Assets/Tech.png';
import './Navbar.css'; // Import CSS file for styling


const Navbar = ({ }) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container ms-3"> {/* Add margin-left utility class "ms-3" */}
          <a href="/" className='navbar-brand'>
            <img src= {TechLogo} alt="Techcore" style={{ maxWidth: '100%', maxHeight: '100px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Offcanvas Sidebar */}
          <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* Offcanvas Header */}
            <div className="offcanvas-header text-white border-bottom"> 
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a href='/'>Techcore</a></h5>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            {/* Offcanvas Body */}
            <div className="offcanvas-body">
              {/* Navigation Links */}
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ms-5">
                <li className="nav-item mx-2">                
                <a class="nav-link" href="/about" style={{fontSize:'26px'}}>About</a>

                </li>
                <li className="nav-item mx-2">
                <a class="nav-link" href="/contact" style={{fontSize:'26px'}}>Contact</a>

                </li>
                <li className="nav-item mx-2">
                <a class="nav-link" href="https://hcb.hackclub.com/donations/start/techcore" style={{fontSize:'26px'}}>Donate</a>
                </li>
                <li className="nav-item mx-2">
                <a class="nav-link" href="/classes" style={{fontSize:'26px'}}>Summer Classes</a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;