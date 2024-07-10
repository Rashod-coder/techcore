import React from 'react';
import { FaFacebookF, FaTwitter, FaEmail, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoLogoTiktok} from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";


function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#000000', position: 'relative',  width: '100%', marginTop: '-80px' }}>
      
            <div className="container-fluid">
        {/* Section: Links */}
        <section className="mt-5">
          {/* Grid row*/}
          <div className="row text-center d-flex justify-content-center pt-5">
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold mt-3">
                <a href="#!" className="text-white ">About us</a>
              </h6>
            </div>
            {/* Grid column */}

            {/* Repeat the same structure for other columns */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold mt-3">
                <a href="/contact" className="text-white ">Classes</a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold mt-3">
                <a href="https://hcb.hackclub.com/donations/start/techcore" className="text-white">Donate</a>
              </h6>
            </div>

            

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold mt-3">
                <a href="#contact" className="text-white">Contact</a>
              </h6>
            </div>
            {/* End Grid column */}
          </div>
          {/* End Grid row*/}
        </section>
        {/* End Section: Links */}

        <hr className="my-5" />

        {/* Section: Text */}
        <section id='contact'className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
              Techcore a local nonprofit based in Bay Area CA, dedicated to reducing the digital divide in education.
              </p>
            </div>
          </div>
        </section>
        {/* End Section: Text */}

        {/* Section: Social */}
        <section className="text-center mb-5">
          <div className="d-flex justify-content-center">
            <a href="https://www.instagram.com/projectechcore/" className="text-white me-4">
              <FaInstagram size={32} />
            </a>
            <a href="https://www.linkedin.com/company/projectechcore/?viewAsMember=true" className="text-white me-4">
              <FaLinkedinIn size={32} />
            </a>
            <a href="mailto:project.techcore@gmail.com" className="text-white me-4">
              <IoMdMail size={32} />
            </a>
            <a href="https://www.tiktok.com/@projectechcore?_t=8nt9Ii2sLK3&_r=1" className="text-white me-4">
              <IoLogoTiktok size={32} />
            </a>
          </div>
        </section>
        {/* End Section: Social */}
      </div>
      {/* End Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} 
        <a className="text-white"> Techcore is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit</a>
      </div>
      {/* End Copyright */}
    </footer>
    /* End Footer */
  );
}

export default Footer;
