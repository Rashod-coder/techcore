// NavigationBox.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBox() {
  return (
    <div className="navigation-box">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blue">Blue Page</Link></li>
      </ul>
    </div>
  );
}

export default NavigationBox;
