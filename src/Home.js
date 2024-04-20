import React, { useEffect } from 'react';
import { FaLaptop, FaHandsHelping, FaDesktop, FaUserFriends } from 'react-icons/fa';
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, Col from Reactstrap
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'; // Import Reactstrap components
import './output.css';
import { Analytics } from '@vercel/analytics/react';
import Tblue from './blues.jpg'; // Import the background image
import laptop from './Color logo - no background.png';
import './home.css'

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${Tblue})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '150vh', marginTop: '-150px' }}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Container>
          <Row>
            <Col lg="9" md = "12 " sm="12" className="mb-4 mb-md-0">  
              <br/><br/><br/><br/>
              <h1 style={{fontSize: '50px'}}className='text-center'>Striving to Reduce the Digital Divide in Education</h1>
            </Col>     
            <Col lg="3" md="12" sm="12" className="text-center">
            <img src={laptop} alt="Laptop" className="logo-img" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
