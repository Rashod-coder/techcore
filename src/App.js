import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutPage from './AboutPage'; 
import Footer from './Footer';
import ContactPage from './Contact';

import Classes from './classes'; 
import { Analytics } from '@vercel/analytics/react';

 function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
      
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/classes" element={<Classes />} /> 
          </Routes>
        </div>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
