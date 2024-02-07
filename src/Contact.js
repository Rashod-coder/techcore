import React from 'react';
import pic01 from './pic01.jpg';

function ContactPage() {
  return (
    <div style={{ backgroundImage: `url(${pic01})`, backgroundSize: 'cover', height: '100vh', padding: '20px' }}>
      <br/>
      <br/>
      <h1>Socials/Contacts:</h1>
      <p>This is the Contact Page of our application.</p>
      <p>It provides information about our socials and how to reach out to us.</p>
      
      {/* Instagram link */}
      <a href="https://www.instagram.com/" target="_blank">
        Follow us on Instagram
      </a>
      <br />
      <br      />
      <a href="https://nextdoor.com/" target="_blank">
        Check our updates on nextdoor
      </a>
      <br  />
      <br  />
      <a href="https://www.gofundme.com/f/schools-in-need-of-computers" target="_blank" rel="noopener noreferrer">GoFundme to Donate</a>
    </div>
  );
}

export default ContactPage;
