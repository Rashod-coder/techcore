import React from 'react';
import pic01 from './pic01.jpg';

function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${pic01})`, backgroundSize: 'cover', height: '175vh', padding: '20px' }}>
        <br />
        <br />
        <h1 style={{ fontSize: '100px' }}>TechCore:</h1>
        <p style={{ fontSize: '60px' }}>Helping Schools Bridge the Digital Divide through donating computers</p>
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
      
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ backgroundColor: 'black', padding: '20px', border: '2px solid black', borderRadius: '20px', width: '40%', margin: '20px auto' }}>
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Our Solution:</p>
            <p style={{ fontSize: '24px', color: 'white' }}>
              We understand that every school can't afford computers for every student. <br />
              That's why we want to donate used laptops to schools so every student has access to technology in the classroom.
            </p>
          </div>
          <div style={{ backgroundColor: 'black', padding: '20px', border: '2px solid black', borderRadius: '20px', width: '40%', margin: '20px auto' }}>
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>TechCore in the Community :</p>
            <p style={{ fontSize: '24px', color: 'white' }}>
              We're proud to be a part of the community and give back in any way we can. Hosting Computer Donation Drives, raising money to purchase computers.
            </p>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
