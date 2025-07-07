import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="coming-soon-container">
      <Image size={48} className="coming-soon-icon" />
      <h1 className="coming-soon-title">Gallery</h1>
      <p className="coming-soon-text">We're working hard to bring this page to life. Stay tuned!</p>
      <Link to="/PBKMS" className="coming-soon-link">← Back to Home</Link>
    </div>
  );
};

export default Gallery;
