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
import VideoNews from './pages/VideoNews';
function App() {
  return (
    <Router >
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ScrollToTop/>
          <Routes>
            <Route path="/1" element={<Home />} />
            <Route path="/PBKMS1" element={<Home />} />
            <Route path="/about1" element={<About />} />
            <Route path="/our-work1" element={<OurWork />} />
            <Route path="/news1" element={<News />} />
            <Route path="/get-involved1" element={<GetInvolved />} />
            
            <Route path='/video1' element={<VideoNews/>}/>

            {/* Dropdown under our-work */}
             <Route path='/campaigns1' element={<Campaigns/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

