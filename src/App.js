import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutPage from './AboutPage'; 
import Footer from './Footer';
import ContactPage from './Contact';
import Updates from './updates';
import Classes from './classes'; 
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <div className="App">
        <Analytics />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/classes" element={<Classes />} /> 
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
