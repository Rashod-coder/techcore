import React from 'react';
import pic01 from './pic01.jpg'

function InspirationPage(){
    return (
        <div className='tittle'>
    
    <div style={{
      backgroundImage: `url(${pic01})`,
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white', 
      padding: '20px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'black', 
        padding: '100px', 
        border: '4px blue', 
        borderRadius: '10px', 
        textAlign: 'center', 
      }}>
        <br />
        
        <h1>What inspired us</h1>
        <p>
        During our time as students in elementary and middle school, we observed that teachers had to rotate computer carts among classes. This practice often hindered student's learning, as they were unable to use laptops for any online work. Not only did this hinder students' learning, but it also disrupted the teachers' lesson plans for the day.  
        <br/>
        Which is why we would like to create a difference in schools by providing laptops to classrooms, so every student has access to technology and
        <br/>
        with your support, we can turn this into a reality.
        </p>
      </div>
    </div>
    </div> 




    )
}

export default InspirationPage;