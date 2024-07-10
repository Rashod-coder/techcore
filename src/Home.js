import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './output.css';
import python from './Assets/python-programming-language.webp';
import volunteer from './Assets/istockphoto-1269224972-612x612.jpg';

import background1 from './Assets/carlos-torres-MHNjEBeLTgw-unsplash.jpg';
import logo from './Assets/Tech.png';
import './home.css'

import back2 from './Assets/engin-akyurt-BvWPWDv4Ob0-unsplash.jpg';

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="homepage" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Container>
          <Row>
            <Col className="mb-5">  
              <img src={logo} alt="Techcore Logo" className="logo-img mb-3" style={{ width: '250px' }} />
              <h1 style={{ fontSize: '3rem', color: 'black', fontFamily: 'Oxygen', fontWeight: 'bold' }}>Striving to Reduce the Digital Divide in Education</h1>
              <div className="mt-5">
              <a href="#about" className="btn btn-primary btn-lg" style={{ width: '300',borderRadius: '40px', textDecoration: 'none', marginRight: '25px', fontSize: '25px' }}>                  Learn More
                </a>
                
                <a href="#footer" className="btn btn-primary btn-lg ml-3" style={{ borderRadius: '40px', textDecoration: 'none', fontSize: '25px' }}>
                  Contact Us!
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id='about' style={{ minHeight: '65vh', maxHeight: '65vh', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '30px 15px', textAlign: 'center' }}>
    <Container fluid>
    <Row className='justify-content-center align-items-center'>
      <Col md={8}>
        <h1 className='mt-3 mb-4' style={{ fontSize: '60px', fontFamily: 'Roboto Flex', color: '#343a40', fontWeight: 'bold' }}>What is Techcore?</h1>
        <p className='mb-5' style={{ maxWidth: '850px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto', marginTop: '60px' }}>
          Techcore is a non-profit based in the Bay Area, CA, dedicated to bridging the digital gap in education by donating laptops to schools.
        </p>
        <p className='mb-5' style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#495057', margin: 'auto' }}>
          Techcore is established by a group of high schoolers. We believe that every student should have equal opportunity to learn and grow. Technology plays a crucial role in education today. That's why we're dedicated to ensuring schools have sufficient access to laptops, especially those facing funding challenges.
        </p>
        
      </Col>
    </Row>
  </Container>
</div>

      <div style={{ backgroundImage: `url(${back2})`, minHeight: '45vh', backgroundColor: '#000', padding: '30px 15px', textAlign: 'center' }}>
        <Container>
          <Row>
            <Col>
              <h1 className='mt-3 mb-4' style={{ fontSize: '60px', fontFamily: 'Roboto Flex', color: '#fff', fontWeight: 'bold' }}>How can you get involved?</h1>
              <p className='mb-5' style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#fff', margin: 'auto' }}>
                We are currently accepting monetary donations through, All monetary donations are tax deductible. We greatly appreciate any support given to us!
              </p>
              <p className='mb-5' style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#fff', margin: 'auto' }}>
                If you have any tech that you no longer use/have a need for reach out to us through email or instagram which can be found at the bottom of the page.
              </p>
              <p className='mb-5' style={{ maxWidth: '800px', fontSize: '28px', fontFamily: 'Arial', lineHeight: '1.5', color: '#fff', margin: 'auto', fontWeight: 'bold'}}>
                All monetary donations made will be used towards purchasing laptops, and these laptops will be donated to schools.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div id='aspects' style={{ minHeight: '65vh', backgroundColor: '#ffffff', padding: '30px 15px', textAlign: 'center' }}>
      <h1 className='mt-2 mb-5 display-2' >Engage with Techcore.</h1>

        <Container>
        <Row>
          <Col lg="6" md="12" className="d-flex justify-content-center align-items-center">
            <img src={python} alt="Image" className="img-fluid mb-2 mb-lg-0" style={{ maxWidth: '90%' }} />

          </Col>
          <Col lg="6" md="12">
            <div>
              <br />
              <p className='mt-5 mb-4 py-5' style={{ fontSize: '40px', fontFamily: 'Roboto Flex', color: '#343a40' }}>Summer Classes</p>
              <p className='h2' style={{ fontFamily: 'Roboto Flex' }}>Techcore is all about expanding learning opportunities for students, which is why we are introducing a 4-week Python interactive course starting 7/16</p>
              <br />
              <p className='h2' style={{ fontFamily: 'Roboto Flex' }}>To learn more or register your child visit <a href='/classes' style={{ textDecoration: 'underline' }}>this</a> page</p>
              <p className='h2' style={{ fontFamily: 'Roboto Flex' }}><i>In fall we will be opening up different courses!</i></p>
            </div>
          </Col>
        </Row>
        
          <Row className="mt-5 mb-5 pt-5 py-6">
          <hr></hr>
          <Col lg="6" md="12" className="d-flex justify-content-center align-items-center">
              <img src={volunteer} alt="Image" className="img-fluid mb-3 mb-lg-0" style={{ maxWidth: '100%' }} />

              
              
          </Col>
          <Col lg="6" md="12" className="order-lg-2">
          
            <p className='mt-5 mb-4 py-5' style={{ fontSize: '40px', fontFamily: 'Roboto Flex', color: '#343a40' }}>Volunteer</p>
            <p className='h2' style={{ fontFamily: 'Roboto Flex' }}> If you're currently a highschooler located in Bay Area California and want to earn volunteer hours reach out to us on instagram for possible openings, we would greatly appreciate as much help as we can possibly get.</p>
            
          </Col>
        </Row>
        </Container>
      </div>
      <div id='footer'></div>
    </div>
  );
}

export default HomePage;
