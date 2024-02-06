import React from 'react';

function ContactPage() {
  return (
    <div style={{ backgroundColor: '#9999A1', height: '100vh' }}>
      <h1>Contact Page</h1>
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
