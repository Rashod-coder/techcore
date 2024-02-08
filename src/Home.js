import React, { useEffect } from 'react';
import pic01 from './pic01.jpg';
import { FaLaptop, FaHandsHelping, FaDesktop, FaUserFriends } from 'react-icons/fa';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './HomePage.css'; // Import the CSS file for additional styles

function HomePage() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className="home-page" style={{ backgroundImage: `url(${pic01})` }}>
        <div className="title-section">
          <br></br><br></br>
          <h1 className="title">TechCore <FaDesktop className="icon" /></h1>
          <p className="subtitle">Helping schools bridge the digital divide through donating computers.</p>
        </div>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="solution-section">
          <div data-aos="fade-up" className="solution-card">
            <FaLaptop className="solution-icon" />
            <p className="solution-title">Our Solution:</p>
            <p className="solution-description">
              We understand that every school can't afford computers for every student. <br />
              That's why we want to donate used laptops to schools so every student has access to technology in the classroom.
            </p>
          </div>
          <div data-aos="fade-up" className="solution-card">
            <FaHandsHelping className="solution-icon" />
            <p className="solution-title">TechCore in the Community:</p>
            <p className="solution-description">
              We're proud to be a part of the community and give back in any way we can. Hosting Computer Donation Drives, raising money to purchase computers.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="contribution-section">
          <FaUserFriends className="contribution-icon" />
          <p className="contribution-title">How you can contribute towards our cause</p>
          <p className="contribution-description">
            We are currently raising funds through our Gofundme campaign all the funds collected will be used towards purchasing chromebooks. If you would like to donate, click on "Donate" which can be found at the top of the page
            <br /> 
            <br /> Additionally, we are accepting donations of used laptops to support our cause. If you would like to donate a laptop, send a DM via Instagram or E-mail which can be found in the Contact page.
          </p>
        </div>
    </div>
  );
}

export default HomePage;
