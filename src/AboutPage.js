import React from 'react';
import websiteImage from './website.jpg'; // Import the image

function AboutPage() {
  return (
    <div style={{
      backgroundImage: `url(${websiteImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white' // Set text color to white
    }}>
      <h1>About Page</h1>
      <p>This is the About page of our application.</p>
      <p>It provides information about our application.</p>
    </div>
  );
}

export default AboutPage;
