import React from 'react';
import pic01 from './pic01.jpg'; 

function AboutPage() {
  return (
    <div style={{
      backgroundImage: `url(${pic01})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white', 
      padding: '20px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'black', 
        padding: '100px', 
        border: '4px blue', 
        borderRadius: '10px', 
        textAlign: 'center', 
      }}>
        <h1>TechCore - Providing Access to Technology for Schools</h1>
        <p>
          Donating Computers to Schools
          <br /> 
          TechCore is a company that strives to provide access to technology for schools by donating used and new computers.
          <br /> 
          We believe that every student should have the opportunity to learn and grow with the help of modern technology. 
          <br />
          With the help of our donors, we are able to provide schools with the resources they need to succeed.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
