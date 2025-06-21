import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import Campaigns from './pages/Campaigns';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PBKMS" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/news" element={<News />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path='/campaigns' element={<Campaigns/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

