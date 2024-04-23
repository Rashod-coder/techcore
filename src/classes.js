import React from 'react';
import background from './Assets/twentyseven.jpg'; 
import Offers from './Components/Offers'
import Sign from './Components/Sign'
import './About.css'



function AboutPage() {
  return (
    <div>
      
      <div className="homepage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', miHeight: '150vh', marginTop: '-150px'}}>
        <br></br><br/><br/><br></br><br/><br/><br></br>
        <h1 className='text-center'style={{fontSize: '50px'}}> Summer classes</h1>
        <h3 className='text-center'>These classes are offered free of cost and anyone in Grades 5-8 can sign up. Starting from June.</h3>
        <div className='container'>
        <div className='row'>
        
            <div className='col-lg-7 col-md-8 col-sm-12 mt-5 mb-5'>
              
                <Offers/>
                <div className='col-md-8 text-center'>Refer to the calander for exact dates</div>
                
                
            </div>
            <div className='col-lg-5 col-md-8 col-sm-12 mt-5 mb-5'>
              
            <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showPrint=0&showTabs=0&src=MDUwMWJjZjU1NDk5MTY2OGZkYjZjYjBkYjczYTM0NjE1ZGU1ZTBjMTgxOGJlODhlMDVmNjI4MzAzYWU0MGEzOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
      style={{ border: 'solid 1px #777' }}
      width="100%"
      height="450px"
      frameBorder="0"
      scrolling="no"
      title="Google Calander"
    ></iframe>
                
            </div>
            <div className='col-lg-12 col-md-8 col-sm-12 mt-5 mb-5'>
              
                <Sign/>
                
            </div>
            
            
            
            
            
            
          </div>
          </div>
          
        </div>
          
    </div>
  );
}

export default AboutPage;
