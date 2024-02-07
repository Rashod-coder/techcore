import React, { useEffect } from 'react';
import pic01 from './pic01.jpg';
import { FaLaptop, FaHandsHelping, FaDesktop, FaUserFriends } from 'react-icons/fa'; // Import relevant icons
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

function HomePage() {
  useEffect(() => {
    AOS.init({ // Initialize AOS
      duration: 1000, // Set animation duration
      once: true, // Only animate once
      easing: 'ease-in-out', // Set animation easing
    });
  }, []);

  return (
    <div style={{ backgroundImage: `url(${pic01})`, backgroundSize: 'cover', height: '225vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <br />
        <br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '120px', marginRight: '20px', color: '#173753' }}>TechCore </h1> {/* Adding color to TechCore */}
          <FaDesktop style={{ fontSize: '80px' }} /> {/* Computer icon */}
        </div>
        <p style={{ fontSize: '60px' }}>Helping schools bridge the digital divide through donating computers</p>
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
        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
          <div data-aos="fade-up" style={{ backgroundColor: 'black', padding: '20px', border: '2px solid black', borderRadius: '20px', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaLaptop style={{ fontSize: '48px', color: 'white' }} />
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', marginTop: '20px' }}>Our Solution:</p>
            <p style={{ fontSize: '24px', color: 'white' }}>
              We understand that every school can't afford computers for every student. <br />
              That's why we want to donate used laptops to schools so every student has access to technology in the classroom.
            </p>
          </div>
          <div data-aos="fade-up" style={{ backgroundColor: 'black', padding: '20px', border: '2px solid black', borderRadius: '20px', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaHandsHelping style={{ fontSize: '48px', color: 'white' }} />
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', marginTop: '20px' }}>TechCore in the Community:</p>
            <p style={{ fontSize: '24px', color: 'white' }}>
              We're proud to be a part of the community and give back in any way we can. Hosting Computer Donation Drives, raising money to purchase computers.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" style={{ backgroundColor: 'black', padding: '20px', border: '2px solid black', borderRadius: '20px', width: '60%', margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaUserFriends style={{ fontSize: '48px', color: 'white' }} />
          <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', marginTop: '20px' }}>How you can contribute towards our cause</p>
          <p style={{ fontSize: '24px', color: 'white' }}>
          We are currently raising funds through our Gofundme campaign all the funds collected will be used towards purchasing chromebooks. If you would like to donate, click on "Donate" which can be found at the top of the page
            <br /> 
            <br /> Additionally, we are accepting donations of used laptops to support our cause. If you would like to donate a laptop, send a DM via Instagram or E-mail which can be found in the Contact page.
            </p>
        </div>
    </div>
  );
}

export default HomePage;
