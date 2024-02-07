import React from 'react';
import pic01 from './pic01.jpg';

function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${pic01})`, backgroundSize: 'cover', height: '100vh', padding: '20px' }}>
        <br />
        <br />
        <h1>Our Mission: Provide Affordable Computers to Schools</h1>
        <p>TechCore is on a mission to bridge the digital divide by providing affordable computers to schools. <br />
          We believe that every student deserves access to technology, and we're working hard to make that a reality.</p>
        <div style={{ backgroundColor: 'white', padding: '10px', border: '2px solid black', borderRadius: '20px', width: '20%', margin: '20px auto' }}>
          <p style={{ fontWeight: 'bold' }}>Our Solution:</p>
          <p>
            We understand that every school can't afford computers for every student. <br />
            That's why we want to donate used laptops to schools so every student has access to technology in the classroom.
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '10px', border: '2px solid black', borderRadius: '20px', width: '20%', margin: '20px auto' }}>
          <p style={{ fontWeight: 'bold' }}>TechCore in the Community :</p>
          <p>
            We're proud to be a part of the community and give back in any way we can. Hosting Computer Donation Drives, raising money to purchase computers.
          </p>
        </div>
     
    </div>
  );
}

export default HomePage;
