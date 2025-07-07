import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import './Media.css';

const Media= () => {
  return (
    <div className="coming-soon-container">
      <GraduationCap size={48} className="coming-soon-icon" />
      <h1 className="coming-soon-title">Media</h1>
      <p className="coming-soon-text">We're working hard to bring this page to life. Stay tuned!</p>
      <Link to="/PBKMS" className="coming-soon-link">← Back to Home</Link>
    </div>
  );
};

export default Media;
