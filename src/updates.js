import React from 'react';
import pic01 from './pic01.jpg';

function Updates() {
  const backgroundImageStyle = {
    backgroundImage: `url(${pic01})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
    padding: '30px',
  };

  const horizontalLineStyle = {
    width: '100%', 
    margin: '20px 0', 
    borderTop: '2px solid black',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={{ padding: '20px' }}>
        
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
      <hr style={horizontalLineStyle} /> 
    </div>
  );
}

export default Updates;
