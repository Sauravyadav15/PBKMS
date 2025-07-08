import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import News from './pages/dropdownPages/News';
import GetInvolved from './pages/GetInvolved';
import Campaigns from './pages/dropdownPages/Campaigns';
import ScrollToTop from './components/ScrollToTop';
import VideoNews from './pages/VideoNews';
import Media from './pages/Media';
import Gallery from './pages/dropdownPages/Gallery';
import Blog from './pages/dropdownPages/Blog';
import Internship from './pages/dropdownPages/Internship';
import Partner from './pages/dropdownPages/Partner';
import DonationModal from './pages/dropdownPages/DonationModal';

function App() {
  return (
    <Router >
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ScrollToTop/>
          <Routes>
            
            <Route path="/PBKMS" element={<Home />} />
            <Route path="/PBKMS/about" element={<About />} />
            <Route path="/PBKMS/our-work" element={<OurWork />} />
            <Route path="/PBKMS/our-work/campaigns" element={<Campaigns />} />
            <Route path='/PBKMS/media' element={<Media />} />
            <Route path="/PBKMS/media/news" element={<News />} />
            <Route path="/PBKMS/get-involved" element={<GetInvolved />} />
            
            <Route path='/PBKMS/video' element={<VideoNews/>}/>

            <Route path="/PBKMS/media/gallery" element={<Gallery />} />
            <Route path="/PBKMS/media/blogs" element={<Blog />} />

            <Route path="/PBKMS/get-involved/internship" element={<Internship />} />
            <Route path="/PBKMS/get-involved/partner" element={<Partner />} />
            <Route path="/PBKMS/donation" element={<DonationModal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

