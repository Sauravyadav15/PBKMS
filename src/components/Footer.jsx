import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, MapPin, Phone, Instagram, X } from 'lucide-react';
import './Footer.css';
import Logo from '/images/newlogo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="footer-org-info">
            <div className="footer-logo-container">
              <div className='footer-logo-circle'>
                  <img 
                  src={Logo} 
                  alt="PBKMS Logo" 
                  className="logo-image"
                />
              </div>
              
              <div className="footer-org-text">
                <h3 className="footer-org-name">PBKMS</h3>
                <p className="footer-org-fullname">Paschimbanga Khet Majoor Samity</p>
              </div>
            </div>
            <p className="footer-org-description">
              An independent trade union in West Bengal, India, promoting the rights of agricultural workers to decent wages, work, and food for over three decades.
            </p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/PBKMSIndia/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="https://x.com/PBKMS_" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/paschimbangakhetmajoorsamity._/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Instagram className="footer-social-icon" />
              </a>
              <a href="https://www.youtube.com/@paschimbangakhetmajoorsami7480" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Youtube className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/PBKMS/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/PBKMS/our-work" className="footer-link">
                  Our Work
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/PBKMS/media/news" className="footer-link">
                  News
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/PBKMS/get-involved" className="footer-link">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-section">
            <h4 className="footer-section-title">Contact Us</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-contact-text">West Bengal, India</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Pbkmswb@gmail.com" className="footer-contact-link" target="_blank">
                  Pbkmswb@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">+91 94332 64109</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-text">
            © 2025 Paschimbanga Khetmajoor Samity. All rights reserved. Fighting for workers' rights since 1986.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;