import React from 'react';
import background from './Assets/twentyseven.jpg'; 
import About from './Components/About'
import Inspiration from './Components/Inspiration'
import './About.css'



function AboutPage() {
  return (
    <div>
      
      <div className="homepage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto', marginTop: '-150px'}}>
        <br></br><br/><br/><br></br><br/><br/><br></br>
        <h1 class="text-center " style={{fontSize: "50px", fontFamily: 'Roboto Flex'}}>Our Vision</h1>
        <div className='container'>
        <div className='row'>
        
            <div className='col-lg-6 col-md-8 col-sm-12 mt-5 mb-5'>
              
                <About/>
                
            </div>
            
            <div className='col-lg-12 col-md-8 col-sm-12 mt-5 mb-5'>
              
                <Inspiration/>
                
            </div>
            
            
            
          </div>
          </div>
          
        </div>
          
    </div>
  );
}

export default AboutPage;
