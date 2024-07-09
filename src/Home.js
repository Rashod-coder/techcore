import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './output.css';
import { Analytics } from '@vercel/analytics/react';
import background from './Assets/two.jpg';
import background1 from './Assets/carlos-torres-MHNjEBeLTgw-unsplash.jpg';
import logo from './Assets/Tech.png';
import './home.css'
import Cards from './Components/Cards'
import Community from './Components/Community'
import Work from './Components/Works'
import Sponsors from './Components/Sponsors'
import back2 from './Assets/engin-akyurt-BvWPWDv4Ob0-unsplash.jpg';



function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Container>
        <Row>
          <Col className="mb-5">  
            <img src={logo} alt="Techcore Logo" className="logo-img mb-3" style={{ width: '250px' }} />
            <h1 style={{ fontSize: '3rem', color: 'black', fontFamily: 'Oxygen', fontWeight: 'bold' }}>Striving to Reduce the Digital Divide in Education</h1>
            <div className="mt-4">
              <a href="#about" className="btn btn-primary btn-lg" style={{ borderRadius: '40px', textDecoration: 'none' }}>
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      

      

      <div id='about'style={{ minHeight: '65vh', backgroundColor: '#f8f9fa', padding: '30px 0', textAlign: 'center' }}>
        <h1 className='mt-3 mb-4' style={{fontSize: '60px', fontFamily: 'Roboto Flex', color: '#343a40', fontWeight: 'bold'}}>What is Techcore?</h1>
        <p className='mb-5'style={{ maxWidth: '850px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto', marginTop: '60px' }}>
          Techcore is a non-profit based in Bay Area CA dedicated to bridging the digital gap in education by donating laptops to schools.
        </p>
        <p className='mb-5'style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto', marginTop: '60px' }}>
          Techcore is established by a group of Highschoolers. We believe that every student should have equal opprtunity to learn and grow. Technology plays a crucial role in education today. That's why we're dedicated to ensuring schools have sufficient access to laptops, especially those facing funding challenges.
        </p>
        <p className='mb-5'style={{ maxWidth: '900px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto', marginTop: '60px' }}>
          With the support of you we can make this come true.
        </p>
      </div>
      <div style={{ backgroundImage: `url(${back2})`, minHeight: '45vh', backgroundColor: '#000', padding: '30px 0', textAlign: 'center' }}>
      <h1 className='mt-3 mb-4' style={{fontSize: '60px', fontFamily: 'Roboto Flex', color: '#343a40', fontWeight: 'bold', color: 'white'}}>How can you get involved?</h1>
      <p className='mb-5'style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto', marginTop: '60px', color: 'white', fontFamily: 'oxygen' }}>
        We are currently accepting fisical donations, all money donations made are tax deductible & if you have any laptops you no longer those can be donated to us.
        </p>
      </div>
      
    </div>
    
  );
}

export default HomePage;
