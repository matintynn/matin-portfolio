import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CaseStudy1 from './Pages/CaseStudy/CaseStudy1';
import Summary1 from './Pages/CaseStudy/Summary1';
import CaseStudy2 from './Pages/CaseStudy/CaseStudy2';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study1" element={<CaseStudy1 />} />
        <Route path="/case-study1/summary1" element={<Summary1 />} />
        <Route path="/case-study2" element={<CaseStudy2 />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;