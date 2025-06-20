import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';
import Logo from '/images/pbkmsLogo.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="footer-org-info">
            <div className="footer-logo-container">
              <img 
                  src={Logo} 
                  alt="PBKMS Logo" 
                  className="logo-image"
                />
              <div className="footer-org-text">
                <h3 className="footer-org-name">PBKMS</h3>
                <p className="footer-org-fullname">Paschimbanga Khetmajoor Samity</p>
              </div>
            </div>
            <p className="footer-org-description">
              An independent trade union in West Bengal, India, promoting the rights of agricultural workers to decent wages, work, and food for over three decades.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Youtube className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/our-work" className="footer-link">
                  Our Work
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/news" className="footer-link">
                  News & Updates
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/get-involved" className="footer-link">
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
                <a href="mailto:pbkmswb@gmail.com" className="footer-contact-link">
                  pbkmswb@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-text">
            © 2024 Paschimbanga Khetmajoor Samity. All rights reserved. Fighting for workers' rights since 1990.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;