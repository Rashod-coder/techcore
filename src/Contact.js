import React from 'react';
import pic01 from './pic01.jpg';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 

function ContactPage() {
  return (
    <div style={{ backgroundImage: `url(${pic01})`, backgroundSize: 'cover', height: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>Socials/Contacts:</h1>
        <p style={{ color: 'white' }}>This is the Contact Page of our application.</p>
        <p style={{ color: 'white' }}>It provides information about our socials and how to reach out to us.</p>
      </div>

      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
    
        <a href="https://www.instagram.com/projectechcore/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaInstagram style={{ fontSize: '48px' }} /> 
        </a>
      </div>

      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <FaEnvelope style={{ fontSize: '48px', color: 'white', marginRight: '10px' }} /> 
        <a href="mailto:example@example.com" style={{ color: 'white' }}>project.techcore@gmail.com</a>
      </div>

      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <a href="https://nextdoor.com/" target="_blank" style={{ color: 'white' }}>
          Check our updates on nextdoor
        </a>
      </div>


    </div>
  );
}

export default ContactPage;
