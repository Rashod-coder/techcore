import React, { useEffect } from 'react';
import { FaLaptop, FaHandsHelping, FaDesktop, FaUserFriends } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'; // Import Reactstrap components
import './HomePage.css';
import { Analytics } from '@vercel/analytics/react';
import Tblue from './tblue.jpg'; // Import the background image

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage" style={{ backgroundImage: `url(${Tblue})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', marginTop: '-150px' }}>
      <div style={{marginTop: '0px'}}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="row">
          <div className="col-4 text-center">
            <h1 style={{marginTop: '-20px'}}>Striving to Reduce the Digital Divide in Education.</h1>
          </div>
          <div className='col-8'> 
            <h1>Side by side text</h1>
          </div>
        </div>
        <div className='row'>
            <div className='col-4'>
              <h1></h1>
            </div>
          </div>
      </div>
      <Analytics />
    </div>
  );
}

export default HomePage;
