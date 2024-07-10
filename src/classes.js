// AboutPage.js
import React from 'react';
import background from './Assets/carlos-torres-MHNjEBeLTgw-unsplash.jpg'; 
import Offers from './Components/Offers';
import Sign from './Components/Sign';
import './About.css';

function AboutPage() {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '90vh',
        padding: '50px 0',
        
      }}
    >
      <br></br><br></br>
      <h1 className="text-center" style={{ fontSize: '50px', color: '#333' }}>Summer classes</h1>
      <h3 className="text-center" style={{ color: '#555', fontSize: '20px', fontWeight: 'bold'}}>These classes are offered free of cost and anyone in Grades 5-9 can sign up. Starting from July.</h3>
      
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className='mb-5'>
            <Offers />
            </div>
            <div className='mt-5'>
            <Sign />
            </div>
            <div className='mt-4 mb-4'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScchm8PZJWLRnKxpOJtME7D6PAgvE__13vhjMzPLx7oCrslzw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>          </div>

            </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showPrint=0&showTabs=0&src=MDUwMWJjZjU1NDk5MTY2OGZkYjZjYjBkYjczYTM0NjE1ZGU1ZTBjMTgxOGJlODhlMDVmNjI4MzAzYWU0MGEzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
              style={{ border: 'solid 1px #777', borderRadius: '10px', width: '100%', height: '450px' }}
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
