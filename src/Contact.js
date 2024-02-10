import React from 'react';
import pic01 from './pic2.jpg';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 

function ContactPage() {
  return (
    <div style={{
      backgroundImage: `url(${pic01})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        textAlign: 'center',
      }}>
        <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px' }}>Connect With Us</h1>
        <p style={{ color: 'white', fontSize: '1rem' }}>Follow us on Instagram or send us an email for inquiries and updates.</p>
      </div>

      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <a href="https://www.instagram.com/projectechcore/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
          <FaInstagram style={{ fontSize: '2rem' }} />
          <span style={{ marginLeft: '10px', fontSize: '1rem' }}>Instagram</span>
        </a>

      </div>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <a href="mailto:project.techcore@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
          <FaEnvelope style={{ fontSize: '2rem' }} />
          <span style={{ marginLeft: '10px', fontSize: '1rem' }}>Email</span>
        </a>

      </div>
      
    </div>
  );
}

export default ContactPage;
