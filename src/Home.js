import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, Col from Reactstrap
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './output.css';
import { Analytics } from '@vercel/analytics/react';
import background from './Assets/smooth.jpg'; // Import the background image
import background1 from './Assets/pool.jpg'; // Import the background image
import logo from './Assets/Tech.png';
import './home.css'
import Cards from './Components/Cards'
import Community from './Components/Community'
import Work from './Components/Works'
import Sponsors from './Components/Sponsors'


function HomePage() {
  

  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '130vh', marginTop: '-160px' }}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <Container>
          <Row>
            <Col lg="9" md = "12 " sm="12" className="mb-4 mb-md-0 mb-5 mt-5">  
              <br/><br/><br/><br/>
              <h1 style={{fontSize: '50px', color: 'black', fontFamily: 'Titillium Web'}}className='text-center'>Striving to Reduce the Digital Divide in Education</h1>
            </Col>     
            <Col lg="3" md="12" sm="12" className="text-center mb-5 mt-5">
            <img src={logo} alt="Laptop" className="logo-img " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homepage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto', marginTop: '-150px'}}>
        <br></br>
        <h1 className='text-center'style={{fontSize: '50px'}}>Techcore in the community</h1>
        <div className='container'>
        <div className='row gx-5'>
        <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
              
                <Cards/>
                
            </div>
            <div className='col-lg-6 col-md-8 col-sm-12 mt-5'>
              
                <Community/>
                
            </div>
            <div className='col-lg-12 col-md-8 col-sm-12 mt-5'>
              
                <Work/>
                
            </div>
            <div className='col-lg-12 col-md-8 col-sm-12 mt-5 mb-5'>
              
                <Sponsors/>
                
            </div>
            
            
          </div>
          </div>
          
        </div>
          
    </div>
  );
}

export default HomePage;
