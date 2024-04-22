import React from 'react';
// import pic01 from './pic2.jpg';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import background1 from './Assets/bluee.jpg';
import { Container, Row, Col } from 'reactstrap';
import Cards from './Components/Socials/Instagram'


function ContactPage() {
  return (
    <div className="contact" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '140vh', marginTop: '-160px'}}>
    
      <Container>
          <Row>
            <Col lg="12" md="12" sm="12" className="mb-4 mb-md-0 mb-5 mt-5">  
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <h1 style={{fontSize: '50px', color: 'black', fontFamily: 'Titillium Web'}} className='text-center'>Most fastest way to reach out to us for any queries is Instagram</h1>
              <br/><br/><br/>
            </Col>      
          </Row>
          <Row>
            <Col lg='4'>
              <h1 className='text-center'><Cards/></h1>
            </Col>
            <Col lg='4'>
              <h1 className='text-center'>Linkdein Page</h1>
            </Col>
            <Col lg='4'>
              <h1 className='text-center'>Tiktok</h1>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default ContactPage;
