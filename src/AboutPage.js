import React from 'react';
import background from './Assets/smooth.jpg'; // Import the background image

function AboutPage() {
  return (
   <div className='tittle'>
    
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height: '100vh',
      marginTop: '-160px',
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
        <br />
        
        <h1>TechCore - Providing Access to Technology for Schools</h1>
        <p>
          Founded by <a href='https://rishitgupta.xyz'>Rishit Gupta</a> a high school student at Amador Valley High School.
          <br/>
          TechCore is a non profit that strives to provide access to technology for schools by donating used and new computers.
          <br /> 
          We believe that every student should have the opportunity to learn and grow with the help of modern technology. 
          <br />
          With the help of our donors, we are able to provide schools with the resources they need to succeed.
        </p>
      </div>
    </div>
    </div> 
  );
}

export default AboutPage;
