import React from 'react';
// import pic01 from './pic2.jpg';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import background1 from './Assets/bluee.jpg';
import './Contact.css'



function ContactPage() {
  return (
<div className="contact" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto', marginTop: '-160px'}}>     
<br/><br/><br/><br/><br/><br/>
<h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 50, color: 'white'}}>Contact</h1>
<h6 className='text-center'>One stop for all our links</h6>
    <div className="text-center">
    <hr style={{ display: 'inline-block', borderColor: 'white', width: '90%' }} />
    </div>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <div className='equalBox'>Instagram
          <br/>
          
          <a href="https://www.instagram.com/projectechcore?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">

          <img src="./instagram.png" alt="Github Logo" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </a>

         
          </div>
        </div>
        <div className='col-auto mb-6'>
          <div className='equalBox'>E-mail
          <a href="project.techcore@gmail.com">
          <img src="./emails.png" alt="Github Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Linkedin
          <br/>
          <a href="https://www.linkedin.com/company/projectechcore" target="_blank" rel="noopener noreferrer">

          <img src="./link.png" alt="Linkdein Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Tiktok
          <a href="Placeholder" target="_blank" rel="noopener noreferrer">

          <img src="./github.png" alt="Github Logo" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'><a href='Leads to hack club'>Donate</a></div>
        </div>
      </div>
    </div>
</div>


  );
}

export default ContactPage;
