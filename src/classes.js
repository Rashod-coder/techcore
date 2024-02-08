import React from 'react';
import pic2 from './pic2.jpg';

function Classes() {
    return (
        <div style={{ 
            backgroundImage: `url(${pic2})`, 
            backgroundSize: 'cover', 
            height: '150vh', 
            padding: '20px', 
            position: 'relative', 
        }}>
            <h1 style={{ 
                margin: 0, 
                position: 'absolute', 
                top: 50, 
                left: 0,
                padding: '20px', 
                color: 'white',
                
            }}>
                
                Programs we offer
            </h1>
            <div style={{ 
                backgroundColor: 'black', 
                padding: '20px', 
                borderRadius: '10px', 
                marginBottom: '20px', 
                position: 'relative', 
                top: '110px',
                border: '4px solid white', 
                boxShadow: '0px 0px 100px rgba(31, 64, 96, 0.9)', 
            }}>

                <h1 style={{ color: 'white' }}>Goal: </h1>
                <p style={{ color: 'white' }}>Our Goal is to educate</p>
                <p style={{ color: 'white' }}>It provides information about our socials and how to reach out to us.</p>
            </div>
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                width: '100%', 
                marginTop: '300px',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center', // Center align items horizontally 
                }}>
                <div style={{ 
                    backgroundColor: 'black', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '200px',
                    border: '4px solid white', 
                    boxShadow: '0px 0px 100px rgba(31, 64, 96, 0.6)',
                    marginBottom: '20px' 
                }}>
                    <h1 style={{ color: 'white' }}>Python</h1>
                    <p style={{ color: 'white' }}></p>
                    <p style={{ color: 'white' }}></p>
                </div>{/*  */}
                <div style={{ 
                    backgroundColor: 'black', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '200px',
                    border: '4px solid white', 
                    boxShadow: '0px 0px 100px rgba(31, 64, 96, 0.6)',
                    marginBottom: '20px'  
                }}>
                    <h1 style={{ color: 'white' }}>Web Dev.</h1>
                    <p style={{ color: 'white' }}></p>
                    <p style={{ color: 'white' }}></p>
                </div>
                <div style={{ 
                    backgroundColor: 'black', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '200px',
                    border: '4px solid white', 
                    boxShadow: '0px 0px 100px rgba(31, 64, 96, 0.6)',
                    marginBottom: '20px' 
                }}>
                    <h1 style={{ color: 'white' }}>Business</h1>
                    <p style={{ color: 'white' }}></p>
                    <p style={{ color: 'white' }}></p>
                </div>
                <div style={{ 
                    backgroundColor: 'black', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '200px',
                    border: '4px solid white', 
                    boxShadow: '0px 0px 100px rgba(31, 64, 96, 0.6)',
                    marginBottom: '20px' 
                }}>
                    <h1 style={{ color: 'white' }}>Graphic Design</h1>
                    <p style={{ color: 'white' }}></p>
                    <p style={{ color: 'white' }}></p>
                </div>
        </div>

        </div>
    );
}

export default Classes;
