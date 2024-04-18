import React, { useEffect } from 'react';
import { FaLaptop, FaHandsHelping, FaDesktop, FaUserFriends } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'; // Import Reactstrap components
import './output.css';
import { Analytics } from '@vercel/analytics/react';
import Tblue from './cesar-couto-sKuVjm0xyLY-unsplash.jpg'; // Import the background image
import laptop from './Color logo with background.png';

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage" style={{ backgroundImage: `url(${Tblue})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh', marginTop: '-150px' }}>
      <div style={{marginTop: '0px'}}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <main className="py-6 px-4 sm:p-9 md:py-10 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="flex flex-col justify-center lg:col-start-1 lg:row-start-1 lg:row-span-6">
              <h1 className="col-span-6 text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-center">Striving to reduce the Digital Divide in education</h1>
              <Analytics />
            </div>
            <div className="grid gap-8 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img src={laptop} alt="Techcore" style = {{width: '400px', height: '400px'}}className="w-300 h-300 object-cover rounded-lg lg:col-span-full" loading="lazy" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
