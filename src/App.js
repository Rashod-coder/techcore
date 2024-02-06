import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutPage from './AboutPage'; // Import the AboutPage component
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
