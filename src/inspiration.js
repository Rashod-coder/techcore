import React from 'react';
import pic01 from './pic01.jpg';
import './inspiration.css'; // Import the CSS file here

function InspirationPage(){
    return (
        <div className='title'>
            <div className="inspiration-background" style={{ backgroundImage: `url(${pic01})` }}>
                <div className="inspiration-textbox">
                    <h1>What inspired us</h1>
                    <p>
                    During our time as students in elementary and middle school,
                    we observed that teachers had to rotate computer carts among classes. 
                    <br />
                    <br />
                    This practice often hindered student's learning, as they were unable to use laptops for any online work. Not only did this hinder students' learning, but it also disrupted the teachers' lesson plans for the day.  
                    <br/>
                    <br />
                    Which is why we would like to create a difference in schools by providing laptops to classrooms, so every student has access to technology and
                    <br/>
                    with your support, we can turn this into a reality.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InspirationPage;
