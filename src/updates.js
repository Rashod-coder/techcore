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
    width: '10000px', 
    margin: '20px 0', 
    borderTop: '5px solid white', 
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={{ padding: '20px' }}>
        <h1>Progess:</h1>
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
