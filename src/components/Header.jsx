import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Users, Heart, FileText, Phone } from 'lucide-react';
import { Button } from './ui/button';
import "./Header.css";
import Logo from '/images/pbkmsLogo.svg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Work', href: '/our-work', icon: Heart },
    { name: 'News', href: '/news', icon: FileText },
    { name: 'Get Involved', href: '/get-involved', icon: Phone },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          {/* Logo and Organization Name */}
          <Link to="/" className="logo-link">
            
              <img 
                src={Logo} 
                alt="PBKMS Logo" 
                className="logo-image"
              />
            
            <div className="logo-text">
              <h1 className="organization-name">PBKMS</h1>
              <p className="organization-fullname">Paschim Banga Khet Majoor Samity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
              >
                {item.icon && <item.icon className="nav-icon" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="desktop-cta">
            <Button asChild className="cta-button">
              <Link to="/get-involved">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle-button"
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav-container">
            <nav className="mobile-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="mobile-nav-icon" />}
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button asChild className="mobile-cta-button">
                <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>
                  Join Our Cause
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;