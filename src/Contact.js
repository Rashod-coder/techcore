import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import karan from './Assets/Screenshot 2024-07-12 at 2.39.28 PM.png'; 
import volunteer from './Assets/Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo.png'
import ram from './Assets/Screenshot 2024-07-12 at 2.56.56 PM.png'
import Shikhar from './Assets/Screenshot 2024-07-12 at 3.13.34 PM.png'
import Sonia from './Assets/Screenshot 2024-07-12 at 3.22.20 PM.png'
import './Contact.css'

const teamMembers = [
  {
    firstName: 'Rishit',
    lastName: 'Gupta',
    role: 'President & Web Dev',
    imageUrl: volunteer, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/in/rishitgupta2007',
    instagram: 'https://www.instagram.com/ritzx.gupta_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
  },
  {
    firstName: 'Karan',
    lastName: 'Mody',
    role: 'Vice President',
    imageUrl: karan, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/in/karanmody/',
    instagram: 'https://www.instagram.com/janesmith'
  },
  {
    firstName: 'Ramgopal',
    lastName: 'Pamalapati',
    role: 'Outreach & Content Creator',
    imageUrl: ram, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/in/ramgopal-pamalapati-3b4387319',
    instagram: 'https://www.instagram.com/ramgopal_pamalapati?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr'
  },
  {
    firstName: 'Akshaj',
    lastName: 'Sinha',
    role: 'Logistics Officer',
    imageUrl: volunteer, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/janesmith',
    instagram: 'https://www.instagram.com/sinha_akshaj?igsh=MzRlODBiNWFlZA=='
  },
  {
    firstName: 'Shikhar',
    lastName: 'Sisodia',
    role: 'Finance Officer',
    imageUrl: Shikhar, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/in/shikhar-sisodia-728a35272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagram: 'https://www.instagram.com/shikhar.sisodia?igsh=MzRlODBiNWFlZA=='
  },
  {
    firstName: 'Yashas',
    lastName: 'Revanakara',
    role: 'Finance Officer',
    imageUrl: volunteer, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/in/yashas-revanakara-bba163252/',
    instagram: 'https://www.instagram.com/yashas.revanakara?igsh=MzRlODBiNWFlZA=='
  },
  {
    firstName: 'Sonia',
    lastName: 'Puri',
    role: 'Outreach Officer',
    imageUrl: Sonia, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/janesmith',
    instagram: 'https://www.instagram.com/sonia.p_48?igsh=MzRlODBiNWFlZA=='
  },
  {
    firstName: 'Nihal',
    lastName: 'Paliwal',
    role: 'Logistics Officer',
    imageUrl: volunteer, // Path to your volunteer image
    linkedin: 'https://www.linkedin.com/janesmith',
    instagram: 'https://www.instagram.com/nihal_paliwal?igsh=MzRlODBiNWFlZA=='
  },
];

function ContactPage() {
  return (
    <div className="team-page" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '90%', margin: '0 auto', padding: '0 35px' }}>
        <h1 className="text-center display-4 mb-5">Meet Our Team</h1>
        <div className="team-members mb-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member" style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="member-image mb-4 mt-2" style={{ width: '200px', height: '200px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', border: '3px solid #000000' }}>
                <img src={member.imageUrl} alt={member.firstName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{fontSize: '30px' }}>{member.firstName}</h3>
              <h3 style={{ marginBottom: '10px', fontSize: '30px' }}>{member.lastName}</h3>
              <hr></hr>
              <p style={{ marginTop: '10px', marginBottom: '20px', color: '#666', fontSize: '20px' }}>{member.role}</p>
              <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: '40px', color: '#333', margin: '0 10px' }}>
                  <FaLinkedin />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: '40px', color: '#333', margin: '0 10px' }}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
