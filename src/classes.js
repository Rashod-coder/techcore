// AboutPage.js
import React from 'react';
import Offers from './Components/Offers';

function AboutPage() {
  return (
    <div
      className="homepage"
      style={{
        backgroundColor: '#F7FCFE',
        width: '100%',
        minHeight: '100vh',
        padding: '50px 0',
        
      }}
    >
      <h1 className="text-center display-1" style={{ fontSize: '50px', color: '#333' }}>Fall classes</h1>
      <h3 className="text-center" style={{ color: '#555', fontSize: '20px', fontWeight: 'bold'}}>These classes are offered free of cost and anyone in Grades 5-9 can sign up. Starting from September 16th.</h3>
      
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='mb-5 py-5'>
            <Offers />
            </div>
            <h2 className='mt-3 display-2' style={{fontSize: '30px'}}>Our instructor is well qualified to teach this class earning a 5 (Highest Score possible) on APCSA exam</h2>
            <h2 className='mt-3 display-2' style={{fontSize: '30px'}}>Our classes will consist of a 50 minutes of a lesson and then the remainder 30-35 minutes, we will be giving students practice problems on the topic they learnt, to help reinforce. </h2>
            <h2 className='mt-3 display-2' style={{fontSize: '30px'}}>We will also be giving a update after every session on what we covered.</h2>

            
            </div>
          <div className="col-lg-6 col-md-12 col-sm-6">
            
             <div className=' mb-5 py-5'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScchm8PZJWLRnKxpOJtME7D6PAgvE__13vhjMzPLx7oCrslzw/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>          </div>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=MDUwMWJjZjU1NDk5MTY2OGZkYjZjYjBkYjczYTM0NjE1ZGU1ZTBjMTgxOGJlODhlMDVmNjI4MzAzYWU0MGEzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
              style={{ border: 'solid 1px #777', borderRadius: '10px', width: '100%', height: '450px' }}
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
              className='mb-5'
            ></iframe>
            

          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
