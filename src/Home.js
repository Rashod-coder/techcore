import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, Col from Reactstrap
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './output.css';
import { Analytics } from '@vercel/analytics/react';
import background from './Assets/smooth.jpg'; // Import the background image
import logo from './Assets/Tech.png';
import './home.css'
import Cards from './Components/Cards'
import Card from 'react-bootstrap/Card';
import Community from './Components/Community'


function HomePage() {
  

  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '130vh', marginTop: '-160px' }}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <Container>
          <Row>
            <Col lg="9" md = "12 " sm="12" className="mb-4 mb-md-0">  
              <br/><br/><br/><br/>
              <h1 style={{fontSize: '50px'}}className='text-center'>Striving to Reduce the Digital Divide in Education</h1>
            </Col>     
            <Col lg="3" md="12" sm="12" className="text-center">
            <img src={logo} alt="Laptop" className="logo-img" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homepage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '125vh', marginTop: '-150px' }}>
        <br></br>
        <h1 className='text-center'style={{fontSize: '50px'}}>Techcore in the community: </h1>
        <div className='container'>
        <div className='row gx-5'>
        <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
              
                <Cards/>
                
            </div>
            <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
              
                <Community/>
                
            </div>
            
            
          </div>
          </div>
          
        </div>
          
    </div>
  );
}

export default HomePage;
