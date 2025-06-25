import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Users, Heart, FileText, Phone, Pickaxe, Earth, Video, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import "./Header.css";
import HLogo from '/images/epbkms.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(null);


  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About Us', href: '/about', icon: Users },
    {
      name: 'Our Work',
      href: '/our-work',
      icon: Pickaxe,
      children: [
        { name: 'Campaigns', href: '/campaigns', icon: Earth }
      ]
    },
    { name: 'News', href: '/news', icon: FileText },
    { name: 'Get Involved', href: '/get-involved', icon: Phone },
    { name: 'VideoNews', href: '/video', icon: Video }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          {/* Logo and Organization Name */}
          <Link to="/" className="logo-link">
            <div className='logo-circle'>
              <img src={HLogo} alt="PBKMS Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1 className="organization-name">PBKMS</h1>
              <p className="organization-fullname">Paschim Banga Khet Majoor Samity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <div className="nav-item-wrapper" key={item.name}>
                {item.children ? (
                  <div
                    className="dropdown-parent"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="nav-link-with-dropdown">
                      {/* Clickable text part */}
                      
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.icon && <item.icon className="nav-icon" />}
                        <span>{item.name}</span>
                      </NavLink>
                      
                      {/* Dropdown toggle part */}
                      <div className="dropdown-toggle">
                        <ChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} size={16} />
                      </div>
                    </div>

                    {isDropdownOpen && (
                      <div className="dropdown-menu">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.href}
                            className="dropdown-link"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {child.icon && <child.icon className="nav-icon" />}
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {item.icon && <item.icon className="nav-icon" />}
                    <span>{item.name}</span>
                  </NavLink>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="desktop-cta">
              <Button asChild className="cta-button">
                <Link to="/get-involved">Donate</Link>
              </Button>
            </div>
          </nav>

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
        <div key={item.name}>
          {item.children ? (
            <div className="mobile-nav-split-item">
              <div className="mobile-nav-split-wrapper">
                {/* Left side - clickable text */}
                <Link
                  to={item.href}
                  className="mobile-nav-split-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="mobile-nav-icon" />}
                  {item.name}
                </Link>
                
                {/* Right side - dropdown toggle */}
                <button
                  className="mobile-nav-split-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileDropdownOpen(
                      isMobileDropdownOpen === item.name ? null : item.name
                    );
                  }}
                  aria-label="Toggle dropdown"
                >
                  <ChevronDown
                    className={`mobile-dropdown-icon ${
                      isMobileDropdownOpen === item.name ? 'rotate' : ''
                    }`}
                    size={16}
                  />
                </button>
              </div>

              {/* Dropdown content */}
              {isMobileDropdownOpen === item.name && (
                <div className="mobile-submenu">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="mobile-nav-link child-link"
                      onClick={() => {
                        setIsMobileDropdownOpen(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      {child.icon && <child.icon className="mobile-nav-icon" />}
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon && <item.icon className="mobile-nav-icon" />}
              {item.name}
            </Link>
          )}
        </div>
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
