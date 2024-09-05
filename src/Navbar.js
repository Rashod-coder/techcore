import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="container">
        <a href="/" className="navbar-brand text-white" style={{ fontFamily: 'Oxygen', fontSize: '24px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
          Techcore
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: 'black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel" style={{ fontFamily: 'Oxygen', fontSize: '24px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              <a href="/" className="text-white text-decoration-none">Techcore</a>
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/team" style={{ fontSize: '18px', fontFamily: 'Oxygen', margin: '10px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://hcb.hackclub.com/donations/start/techcore" style={{ fontSize: '18px', fontFamily: 'Oxygen', margin: '10px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/classes" style={{ fontSize: '18px', fontFamily: 'Oxygen', margin: '10px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Fall Classes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
