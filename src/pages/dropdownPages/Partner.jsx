import React from 'react';
import { Link } from 'react-router-dom';
import { Hourglass } from 'lucide-react';
import './Partner.css';

const Partner = () => {
  return (
    <div className="coming-soon-container">
      <Hourglass size={48} className="coming-soon-icon" />
      <h1 className="coming-soon-title">Our Partners</h1>
      <p className="coming-soon-text">
        We're working hard to bring this page to life. Stay tuned!
      </p>
      <Link to="/PBKMS" className="coming-soon-link">← Back to Home</Link>
    </div>
  );
};

export default Partner;
