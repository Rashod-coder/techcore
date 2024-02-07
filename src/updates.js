import React from 'react';
import pic01 from './pic01.jpg';

function Updates() {
  const backgroundImageStyle = {
    backgroundImage: `url(${pic01})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set minimum height to fill the viewport
    padding: '30px',
  };

  const horizontalLineStyle = {
    width: '100%', // Set the width of the horizontal line to 100%
    margin: '20px 0', // Adjust margin for spacing
    borderTop: '2px solid black', // Increase the thickness and style of the line
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={{ padding: '20px' }}>
        {/* Add your content here */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />    
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr style={horizontalLineStyle} /> {/* Horizontal line */}
    </div>
  );
}

export default Updates;
